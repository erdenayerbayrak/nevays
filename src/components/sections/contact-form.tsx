'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Send, CheckCircle, AlertCircle, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import LoadingSpinner from '@/components/ui/loading-spinner';

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  subject: string;
  message: string;
}

interface FormStatus {
  type: 'idle' | 'loading' | 'success' | 'error';
  message?: string;
}

export default function ContactForm() {
  const t = useTranslations('contact.form');
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState<FormStatus>({ type: 'idle' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ type: 'loading' });

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Mock success response
      setStatus({
        type: 'success',
        message: t('success')
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      setStatus({
        type: 'error',
        message: t('error')
      });
    }
  };

  return (
    <div className="flex-1 p-8 lg:p-12 bg-white">
      <div className="max-w-lg mx-auto">
        <h2 className="text-2xl md:text-3xl font-display font-heading text-gray-900 mb-6">
          Bize Yazın
        </h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
              {t('name')} *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-colors"
              placeholder="Ad Soyad"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              {t('email')} *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-colors"
              placeholder="ornek@email.com"
            />
          </div>

          {/* Phone & Company */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                {t('phone')}
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-colors"
                placeholder="+90 5XX XXX XX XX"
              />
            </div>
            
            <div>
              <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                {t('company')}
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-colors"
                placeholder="Şirket Adı"
              />
            </div>
          </div>

          {/* Subject */}
          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
              Konu *
            </label>
            <select
              id="subject"
              name="subject"
              required
              value={formData.subject}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-colors"
            >
              <option value="">Konu seçiniz</option>
              <option value="air-handling">Hava Teknolojileri</option>
              <option value="clean-room">Temiz Oda Sistemleri</option>
              <option value="engineering">Mühendislik Hizmetleri</option>
              <option value="maintenance">Bakım ve Servis</option>
              <option value="partnership">İş Ortaklığı</option>
              <option value="career">Kariyer Fırsatları</option>
              <option value="other">Diğer</option>
            </select>
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
              {t('message')} *
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-colors resize-vertical"
              placeholder="Mesajınızı buraya yazın..."
            />
          </div>

          {/* Status Message */}
          {status.type !== 'idle' && (
            <div className={`p-4 rounded-lg flex items-center ${
              status.type === 'success' 
                ? 'bg-green-50 text-green-800' 
                : status.type === 'error'
                ? 'bg-red-50 text-red-800'
                : 'bg-blue-50 text-blue-800'
            }`}>
              {status.type === 'success' && <CheckCircle className="h-5 w-5 mr-2" />}
              {status.type === 'error' && <AlertCircle className="h-5 w-5 mr-2" />}
              {status.type === 'loading' && <LoadingSpinner size="sm" className="mr-2" />}
              {status.message || (status.type === 'loading' ? 'Gönderiliyor...' : '')}
            </div>
          )}

          {/* Submit Button */}
          <Button
            type="submit"
            variant="primary"
            size="cta"
            disabled={status.type === 'loading'}
            className="w-full group"
          >
            {status.type === 'loading' ? (
              <>
                <LoadingSpinner size="sm" className="mr-2" />
                Gönderiliyor...
              </>
            ) : (
              <>
                {t('submit')}
                <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
              </>
            )}
          </Button>
        </form>

        {/* WhatsApp Quick Contact */}
        <div className="mt-8 p-6 bg-green-50 rounded-lg">
          <h3 className="font-semibold text-gray-900 mb-2">Hızlı İletişim</h3>
          <p className="text-gray-600 text-sm mb-4">
            Acil durumlar için WhatsApp üzerinden anında iletişime geçebilirsiniz.
          </p>
          <Button
            variant="outline"
            size="sm"
            asChild
            className="w-full border-green-500 text-green-700 hover:bg-green-500 hover:text-white"
          >
            <a
              href="https://wa.me/905321234567?text=Merhaba%2C%20NEVAYS%20hakkında%20bilgi%20almak%20istiyorum."
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="h-4 w-4 mr-2" />
              WhatsApp ile İletişim
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}