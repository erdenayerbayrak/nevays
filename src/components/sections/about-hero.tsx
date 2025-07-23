import Image from 'next/image';
import { Phone, MessageCircle } from 'lucide-react';

export default function AboutHero() {
  return (
    <section className="relative h-[75vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=1920&h=1080&fit=crop&crop=center"
          alt="NEVAYS Temiz Oda Tesisi"
          fill
          className="object-cover"
          priority
        />
        {/* Modern Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/85 via-blue-900/75 to-slate-900/85" />
        
        {/* Subtle Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-400/30 to-transparent rounded-full -translate-y-48 translate-x-48"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-teal-400/30 to-transparent rounded-full translate-y-40 -translate-x-40"></div>
        </div>
      </div>

      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        
        {/* Premium Badge */}
        <div className="inline-flex items-center px-6 py-2 mb-6 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
          <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
          <span className="text-sm font-medium text-white/90">1998'den Bu Yana</span>
        </div>

        {/* Main Title */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight">
          <span className="block text-white">
            Temiz Hava Teknolojilerinde
          </span>
          <span className="block bg-gradient-to-r from-blue-400 via-teal-400 to-blue-300 bg-clip-text text-transparent">
            25 Yıllık Öncülük
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-12 text-white/80 max-w-4xl mx-auto leading-relaxed">
          İlaç, hastane ve endüstriyel tesislerde dünya standartlarında 
          <strong className="text-white"> temiz oda ve hava teknolojileri</strong> çözümleri sunuyoruz.
        </p>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent mb-2">500+</div>
            <div className="text-white/80 font-medium">Başarılı Proje</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <div className="text-4xl font-bold bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent mb-2">45</div>
            <div className="text-white/80 font-medium">Ülke</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">150+</div>
            <div className="text-white/80 font-medium">Uzman Ekip</div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a 
            href="tel:+905123456789"
            className="group px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-xl text-white font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl min-w-[200px]"
          >
            <div className="flex items-center justify-center">
              <Phone className="mr-2 h-5 w-5" />
              Bizi Arayın
            </div>
          </a>

          <a 
            href="https://wa.me/905123456789?text=Merhaba, NEVAYS hakkında bilgi almak istiyorum." 
            target="_blank" 
            rel="noopener noreferrer"
            className="group px-8 py-4 bg-green-600 hover:bg-green-700 rounded-xl text-white font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl min-w-[200px]"
          >
            <div className="flex items-center justify-center">
              <MessageCircle className="mr-2 h-5 w-5" />
              WhatsApp
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}