"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, ChevronRight, HandHeart, MapPin, HelpCircle, Briefcase } from "lucide-react";
import { api } from "@/services/api";

// --- 1. Esquema de Validação ---
const atendimentoSchema = z.object({
  nome: z.string().min(3, "Nome obrigatório"),
  telefone: z.string().min(10, "Telefone obrigatório"),
  endereco: z.string().min(5, "Endereço obrigatório"),
  
  tipo_ajuda: z.string().min(1, "Selecione o tipo de atendimento"),
  
  // Campos Condicionais
  nome_enfermo: z.string().optional(),
  local_visita: z.string().optional(),
  situacao_emprego: z.string().optional(),
  numero_familiares: z.string().optional(),
  
  descricao: z.string().min(10, "Descreva brevemente a necessidade"),
});

type AtendimentoFormData = z.infer<typeof atendimentoSchema>;

export default function SolicitarAtendimentoPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<AtendimentoFormData>({
    resolver: zodResolver(atendimentoSchema),
  });

  const tipoAjudaSelecionado = watch("tipo_ajuda");

  // --- LÓGICA DE ENVIO ---
  const onSubmit = async (data: AtendimentoFormData) => {
    try {
      const payload = {
        nome: data.nome,
        telefone: data.telefone,
        endereco: data.endereco,
        tipo_ajuda: data.tipo_ajuda,
        detalhes: data.descricao,
        // Agrupa dados extras num JSON
        info_extra: {
            nome_enfermo: data.nome_enfermo,
            local_visita: data.local_visita,
            situacao_emprego: data.situacao_emprego,
            numero_familiares: data.numero_familiares
        }
      };

      await api.criarAtendimento(payload);
      setIsSubmitted(true);
    } catch (error) {
      console.error("Erro no envio:", error);
      alert("Erro ao enviar solicitação. Verifique se o backend está rodando.");
    }
  };

  return (
    <main className="min-h-screen bg-slate-200 font-sans selection:bg-marian-gold selection:text-marian-blue">
      <Navbar />

      {/* HEADER COMPACTO */}
      <div className="relative h-[35vh] flex items-center justify-center overflow-hidden shadow-lg">
        <div 
            className="absolute inset-0 bg-cover bg-center" 
            style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?q=60&w=1600&auto=format&fit=crop)' }}
        >
            <div className="absolute inset-0 bg-marian-red/80 mix-blend-multiply" />
        </div>
        
        <div className="relative z-10 text-center text-white px-4 mt-8">
            <span className="block text-marian-gold font-bold uppercase tracking-[0.3em] text-xs mb-2">
                Acolhida Fraterna
            </span>
            <h1 className="text-4xl md:text-5xl font-serif drop-shadow-md">
                Solicitar Atendimento
            </h1>
        </div>

        <div className="absolute bottom-0 left-0 w-full leading-none z-10 text-slate-200">
            <svg className="relative block w-full h-[40px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" fill="currentColor" opacity=".25"></path>
                <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" fill="currentColor" opacity=".5"></path>
                <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" fill="currentColor"></path>
            </svg>
        </div>
      </div>

      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          
          {isSubmitted ? (
             <div className="bg-white rounded-lg border-t-8 border-marian-red shadow-2xl p-12 text-center">
                <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6 border-2 border-red-200">
                    <HandHeart className="w-10 h-10 text-marian-red" />
                </div>
                <h2 className="text-3xl font-serif text-gray-900 mb-4">Solicitação Recebida</h2>
                <p className="text-gray-700 font-medium mb-8 leading-relaxed">
                    Agradecemos a confiança. A nossa equipa de acolhida analisará o seu pedido com carinho e discrição.
                </p>
                <button 
                    onClick={() => setIsSubmitted(false)}
                    className="text-marian-red font-black uppercase tracking-widest text-xs hover:underline"
                >
                    VOLTAR AO INÍCIO
                </button>
            </div>
          ) : (
            
            <div className="bg-white rounded-lg shadow-2xl overflow-hidden border border-gray-300">
              
              <div className="bg-marian-red p-8 text-center border-b-4 border-marian-gold">
                <HelpCircle className="w-10 h-10 text-white mx-auto mb-3" />
                <h2 className="text-2xl font-serif text-white mb-1">Como podemos ajudar?</h2>
                <p className="text-red-100 text-sm font-medium">Preencha com sinceridade. Tudo é confidencial.</p>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="p-8 md:p-12 space-y-8">
                
                {/* BLOCO 1: CONTATO */}
                <div className="space-y-6">
                    <h3 className="text-xs font-bold text-gray-500 uppercase tracking-widest border-b border-gray-300 pb-2 mb-4">
                        Seu Contato
                    </h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-bold text-gray-900 mb-2">
                                Seu Nome <span className="text-red-600">*</span>
                            </label>
                            <input 
                                {...register("nome")}
                                type="text" 
                                className="w-full px-4 py-3 rounded-sm bg-gray-50 border-2 border-gray-300 text-gray-900 font-medium focus:border-marian-red focus:bg-white focus:ring-0 outline-none transition-colors"
                            />
                            {errors.nome && <p className="text-red-600 text-xs mt-1 font-bold">{errors.nome.message}</p>}
                        </div>

                        <div>
                            <label className="block text-sm font-bold text-gray-900 mb-2">
                                Telefone <span className="text-red-600">*</span>
                            </label>
                            <input 
                                {...register("telefone")}
                                type="tel" 
                                className="w-full px-4 py-3 rounded-sm bg-gray-50 border-2 border-gray-300 text-gray-900 font-medium focus:border-marian-red focus:bg-white focus:ring-0 outline-none transition-colors"
                                placeholder="(00) 00000-0000"
                            />
                            {errors.telefone && <p className="text-red-600 text-xs mt-1 font-bold">{errors.telefone.message}</p>}
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-bold text-gray-900 mb-2">
                            Seu Endereço <span className="text-red-600">*</span>
                        </label>
                        <input 
                            {...register("endereco")}
                            type="text" 
                            className="w-full px-4 py-3 rounded-sm bg-gray-50 border-2 border-gray-300 text-gray-900 font-medium focus:border-marian-red focus:bg-white focus:ring-0 outline-none transition-colors"
                            placeholder="Rua, Número, Bairro"
                        />
                        {errors.endereco && <p className="text-red-600 text-xs mt-1 font-bold">{errors.endereco.message}</p>}
                    </div>
                </div>

                {/* BLOCO 2: TIPO DE AJUDA (COM GRUPOS RESTAURADOS) */}
                <div className="space-y-6 pt-6">
                    <h3 className="text-xs font-bold text-gray-500 uppercase tracking-widest border-b border-gray-300 pb-2 mb-4">
                        Necessidade
                    </h3>

                    <div>
                        <label className="block text-sm font-bold text-gray-900 mb-2">
                            Qual tipo de assistência você precisa? <span className="text-red-600">*</span>
                        </label>
                        <div className="relative">
                            <select 
                                {...register("tipo_ajuda")}
                                className="w-full px-4 py-4 rounded-sm bg-white border-2 border-gray-300 text-gray-900 font-bold text-sm focus:border-marian-red focus:ring-0 outline-none transition-colors appearance-none cursor-pointer"
                            >
                                <option value="">Selecione o serviço desejado...</option>
                                
                                <optgroup label="Sacramentos & Espiritualidade">
                                    <option value="confissao">Agendar Confissão</option>
                                    <option value="direcao_espiritual">Direção Espiritual com o Padre</option>
                                    <option value="visita_enfermo">Unção dos Enfermos (Hospital/Casa)</option>
                                    <option value="exequias">Exéquias (Falecimento/Velório)</option>
                                </optgroup>

                                <optgroup label="Bênçãos">
                                    <option value="bencao_casa">Bênção de Residência</option>
                                    <option value="bencao_comercio">Bênção de Comércio/Empresa</option>
                                    <option value="bencao_objeto">Bênção de Objetos (Agendar)</option>
                                </optgroup>

                                <optgroup label="Social">
                                    <option value="cesta_basica">Solicitar Cesta Básica</option>
                                    <option value="visita_social">Visita da Pastoral Social</option>
                                </optgroup>
                                
                                <optgroup label="Outros">
                                    <option value="duvida">Dúvidas Gerais</option>
                                    <option value="certidao">Segunda Via de Batistério/Casamento</option>
                                </optgroup>
                            </select>
                            <ChevronRight className="absolute right-4 top-5 w-5 h-5 text-gray-600 rotate-90 pointer-events-none" />
                        </div>
                        {errors.tipo_ajuda && <p className="text-red-600 text-xs mt-1 font-bold">{errors.tipo_ajuda.message}</p>}
                    </div>

                    {/* 1. Pede ENDEREÇO se for qualquer tipo de Visita ou Bênção externa */}
                    {["visita_enfermo", "visita_social", "exequias", "bencao_casa", "bencao_comercio"].includes(tipoAjudaSelecionado) && (
                        <div className="bg-red-50 p-6 border-l-4 border-marian-red rounded-r-md animate-fade-in-up shadow-sm">
                            <h4 className="text-marian-red font-bold text-sm mb-4 flex items-center gap-2 uppercase tracking-wider">
                                <MapPin className="w-4 h-4" /> Local da Visita / Bênção
                            </h4>
                            <div className="grid grid-cols-1 gap-4">
                                <div>
                                    <label className="block text-xs font-bold text-gray-700 mb-1">
                                        {tipoAjudaSelecionado === 'exequias' ? 'Nome do Falecido' : 'Nome do Responsável no Local'}
                                    </label>
                                    <input {...register("nome_enfermo")} type="text" className="w-full p-3 border border-gray-300 rounded bg-white focus:border-marian-red outline-none" placeholder="Quem o padre/ministro deve procurar?" />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-gray-700 mb-1">Endereço Completo do Local</label>
                                    <input {...register("local_visita")} type="text" placeholder="Rua, Número, Bairro e Ponto de Referência" className="w-full p-3 border border-gray-300 rounded bg-white focus:border-marian-red outline-none" />
                                </div>
                            </div>
                        </div>
                    )}

                    {/* 2. Pede DADOS SOCIAIS se for Cesta Básica */}
                    {tipoAjudaSelecionado === "cesta_basica" && (
                        <div className="bg-blue-50 p-6 border-l-4 border-marian-blue rounded-r-md animate-fade-in-up shadow-sm">
                             <h4 className="text-marian-blue font-bold text-sm mb-4 flex items-center gap-2 uppercase tracking-wider">
                                <Briefcase className="w-4 h-4" /> Triagem Social
                            </h4>
                             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-xs font-bold text-gray-700 mb-1">Situação de Trabalho</label>
                                    <select {...register("situacao_emprego")} className="w-full p-3 border border-gray-300 rounded bg-white focus:border-marian-blue outline-none">
                                        <option value="desempregado">Desempregado</option>
                                        <option value="autonomo">Autônomo / Bico</option>
                                        <option value="empregado">Empregado (Renda Baixa)</option>
                                        <option value="aposentado">Aposentado</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-gray-700 mb-1">Pessoas na casa</label>
                                    <input {...register("numero_familiares")} type="number" className="w-full p-3 border border-gray-300 rounded bg-white focus:border-marian-blue outline-none" />
                                </div>
                            </div>
                        </div>
                    )}

                    {/* DETALHES (Sempre visível) */}
                    <div>
                        <label className="block text-sm font-bold text-gray-900 mb-2">
                            Detalhes do Pedido <span className="text-red-600">*</span>
                        </label>
                        <textarea 
                            {...register("descricao")}
                            rows={4}
                            className="w-full px-4 py-3 rounded-sm bg-gray-50 border-2 border-gray-300 text-gray-900 placeholder-gray-500 font-medium focus:border-marian-red focus:bg-white focus:ring-0 outline-none transition-colors resize-none"
                            placeholder="Descreva melhor a situação, horários disponíveis, ou o que for necessário..."
                        ></textarea>
                         {errors.descricao && <p className="text-red-600 text-xs mt-1 font-bold">{errors.descricao.message}</p>}
                    </div>

                </div>

                {/* Botão Submit */}
                <div className="pt-6">
                    <button 
                        type="submit" 
                        disabled={isSubmitting}
                        className="w-full bg-marian-red text-white font-bold uppercase tracking-widest py-5 rounded-sm hover:bg-red-800 transition-all flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed shadow-md hover:shadow-xl hover:-translate-y-1"
                    >
                        {isSubmitting ? (
                            "Enviando..."
                        ) : (
                            <>ENVIAR SOLICITAÇÃO <ChevronRight className="w-5 h-5" /></>
                        )}
                    </button>
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