'use client';

import { Info, Building } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function CleanroomInfoCards() {
  const locale = useLocale();

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50/30 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Temiz Oda Nedir Kartı - Premium Design */}
          <div className="group relative bg-white rounded-3xl p-8 lg:p-10 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-transparent rounded-full -translate-y-16 translate-x-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-teal-500/10 to-transparent rounded-full translate-y-12 -translate-x-12"></div>
            
            {/* Icon with floating animation */}
            <div className="relative flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl mb-8 shadow-lg shadow-blue-500/25 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
              <Info className="h-10 w-10 text-white" />
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-500 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            
            <h2 className="text-3xl font-bold text-gray-900 mb-6 group-hover:text-blue-700 transition-colors duration-300">
              Temiz Oda Nedir ?
            </h2>
            
            <p className="text-gray-600 leading-relaxed mb-8 text-lg">
              <strong>Temiz oda sistemleri</strong>, üretim ve araştırma amacıyla kurulan, havadaki toz 
              ve diğer parçacıklardan mümkün olduğunca arındırılmış sıcaklık ve 
              nem kontrollü <strong>cleanroom</strong> çalışma ortamıdır. <strong>GMP uyumlu</strong> bu sistemler 
              ilaç ve sağlık sektörlerinde kritik öneme sahiptir.
            </p>
            
            {/* Premium CTA */}
            <Link 
              href={`/${locale}/clean-room`} 
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 group-hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <span>DAHA FAZLA</span>
              <svg className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          {/* Modüler Temiz Oda Sistemleri Kartı - Premium Design */}
          <div className="group relative bg-gradient-to-br from-blue-600 via-blue-700 to-purple-700 rounded-3xl p-8 lg:p-10 text-white shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-20 translate-x-20 group-hover:scale-125 transition-transform duration-700"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-purple-400/20 rounded-full translate-y-16 -translate-x-16 group-hover:scale-110 transition-transform duration-700"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Icon with glow effect */}
            <div className="relative flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-3xl mb-8 border border-white/30 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
              <Building className="h-10 w-10 text-white" />
              <div className="absolute inset-0 bg-white/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            
            <h2 className="text-3xl font-bold mb-6 group-hover:text-purple-100 transition-colors duration-300">
              Modüler Temiz Oda Sistemleri
            </h2>
            
            <p className="text-blue-50 leading-relaxed mb-8 text-lg group-hover:text-white transition-colors duration-300">
              <strong>Modüler temiz oda</strong> sistemleri, HPL ve sac metal <strong>temiz oda panelleri</strong> ile maksimum 
              entegrasyonun sağlandığı, sürdürülebilır ve geri kazanılabilir mimarı 
              çözümlerdir. <strong>ISO 14644</strong> standartlarına uygun bu sistemler hızlı kurulum imkanı sunar.
            </p>
            
            {/* Premium CTA with glow */}
            <Link 
              href={`/${locale}/applications/modular-clean-room`} 
              className="inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-sm text-white font-semibold rounded-xl border border-white/30 hover:bg-white/30 transition-all duration-300 group-hover:scale-105 hover:shadow-2xl hover:shadow-white/20"
            >
              <span>DAHA FAZLA</span>
              <svg className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}