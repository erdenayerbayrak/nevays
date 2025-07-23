'use client';

import { Box, Shield, Gauge, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function LafCabinContent() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">LAF Kabin Sistemleri</h2>
            <div className="prose prose-lg text-gray-600 space-y-4">
              <p><strong>LAF kabin</strong> (Laminar Air Flow) sistemlerimiz, sterile çalışma ortamları oluştururak contamination riskını minimize eder.</p>
              <p><strong>Laminar air flow</strong> teknolojisi ile unidirectional hava akışı sağlayarak, critical applications için ISO 5 sınıfı temizlik seviyesi elde ediyoruz.</p>
              <p><strong>Sterile kabin</strong> çözümlerimiz portable ve sabit montaj seçenekleriyle her tür laboratuvar ve üretim tesisine uygun olarak tasarımlanır.</p>
            </div>
          </div>
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Kabin Tipleri</h3>
            <div className="space-y-4">
              {[
                'Horizontal LAF Kabinleri',
                'Vertical LAF Kabinleri', 
                'Pass-Through LAF Bo×ları',
                'Mobile LAF Units'
              ].map((type, idx) => (
                <div key={idx} className="flex items-center bg-white rounded-lg p-3">
                  <Box className="h-5 w-5 text-blue-600 mr-3" />
                  <span className="font-medium text-gray-900">{type}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="text-center bg-blue-600 rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-4">LAF Kabin Projeniz İçin Görüşelim</h3>
          <Button variant="secondary" size="lg" asChild>
            <a href="tel:+905123456789">Teknik Görüşme</a>
          </Button>
        </div>
      </div>
    </section>
  );
}