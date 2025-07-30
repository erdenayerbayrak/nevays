'use client';

import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import { ArrowRight, Phone, ChevronDown } from 'lucide-react';

import React, { useEffect } from "react";
import {
  useMotionTemplate,
  useMotionValue,
  motion,
  animate,
} from "framer-motion";

const COLORS_TOP = ["#0EA5E9", "#06B6D4", "#10B981", "#3B82F6", "#0891B2", "#059669", "#1D4ED8"];

export default function HeroSection() {
  const t = useTranslations('hero');
  const locale = useLocale();
  const color = useMotionValue(COLORS_TOP[0]);

  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, []);

  const backgroundImage = useMotionTemplate`radial-gradient(150% 150% at 50% 0%, #f0f9ff 30%, ${color} 70%, #1e40af 100%)`;
  const border = useMotionTemplate`1px solid ${color}`;
  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;

  return (
    <motion.section
      style={{
        backgroundImage,
      }}
      className="relative grid min-h-screen place-content-center overflow-hidden bg-gradient-to-t from-blue-600 via-cyan-300 to-sky-100 px-4 py-24 text-gray-800"
    >
      <div className="absolute inset-0 z-0">
        <div className="stars"></div>
        <div className="stars2"></div>
        <div className="stars3"></div>
        <div className="stars4"></div>
        <div className="stars5"></div>
        <div className="stars6"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center mt-16">
        <span className="mb-1.5 inline-block rounded-full bg-blue-100/80 border border-blue-200 px-3 py-1.5 text-sm text-blue-800 font-medium">
          ISO 14644 & GMP Sertifikalı
        </span>
        <h1 className="max-w-4xl bg-gradient-to-br from-blue-900 via-blue-700 to-green-600 bg-clip-text text-center text-3xl font-medium leading-tight text-transparent sm:text-5xl sm:leading-tight md:text-7xl md:leading-tight">
          Temiz Oda Sistemleri
        </h1>
        <p className="my-6 max-w-2xl text-center text-base leading-relaxed md:text-lg md:leading-relaxed text-gray-700">
          Türkiye'nin önde gelen temiz oda uzmanı. GMP uyumlu, anahtar teslim temiz oda sistemleri ile 20+ yıldır farmasötik, elektronik ve sağlık sektörlerine hizmet veriyoruz.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <Link href={`/${locale}/uygulama`}>
            <motion.button
              style={{
                border,
                boxShadow,
              }}
              whileHover={{
                scale: 1.015,
              }}
              whileTap={{
                scale: 0.985,
              }}
              className="group relative flex w-fit items-center gap-1.5 rounded-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 px-6 py-3 text-white transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Çözümlerimizi Keşfedin
              <ArrowRight className="transition-transform group-hover:-rotate-45 group-active:-rotate-12" />
            </motion.button>
          </Link>
          <Link href={`/${locale}/iletisim`}>
            <motion.button
              whileHover={{
                scale: 1.015,
              }}
              whileTap={{
                scale: 0.985,
              }}
              className="group relative flex w-fit items-center gap-1.5 rounded-full bg-white/80 hover:bg-white backdrop-blur-sm border border-blue-200 hover:border-blue-300 px-6 py-3 text-blue-700 hover:text-blue-800 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              <Phone className="h-4 w-4" />
              İletişime Geçin
            </motion.button>
          </Link>
        </div>
      </div>

    </motion.section>
  );
}