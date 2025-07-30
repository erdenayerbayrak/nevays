'use client'
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

// Icon resolver function
const getIconComponent = (iconName: string) => {
  const icons = {
    Shield: () => (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    Settings: () => (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1 1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" stroke="currentColor" strokeWidth="2"/>
      </svg>
    ),
    Package: () => (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8z" stroke="currentColor" strokeWidth="2"/>
        <polyline points="3.29,7 12,12 20.71,7" stroke="currentColor" strokeWidth="2"/>
        <line x1="12" y1="22" x2="12" y2="12" stroke="currentColor" strokeWidth="2"/>
      </svg>
    ),
    Factory: () => (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V9l-5 4V6L2 20Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M17 18h1" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M12 18h1" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M7 18h1" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  };
  
  const IconComponent = icons[iconName as keyof typeof icons];
  return IconComponent ? <IconComponent /> : null;
};

interface WhiteServiceCardProps {
  title: string;
  description: string;
  iconName: string;
  href: string;
  features: string[];
  image: string;
}

export const WhiteServiceCard = ({ title, description, iconName, href, features, image }: WhiteServiceCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  // Handle mouse movement for 3D effect
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();

      // Calculate mouse position relative to card center
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      setMousePosition({ x, y });

      // Calculate rotation (limited range for subtle effect)
      const rotateX = -(y / rect.height) * 3; // Max 3 degrees rotation for subtlety
      const rotateY = (x / rect.width) * 3; // Max 3 degrees rotation for subtlety

      setRotation({ x: rotateX, y: rotateY });
    }
  };

  // Reset rotation when not hovering
  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotation({ x: 0, y: 0 });
  };

  return (
    <Link href={href} className="block">
      <motion.div
        ref={cardRef}
        className="relative rounded-3xl overflow-hidden bg-white border border-gray-100 h-[450px]"
        style={
          {
            transformStyle: "preserve-3d",
            boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08), 0 1px 3px rgba(0, 0, 0, 0.05)",
          }
        }
        initial={{ y: 0 }}
        animate={{
          y: isHovered ? -8 : 0,
          rotateX: rotation.x,
          rotateY: rotation.y,
          perspective: 1000,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 25
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
      >
        {/* Subtle glass reflection overlay */}
        <motion.div
          className="absolute inset-0 z-30 pointer-events-none"
          style={{
            background: "linear-gradient(135deg, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0.1) 40%, rgba(255,255,255,0.1) 80%, rgba(255,255,255,0.3) 100%)",
            backdropFilter: "blur(1px)",
          }}
          animate={{
            opacity: isHovered ? 0.8 : 0.6,
            rotateX: -rotation.x * 0.2,
            rotateY: -rotation.y * 0.2,
            z: 1,
          }}
          transition={{
            duration: 0.4,
            ease: "easeOut"
          }}
        />

        {/* White background with subtle gradient */}
        <motion.div
          className="absolute inset-0 z-0"
          style={{
            background: "linear-gradient(180deg, #ffffff 0%, #fafafa 100%)",
          }}
          animate={{
            z: -1
          }}
        />

        {/* Subtle texture overlay */}
        <motion.div
          className="absolute inset-0 opacity-20 mix-blend-overlay z-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.4'/%3E%3C/svg%3E")`,
          }}
          animate={{
            z: -0.5
          }}
        />

        {/* Strong gradient glow effect like in card.md */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-2/3 z-20"
          style={{
            background: `
              radial-gradient(ellipse at bottom right, rgba(59, 130, 246, 0.6) -10%, rgba(37, 99, 235, 0) 70%),
              radial-gradient(ellipse at bottom left, rgba(99, 102, 241, 0.6) -10%, rgba(37, 99, 235, 0) 70%)
            `,
            filter: "blur(40px)",
          }}
          animate={{
            opacity: isHovered ? 0.9 : 0.8,
            y: isHovered ? rotation.x * 0.5 : 0,
            z: 0
          }}
          transition={{
            duration: 0.4,
            ease: "easeOut"
          }}
        />

        {/* Central blue glow */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-2/3 z-21"
          style={{
            background: `
              radial-gradient(circle at bottom center, rgba(79, 70, 229, 0.7) -20%, rgba(37, 99, 235, 0) 60%)
            `,
            filter: "blur(45px)",
          }}
          animate={{
            opacity: isHovered ? 0.85 : 0.75,
            y: isHovered ? `calc(10% + ${rotation.x * 0.3}px)` : "10%",
            z: 0
          }}
          transition={{
            duration: 0.4,
            ease: "easeOut"
          }}
        />

        {/* Enhanced bottom border glow for premium look */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-[2px] z-25"
          style={{
            background: "linear-gradient(90deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.7) 50%, rgba(255, 255, 255, 0.05) 100%)",
          }}
          animate={{
            boxShadow: isHovered
              ? "0 0 20px 4px rgba(59, 130, 246, 0.9), 0 0 30px 6px rgba(79, 70, 229, 0.7), 0 0 40px 8px rgba(99, 102, 241, 0.5)"
              : "0 0 15px 3px rgba(59, 130, 246, 0.8), 0 0 25px 5px rgba(79, 70, 229, 0.6), 0 0 35px 7px rgba(99, 102, 241, 0.4)",
            opacity: isHovered ? 1 : 0.9,
            z: 0.5
          }}
          transition={{
            duration: 0.4,
            ease: "easeOut"
          }}
        />
        
        {/* Left corner glow */}
        <motion.div
          className="absolute bottom-0 left-0 h-1/4 w-[1px] z-25 rounded-full"
          style={{
            background: "linear-gradient(to top, rgba(255, 255, 255, 0.7) 0%, rgba(255, 255, 255, 0.5) 20%, rgba(255, 255, 255, 0.3) 40%, rgba(255, 255, 255, 0.1) 60%, rgba(255, 255, 255, 0) 80%)",
          }}
          animate={{
            boxShadow: isHovered
              ? "0 0 20px 4px rgba(59, 130, 246, 0.9), 0 0 30px 6px rgba(79, 70, 229, 0.7), 0 0 40px 8px rgba(99, 102, 241, 0.5)"
              : "0 0 15px 3px rgba(59, 130, 246, 0.8), 0 0 25px 5px rgba(79, 70, 229, 0.6), 0 0 35px 7px rgba(99, 102, 241, 0.4)",
            opacity: isHovered ? 1 : 0.9,
            z: 0.5
          }}
          transition={{
            duration: 0.4,
            ease: "easeOut"
          }}
        />
        
        {/* Right corner glow */}
        <motion.div
          className="absolute bottom-0 right-0 h-1/4 w-[1px] z-25 rounded-full"
          style={{
            background: "linear-gradient(to top, rgba(255, 255, 255, 0.7) 0%, rgba(255, 255, 255, 0.5) 20%, rgba(255, 255, 255, 0.3) 40%, rgba(255, 255, 255, 0.1) 60%, rgba(255, 255, 255, 0) 80%)",
          }}
          animate={{
            boxShadow: isHovered
              ? "0 0 20px 4px rgba(59, 130, 246, 0.9), 0 0 30px 6px rgba(79, 70, 229, 0.7), 0 0 40px 8px rgba(99, 102, 241, 0.5)"
              : "0 0 15px 3px rgba(59, 130, 246, 0.8), 0 0 25px 5px rgba(79, 70, 229, 0.6), 0 0 35px 7px rgba(99, 102, 241, 0.4)",
            opacity: isHovered ? 1 : 0.9,
            z: 0.5
          }}
          transition={{
            duration: 0.4,
            ease: "easeOut"
          }}
        />

        {/* Card content */}
        <motion.div
          className="relative flex flex-col h-full p-8 z-40"
          animate={{
            z: 2
          }}
        >
          {/* Icon circle with white theme */}
          <motion.div
            className="w-12 h-12 rounded-full flex items-center justify-center mb-6"
            style={{
              background: "linear-gradient(225deg, #f8fafc 0%, #e2e8f0 100%)",
              position: "relative",
              overflow: "hidden"
            }}
            initial={{ filter: "blur(2px)", opacity: 0.8 }}
            animate={{
              filter: "blur(0px)",
              opacity: 1,
              boxShadow: isHovered
                ? "0 6px 12px -2px rgba(0, 0, 0, 0.1), 0 3px 6px -1px rgba(0, 0, 0, 0.05), inset 1px 1px 3px rgba(255, 255, 255, 0.8), inset -1px -1px 3px rgba(0, 0, 0, 0.1)"
                : "0 4px 8px -2px rgba(0, 0, 0, 0.08), 0 2px 4px -1px rgba(0, 0, 0, 0.03), inset 1px 1px 2px rgba(255, 255, 255, 0.6), inset -1px -1px 2px rgba(0, 0, 0, 0.08)",
              z: isHovered ? 10 : 5,
              y: isHovered ? -2 : 0,
              rotateX: isHovered ? -rotation.x * 0.5 : 0,
              rotateY: isHovered ? -rotation.y * 0.5 : 0
            }}
            transition={{
              duration: 0.4,
              ease: "easeOut"
            }}
          >
            {/* Top-left highlight for realistic lighting */}
            <div
              className="absolute top-0 left-0 w-2/3 h-2/3 opacity-60"
              style={{
                background: "radial-gradient(circle at top left, rgba(255, 255, 255, 0.9), transparent 70%)",
                pointerEvents: "none",
                filter: "blur(8px)"
              }}
            />

            {/* Bottom shadow for depth */}
            <div
              className="absolute bottom-0 left-0 w-full h-1/2 opacity-30"
              style={{
                background: "linear-gradient(to top, rgba(0, 0, 0, 0.15), transparent)",
                pointerEvents: "none",
                backdropFilter: "blur(2px)"
              }}
            />

            {/* Icon with blue color */}
            <div className="flex items-center justify-center w-full h-full relative z-10 text-blue-600">
              {getIconComponent(iconName)}
            </div>
          </motion.div>

          {/* Content positioning */}
          <motion.div
            className="mb-auto"
            animate={{
              z: isHovered ? 5 : 2,
              rotateX: isHovered ? -rotation.x * 0.3 : 0,
              rotateY: isHovered ? -rotation.y * 0.3 : 0
            }}
            transition={{
              duration: 0.4,
              ease: "easeOut"
            }}
          >
            <motion.h3
              className="text-2xl font-semibold text-gray-900 mb-3"
              style={{
                letterSpacing: "-0.01em",
                lineHeight: 1.2,
              }}
              initial={{ filter: "blur(2px)", opacity: 0.8 }}
              animate={{
                textShadow: isHovered ? "0 1px 2px rgba(0,0,0,0.1)" : "none",
                filter: "blur(0px)",
                opacity: 1,
                transition: { duration: 1.0, delay: 0.1 }
              }}
            >
              {title}
            </motion.h3>

            <motion.p
              className="text-sm mb-6 text-gray-600"
              style={{
                lineHeight: 1.5,
                fontWeight: 400,
              }}
              initial={{ filter: "blur(2px)", opacity: 0.7 }}
              animate={{
                textShadow: isHovered ? "0 1px 1px rgba(0,0,0,0.05)" : "none",
                filter: "blur(0px)",
                opacity: 0.9,
                transition: { duration: 1.0, delay: 0.2 }
              }}
            >
              {description}
            </motion.p>

            {/* Features list */}
            <motion.ul
              className="space-y-2 mb-6"
              initial={{ filter: "blur(2px)", opacity: 0.7 }}
              animate={{
                filter: "blur(0px)",
                opacity: 0.9,
                transition: { duration: 1.0, delay: 0.3 }
              }}
            >
              {features.map((feature, index) => (
                <li key={index} className="flex items-center text-sm text-gray-600">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3 flex-shrink-0" />
                  {feature}
                </li>
              ))}
            </motion.ul>

            {/* Learn More with arrow */}
            <motion.div
              className="inline-flex items-center text-blue-600 text-sm font-medium group"
              initial={{ filter: "blur(2px)", opacity: 0.7 }}
              animate={{
                filter: "blur(0px)",
                opacity: 0.9,
                transition: { duration: 1.0, delay: 0.4 }
              }}
              whileHover={{
                filter: "drop-shadow(0 0 3px rgba(59, 130, 246, 0.3))"
              }}
            >
              Detaylı Bilgi
              <motion.div
                className="ml-1"
                animate={{
                  x: isHovered ? 4 : 0
                }}
                transition={{
                  duration: 0.6,
                  ease: "easeOut"
                }}
              >
                <ArrowRight className="w-4 h-4" />
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </Link>
  );
};