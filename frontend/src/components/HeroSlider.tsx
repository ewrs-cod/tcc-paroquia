"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
// Importações do Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
// Estilos do Swiper
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
// Ícones
import { Clock, MapPin, Heart, ChevronDown, ArrowRight } from "lucide-react";

// DADOS DOS SLIDES (Fixos e Seguros)
const slides = [
  { 
    id: 1, 
    // IMAGEM ESCOLHIDA (Biblioteca Católica)
    image: "https://images.pexels.com/photos/5418220/pexels-photo-5418220.jpeg",
    title: "Imaculado Coração",
    subtitle: '"No fim, o meu Imaculado Coração triunfará."',
    hasButton: false, 
    link: "#"
  },
  { 
    id: 2, 
    // Imagem Juventude
    image: "https://images.unsplash.com/photo-1529070538774-1843cb3265df?q=80&w=1600&auto=format&fit=crop",
    title: "Setor Juventude",
    subtitle: "Acólitos, Crisma e Grupos de Jovens. O futuro da Igreja.",
    hasButton: true,
    buttonText: "Conheça os Grupos",
    link: "/juventude"
  },
  { 
    id: 3, 
    // Imagem Oferta
    image: "https://images.unsplash.com/photo-1623366302587-b38b1ddaefd9?q=80&w=1600&auto=format&fit=crop",
    title: "Dízimo & Oferta",
    subtitle: "Partilhar é um ato de amor e gratidão a Deus.",
    hasButton: true,
    buttonText: "Seja Dizimista",
    link: "/dizimo"
  },
];

export default function HeroSlider() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="relative w-full h-[95vh] flex flex-col shadow-2xl bg-marian-blue">
      
      {/* 1. SLIDER BACKGROUND */}
      <div className="absolute inset-0 z-0">
        <Swiper
          modules={[Autoplay, EffectFade, Navigation, Pagination]}
          effect={"fade"}
          speed={1500}
          autoplay={{ delay: 7000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation={true} // Setas de navegação ativadas
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          className="w-full h-full"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={slide.id}>
              <div className="relative w-full h-full">
                <Image 
                    src={slide.image}
                    alt={slide.title}
                    fill
                    sizes="100vw"
                    priority={index === 0}
                    className="object-cover"
                    //unoptimized={true}  Garante o carregamento da imagem externa
                />
                
                {/* Gradientes para leitura do texto */}
                <div className="absolute inset-0 bg-gradient-to-r from-marian-blue via-marian-blue/70 to-transparent z-10" />
                <div className="absolute inset-0 bg-gradient-to-t from-marian-blue/90 via-transparent to-transparent z-10" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* 2. CONTEÚDO DINÂMICO (Texto e Título) */}
      <div className="relative z-10 flex-grow flex flex-col justify-center px-6 md:px-16 lg:px-24 pt-10 max-w-5xl pointer-events-none">
        
        <div className="flex flex-col items-start gap-4 mb-6">
            <div className="text-marian-gold/80 text-3xl">☩</div>
            <div className="inline-flex items-center gap-2">
                <div className="h-[1px] w-8 bg-marian-gold"></div>
                <span className="text-marian-gold uppercase tracking-[0.3em] text-xs font-bold">
                  Diocese de Piracicaba
                </span>
            </div>
        </div>

        <div key={slides[activeIndex].id} className="animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-serif text-white mb-6 leading-tight drop-shadow-lg">
            {slides[activeIndex].title}
            </h1>

            <div className="border-l-4 border-marian-red pl-6 py-1 mb-10">
                <p className="text-gray-100 text-xl md:text-2xl font-light italic leading-relaxed">
                {slides[activeIndex].subtitle}
                </p>
            </div>

            {slides[activeIndex].hasButton && slides[activeIndex].buttonText && (
                <Link href={slides[activeIndex].link || "#"} className="pointer-events-auto inline-block">
                    <button className="group px-8 py-3 border border-white/30 bg-white/5 backdrop-blur-sm text-white font-bold uppercase tracking-widest text-xs hover:bg-white hover:text-marian-blue transition-all duration-300 rounded-sm flex items-center gap-3">
                        {slides[activeIndex].buttonText}
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                </Link>
            )}
        </div>
      </div>

      {/* 3. OS TRÊS ARCOS FIXOS (Cards Inferiores) */}
      <div className="relative z-20 w-full max-w-6xl mx-auto px-4 -mb-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Card 1 - Santa Missa */}
        <div className="group relative h-64 rounded-t-full border border-white/10 bg-marian-blue/90 backdrop-blur-sm overflow-hidden transition-transform duration-300 hover:-translate-y-2 flex flex-col items-center justify-center text-center p-6">
            <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-[url('https://www.transparenttextures.com/patterns/arches.png')]"></div>
            <Clock className="w-8 h-8 text-marian-gold mb-4 relative z-10" />
            <h3 className="text-white font-serif text-xl mb-2 relative z-10">Santa Missa</h3>
            <p className="text-gray-300 text-sm font-sans relative z-10 mb-4">Consulte os horários</p>
            <Link href="/horarios" className="relative z-50 px-6 py-2 border border-white/30 text-[10px] font-bold uppercase tracking-widest text-white hover:bg-white hover:text-marian-blue transition-colors rounded-full shadow-lg flex items-center gap-2">
                Ver Horários <ArrowRight className="w-3 h-3" />
            </Link>
        </div>

        {/* Card 2 - Vida Pastoral */}
        <div className="group relative h-72 -mt-8 rounded-t-full border border-white/10 bg-marian-red/90 backdrop-blur-sm overflow-hidden transition-transform duration-300 hover:-translate-y-2 flex flex-col items-center justify-center text-center p-6 z-10 shadow-xl">
            <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-[url('https://www.transparenttextures.com/patterns/arches.png')]"></div>
            <Heart className="w-10 h-10 text-white mb-4 fill-white/10 relative z-10" />
            <h3 className="text-white font-serif text-2xl mb-2 relative z-10">Vida Pastoral</h3>
            <p className="text-white/90 text-sm font-sans relative z-10">Faça parte da nossa comunidade</p>
            <Link href="/seja-agente" className="relative z-50 mt-6 px-8 py-3 border border-white/30 text-xs uppercase tracking-widest text-white hover:bg-white hover:text-marian-red transition-colors rounded-full shadow-lg cursor-pointer block w-fit mx-auto">
                Seja Agente
            </Link>
        </div>

        {/* Card 3 - Secretaria Online */}
        <div className="group relative h-64 rounded-t-full border border-white/10 bg-marian-blue/90 backdrop-blur-sm overflow-hidden transition-transform duration-300 hover:-translate-y-2 flex flex-col items-center justify-center text-center p-6">
            <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-[url('https://www.transparenttextures.com/patterns/arches.png')]"></div>
            <MapPin className="w-8 h-8 text-marian-gold mb-4 relative z-10" />
            <h3 className="text-white font-serif text-xl mb-2 relative z-10">Secretaria Online</h3>
            <p className="text-gray-300 text-xs font-sans relative z-10 mb-4">Agendamentos e Solicitações</p>
            <Link href="/solicitar-atendimento" className="relative z-50 px-6 py-2 border border-white/30 text-[10px] font-bold uppercase tracking-widest text-white hover:bg-white hover:text-marian-blue transition-colors rounded-full shadow-lg flex items-center gap-2">
                Solicitar Serviço <ChevronDown className="w-3 h-3 -rotate-90" />
            </Link>
        </div>

      </div>

      {/* 4. DIVISOR SVG */}
      <div className="absolute bottom-0 left-0 w-full leading-none z-10">
        <svg className="relative block w-full h-[60px] md:h-[100px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" fill="#f8fafc" opacity=".25"></path>
            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" fill="#f8fafc" opacity=".5"></path>
            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" fill="#f8fafc"></path>
        </svg>
      </div>

    </div>
  );
}