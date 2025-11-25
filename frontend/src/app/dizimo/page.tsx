"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Copy, Check, Building, Users, HandHeart } from "lucide-react";
import Image from "next/image";

export default function DizimoPage() {
  const [copied, setCopied] = useState(false);
  
  // Chave PIX fictícia para o TCC
  const pixKey = "00.000.000/0001-00";

  const handleCopyPix = () => {
    navigator.clipboard.writeText(pixKey);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000); // Reseta o estado após 3s
  };

  return (
    <main className="min-h-screen bg-slate-200 font-sans selection:bg-marian-gold selection:text-marian-blue">
      <Navbar />

      {/* HEADER SÓBRIO */}
      <div className="relative h-[40vh] flex items-center justify-center overflow-hidden shadow-lg">
        <div className="absolute inset-0 bg-marian-blue">
             {/* Imagem de fundo com mãos/oferta */}
             <Image 
                src="https://images.unsplash.com/photo-1623366302587-b38b1ddaefd9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
                alt="Oferta"
                fill
                className="object-cover opacity-40"
                unoptimized={true}
             />
             <div className="absolute inset-0 bg-gradient-to-t from-marian-blue via-transparent to-transparent" />
        </div>
        
        <div className="relative z-10 text-center text-white px-4 mt-8">
            <span className="block text-marian-gold font-bold uppercase tracking-[0.3em] text-xs mb-2">
                Gratidão e Partilha
            </span>
            <h1 className="text-4xl md:text-6xl font-serif drop-shadow-md mb-4">
                Seja Dizimista
            </h1>
            <p className="text-white/80 text-sm max-w-lg mx-auto font-medium italic">
                "Deus ama a quem dá com alegria." (2 Cor 9,7)
            </p>
        </div>
        
        {/* Divisor SVG na base */}
        <div className="absolute bottom-0 left-0 w-full leading-none z-10 text-slate-200">
            <svg className="relative block w-full h-[40px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" fill="currentColor" opacity=".25"></path>
                <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" fill="currentColor" opacity=".5"></path>
                <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" fill="currentColor"></path>
            </svg>
        </div>
      </div>

      {/* SEÇÃO: ONDE O DÍZIMO É APLICADO */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <div className="text-center mb-12">
            <h2 className="text-3xl font-serif text-marian-blue mb-4">Um ato de amor pela Igreja</h2>
            <p className="text-gray-600 max-w-2xl mx-auto font-medium">
                O dízimo não é um pagamento, mas uma devolução agradecida a Deus. 
                Veja como a sua contribuição sustenta a nossa comunidade:
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Card 1 - Religiosa */}
            <div className="bg-white p-8 rounded-xl shadow-lg border border-white text-center hover:border-marian-gold transition-all hover:-translate-y-1 group">
                <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-marian-blue transition-colors border-2 border-blue-100">
                    <Building className="w-8 h-8 text-marian-blue group-hover:text-white" />
                </div>
                <h3 className="font-serif text-xl text-gray-900 mb-2 font-bold">Dimensão Religiosa</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                    Manutenção do templo, despesas com água, luz, funcionários e materiais litúrgicos para as missas.
                </p>
            </div>

            {/* Card 2 - Social */}
            <div className="bg-white p-8 rounded-xl shadow-lg border border-white text-center hover:border-marian-red transition-all hover:-translate-y-1 group">
                <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-marian-red transition-colors border-2 border-red-100">
                    <HandHeart className="w-8 h-8 text-marian-red group-hover:text-white" />
                </div>
                <h3 className="font-serif text-xl text-gray-900 mb-2 font-bold">Dimensão Social</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                    Apoio às famílias carentes através dos Vicentinos e da Pastoral Social com cestas básicas e remédios.
                </p>
            </div>

            {/* Card 3 - Missionária */}
            <div className="bg-white p-8 rounded-xl shadow-lg border border-white text-center hover:border-marian-gold transition-all hover:-translate-y-1 group">
                <div className="w-16 h-16 bg-yellow-50 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-marian-gold transition-colors border-2 border-yellow-100">
                    <Users className="w-8 h-8 text-marian-gold group-hover:text-white" />
                </div>
                <h3 className="font-serif text-xl text-gray-900 mb-2 font-bold">Dimensão Missionária</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                    Formação de catequistas, retiros, evangelização e ajuda a paróquias mais pobres da diocese.
                </p>
            </div>
        </div>

        {/* SEÇÃO: ÁREA DE DOAÇÃO (PIX e Banco) */}
        <div className="bg-marian-blue rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row border-t-4 border-marian-gold">
            
            {/* Lado Esquerdo: PIX */}
            <div className="flex-1 p-10 md:p-16 text-center md:text-left">
                <span className="inline-block py-1 px-3 rounded bg-marian-gold/20 text-marian-gold text-xs font-bold uppercase tracking-widest mb-4 border border-marian-gold/30">
                    Método Recomendado
                </span>
                <h2 className="text-3xl md:text-4xl font-serif text-white mb-4">Faça seu Dízimo via PIX</h2>
                <p className="text-blue-200 mb-8 text-sm leading-relaxed font-medium">
                    É prático, seguro e cai na hora. Use a chave CNPJ da paróquia ou escaneie o QR Code no seu aplicativo bancário.
                </p>

                <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm border border-white/20 flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="text-left">
                        <p className="text-xs text-blue-300 uppercase tracking-wider mb-1 font-bold">Chave PIX (CNPJ)</p>
                        <p className="text-white font-mono text-xl tracking-wide font-bold">{pixKey}</p>
                    </div>
                    <button 
                        onClick={handleCopyPix}
                        className="flex items-center gap-2 bg-marian-gold text-marian-blue px-8 py-3 rounded-md font-black text-xs uppercase hover:bg-white transition-all active:scale-95 shadow-lg"
                    >
                        {copied ? (
                            <>Copiado! <Check className="w-4 h-4" /></>
                        ) : (
                            <>Copiar Chave <Copy className="w-4 h-4" /></>
                        )}
                    </button>
                </div>
            </div>

            {/* Lado Direito: QR Code Visual */}
            <div className="bg-white p-10 flex flex-col items-center justify-center text-center md:w-1/3">
                 <div className="w-56 h-56 bg-white rounded-lg mb-4 relative flex items-center justify-center overflow-hidden border-4 border-gray-900 shadow-inner">
                    
                    <Image 
                        src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=ParoquiaImaculadoCoracao" 
                        alt="QR Code Pix"
                        width={200}
                        height={200}
                        className="opacity-90"
                        unoptimized={true}
                    />
                 </div>
                 <p className="text-xs text-gray-500 font-bold uppercase tracking-widest flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                    Escaneie para doar
                 </p>
            </div>

        </div>

        {/* Dados Bancários */}
        <div className="mt-12 bg-white border border-gray-300 rounded-lg p-8 shadow-md">
            <h3 className="text-lg font-serif text-gray-900 mb-6 flex items-center gap-2 font-bold">
                <Building className="w-5 h-5 text-marian-blue" />
                Transferência Bancária (TED/DOC)
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
                <div>
                    <p className="text-gray-500 text-xs uppercase font-bold mb-1">Banco</p>
                    <p className="text-gray-900 font-bold text-lg">Banco do Brasil (001)</p>
                </div>
                <div>
                    <p className="text-gray-500 text-xs uppercase font-bold mb-1">Agência</p>
                    <p className="text-gray-900 font-bold text-lg">1234-5</p>
                </div>
                <div>
                    <p className="text-gray-500 text-xs uppercase font-bold mb-1">Conta Corrente</p>
                    <p className="text-gray-900 font-bold text-lg">98765-0</p>
                </div>
                <div className="md:col-span-3 pt-4 border-t border-gray-200 mt-2">
                    <p className="text-gray-500 text-xs uppercase font-bold mb-1">Favorecido</p>
                    <p className="text-gray-900 font-medium">Mitra Diocesana de Piracicaba - Paróquia Imaculado Coração</p>
                </div>
            </div>
        </div>

      </section>

      <Footer />
    </main>
  );
}