'use client';

import { useState } from 'react';
import { Package, Shield, Lock, Users, X, Download } from 'lucide-react';

const systemComponents = [
  {
    title: 'Temiz Oda Panelleri',
    description: 'Projelerimizin temelini oluşturan temiz oda paneli sistemlerimiz, yüksek sızdırmazlık ve hijyen standartları sunar. Panel sistemleriyle tam entegre çalışan modüler çözümler.',
    detailText: 'Detaylı teknik bilgi ve üretim sürecimiz için "Üretim" sayfamızı inceleyebilirsiniz.',
    iconName: 'Shield',
    catalogPdf: '/kataloglar/temiz-oda-panelleri.pdf',
    image: '/images/temizodapanel.jpg'
  },
  {
    title: 'Temiz Oda Kapıları', 
    description: 'Sistem bütünlüğü ve sızdırmazlık için kritik olan temiz oda kapısı ürünlerimiz, panel sistemleriyle tam entegre çalışır. Hermetik kapatma ve otomatik kontrol seçenekleri.',
    detailText: 'Elektromanyetik kilit sistemleri ve özel cam panel seçenekleri ile projenize uygun çözümler.',
    iconName: 'Lock',
    catalogPdf: '/kataloglar/temiz-oda-kapilari.pdf', 
    image: '/images/temizodakapı.jpg'
  },
  {
    title: 'Pass Box Sistemleri',
    description: 'Kontrollü alanlar arasında malzeme transferini güvenli hale getiren pass box ünitelerimiz, çapraz bulaşma riskini ortadan kaldırır. HEPA filtrasyon ve UV sterilizasyon seçenekleri.',
    detailText: 'Statik, dinamik ve özel boyut seçenekleri ile her proje ihtiyacına uygun çözümler.',
    iconName: 'Package',
    catalogPdf: '/kataloglar/pass-box-sistemleri.pdf',
    image: '/images/passbox.jpeg'
  },
  {
    title: 'Tamamlayıcı Sarf Malzemeleri - Temiz Oda Kıyafetleri',
    description: 'Personel kaynaklı partikül kontaminasyonunu önlemek için kritik olan temiz oda tulum ve ESD tulum çözümlerimiz. NEVAYS proje müşterilerine standartlara uygun tamamlayıcı malzemeler.',
    detailText: 'Anti-statik özellikli, nefes alabilir kumaşlar ile uzun süreli kullanım konforu.',
    iconName: 'Users',
    catalogPdf: '/kataloglar/temiz-oda-kiyafetleri.pdf',
    image: '/images/Tamamlayıcı Sarf Malzemeleri - Temiz Oda Kıyafetleri.jpg'
  }
];

const getIconComponent = (iconName: string) => {
  switch (iconName) {
    case 'Shield': return Shield;
    case 'Lock': return Lock;
    case 'Package': return Package;
    case 'Users': return Users;
    default: return Package;
  }
};

interface ProductModalProps {
  component: typeof systemComponents[0];
  isOpen: boolean;
  onClose: () => void;
}

function ProductModal({ component, isOpen, onClose }: ProductModalProps) {
  if (!isOpen) return null;
  
  const Icon = getIconComponent(component.iconName);

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Modal Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mr-4">
              <Icon className="h-6 w-6 text-primary-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900">{component.title}</h3>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4 text-gray-600" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6">
          {/* Product Image */}
          <div className="relative h-64 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl mb-6 overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <Icon className="h-16 w-16 text-gray-400 mx-auto mb-3" />
                <p className="text-gray-500 font-medium text-sm">
                  {component.title} - Ürün Görseli
                </p>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="mb-6">
            <p className="text-gray-700 leading-relaxed mb-4">
              {component.description}
            </p>
            <p className="text-gray-600 text-sm">
              {component.detailText}
            </p>
          </div>

          {/* Download Button */}
          <div className="flex gap-4">
            <a
              href={component.catalogPdf}
              download
              className="flex-1 bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center"
            >
              <Download className="w-4 h-4 mr-2" />
              Katalog İndir
            </a>
            <button
              onClick={onClose}
              className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
            >
              Kapat
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ProductsGrid() {
  const [selectedComponent, setSelectedComponent] = useState<typeof systemComponents[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (component: typeof systemComponents[0]) => {
    setSelectedComponent(component);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedComponent(null);
  };

  return (
    <>
      {/* System Components Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {systemComponents.map((component, index) => {
              const Icon = getIconComponent(component.iconName);
              return (
                <div
                  key={component.title}
                  onClick={() => openModal(component)}
                  className="group bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-500 cursor-pointer hover:scale-[1.02]"
                >
                  {/* Product Image Header */}
                  <div className="relative h-64 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
                    <img 
                      src={component.image} 
                      alt={component.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/20" />
                    
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-primary-600/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                      <div className="text-center text-white">
                        <Package className="h-12 w-12 mx-auto mb-2" />
                        <p className="font-semibold">Katalog ve Detaylar</p>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-primary-700 transition-colors">
                      {component.title}
                    </h3>
                    
                    <p className="text-gray-600 leading-relaxed text-sm line-clamp-3">
                      {component.description}
                    </p>

                    <div className="mt-6 pt-4 border-t border-gray-100">
                      <div className="flex items-center text-primary-600 text-sm font-semibold">
                        <span>Katalog ve Detaylar</span>
                        <Download className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedComponent && (
        <ProductModal
          component={selectedComponent}
          isOpen={isModalOpen}
          onClose={closeModal}
        />
      )}
    </>
  );
}