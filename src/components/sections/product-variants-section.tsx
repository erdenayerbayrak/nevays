'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ChevronDown, ChevronUp } from 'lucide-react';
import Section from '@/components/ui/section';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface ProductSpec {
  label: string;
  value: string;
}

interface Product {
  id: string;
  name: string;
  airflowRange: string;
  image: string;
  badges: string[];
  specs: ProductSpec[];
}

interface ProductVariantsSectionProps {
  title: string;
  products: Product[];
}

export default function ProductVariantsSection({ title, products }: ProductVariantsSectionProps) {
  const [expandedProduct, setExpandedProduct] = useState<string | null>(null);

  const toggleExpanded = (productId: string) => {
    setExpandedProduct(expandedProduct === productId ? null : productId);
  };

  return (
    <Section>
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-heading text-gray-900 mb-4">
          {title}
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-brand-primary to-brand-secondary rounded-full mx-auto" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
        {products.map((product) => (
          <Card key={product.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="relative h-48 overflow-hidden">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover transition-transform duration-300 hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              
              {/* Badges */}
              <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                {product.badges.map((badge, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-brand-primary/90 text-white text-xs font-medium rounded-full backdrop-blur-sm"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>

            <CardHeader>
              <CardTitle className="font-display font-heading text-xl">
                {product.name}
              </CardTitle>
              <div className="text-brand-primary font-semibold">
                {product.airflowRange}
              </div>
            </CardHeader>

            <CardContent>
              <div className="space-y-4">
                {/* Specs Accordion */}
                <div>
                  <Button
                    variant="ghost"
                    onClick={() => toggleExpanded(product.id)}
                    className="w-full justify-between p-0 h-auto text-left hover:bg-transparent"
                  >
                    <span className="font-medium">Teknik Özellikler</span>
                    {expandedProduct === product.id ? (
                      <ChevronUp className="h-4 w-4" />
                    ) : (
                      <ChevronDown className="h-4 w-4" />
                    )}
                  </Button>
                  
                  <div
                    className={cn(
                      'overflow-hidden transition-all duration-300 ease-in-out',
                      expandedProduct === product.id
                        ? 'max-h-64 opacity-100 mt-4'
                        : 'max-h-0 opacity-0 mt-0'
                    )}
                  >
                    <div className="bg-gray-50 rounded-lg p-4 space-y-3">
                      {product.specs.map((spec, index) => (
                        <div key={index} className="flex justify-between items-center">
                          <span className="text-sm text-gray-600">{spec.label}</span>
                          <span className="text-sm font-medium text-gray-900">{spec.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button variant="primary" size="sm" className="flex-1">
                    Detaylar
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    Teklif Al
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
}