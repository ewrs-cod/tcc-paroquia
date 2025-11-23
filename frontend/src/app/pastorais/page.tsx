"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BookOpen, Mic, HeartHandshake, Music, Users, Baby, Flame, ChevronRight } from "lucide-react";
import Link from "next/link";

export default function PastoraisPage() {
  // Dados estáticos para o visual (Depois virão do Strapi)
  const pastorais = [
    {
      id: 1,
      nome: "Catequese",
      descricao: "Iniciação à vida cristã para crianças, jovens e adultos. Preparação para os sacramentos.",
      coordenador: "Dna. Maria",
      imagem: "https://images.unsplash.com/photo-1515162305285-0293e4767cc2?q=60&w=800&auto=format&fit=crop",
      icone: <BookOpen className="w-6 h-6" />
    },
    {
      id: 2,
      nome: "Liturgia",
      descricao: "Equipe responsável por preparar e animar as celebrações, leitores e ministros da eucaristia.",
      coordenador: "Sr. João",
      imagem: "https://images.unsplash.com/photo-1438232992991-995b7058bbb3?q=60&w=800&auto=format&fit=crop",
      icone: <Flame className="w-6 h-6" />
    },
    {
      id: 3,
      nome: "Pastoral Social",
      descricao: "Atendimento às famílias carentes, distribuição de cestas básicas e visitas aos enfermos.",
      coordenador: "Equipe Vicentina",
      imagem: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?q=60&w=800&auto=format&fit=crop",
      icone: <HeartHandshake className="w-6 h-6" />
    },
    {
      id: 4,
      nome: "Pascom",
      descricao: "Pastoral da Comunicação. Responsável pelas fotos, site, redes sociais e transmissão das missas.",
      coordenador: "Jovens",
      imagem: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=60&w=800&auto=format&fit=crop",
      icone: <Mic className="w-6 h-6" />
    },
    {
      id: 5,
      nome: "Pastoral Familiar",
      descricao: "Acolhida às famílias, curso de noivos, batismo e acompanhamento de casais.",
      coordenador: "Casal Silva",
      imagem: "https://images.unsplash.com/photo-1591951425328-48c1fe7179cd?q=60&w=800&auto=format&fit=crop",
      icone: <Users className="w-6 h-6" />
    },
    {
      id: 6,
      nome: "Música",
      descricao: "Corais e ministérios que servem a Deus através da beleza do canto litúrgico.",
      coordenador: "Maestro Paulo",
      imagem: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=60&w=800&auto=format&fit=crop",
      icone: <Music className="w-6 h-6" />
    }
  ];

  return (
    <main className="min-h-screen bg-slate-200 font-sans selection:bg-marian-gold selection:text-marian-blue">
      <Navbar />

      {/* HEADER */}
      <div className="relative h-[40vh] flex items-center justify-center overflow-hidden shadow-lg">
        <div 
            className="absolute inset-0 bg-cover bg-center" 
            style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1544427920-c49ccfb85579?q=60&w=1600&auto=format&fit=crop)' }}
        >
            {/* Filtro Azul Sóbrio */}
            <div className="absolute inset-0 bg-marian-blue/70 mix-blend-multiply" />
        </div>
        
        <div className="relative z-10 text-center text-white px-4 mt-8">
            <span className="block text-marian-gold font-bold uppercase tracking-[0.3em] text-xs mb-2">
                Serviço e Comunidade
            </span>
            <h1 className="text-4xl md:text-6xl font-serif drop-shadow-md mb-4">
                Pastorais e Movimentos
            </h1>
            <p className="text-white/80 text-sm max-w-lg mx-auto font-medium">
                "Há diversidade de dons, mas o Espírito é o mesmo." (1 Cor 12,4)
            </p>
        </div>

        {/* Divisor SVG */}
        <div className="absolute bottom-0 left-0 w-full leading-none z-10 text-slate-200">
            <svg className="relative block w-full h-[40px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" fill="currentColor" opacity=".25"></path>
                <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" fill="currentColor" opacity=".5"></path>
                <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" fill="currentColor"></path>
            </svg>
        </div>
      </div>

      {/* GRID DE PASTORAIS */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {pastorais.map((item) => (
                <div key={item.id} className="group bg-white rounded-t-full rounded-b-lg shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-200 hover:-translate-y-2 overflow-hidden flex flex-col">
                    
                    {/* Imagem em Arco (Vitral) */}
                    <div className="h-48 relative overflow-hidden border-b-4 border-marian-gold">
                        <div 
                            className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-700"
                            style={{ backgroundImage: `url(${item.imagem})` }}
                        ></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-marian-blue/80 via-transparent to-transparent"></div>
                        
                        {/* Ícone Flutuante */}
                        <div className="absolute bottom-[-20px] left-1/2 -translate-x-1/2 bg-white p-3 rounded-full shadow-lg border-2 border-marian-gold text-marian-blue">
                            {item.icone}
                        </div>
                    </div>

                    {/* Conteúdo */}
                    <div className="pt-10 pb-8 px-6 text-center flex-grow flex flex-col">
                        <h3 className="text-2xl font-serif text-marian-blue mb-3">{item.nome}</h3>
                        <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
                            {item.descricao}
                        </p>
                        
                        <div className="border-t border-gray-100 pt-4 mt-auto">
                            <p className="text-xs text-gray-400 uppercase tracking-wider mb-4">
                                Coord: {item.coordenador}
                            </p>
                            
                            {/* Botão de Ação (Leva para o formulário Seja Agente) */}
                            <Link href="/seja-agente" className="w-full inline-flex items-center justify-center px-6 py-2 border border-marian-blue text-marian-blue text-xs font-bold uppercase tracking-widest rounded hover:bg-marian-blue hover:text-white transition-colors">
                                Quero Participar <ChevronRight className="w-4 h-4 ml-1" />
                            </Link>
                        </div>
                    </div>
                </div>
            ))}

        </div>
      </section>

      <Footer />
    </main>
  );
}