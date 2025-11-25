"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, AlertCircle, ChevronRight, Heart, User, MapPin, Phone, Mail } from "lucide-react";
import { api } from "@/services/api";

// --- PARTE 1: LÓGICA E VALIDAÇÃO (ZOD) ---
const agenteSchema = z.object({
  nome: z.string().min(3, "O nome deve ter pelo menos 3 caracteres"),
  email: z.string().email("Introduza um e-mail válido"),
  telefone: z.string().min(10, "Introduza um telefone válido com DDD"),
  comunidade: z.string().min(1, "Selecione uma comunidade"),
  pastoral: z.string().min(1, "Selecione uma pastoral de interesse"),
  mensagem: z.string().optional(),
});

type AgenteFormData = z.infer<typeof agenteSchema>;

// --- PARTE 2: COMPONENTE DA PÁGINA ---
export default function SejaAgentePage() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<AgenteFormData>({
    resolver: zodResolver(agenteSchema),
  });

  const onSubmit = async (data: AgenteFormData) => {
    try {
      const payload = {
        ...data
      };

      console.log("Enviando payload limpo:", payload);

      // Envia para o Strapi via API
      await api.criarInscricaoAgente(payload);

      setIsSubmitted(true);
    } catch (error) {
      console.error("Erro ao salvar:", error);
      alert("Não foi possível enviar sua inscrição. Verifique o console (F12) para ver o erro.");
    }
  };

  return (
    <main className="min-h-screen bg-slate-200 font-sans selection:bg-marian-gold selection:text-marian-blue">
      <Navbar />

      {/* --- CABEÇALHO DA PÁGINA --- */}
      <div className="relative h-[35vh] flex items-center justify-center overflow-hidden shadow-lg">
        <div 
            className="absolute inset-0 bg-cover bg-center" 
            style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1511818966892-d7d671e672a2?q=60&w=1600&auto=format&fit=crop)' }}
        >
            <div className="absolute inset-0 bg-marian-blue/80 mix-blend-multiply" />
        </div>
        
        <div className="relative z-10 text-center text-white px-4 mt-8">
            <span className="block text-marian-gold font-bold uppercase tracking-[0.3em] text-xs mb-2">
                Serviço e Doação
            </span>
            <h1 className="text-4xl md:text-5xl font-serif drop-shadow-md">
                Seja um Agente
            </h1>
        </div>
        
        {/* Divisor Decorativo (MANTIDO COMPLETO) */}
        <div className="absolute bottom-0 left-0 w-full leading-none z-10 text-slate-200">
            <svg className="relative block w-full h-[40px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" fill="currentColor" opacity=".25"></path>
                <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" fill="currentColor" opacity=".5"></path>
                <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" fill="currentColor"></path>
            </svg>
        </div>
      </div>

      {/* --- ÁREA DO FORMULÁRIO --- */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          
          {isSubmitted ? (
             // TELA DE SUCESSO
             <div className="bg-white rounded-lg border-t-8 border-green-600 shadow-2xl p-12 text-center animate-fade-in-up">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 border-2 border-green-200">
                    <CheckCircle2 className="w-10 h-10 text-green-700" />
                </div>
                <h2 className="text-3xl font-serif text-gray-900 mb-4">Inscrição Enviada!</h2>
                <p className="text-gray-700 font-medium mb-8 leading-relaxed">
                    Os seus dados foram recebidos pelo nosso sistema. <br/>
                    A coordenação da pastoral entrará em contato em breve.
                </p>
                <button 
                    onClick={() => setIsSubmitted(false)}
                    className="text-marian-blue font-black uppercase tracking-widest text-xs hover:underline"
                >
                    REALIZAR NOVO CADASTRO
                </button>
            </div>
          ) : (
            
            // CARTÃO DO FORMULÁRIO (Alto Contraste Mantido)
            <div className="bg-white rounded-lg shadow-2xl overflow-hidden border border-gray-300">
              
              {/* Cabeçalho Interno */}
              <div className="bg-marian-blue p-8 text-center border-b-4 border-marian-gold">
                <Heart className="w-10 h-10 text-white mx-auto mb-3" />
                <h2 className="text-2xl font-serif text-white mb-1">Ficha Pastoral</h2>
                <p className="text-blue-200 text-sm font-medium">Preencha com atenção os campos abaixo</p>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="p-8 md:p-12 space-y-8">
                
                {/* BLOCO 1: QUEM É VOCÊ */}
                <div className="space-y-6">
                    <div className="flex items-center gap-2 pb-2 border-b-2 border-gray-200">
                        <User className="w-5 h-5 text-marian-blue" />
                        <h3 className="text-sm font-black text-gray-800 uppercase tracking-widest">
                            Identificação
                        </h3>
                    </div>
                    
                    {/* Nome */}
                    <div>
                        <label className="block text-sm font-bold text-gray-900 mb-2">
                            Nome Completo <span className="text-red-600">*</span>
                        </label>
                        <input 
                            {...register("nome")}
                            type="text" 
                            className="w-full px-4 py-4 rounded-sm bg-gray-50 border-2 border-gray-300 text-gray-900 placeholder-gray-500 font-medium focus:border-marian-blue focus:bg-white focus:ring-0 outline-none transition-colors"
                            placeholder="Digite seu nome completo aqui"
                        />
                        {errors.nome && <p className="text-red-700 text-xs mt-2 font-bold flex items-center gap-1"><AlertCircle className="w-4 h-4"/> {errors.nome.message}</p>}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Email */}
                        <div>
                            <label className="block text-sm font-bold text-gray-900 mb-2">
                                E-mail <span className="text-red-600">*</span>
                            </label>
                            <div className="relative">
                                <Mail className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
                                <input 
                                    {...register("email")}
                                    type="email" 
                                    className="w-full pl-12 pr-4 py-4 rounded-sm bg-gray-50 border-2 border-gray-300 text-gray-900 placeholder-gray-500 font-medium focus:border-marian-blue focus:bg-white focus:ring-0 outline-none transition-colors"
                                    placeholder="seu@email.com"
                                />
                            </div>
                            {errors.email && <p className="text-red-700 text-xs mt-2 font-bold flex items-center gap-1"><AlertCircle className="w-4 h-4"/> {errors.email.message}</p>}
                        </div>

                        {/* Telefone */}
                        <div>
                            <label className="block text-sm font-bold text-gray-900 mb-2">
                                Telefone / WhatsApp <span className="text-red-600">*</span>
                            </label>
                            <div className="relative">
                                <Phone className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
                                <input 
                                    {...register("telefone")}
                                    type="tel" 
                                    className="w-full pl-12 pr-4 py-4 rounded-sm bg-gray-50 border-2 border-gray-300 text-gray-900 placeholder-gray-500 font-medium focus:border-marian-blue focus:bg-white focus:ring-0 outline-none transition-colors"
                                    placeholder="(19) 00000-0000"
                                />
                            </div>
                            {errors.telefone && <p className="text-red-700 text-xs mt-2 font-bold flex items-center gap-1"><AlertCircle className="w-4 h-4"/> {errors.telefone.message}</p>}
                        </div>
                    </div>
                </div>

                {/* BLOCO 2: ONDE SERVIR */}
                <div className="space-y-6 pt-6">
                    <div className="flex items-center gap-2 pb-2 border-b-2 border-gray-200">
                        <Heart className="w-5 h-5 text-marian-blue" />
                        <h3 className="text-sm font-black text-gray-800 uppercase tracking-widest">
                            Sua Vocação
                        </h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Comunidade */}
                        <div>
                            <label className="block text-sm font-bold text-gray-900 mb-2">
                                Comunidade <span className="text-red-600">*</span>
                            </label>
                            <div className="relative">
                                <select 
                                    {...register("comunidade")}
                                    className="w-full px-4 py-4 rounded-sm bg-gray-50 border-2 border-gray-300 text-gray-900 font-medium focus:border-marian-blue focus:bg-white focus:ring-0 outline-none transition-colors appearance-none cursor-pointer"
                                >
                                    <option value="">Selecione uma opção...</option>
                                    <option value="matriz">Matriz Imaculado Coração</option>
                                    <option value="sao-jose">Capela São José</option>
                                    <option value="santa-rita">Comunidade Santa Rita</option>
                                </select>
                                <ChevronRight className="absolute right-4 top-5 w-4 h-4 text-gray-600 rotate-90 pointer-events-none" />
                            </div>
                            {errors.comunidade && <p className="text-red-700 text-xs mt-2 font-bold flex items-center gap-1"><AlertCircle className="w-4 h-4"/> {errors.comunidade.message}</p>}
                        </div>

                        {/* Pastoral */}
                        <div>
                            <label className="block text-sm font-bold text-gray-900 mb-2">
                                Pastoral de Interesse <span className="text-red-600">*</span>
                            </label>
                            <div className="relative">
                                <select 
                                    {...register("pastoral")}
                                    className="w-full px-4 py-4 rounded-sm bg-gray-50 border-2 border-gray-300 text-gray-900 font-medium focus:border-marian-blue focus:bg-white focus:ring-0 outline-none transition-colors appearance-none cursor-pointer"
                                >
                                    <option value="">Selecione uma opção...</option>
                                    <option value="catequese">Catequese</option>
                                    <option value="liturgia">Liturgia</option>
                                    <option value="jovens">Grupo de Jovens</option>
                                    <option value="dizimo">Pastoral do Dízimo</option>
                                    <option value="musica">Ministério de Música</option>
                                    <option value="pascom">Pascom (Comunicação)</option>
                                </select>
                                <ChevronRight className="absolute right-4 top-5 w-4 h-4 text-gray-600 rotate-90 pointer-events-none" />
                            </div>
                            {errors.pastoral && <p className="text-red-700 text-xs mt-2 font-bold flex items-center gap-1"><AlertCircle className="w-4 h-4"/> {errors.pastoral.message}</p>}
                        </div>
                    </div>

                    {/* Mensagem */}
                    <div>
                        <label className="block text-sm font-bold text-gray-900 mb-2">
                            Observações (Opcional)
                        </label>
                        <textarea 
                            {...register("mensagem")}
                            rows={4}
                            className="w-full px-4 py-3 rounded-sm bg-gray-50 border-2 border-gray-300 text-gray-900 placeholder-gray-500 font-medium focus:border-marian-blue focus:bg-white focus:ring-0 outline-none transition-colors resize-none"
                            placeholder="Conte-nos se já tem experiência ou por que escolheu esta pastoral..."
                        ></textarea>
                    </div>
                </div>

                {/* Botão Submit */}
                <div className="pt-6">
                    <button 
                        type="submit" 
                        disabled={isSubmitting}
                        className="w-full bg-marian-blue text-white font-bold uppercase tracking-widest py-5 rounded-sm hover:bg-blue-900 transition-all flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed shadow-md hover:shadow-xl hover:-translate-y-1"
                    >
                        {isSubmitting ? (
                            "Processando..."
                        ) : (
                            <>CONFIRMAR INSCRIÇÃO <ChevronRight className="w-5 h-5" /></>
                        )}
                    </button>
                    <p className="text-center text-xs text-gray-500 mt-4 font-medium">
                        🔒 Seus dados estão protegidos e serão utilizados apenas internamente.
                    </p>
                </div>

              </form>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}