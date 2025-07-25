'use client';

import Image from 'next/image';
import { Mail, Linkedin, Phone, Award, GraduationCap } from 'lucide-react';

interface TeamMember {
  id: string;
  name: string;
  position: string;
  image: string;
  bio: string;
  email: string;
  linkedin: string;
  phone: string;
  expertise: string[];
  education: string;
  experience: string;
}

interface FlipCardProps {
  member: TeamMember;
}

export default function FlipCard({ member }: FlipCardProps) {
  return (
    <div className="group perspective-1000 h-80">
      <div className="relative preserve-3d w-full h-full duration-700 transform-style-preserve-3d group-hover:rotate-y-180">
        
        {/* Front Face */}
        <div className="absolute inset-0 w-full h-full backface-hidden rounded-2xl overflow-hidden bg-white shadow-lg border border-neutral-100">
          <div className="relative h-full">
            {/* Professional Photo */}
            <div className="relative h-3/4 overflow-hidden">
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/60 via-transparent to-transparent" />
            </div>
            
            {/* Name & Position */}
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-white">
              <h3 className="text-xl font-bold text-primary-900 mb-1">
                {member.name}
              </h3>
              <p className="text-primary-600 font-semibold text-sm">
                {member.position}
              </p>
            </div>

            {/* Flip Indicator */}
            <div className="absolute top-4 right-4 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
              <div className="w-4 h-4 border-2 border-white rounded-full animate-pulse" />
            </div>
          </div>
        </div>

        {/* Back Face */}
        <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 rounded-2xl bg-gradient-to-br from-primary-600 to-primary-800 p-6 text-white shadow-lg">
          <div className="h-full flex flex-col justify-between">
            
            {/* Header */}
            <div className="text-center mb-4">
              <h3 className="text-lg font-bold mb-2">{member.name}</h3>
              <p className="text-primary-200 text-sm">{member.position}</p>
            </div>

            {/* Experience & Education */}
            <div className="space-y-3 flex-1">
              <div className="flex items-start space-x-2">
                <Award className="w-4 h-4 text-accent-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-xs font-semibold text-primary-200">Deneyim</p>
                  <p className="text-sm">{member.experience}</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-2">
                <GraduationCap className="w-4 h-4 text-accent-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-xs font-semibold text-primary-200">Eğitim</p>
                  <p className="text-sm leading-relaxed">{member.education}</p>
                </div>
              </div>

              {/* Expertise */}
              <div>
                <p className="text-xs font-semibold text-primary-200 mb-2">Uzmanlık Alanları</p>
                <div className="flex flex-wrap gap-1">
                  {member.expertise.slice(0, 4).map((skill, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-white/20 backdrop-blur-sm text-xs rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Links */}
            <div className="flex items-center justify-center space-x-4 pt-4 border-t border-white/20">
              <a
                href={`mailto:${member.email}`}
                className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-accent-500 hover:scale-110 transition-all duration-300"
                title="Email"
              >
                <Mail className="h-4 w-4" />
              </a>
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-accent-500 hover:scale-110 transition-all duration-300"
                title="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href={`tel:${member.phone}`}
                className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-accent-500 hover:scale-110 transition-all duration-300"
                title="Telefon"
              >
                <Phone className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Enhanced Management Team Component
export function EnhancedManagementTeam() {
  const managementTeam: TeamMember[] = [
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
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-neutral-50 to-primary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary-900 mb-4">
            Liderlik Ekibi
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            NEVAYS'i başarıya taşıyan deneyimli ve vizyoner yönetim kadrosu
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {managementTeam.map((member) => (
            <FlipCard key={member.id} member={member} />
          ))}
        </div>

        {/* Values Section */}
        <div className="mt-20">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-primary-100">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-primary-900 mb-4">
                Değerlerimiz
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <div className="text-2xl">🏆</div>
                  </div>
                  <h4 className="text-lg font-semibold text-primary-900 mb-2">Kalite</h4>
                  <p className="text-neutral-600 text-sm">En yüksek standartlarda hizmet sunmayı taahhüt ediyoruz</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <div className="text-2xl">🤝</div>
                  </div>
                  <h4 className="text-lg font-semibold text-primary-900 mb-2">Güven</h4>
                  <p className="text-neutral-600 text-sm">Müşterilerimizle uzun vadeli ortaklıklar kuruyoruz</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <div className="text-2xl">⚡</div>
                  </div>
                  <h4 className="text-lg font-semibold text-primary-900 mb-2">İnovasyon</h4>
                  <p className="text-neutral-600 text-sm">Teknolojik yenilikleri takip eder, geliştirir ve uygularız</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}