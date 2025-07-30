'use client'
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, LucideIcon, Shield, Settings, Package, Factory } from "lucide-react";

const getIconComponent = (iconName: string): LucideIcon => {
  switch (iconName) {
    case 'Shield': return Shield;
    case 'Settings': return Settings;
    case 'Package': return Package;
    case 'Factory': return Factory;
    default: return Shield;
  }
};

interface GradientServiceCardProps {
  title: string;
  description: string;
  iconName: string;
  href: string;
  features: string[];
  image?: string;
}

export const GradientServiceCard: React.FC<GradientServiceCardProps> = ({
  title,
  description,
  iconName,
  href,
  features
}) => {
  const Icon = getIconComponent(iconName);
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  // Handle mouse movement for 3D effect
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();

      // Calculate mouse position relative to card center
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      // Calculate rotation (limited range for subtle effect)
      const rotateX = -(y / rect.height) * 3; // Max 3 degrees rotation
      const rotateY = (x / rect.width) * 3; // Max 3 degrees rotation

      setRotation({ x: rotateX, y: rotateY });
    }
  };

  // Reset rotation when not hovering
  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotation({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={cardRef}
      className="relative rounded-2xl overflow-hidden group"
      style={{
        transformStyle: "preserve-3d",
        backgroundColor: "white",
        boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
      }}
      initial={{ y: 0 }}
      animate={{
        y: isHovered ? -5 : 0,
        rotateX: rotation.x,
        rotateY: rotation.y,
        perspective: 1000,
        boxShadow: isHovered 
          ? "0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.05)"
          : "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
    >
      {/* Gradient animation at the bottom */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-1 z-20"
        style={{
          background: "linear-gradient(90deg, rgba(59, 130, 246, 0.8) 0%, rgba(147, 51, 234, 0.8) 50%, rgba(236, 72, 153, 0.8) 100%)",
        }}
        animate={{
          opacity: isHovered ? 1 : 0.7,
          height: isHovered ? "4px" : "2px",
          boxShadow: isHovered
            ? "0 0 20px 2px rgba(59, 130, 246, 0.4), 0 0 30px 4px rgba(147, 51, 234, 0.3), 0 0 40px 6px rgba(236, 72, 153, 0.2)"
            : "0 0 10px 1px rgba(59, 130, 246, 0.3), 0 0 15px 2px rgba(147, 51, 234, 0.2), 0 0 20px 3px rgba(236, 72, 153, 0.1)",
        }}
        transition={{
          duration: 0.4,
          ease: "easeOut"
        }}
      />

      {/* Subtle glow effect */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-1/3 z-10 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse at bottom center, rgba(59, 130, 246, 0.1) 0%, transparent 70%),
            radial-gradient(ellipse at bottom left, rgba(147, 51, 234, 0.1) 0%, transparent 70%),
            radial-gradient(ellipse at bottom right, rgba(236, 72, 153, 0.1) 0%, transparent 70%)
          `,
          filter: "blur(20px)",
        }}
        animate={{
          opacity: isHovered ? 0.8 : 0.4,
        }}
        transition={{
          duration: 0.4,
          ease: "easeOut"
        }}
      />

      {/* Card content */}
      <motion.div
        className="relative p-8 bg-white z-30"
        animate={{
          rotateX: isHovered ? -rotation.x * 0.1 : 0,
          rotateY: isHovered ? -rotation.y * 0.1 : 0,
        }}
        transition={{
          duration: 0.4,
          ease: "easeOut"
        }}
      >
        <div className="flex items-center mb-6">
          <motion.div 
            className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center mr-4 group-hover:bg-primary-200 transition-colors"
            animate={{
              scale: isHovered ? 1.05 : 1,
              rotateX: isHovered ? -rotation.x * 0.2 : 0,
              rotateY: isHovered ? -rotation.y * 0.2 : 0,
            }}
            transition={{
              duration: 0.4,
              ease: "easeOut"
            }}
          >
            <Icon className="h-8 w-8 text-primary-600" />
          </motion.div>
          <div>
            <motion.h3 
              className="text-2xl font-bold text-gray-900 group-hover:text-primary-700 transition-colors"
              animate={{
                rotateX: isHovered ? -rotation.x * 0.1 : 0,
                rotateY: isHovered ? -rotation.y * 0.1 : 0,
              }}
              transition={{
                duration: 0.4,
                ease: "easeOut"
              }}
            >
              {title}
            </motion.h3>
          </div>
        </div>
        
        <motion.p 
          className="text-gray-600 leading-relaxed mb-6"
          animate={{
            rotateX: isHovered ? -rotation.x * 0.05 : 0,
            rotateY: isHovered ? -rotation.y * 0.05 : 0,
          }}
          transition={{
            duration: 0.4,
            ease: "easeOut"
          }}
        >
          {description}
        </motion.p>

        <motion.div 
          className="space-y-2 mb-8"
          animate={{
            rotateX: isHovered ? -rotation.x * 0.05 : 0,
            rotateY: isHovered ? -rotation.y * 0.05 : 0,
          }}
          transition={{
            duration: 0.4,
            ease: "easeOut"
          }}
        >
          {features.map((feature, idx) => (
            <div key={idx} className="flex items-center">
              <div className="w-2 h-2 bg-primary-600 rounded-full mr-3 flex-shrink-0" />
              <span className="text-gray-700 text-sm">{feature}</span>
            </div>
          ))}
        </motion.div>

        <Link
          href={href}
          className="inline-flex items-center text-primary-600 hover:text-primary-700 font-semibold transition-colors"
        >
          <motion.span
            animate={{
              x: isHovered ? 4 : 0,
            }}
            transition={{
              duration: 0.4,
              ease: "easeOut"
            }}
          >
            Detayları Gör
          </motion.span>
          <motion.div
            animate={{
              x: isHovered ? 8 : 0,
            }}
            transition={{
              duration: 0.4,
              ease: "easeOut"
            }}
          >
            <ArrowRight className="w-4 h-4 ml-2" />
          </motion.div>
        </Link>
      </motion.div>
    </motion.div>
  );
};