'use client';

import { useEffect, useRef, useState } from 'react';

interface Region {
  name: string;
  projects: number;
  coords: [number, number];
}

interface WorldMapProps {
  regions: Region[];
  onRegionHover: (region: string | null) => void;
  selectedRegion: string | null;
}

export default function WorldMap({ regions, onRegionHover, selectedRegion }: WorldMapProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  const [hoveredRegion, setHoveredRegion] = useState<string | null>(null);

  // Simple world map SVG path (very simplified for demo)
  const worldPath = "M158.5,298.5c-4.2,0-8.1-1.6-11.1-4.6c-6.1-6.1-6.1-16.1,0-22.2l22.2-22.2c6.1-6.1,16.1-6.1,22.2,0c6.1,6.1,6.1,16.1,0,22.2l-22.2,22.2C166.6,296.9,162.7,298.5,158.5,298.5z";

  const getRegionIntensity = (projects: number) => {
    const maxProjects = Math.max(...regions.map(r => r.projects));
    return projects / maxProjects;
  };

  const getRegionColor = (region: Region) => {
    const intensity = getRegionIntensity(region.projects);
    if (selectedRegion === region.name || hoveredRegion === region.name) {
      return `rgba(0, 178, 138, ${0.3 + intensity * 0.7})`;
    }
    return `rgba(0, 153, 204, ${0.2 + intensity * 0.6})`;
  };

  return (
    <div className="relative w-full h-96 bg-brand-dark/20 rounded-lg overflow-hidden">
      <svg
        ref={svgRef}
        viewBox="0 0 800 400"
        className="w-full h-full"
        style={{ filter: 'drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1))' }}
      >
        {/* Simplified world map background */}
        <rect width="800" height="400" fill="rgba(255, 255, 255, 0.05)" />
        
        {/* Grid lines for reference */}
        <defs>
          <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
            <path d="M 50 0 L 0 0 0 50" fill="none" stroke="rgba(255, 255, 255, 0.1)" strokeWidth="1"/>
          </pattern>
        </defs>
        <rect width="800" height="400" fill="url(#grid)" />

        {/* Continents (simplified shapes) */}
        {/* Europe */}
        <path
          d="M300,120 Q320,100 360,110 Q400,120 420,140 Q410,180 380,190 Q340,185 300,170 Z"
          fill="rgba(255, 255, 255, 0.1)"
          stroke="rgba(255, 255, 255, 0.3)"
          strokeWidth="1"
        />
        
        {/* Asia */}
        <path
          d="M420,110 Q500,90 580,100 Q650,120 680,150 Q670,200 640,220 Q550,210 420,180 Z"
          fill="rgba(255, 255, 255, 0.1)"
          stroke="rgba(255, 255, 255, 0.3)"
          strokeWidth="1"
        />
        
        {/* Africa */}
        <path
          d="M320,180 Q340,200 360,250 Q370,300 350,320 Q320,315 300,290 Q290,240 300,200 Z"
          fill="rgba(255, 255, 255, 0.1)"
          stroke="rgba(255, 255, 255, 0.3)"
          strokeWidth="1"
        />
        
        {/* Americas */}
        <path
          d="M100,120 Q140,100 180,130 Q190,200 170,280 Q150,300 120,290 Q90,250 80,180 Q85,140 100,120 Z"
          fill="rgba(255, 255, 255, 0.1)"
          stroke="rgba(255, 255, 255, 0.3)"
          strokeWidth="1"
        />

        {/* Region markers */}
        {regions.map((region, index) => {
          const x = (region.coords[0] + 180) * (800 / 360); // Convert longitude to SVG x
          const y = (90 - region.coords[1]) * (400 / 180);   // Convert latitude to SVG y
          const intensity = getRegionIntensity(region.projects);
          const radius = 8 + intensity * 12;

          return (
            <g key={region.name}>
              {/* Pulsing circle for animation */}
              <circle
                cx={x}
                cy={y}
                r={radius + 5}
                fill={getRegionColor(region)}
                opacity="0.3"
                className="animate-pulse"
              />
              
              {/* Main marker */}
              <circle
                cx={x}
                cy={y}
                r={radius}
                fill={getRegionColor(region)}
                stroke="rgba(255, 255, 255, 0.8)"
                strokeWidth="2"
                className="cursor-pointer transition-all duration-300 hover:scale-110"
                onMouseEnter={() => {
                  setHoveredRegion(region.name);
                  onRegionHover(region.name);
                }}
                onMouseLeave={() => {
                  setHoveredRegion(null);
                  onRegionHover(null);
                }}
              />
              
              {/* Project count label */}
              <text
                x={x}
                y={y + 4}
                textAnchor="middle"
                className="text-xs font-semibold fill-white pointer-events-none"
              >
                {region.projects}
              </text>
              
              {/* Tooltip */}
              {(selectedRegion === region.name || hoveredRegion === region.name) && (
                <g>
                  <rect
                    x={x - 40}
                    y={y - radius - 35}
                    width="80"
                    height="25"
                    rx="4"
                    fill="rgba(0, 0, 0, 0.8)"
                    stroke="rgba(255, 255, 255, 0.3)"
                  />
                  <text
                    x={x}
                    y={y - radius - 20}
                    textAnchor="middle"
                    className="text-xs fill-white font-medium"
                  >
                    {region.name}
                  </text>
                  <text
                    x={x}
                    y={y - radius - 10}
                    textAnchor="middle"
                    className="text-xs fill-brand-secondary"
                  >
                    {region.projects} projects
                  </text>
                </g>
              )}
            </g>
          );
        })}
      </svg>

      {/* Legend */}
      <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-sm rounded-lg p-3">
        <div className="text-xs text-white/80 mb-2">Project Density</div>
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 rounded-full bg-brand-primary/40" />
          <span className="text-xs text-white/60">Low</span>
          <div className="w-3 h-3 rounded-full bg-brand-primary/70" />
          <span className="text-xs text-white/60">High</span>
        </div>
      </div>
    </div>
  );
}