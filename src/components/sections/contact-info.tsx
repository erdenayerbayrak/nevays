import { Clock, Mail, Phone, MapPin, MessageCircle } from 'lucide-react';

const contactDetails = [
  {
    icon: MapPin,
    title: 'Adres',
    details: [
      'Mahmutlar Mah., Barbaros Cad. No:27',
      'Alanya / Antalya',
      'Türkiye'
    ]
  },
  {
    icon: Phone,
    title: 'Telefon',
    details: [
      '+90 530 123 45 67'
    ],
    link: 'tel:+905301234567'
  },
  {
    icon: MessageCircle,
    title: 'WhatsApp',
    details: [
      '+90 530 123 45 67'
    ],
    link: 'https://wa.me/905301234567'
  },
  {
    icon: Mail,
    title: 'E-posta',
    details: [
      'info@nevays.com.tr'
    ],
    link: 'mailto:info@nevays.com.tr'
  }
];


export default function ContactInfo() {
  return (
    <div className="bg-white p-8 lg:p-12">
      <div className="max-w-lg mx-auto space-y-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Bize Ulaşın
          </h2>
          <p className="text-gray-600">
            Projeniz hakkında bizimle iletişime geçin.
          </p>
        </div>

        <div className="space-y-6">
          {contactDetails.map((item, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0 mr-4">
                  <item.icon className="h-6 w-6 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900 mb-3">{item.title}</h4>
                  <div className="space-y-1">
                    {item.details.map((detail, idx) => (
                      item.link ? (
                        <a
                          key={idx}
                          href={item.link}
                          className="block text-blue-600 hover:text-blue-700 font-medium transition-colors"
                          target={item.link.startsWith('http') ? '_blank' : undefined}
                          rel={item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                        >
                          {detail}
                        </a>
                      ) : (
                        <p key={idx} className="text-gray-600">
                          {detail}
                        </p>
                      )
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center pt-6">
          <a
            href="https://wa.me/905301234567"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-green-600 text-white rounded-xl font-semibold hover:bg-green-700 transition-colors shadow-lg hover:shadow-xl"
          >
            <MessageCircle className="h-5 w-5 mr-2" />
            WhatsApp ile İletişime Geç
          </a>
        </div>
      </div>
    </div>
  );
}