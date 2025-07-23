'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, Clock, User, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  publishDate: string;
  readingTime: number;
  category: string;
  tags: string[];
  image: string;
  featured?: boolean;
}

interface BlogCardProps {
  post: BlogPost;
  href: string;
  featured?: boolean;
  className?: string;
}

const categoryColors: Record<string, string> = {
  'Standartlar': 'bg-blue-500',
  'HVAC': 'bg-green-500',
  'GMP': 'bg-purple-500',
  'Healthcare': 'bg-red-500',
  'Technology': 'bg-orange-500',
  'Sustainability': 'bg-teal-500',
};

export default function BlogCard({ post, href, featured = false, className }: BlogCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('tr-TR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <Link
      href={href}
      className={cn(
        'group block bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300',
        featured ? 'md:flex' : '',
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image */}
      <div className={cn(
        'relative overflow-hidden',
        featured ? 'md:w-1/2 h-64 md:h-auto' : 'h-48'
      )}>
        <Image
          src={post.image}
          alt={post.title}
          fill
          className={cn(
            'object-cover transition-transform duration-500',
            isHovered ? 'scale-110' : 'scale-100'
          )}
          sizes={featured ? 
            '(max-width: 768px) 100vw, 50vw' : 
            '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
          }
        />
        
        {/* Overlay */}
        <div
          className={cn(
            'absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent transition-opacity duration-300',
            isHovered ? 'opacity-80' : 'opacity-60'
          )}
        />

        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className={cn(
            'px-3 py-1 text-xs font-medium text-white rounded-full',
            categoryColors[post.category] || 'bg-gray-500'
          )}>
            {post.category}
          </span>
        </div>

        {/* Reading Time */}
        <div className="absolute top-4 right-4">
          <div className="flex items-center px-2 py-1 bg-white/20 backdrop-blur-sm text-white text-xs rounded-full">
            <Clock className="h-3 w-3 mr-1" />
            {post.readingTime} dk
          </div>
        </div>

        {/* Featured Badge */}
        {featured && (
          <div className="absolute bottom-4 left-4">
            <span className="px-3 py-1 bg-brand-secondary text-white text-xs font-medium rounded-full">
              Öne Çıkan
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className={cn(
        'p-6',
        featured ? 'md:w-1/2 flex flex-col justify-between' : ''
      )}>
        <div className="flex-1">
          {/* Meta Info */}
          <div className="flex items-center text-sm text-gray-500 mb-3 space-x-4">
            <div className="flex items-center">
              <User className="h-4 w-4 mr-1" />
              {post.author}
            </div>
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-1" />
              {formatDate(post.publishDate)}
            </div>
          </div>

          {/* Title */}
          <h3 className={cn(
            'font-display font-heading text-gray-900 mb-3 group-hover:text-brand-primary transition-colors duration-200',
            featured ? 'text-xl md:text-2xl' : 'text-lg',
            'line-clamp-2'
          )}>
            {post.title}
          </h3>

          {/* Excerpt */}
          <p className={cn(
            'text-gray-600 leading-relaxed mb-4',
            featured ? 'text-base line-clamp-3' : 'text-sm line-clamp-3'
          )}>
            {post.excerpt}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.slice(0, featured ? 4 : 3).map((tag, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
              >
                {tag}
              </span>
            ))}
            {post.tags.length > (featured ? 4 : 3) && (
              <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                +{post.tags.length - (featured ? 4 : 3)}
              </span>
            )}
          </div>
        </div>

        {/* Read More */}
        <div className="flex items-center text-brand-primary font-medium text-sm group-hover:text-brand-secondary transition-colors duration-200">
          Devamını Oku
          <ArrowRight
            className={cn(
              'h-4 w-4 ml-2 transition-transform duration-300',
              isHovered ? 'translate-x-1' : 'translate-x-0'
            )}
          />
        </div>
      </div>
    </Link>
  );
}