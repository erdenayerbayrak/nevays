'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, MapPin, Building2, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ProjectMetrics {
  area?: string;
  capacity?: string;
  efficiency?: string;
  standard?: string;
}

interface Project {
  id: string;
  title: string;
  client: string;
  location: string;
  year: number;
  industry: 'pharmaceutical' | 'hospital' | 'industrial' | 'cleanroom';
  country: string;
  image: string;
  description: string;
  metrics: ProjectMetrics;
  tags: string[];
}

interface ProjectCardProps {
  project: Project;
  href: string;
  className?: string;
}

const industryColors = {
  pharmaceutical: 'bg-blue-500',
  hospital: 'bg-green-500',
  industrial: 'bg-purple-500',
  cleanroom: 'bg-orange-500',
};

const industryLabels = {
  pharmaceutical: 'İlaç',
  hospital: 'Hastane',
  industrial: 'Endüstriyel',
  cleanroom: 'Temiz Oda',
};

export default function ProjectCard({ project, href, className }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      href={href}
      className={cn(
        'group block bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:scale-102',
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className={cn(
            'object-cover transition-transform duration-500',
            isHovered ? 'scale-110' : 'scale-100'
          )}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        
        {/* Overlay */}
        <div
          className={cn(
            'absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent transition-opacity duration-300',
            isHovered ? 'opacity-80' : 'opacity-60'
          )}
        />

        {/* Industry Badge */}
        <div className="absolute top-4 left-4">
          <span className={cn(
            'px-3 py-1 text-xs font-medium text-white rounded-full',
            industryColors[project.industry]
          )}>
            {industryLabels[project.industry]}
          </span>
        </div>

        {/* Year Badge */}
        <div className="absolute top-4 right-4">
          <span className="px-2 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-medium rounded-full">
            {project.year}
          </span>
        </div>

        {/* Bottom Info */}
        <div className="absolute bottom-4 left-4 right-4 text-white">
          <div className="flex items-center justify-between">
            <div className="min-w-0 flex-1">
              <h3 className="font-display font-heading text-lg mb-1 truncate">
                {project.title}
              </h3>
              <div className="flex items-center text-sm text-white/90 mb-1">
                <Building2 className="h-3 w-3 mr-1 flex-shrink-0" />
                <span className="truncate">{project.client}</span>
              </div>
              <div className="flex items-center text-sm text-white/90">
                <MapPin className="h-3 w-3 mr-1 flex-shrink-0" />
                <span className="truncate">{project.location}</span>
              </div>
            </div>
            <ArrowRight
              className={cn(
                'h-5 w-5 ml-3 flex-shrink-0 transition-transform duration-300',
                isHovered ? 'translate-x-1' : 'translate-x-0'
              )}
            />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <p className="text-gray-600 text-sm mb-4 line-clamp-2 leading-relaxed">
          {project.description}
        </p>

        {/* Metrics */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          {project.metrics.area && (
            <div className="text-center">
              <div className="text-sm font-semibold text-brand-primary">
                {project.metrics.area}
              </div>
              <div className="text-xs text-gray-500">Alan</div>
            </div>
          )}
          {project.metrics.capacity && (
            <div className="text-center">
              <div className="text-sm font-semibold text-brand-primary">
                {project.metrics.capacity}
              </div>
              <div className="text-xs text-gray-500">Kapasite</div>
            </div>
          )}
          {project.metrics.standard && (
            <div className="text-center">
              <div className="text-sm font-semibold text-brand-secondary">
                {project.metrics.standard}
              </div>
              <div className="text-xs text-gray-500">Standart</div>
            </div>
          )}
          {project.metrics.efficiency && (
            <div className="text-center">
              <div className="text-sm font-semibold text-brand-secondary">
                {project.metrics.efficiency}
              </div>
              <div className="text-xs text-gray-500">Verimlilik</div>
            </div>
          )}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1">
          {project.tags.slice(0, 3).map((tag, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 3 && (
            <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
              +{project.tags.length - 3}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}