"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { Scroll, User, Heart, MapPin } from "lucide-react";

export default function AParoquiaPage() {
  return (
    <main className="min-h-screen bg-slate-200 font-sans selection:bg-marian-gold selection:text-marian-blue">
      <Navbar />

      {/* HEADER INSTITUCIONAL */}
      <div className="relative h-[50vh] flex items-center justify-center overflow-hidden shadow-lg">
        <div className="absolute inset-0 bg-marian-blue">

             <Image 
                src="https://images.unsplash.com/photo-1548625361-888f6969485e?q=60&w=1600&auto=format&fit=crop"
                alt="Interior da Igreja"
                fill
                className="object-cover opacity-50"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-marian-blue via-marian-blue/40 to-transparent" />
        </div>
        
        <div className="relative z-10 text-center text-white px-4 mt-12">
            <span className="block text-marian-gold font-bold uppercase tracking-[0.3em] text-xs mb-3 animate-fade-in-up">
                Nossa Identidade
            </span>
            <h1 className="text-5xl md:text-7xl font-serif drop-shadow-xl mb-6">
                A Paróquia
            </h1>
            <div className="w-24 h-1 bg-marian-gold mx-auto rounded-full"></div>
        </div>

        {/* Divisor SVG */}
        <div className="absolute bottom-0 left-0 w-full leading-none z-10 text-slate-200">
            <svg className="relative block w-full h-[60px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" fill="currentColor" opacity=".25"></path>
                <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" fill="currentColor" opacity=".5"></path>
                <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" fill="currentColor"></path>
            </svg>
        </div>
      </div>

      <section className="py-16 px-4 max-w-7xl mx-auto">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            
            {/* Lado Esquerdo: Texto Histórico */}
            <div>
                <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 bg-marian-blue rounded-full text-white">
                        <Scroll className="w-6 h-6" />
                    </div>
                    <h2 className="text-3xl font-serif text-marian-blue">Nossa História</h2>
                </div>
                
                <div className="prose prose-lg text-gray-600 font-light leading-relaxed">
                    <p className="mb-4">
                        A Paróquia do Imaculado Coração de Maria nasceu do sonho e da fé de uma comunidade que desejava um lugar para louvar a Deus e crescer na devoção Mariana.
                    </p>
                    <p className="mb-4">
                        Fundada em <strong className="text-marian-red">15 de Agosto de 1980</strong>, a nossa igreja começou como uma pequena capela. Com o esforço dos primeiros paroquianos e a graça divina, construímos o templo que hoje acolhe centenas de famílias.
                    </p>
                    <p>
                        Ao longo de décadas, nossa paróquia tornou-se um farol de evangelização na Diocese de Piracicaba, formando gerações na fé católica e no serviço aos irmãos.
                    </p>
                </div>
            </div>

            {/* Lado Direito: Imagem com Moldura em Arco */}
            <div className="relative h-[500px] w-full rounded-t-full overflow-hidden border-8 border-white shadow-2xl">
                 <Image 
                    src="https://images.unsplash.com/photo-1478147427282-58a87a120781?q=60&w=800&auto=format&fit=crop"
                    alt="Fachada Antiga"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-1000"
                 />
                 {/* Legenda Flutuante */}
                 <div className="absolute bottom-0 left-0 right-0 bg-black/60 backdrop-blur-sm p-4 text-center">
                    <p className="text-white text-xs uppercase tracking-widest">Construção da Matriz - Década de 80</p>
                 </div>
            </div>

        </div>

        {/* SEÇÃO DO PÁROCO */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row mb-24">
            <div className="md:w-1/3 bg-marian-blue relative min-h-[400px]">
                <Image 
                    src="https://images.unsplash.com/photo-1544006659-f0b21884ce1d?q=60&w=800&auto=format&fit=crop" // Placeholder Padre
                    alt="Pároco"
                    fill
                    className="object-cover opacity-90 mix-blend-overlay"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-marian-blue via-transparent to-transparent" />
                
                <div className="absolute bottom-8 left-8 right-8">
                    <h3 className="text-2xl font-serif text-white mb-1">Pe. Nome do Padre</h3>
                    <p className="text-marian-gold text-sm uppercase tracking-widest font-bold">Pároco</p>
                </div>
            </div>
            
            <div className="md:w-2/3 p-10 md:p-16 flex flex-col justify-center">
                <User className="w-10 h-10 text-marian-blue mb-6" />
                <h3 className="text-3xl font-serif text-gray-800 mb-6">Uma vida dedicada ao altar</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                    "O sacerdócio é o amor do coração de Jesus." O nosso pároco guia esta comunidade com zelo pastoral, presidindo os sacramentos e caminhando junto com o povo de Deus.
                </p>
                <div className="flex flex-col gap-2 text-sm text-gray-500 border-t border-gray-100 pt-6">
                    <p><strong className="text-marian-blue">Ordenação:</strong> 12 de Dezembro de 2005</p>
                    <p><strong className="text-marian-blue">Lema:</strong> "Fazei tudo o que Ele vos disser"</p>
                </div>
            </div>
        </div>

        {/* A PADROEIRA */}
        <div className="text-center max-w-3xl mx-auto">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6 text-marian-red">
                <Heart className="w-8 h-8 fill-current" />
            </div>
            <h2 className="text-4xl font-serif text-marian-red mb-6">Imaculado Coração de Maria</h2>
            <p className="text-gray-600 text-lg leading-relaxed font-light italic">
                "Deus quer estabelecer no mundo a devoção ao meu Imaculado Coração."
            </p>
            <p className="text-gray-500 mt-4">
                Nossa padroeira é refúgio e caminho que nos conduz a Deus. Consagrar-se ao seu Coração é garantir a proteção materna em todas as tribulações da vida.
            </p>
        </div>

      </section>

      <Footer />
    </main>
  );
}