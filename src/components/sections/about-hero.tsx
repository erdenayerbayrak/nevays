import Image from 'next/image';
import Section from '@/components/ui/section';

export default function AboutHero() {
  return (
    <section className="relative min-h-[70vh] flex items-center">
      <div className="absolute inset-0">
        <Image
          src="/images/about/hero-facility.jpg"
          alt="NEVAYS Facility"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/80" />
      </div>

      <div className="relative z-10 w-full">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-heading mb-6 leading-tight">
              Temiz Hava Teknolojilerinde
              <span className="block text-gradient bg-gradient-to-r from-brand-secondary to-white bg-clip-text text-transparent">
                25 Yıllık Öncülük
              </span>
            </h1>
            
            <p className="text-lg md:text-xl mb-8 text-white/90 max-w-3xl leading-relaxed">
              1998 yılından bu yana, ilaç, hastane ve endüstriyel tesislerde 
              dünya standartlarında temiz oda ve hava teknolojileri çözümleri sunuyoruz.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
              <div className="text-center">
                <div className="text-3xl font-display font-heading text-brand-secondary mb-2">500+</div>
                <div className="text-sm text-white/80">Başarılı Proje</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-display font-heading text-brand-secondary mb-2">45</div>
                <div className="text-sm text-white/80">Ülke</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-display font-heading text-brand-secondary mb-2">150+</div>
                <div className="text-sm text-white/80">Uzman Ekip</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}