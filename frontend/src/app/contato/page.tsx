"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, Instagram, Facebook, Youtube } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// Schema de validação simples
const contatoSchema = z.object({
  nome: z.string().min(3, "Nome obrigatório"),
  email: z.string().email("E-mail inválido"),
  assunto: z.string().min(3, "Assunto obrigatório"),
  mensagem: z.string().min(10, "Mensagem muito curta"),
});

type ContatoFormData = z.infer<typeof contatoSchema>;

export default function ContatoPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContatoFormData>({
    resolver: zodResolver(contatoSchema),
  });

  const onSubmit = async (data: ContatoFormData) => {
    // Aqui você pode conectar com uma API de envio de email ou salvar no Strapi se quiser
    console.log("Dados contato:", data);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-slate-200 font-sans selection:bg-marian-gold selection:text-marian-blue">
      <Navbar />

      {/* HEADER */}
      <div className="relative h-[40vh] flex items-center justify-center overflow-hidden shadow-lg">
        <div 
            className="absolute inset-0 bg-cover bg-center" 
            style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1478147427282-58a87a120781?q=60&w=1600&auto=format&fit=crop)' }}
        >
            <div className="absolute inset-0 bg-marian-blue/80 mix-blend-multiply" />
        </div>
        
        <div className="relative z-10 text-center text-white px-4 mt-8">
            <span className="block text-marian-gold font-bold uppercase tracking-[0.3em] text-xs mb-2">
                Fale Conosco
            </span>
            <h1 className="text-4xl md:text-6xl font-serif drop-shadow-md">
                Contato
            </h1>
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

      <section className="py-16 px-4 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* COLUNA 1: INFORMAÇÕES (Cartão Azul) */}
            <div className="bg-marian-blue text-white rounded-xl shadow-xl p-10 relative overflow-hidden border-t-4 border-marian-gold">
                <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/arches.png')]"></div>
                
                <div className="relative z-10 space-y-8">
                    <div>
                        <h3 className="font-serif text-2xl mb-6 border-b border-white/20 pb-4">Onde estamos</h3>
                        <div className="flex items-start gap-4">
                            <div className="bg-white/10 p-3 rounded-full">
                                <MapPin className="w-6 h-6 text-marian-gold" />
                            </div>
                            <div>
                                <p className="font-bold text-lg">Paróquia Imaculado Coração de Maria</p>
                                <p className="text-blue-200 text-sm mt-1">
                                    Rua Pe. Paulo Pastana Smith, 624<br/>
                                    Rio Claro - SP, 13505-364 
                                </p>
                                <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="inline-block mt-3 text-xs font-bold uppercase tracking-widest text-marian-gold hover:text-white transition-colors border-b border-marian-gold hover:border-white pb-1">
                                    Ver no Google Maps →
                                </a>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="flex items-start gap-4">
                            <div className="bg-white/10 p-3 rounded-full">
                                <Phone className="w-6 h-6 text-marian-gold" />
                            </div>
                            <div>
                                <p className="font-bold text-lg">Canais de Atendimento</p>
                                <p className="text-blue-200 text-sm mt-1">Telefone: (19) 3527-3112</p>
                                <p className="text-blue-200 text-sm">WhatsApp: (19) 3527-3142</p>
                                <p className="text-blue-200 text-sm">Email: imaculadocoracao.rc@diocesedepiracicaba.org.br</p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="flex items-start gap-4">
                            <div className="bg-white/10 p-3 rounded-full">
                                <Clock className="w-6 h-6 text-marian-gold" />
                            </div>
                            <div>
                                <p className="font-bold text-lg">Horário da Secretaria</p>
                                <p className="text-blue-200 text-sm mt-1">Segunda a Sexta: 08h às 11h30h e 13h às 17h00</p>
                                <p className="text-blue-200 text-sm">Sábados: 08h às 12h</p>
                            </div>
                        </div>
                    </div>

                    <div className="pt-6 border-t border-white/20">
                        <p className="text-xs font-bold uppercase tracking-widest mb-4 text-center">Redes Sociais</p>
                        <div className="flex justify-center gap-6">
                            <a 
                                href="https://www.instagram.com/paroquiaimaculadorc?igsh=eXpuNjQ5dmhzeHVx" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="hover:text-marian-gold transition-colors transform hover:scale-110"
                                aria-label="Instagram"
                            >
                                <Instagram className="w-6 h-6" />
                            </a>
                            <a 
                                href="https://www.facebook.com/share/17fhbkQqay/" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="hover:text-marian-gold transition-colors transform hover:scale-110"
                                aria-label="Facebook"
                            >
                                <Facebook className="w-6 h-6" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* COLUNA 2: FORMULÁRIO (Cartão Branco) */}
            <div className="bg-white rounded-xl shadow-xl p-10 border border-gray-200">
                {isSubmitted ? (
                    <div className="h-full flex flex-col items-center justify-center text-center animate-fade-in-up">
                        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                            <CheckCircle2 className="w-10 h-10 text-green-600" />
                        </div>
                        <h3 className="font-serif text-2xl text-gray-800 mb-2">Mensagem Enviada</h3>
                        <p className="text-gray-500 mb-6">Obrigado pelo contato. Responderemos o mais breve possível.</p>
                        <button onClick={() => setIsSubmitted(false)} className="text-marian-blue font-bold text-xs uppercase hover:underline">
                            Enviar outra mensagem
                        </button>
                    </div>
                ) : (
                    <>
                        <h3 className="font-serif text-2xl text-marian-blue mb-6">Envie uma mensagem</h3>
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                            
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2">Nome</label>
                                <input 
                                    {...register("nome")}
                                    type="text" 
                                    className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-300 rounded-sm focus:border-marian-blue focus:bg-white outline-none transition-colors"
                                    placeholder="Seu nome"
                                />
                                {errors.nome && <span className="text-red-500 text-xs font-bold">{errors.nome.message}</span>}
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2">E-mail</label>
                                <input 
                                    {...register("email")}
                                    type="email" 
                                    className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-300 rounded-sm focus:border-marian-blue focus:bg-white outline-none transition-colors"
                                    placeholder="seu@email.com"
                                />
                                {errors.email && <span className="text-red-500 text-xs font-bold">{errors.email.message}</span>}
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2">Assunto</label>
                                <select 
                                    {...register("assunto")}
                                    className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-300 rounded-sm focus:border-marian-blue focus:bg-white outline-none transition-colors cursor-pointer"
                                >
                                    <option value="">Selecione...</option>
                                    <option value="duvida">Dúvida Geral</option>
                                    <option value="secretaria">Secretaria</option>
                                    <option value="imprensa">Imprensa / Pascom</option>
                                    <option value="outro">Outro</option>
                                </select>
                                {errors.assunto && <span className="text-red-500 text-xs font-bold">{errors.assunto.message}</span>}
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2">Mensagem</label>
                                <textarea 
                                    {...register("mensagem")}
                                    rows={4}
                                    className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-300 rounded-sm focus:border-marian-blue focus:bg-white outline-none transition-colors resize-none"
                                    placeholder="Como podemos ajudar?"
                                ></textarea>
                                {errors.mensagem && <span className="text-red-500 text-xs font-bold">{errors.mensagem.message}</span>}
                            </div>

                            <button 
                                type="submit" 
                                disabled={isSubmitting}
                                className="w-full bg-marian-blue text-white font-bold uppercase tracking-widest py-4 rounded-sm hover:bg-blue-900 transition-all shadow-lg flex items-center justify-center gap-2 disabled:opacity-70"
                            >
                                {isSubmitting ? "Enviando..." : <>Enviar Mensagem <Send className="w-4 h-4" /></>}
                            </button>
                        </form>
                    </>
                )}
            </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}