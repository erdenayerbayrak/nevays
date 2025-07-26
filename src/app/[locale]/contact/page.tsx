'use client';

import MainLayout from '@/components/layout/main-layout';
import PageHero from '@/components/ui/page-hero';
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
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            
            {/* Left Column - Contact Actions */}
            <div>
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  🚀 Eyleme Geçin
                </h2>
                <p className="text-xl text-gray-600">
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
                      className={`bg-gradient-to-r ${method.bgColor} rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-all duration-300`}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex items-start">
                          <div className={`w-12 h-12 bg-white rounded-xl flex items-center justify-center mr-4 shadow-sm`}>
                            <Icon className={`h-6 w-6 ${method.iconColor}`} />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-lg font-bold text-gray-900 mb-1">
                              {method.title}
                            </h3>
                            <p className="text-sm text-gray-600 mb-2">
                              {method.subtitle}
                            </p>
                            <p className="text-xl font-semibold text-gray-900 mb-1">
                              {method.content}
                            </p>
                            <p className="text-sm text-gray-500">
                              {method.detail}
                            </p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="mt-4">
                        <a
                          href={method.actionLink}
                          target={method.id === 'whatsapp' ? '_blank' : undefined}
                          rel={method.id === 'whatsapp' ? 'noopener noreferrer' : undefined}
                          className={`w-full inline-flex items-center justify-center px-6 py-3 ${method.buttonColor} text-white font-semibold rounded-lg transition-colors`}
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
              <div className="mt-12 pt-8 border-t border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-6">
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
                        className={`w-12 h-12 bg-gray-100 hover:bg-gray-200 rounded-xl flex items-center justify-center transition-colors ${social.color}`}
                        title={social.name}
                      >
                        <Icon className="w-5 h-5" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Right Column - Location */}
            <div>
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  📍 Bizi Bulun
                </h2>
                <p className="text-xl text-gray-600">
                  Ofisimizi ziyaret etmek isterseniz, konumumuz ve çalışma saatlerimiz.
                </p>
              </div>

              {/* Interactive Map Placeholder */}
              <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl h-80 mb-6 flex items-center justify-center border border-gray-100">
                <div className="text-center">
                  <MapPin className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-500 font-medium">
                    İnteraktif Google Haritası
                  </p>
                  <p className="text-gray-400 text-sm mt-2">
                    NEVAYS Ofis Konumu
                  </p>
                </div>
              </div>

              {/* Address and Working Hours */}
              <div className="space-y-6">
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 text-primary-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">
                        📍 Açık Adres
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        Merkez Mah. Teknoloji Bulvarı No:123<br />
                        K:2 D:45 Çekmeköy/İstanbul<br />
                        Türkiye 34785
                      </p>
                      <button 
                        onClick={() => navigator.clipboard.writeText('Merkez Mah. Teknoloji Bulvarı No:123 K:2 D:45 Çekmeköy/İstanbul Türkiye 34785')}
                        className="text-primary-600 hover:text-primary-700 text-sm font-medium mt-2 transition-colors"
                      >
                        📋 Adresi Kopyala
                      </button>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                  <div className="flex items-start">
                    <Clock className="h-6 w-6 text-primary-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">
                        🕘 Çalışma Saatleri
                      </h3>
                      <div className="space-y-1 text-gray-700">
                        <p><span className="font-medium">Pazartesi - Cuma:</span> 09:00 - 18:00</p>
                        <p><span className="font-medium">Cumartesi:</span> 09:00 - 13:00</p>
                        <p><span className="font-medium">Pazar:</span> Kapalı</p>
                        <p className="text-sm text-primary-600 mt-2">
                          ⚡ Acil durumlar için WhatsApp ile 7/24 ulaşabilirsiniz
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Response Promise */}
      <section className="py-16 bg-gradient-to-r from-primary-50 to-primary-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-primary-200">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              ⚡ Hızlı Yanıt Garantisi
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              İletişim kurduğunuz andan itibaren en geç 2 saat içinde size geri dönüş yapıyoruz.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-primary-50 rounded-xl p-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-primary-900 mb-2">Telefon</h3>
                  <p className="text-sm text-primary-700">Anında cevap</p>
                </div>
              </div>
              <div className="bg-primary-50 rounded-xl p-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-3">
                    <MessageCircle className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-primary-900 mb-2">WhatsApp</h3>
                  <p className="text-sm text-primary-700">En geç 30 dakika</p>
                </div>
              </div>
              <div className="bg-primary-50 rounded-xl p-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-primary-900 mb-2">E-posta</h3>
                  <p className="text-sm text-primary-700">En geç 2 saat</p>
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