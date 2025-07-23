import Image from 'next/image';
import { Mail, Linkedin, Phone } from 'lucide-react';
import Section from '@/components/ui/section';

const managementTeam = [
  {
    id: 'ali-nevay',
    name: 'Dr. Ali Nevay',
    position: 'CEO & Kurucu',
    image: '/images/team/ali-nevay.jpg',
    bio: 'Makine Mühendisliği doktorası ile 30+ yıllık sektör deneyimi. Temiz oda teknolojilerinde öncü çalışmalar.',
    email: 'ali.nevay@nevays.com',
    linkedin: 'https://linkedin.com/in/ali-nevay',
    phone: '+90 212 123 45 67',
    expertise: ['Clean Room Design', 'HVAC Systems', 'GMP Compliance', 'Project Management'],
    education: 'İTÜ Makine Mühendisliği PhD',
    experience: '30+ yıl'
  },
  {
    id: 'mehmet-kaya',
    name: 'Mehmet Kaya',
    position: 'CTO',
    image: '/images/team/mehmet-kaya.jpg',
    bio: 'Elektronik Mühendisi ve AR-GE lideri. IoT ve endüstri 4.0 teknolojilerinde uzman.',
    email: 'mehmet.kaya@nevays.com',
    linkedin: 'https://linkedin.com/in/mehmet-kaya',
    phone: '+90 212 123 45 68',
    expertise: ['IoT Systems', 'Industrial Automation', 'R&D Management', 'Innovation'],
    education: 'ODTÜ Elektronik Mühendisliği',
    experience: '20+ yıl'
  },
  {
    id: 'ayse-demir',
    name: 'Ayşe Demir',
    position: 'CFO',
    image: '/images/team/ayse-demir.jpg',
    bio: 'İşletme ve Finans alanında uzman. Uluslararası pazarlarda mali işler ve stratejik planlama lideri.',
    email: 'ayse.demir@nevays.com',
    linkedin: 'https://linkedin.com/in/ayse-demir',
    phone: '+90 212 123 45 69',
    expertise: ['Financial Planning', 'International Markets', 'Strategic Planning', 'Risk Management'],
    education: 'Boğaziçi Üniversitesi İşletme',
    experience: '18+ yıl'
  },
  {
    id: 'fatih-ozkan',
    name: 'Fatih Özkan',
    position: 'COO',
    image: '/images/team/fatih-ozkan.jpg',
    bio: 'Endüstri Mühendisi ve operasyon uzmanı. Süreç optimizasyonu ve kalite yönetimi lideri.',
    email: 'fatih.ozkan@nevays.com',
    linkedin: 'https://linkedin.com/in/fatih-ozkan',
    phone: '+90 212 123 45 70',
    expertise: ['Operations Management', 'Process Optimization', 'Quality Management', 'Lean Manufacturing'],
    education: 'YTÜ Endüstri Mühendisliği',
    experience: '22+ yıl'
  },
  {
    id: 'zehra-aksoy',
    name: 'Zehra Aksoy',
    position: 'İK Direktörü',
    image: '/images/team/zehra-aksoy.jpg',
    bio: 'İnsan Kaynakları uzmanı ve organizasyonel gelişim lideri. Yetenek yönetimi ve kurumsal kültür.',
    email: 'zehra.aksoy@nevays.com',
    linkedin: 'https://linkedin.com/in/zehra-aksoy',
    phone: '+90 212 123 45 71',
    expertise: ['Talent Management', 'Organizational Development', 'Corporate Culture', 'Leadership'],
    education: 'İstanbul Üniversitesi Psikoloji',
    experience: '15+ yıl'
  },
  {
    id: 'burak-yilmaz',
    name: 'Burak Yılmaz',
    position: 'Pazarlama Direktörü',
    image: '/images/team/burak-yilmaz.jpg',
    bio: 'Pazarlama ve dijital dönüşüm uzmanı. Global marka yönetimi ve müşteri deneyimi lideri.',
    email: 'burak.yilmaz@nevays.com',
    linkedin: 'https://linkedin.com/in/burak-yilmaz',
    phone: '+90 212 123 45 72',
    expertise: ['Brand Management', 'Digital Marketing', 'Customer Experience', 'Global Markets'],
    education: 'Sabancı Üniversitesi İşletme',
    experience: '12+ yıl'
  }
];

export default function ManagementTeam() {
  return (
    <Section background="light">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-heading text-gray-900 mb-4">
          Yönetim Ekibi
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-brand-primary to-brand-secondary rounded-full mx-auto mb-6" />
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          NEVAYS\'ı başarıya taşıyan deneyimli ve uzman yönetim kadrosu
        </p>
      </div>

      {/* Management Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {managementTeam.map((member) => (
          <div
            key={member.id}
            className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group"
          >
            {/* Portrait */}
            <div className="relative h-64 overflow-hidden">
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Contact overlay */}
              <div className="absolute bottom-4 left-4 right-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <div className="flex items-center justify-center space-x-3">
                  <a
                    href={`mailto:${member.email}`}
                    className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-brand-primary hover:text-white transition-colors duration-200"
                  >
                    <Mail className="h-4 w-4" />
                  </a>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-brand-primary hover:text-white transition-colors duration-200"
                  >
                    <Linkedin className="h-4 w-4" />
                  </a>
                  <a
                    href={`tel:${member.phone}`}
                    className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-brand-primary hover:text-white transition-colors duration-200"
                  >
                    <Phone className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              <div className="text-center mb-4">
                <h3 className="text-xl font-display font-heading text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-brand-primary font-medium text-sm">
                  {member.position}
                </p>
              </div>

              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                {member.bio}
              </p>

              {/* Education & Experience */}
              <div className="grid grid-cols-2 gap-4 mb-4 text-xs text-gray-500">
                <div>
                  <span className="font-medium">Eğitim:</span>
                  <br />
                  {member.education}
                </div>
                <div>
                  <span className="font-medium">Deneyim:</span>
                  <br />
                  {member.experience}
                </div>
              </div>

              {/* Expertise Tags */}
              <div className="flex flex-wrap gap-1">
                {member.expertise.slice(0, 3).map((skill, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                  >
                    {skill}
                  </span>
                ))}
                {member.expertise.length > 3 && (
                  <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                    +{member.expertise.length - 3}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Leadership Philosophy */}
      <div className="mt-20 max-w-4xl mx-auto">
        <div className="bg-gradient-to-r from-brand-primary to-brand-secondary text-white rounded-lg p-8 text-center">
          <h3 className="text-2xl font-display font-heading mb-4">
            Liderlik Felsefemiz
          </h3>
          <p className="text-lg leading-relaxed">
            "Takım çalışması, sürekli öğrenme ve müşteri odaklılık ile 
            sektörümüzde öncülük etmeyi ve dünya çapında güvenilir bir marka olmayı hedefliyoruz."
          </p>
          <div className="mt-6 text-sm opacity-90">
            - NEVAYS Yönetim Ekibi
          </div>
        </div>
      </div>
    </Section>
  );
}