import { Clock, Mail, Phone, MapPin, Globe, Users, Award } from 'lucide-react';

const contactDetails = [
  {
    icon: MapPin,
    title: 'Adres',
    details: [
      'NEVAYS Temiz Oda Teknolojileri',
      'Atatürk Mahallesi, Teknoloji Caddesi No: 123',
      'Beşiktaş / İstanbul 34349',
      'Türkiye'
    ]
  },
  {
    icon: Phone,
    title: 'Telefon',
    details: [
      'Genel: +90 212 123 45 67',
      'Satış: +90 212 123 45 68',  
      'Teknik Destek: +90 212 123 45 69',
      'WhatsApp: +90 532 123 45 67'
    ]
  },
  {
    icon: Mail,
    title: 'E-posta',
    details: [
      'Genel: info@nevays.com',
      'Satış: sales@nevays.com',
      'Destek: support@nevays.com',
      'Kariyer: hr@nevays.com'
    ]
  },
  {
    icon: Clock,
    title: 'Çalışma Saatleri',
    details: [
      'Pazartesi - Cuma: 08:00 - 18:00',
      'Cumartesi: 09:00 - 13:00',
      'Pazar: Kapalı',
      'Acil Destek: 7/24'
    ]
  }
];

const officeStats = [
  { icon: Globe, label: 'Ülke', value: '45+' },
  { icon: Users, label: 'Ekip', value: '150+' },
  { icon: Award, label: 'Proje', value: '500+' },
];

export default function ContactInfo() {
  return (
    <div className="bg-gray-50 p-8 lg:p-12">
      <div className="max-w-lg mx-auto">
        <h3 className="text-xl font-display font-heading text-gray-900 mb-6">
          İletişim Bilgileri
        </h3>

        <div className="space-y-6 mb-8">
          {contactDetails.map((item, index) => (
            <div key={index} className="flex items-start">
              <div className="w-10 h-10 bg-brand-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                <item.icon className="h-5 w-5 text-brand-primary" />
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-gray-900 mb-2">{item.title}</h4>
                <div className="space-y-1">
                  {item.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-600 text-sm">
                      {detail}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Office Stats */}
        <div className="border-t border-gray-200 pt-6">
          <h4 className="font-semibold text-gray-900 mb-4">Global Erişim</h4>
          <div className="grid grid-cols-3 gap-4">
            {officeStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                  <stat.icon className="h-6 w-6 text-brand-primary" />
                </div>
                <div className="text-xl font-display font-heading text-brand-primary">
                  {stat.value}
                </div>
                <div className="text-xs text-gray-600">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Business Hours Note */}
        <div className="mt-6 p-4 bg-blue-50 rounded-lg">
          <p className="text-blue-800 text-sm">
            <strong>Not:</strong> Acil teknik destek için 7/24 hizmet vermekteyiz. 
            Mesai saatleri dışında WhatsApp üzerinden ulaşabilirsiniz.
          </p>
        </div>
      </div>
    </div>
  );
}