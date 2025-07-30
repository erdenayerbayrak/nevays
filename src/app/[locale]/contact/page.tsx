'use client';

import { MainLayout } from '@/components/layout';
import { PageHero } from '@/components/ui';
import { Phone, Mail, MessageCircle, MapPin, Clock, Linkedin, Twitter, Facebook } from 'lucide-react';
import { useLocale } from 'next-intl';
import Head from 'next/head';

const contactMethods = [
  {
    id: 'phone',
    title: 'Bizi Arayın',
    subtitle: 'Hemen konuşmaya başlayın',
    content: '+90 216 XXX XX XX',
    detail: 'Hafta içi: 09:00 - 18:00',
    icon: Phone,
    actionText: 'Hemen Ara',
    actionLink: 'tel:+902165551234',
    bgColor: 'from-blue-50 to-blue-100',
    iconColor: 'text-blue-600',
    buttonColor: 'bg-blue-600 hover:bg-blue-700'
  },
  {
    id: 'email',
    title: 'E-posta Gönderin',
    subtitle: 'Detaylı bilgi paylaşın',
    content: 'proje@nevays.com',
    detail: 'Proje detayları ve teklif talebi',
    icon: Mail,
    actionText: 'E-posta Oluştur',
    actionLink: 'mailto:proje@nevays.com?subject=Proje Talebi&body=Merhaba, projem hakkında bilgi almak istiyorum.',
    bgColor: 'from-green-50 to-green-100',
    iconColor: 'text-green-600',
    buttonColor: 'bg-green-600 hover:bg-green-700'
  },
  {
    id: 'whatsapp',
    title: 'WhatsApp\'tan Yazın',
    subtitle: 'Hızlı cevap garantisi',
    content: '+90 532 XXX XX XX',
    detail: 'Mesaiye kadar anında yanıt',
    icon: MessageCircle,
    actionText: 'Sohbet Başlat',
    actionLink: 'https://wa.me/905325551234?text=Merhaba, temiz oda projem hakkında bilgi almak istiyorum.',
    bgColor: 'from-emerald-50 to-emerald-100',
    iconColor: 'text-emerald-600',
    buttonColor: 'bg-emerald-600 hover:bg-emerald-700'
  }
];

const socialMedia = [
  {
    name: 'LinkedIn',
    icon: Linkedin,
    url: 'https://linkedin.com/company/nevays',
    color: 'text-blue-600 hover:text-blue-700'
  },
  {
    name: 'Twitter',
    icon: Twitter,
    url: 'https://twitter.com/nevays',
    color: 'text-sky-500 hover:text-sky-600'
  },
  {
    name: 'Facebook',
    icon: Facebook,
    url: 'https://facebook.com/nevays',
    color: 'text-blue-700 hover:text-blue-800'
  }
];

export default function ContactPage() {
  const locale = useLocale();
  
  return (
    <>
      <Head>
        <title>{locale === 'tr' ? 'İletişim - NEVAYS ile Projenizi Konuşalım' : 'Contact - Let\'s Discuss Your Project with NEVAYS'}</title>
        <meta 
          name="description" 
          content={locale === 'tr' 
            ? 'NEVAYS ile iletişime geçin. Telefon, e-posta veya WhatsApp ile anında ulaşın. Temiz oda projeleriniz için uzman danışmanlık.'
            : 'Contact NEVAYS. Reach us instantly via phone, email or WhatsApp. Expert consultation for your cleanroom projects.'
          }
        />
      </Head>
      <MainLayout>
      <PageHero
        title="Projenizi Birlikte Hayata Geçirelim"
        subtitle="Sorularınızı yanıtlamak ve çözüm ortağınız olmak için buradayız."
        breadcrumbs={[
          { label: 'İletişim' }
        ]}
      />

      {/* Main Contact Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            
            {/* Left Column - Contact Actions */}
            <div>
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-3">
                  🚀 Eyleme Geçin
                </h2>
                <p className="text-lg text-gray-600">
                  Projeniz için en uygun iletişim yöntemini seçin ve anında bizimle bağlantı kurun.
                </p>
              </div>

              {/* Contact Method Cards */}
              <div className="space-y-6">
                {contactMethods.map((method) => {
                  const Icon = method.icon;
                  return (
                    <div
                      key={method.id}
                      className={`bg-gradient-to-r ${method.bgColor} rounded-xl p-5 border border-gray-100 hover:shadow-lg transition-all duration-300`}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex items-start">
                          <div className={`w-10 h-10 bg-white rounded-lg flex items-center justify-center mr-3 shadow-sm`}>
                            <Icon className={`h-5 w-5 ${method.iconColor}`} />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-base font-bold text-gray-900 mb-1">
                              {method.title}
                            </h3>
                            <p className="text-xs text-gray-600 mb-1">
                              {method.subtitle}
                            </p>
                            <p className="text-lg font-semibold text-gray-900 mb-1">
                              {method.content}
                            </p>
                            <p className="text-xs text-gray-500">
                              {method.detail}
                            </p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="mt-3">
                        <a
                          href={method.actionLink}
                          target={method.id === 'whatsapp' ? '_blank' : undefined}
                          rel={method.id === 'whatsapp' ? 'noopener noreferrer' : undefined}
                          className={`w-full inline-flex items-center justify-center px-4 py-2 ${method.buttonColor} text-white font-medium rounded-lg transition-colors text-sm`}
                        >
                          <Icon className="w-4 h-4 mr-2" />
                          {method.actionText}
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Social Media Links */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <h3 className="text-base font-semibold text-gray-900 mb-4">
                  📱 Sosyal Medyadan Takip Edin
                </h3>
                <div className="flex space-x-6">
                  {socialMedia.map((social) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-lg flex items-center justify-center transition-colors ${social.color}`}
                        title={social.name}
                      >
                        <Icon className="w-4 h-4" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Right Column - Location */}
            <div>
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-3">
                  📍 Bizi Bulun
                </h2>
                <p className="text-lg text-gray-600">
                  Ofisimizi ziyaret etmek isterseniz, konumumuz ve çalışma saatlerimiz.
                </p>
              </div>

              {/* Interactive Map Placeholder */}
              <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl h-64 mb-5 flex items-center justify-center border border-gray-100">
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-3" />
                  <p className="text-gray-500 font-medium text-sm">
                    İnteraktif Google Haritası
                  </p>
                  <p className="text-gray-400 text-xs mt-1">
                    NEVAYS Ofis Konumu
                  </p>
                </div>
              </div>

              {/* Address and Working Hours */}
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-lg p-4 border border-gray-100">
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-primary-600 mr-2 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1 text-sm">
                        📍 Açık Adres
                      </h3>
                      <p className="text-gray-700 leading-relaxed text-sm">
                        Merkez Mah. Teknoloji Bulvarı No:123<br />
                        K:2 D:45 Çekmeköy/İstanbul<br />
                        Türkiye 34785
                      </p>
                      <button 
                        onClick={() => navigator.clipboard.writeText('Merkez Mah. Teknoloji Bulvarı No:123 K:2 D:45 Çekmeköy/İstanbul Türkiye 34785')}
                        className="text-primary-600 hover:text-primary-700 text-xs font-medium mt-1 transition-colors"
                      >
                        📋 Adresi Kopyala
                      </button>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-4 border border-gray-100">
                  <div className="flex items-start">
                    <Clock className="h-5 w-5 text-primary-600 mr-2 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1 text-sm">
                        🕘 Çalışma Saatleri
                      </h3>
                      <div className="space-y-1 text-gray-700 text-sm">
                        <p><span className="font-medium">Pazartesi - Cuma:</span> 09:00 - 18:00</p>
                        <p><span className="font-medium">Cumartesi:</span> 09:00 - 13:00</p>
                        <p><span className="font-medium">Pazar:</span> Kapalı</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      </MainLayout>
    </>
  );
}