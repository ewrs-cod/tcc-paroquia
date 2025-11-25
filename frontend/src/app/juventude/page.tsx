"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Users, Flame, Star, ChevronRight, Music } from "lucide-react";

export default function JuventudePage() {
  const grupos = [
    {
      titulo: "Grupo de Jovens",
      descricao: "Encontros semanais com louvor, pregação e partilha. Um espaço para fazer amizades santas.",
      encontro: "Sábados, às 19h30",
      local: "Salão Paroquial",
      icone: <Users className="w-8 h-8 text-white" />,
      bg: "bg-blue-600"
    },
    {
      titulo: "Crisma",
      descricao: "Preparação para receber o sacramento da maturidade cristã. Conheça a fundo a sua fé.",
      encontro: "Domingos, às 09h00",
      local: "Centro de Pastoral",
      icone: <Flame className="w-8 h-8 text-white" />,
      bg: "bg-red-600"
    },
    {
      titulo: "Acólitos e Coroinhas",
      descricao: "Serviço ao altar nas celebrações eucarísticas. Para crianças e adolescentes.",
      encontro: "Sábados, às 14h00",
      local: "Igreja Matriz",
      icone: <Star className="w-8 h-8 text-white" />,
      bg: "bg-marian-gold"
    },
    {
      titulo: "Ministério Jovem",
      descricao: "Música e artes a serviço da liturgia e dos grupos de oração.",
      encontro: "Quintas, às 20h00",
      local: "Sala de Música",
      icone: <Music className="w-8 h-8 text-white" />,
      bg: "bg-purple-600"
    }
  ];

  return (
    <main className="min-h-screen bg-slate-50 font-sans selection:bg-marian-gold selection:text-marian-blue">
      <Navbar />

      {/* HEADER JUVENTUDE */}
      <div className="relative h-[40vh] flex items-center justify-center overflow-hidden shadow-lg">
        <div 
            className="absolute inset-0 bg-cover bg-center" 
            style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1529070538774-1843cb3265df?q=60&w=1600&auto=format&fit=crop)' }}
        >
            <div className="absolute inset-0 bg-indigo-900/70 mix-blend-multiply" />
        </div>
        
        <div className="relative z-10 text-center text-white px-4 mt-8">
            <span className="block text-marian-gold font-bold uppercase tracking-[0.3em] text-xs mb-2">
                Setor Juventude
            </span>
            <h1 className="text-4xl md:text-6xl font-serif drop-shadow-md mb-4">
                A Força da Igreja
            </h1>
            <p className="text-white/80 text-sm max-w-lg mx-auto font-medium">
                "Jovens, não tenhais medo de ser santos!" - São João Paulo II
            </p>
        </div>
      </div>

      {/* LISTA DE GRUPOS */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {grupos.map((grupo, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group">
                    {/* Cabeçalho do Card */}
                    <div className={`p-6 ${grupo.bg} flex justify-between items-start`}>
                        <div className="bg-white/20 p-3 rounded-lg backdrop-blur-sm">
                            {grupo.icone}
                        </div>
                    </div>
                    
                    {/* Corpo do Card */}
                    <div className="p-6">
                        <h3 className="text-xl font-serif font-bold text-gray-800 mb-2 group-hover:text-marian-blue transition-colors">
                            {grupo.titulo}
                        </h3>
                        <p className="text-gray-500 text-sm mb-4 min-h-[60px]">
                            {grupo.descricao}
                        </p>
                        
                        <div className="pt-4 border-t border-gray-100">
                            <div className="flex items-center gap-2 text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">
                                <span className="w-2 h-2 rounded-full bg-green-500"></span>
                                {grupo.encontro}
                            </div>
                            <div className="text-xs text-gray-400 pl-4">
                                {grupo.local}
                            </div>
                        </div>

                        <button className="w-full mt-6 py-2 border border-marian-blue text-marian-blue text-xs font-bold uppercase tracking-widest rounded hover:bg-marian-blue hover:text-white transition-colors">
                            Saiba Mais
                        </button>
                    </div>
                </div>
            ))}
        </div>
      </section>

      {/* CHAMADA PARA AÇÃO (BANNER FINAL) */}
      <section className="bg-marian-blue py-16 px-4 text-center relative overflow-hidden">
         <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
         <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl font-serif text-white mb-6">Quer participar?</h2>
            <p className="text-blue-100 mb-8 text-lg">
                Venha fazer uma experiência. Não é preciso inscrição prévia para visitar, 
                basta aparecer em um dos nossos encontros!
            </p>
            <a href="/seja-agente" className="inline-flex items-center px-8 py-4 bg-marian-gold text-marian-blue font-bold uppercase tracking-widest rounded hover:bg-white transition-colors shadow-lg">
                Fale com a Coordenação <ChevronRight className="w-5 h-5 ml-2" />
            </a>
         </div>
      </section>

      <Footer />
    </main>
  );
}