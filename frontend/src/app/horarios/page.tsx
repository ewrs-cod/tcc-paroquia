"use client";

import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Clock, MapPin, Info, Calendar, Church, Star } from "lucide-react";
import { api, Comunidade } from "@/services/api";

export default function HorariosPage() {
  // Estado para guardar os dados que vêm do Strapi
  const [comunidades, setComunidades] = useState<Comunidade[]>([]);
  const [loading, setLoading] = useState(true);

  // Busca os dados assim que a página carrega
  useEffect(() => {
    const loadDados = async () => {
      try {
        const dados = await api.getComunidades();
        setComunidades(dados);
      } catch (error) {
        console.error("Erro ao carregar horários:", error);
      } finally {
        setLoading(false);
      }
    };
    loadDados();
  }, []);

  // LÓGICA INTELIGENTE:
  // 1. Procura a comunidade que tem "Matriz" ou "Imaculado" no nome para ser o destaque
  const matriz = comunidades.find((c) => 
    c.nome.toLowerCase().includes("matriz") || c.nome.toLowerCase().includes("imaculado")
  );

  // 2. Pega todas as outras que NÃO são a matriz para fazer o grid de capelas
  const capelas = comunidades.filter((c) => c.id !== matriz?.id);

  // Função auxiliar para ordenar os dias da semana corretamente (Domingo primeiro)
  const ordenarHorarios = (horarios: any[]) => {
    const ordemDias: { [key: string]: number } = {
      "Domingo": 1, "Segunda-feira": 2, "Terça-feira": 3, "Quarta-feira": 4, 
      "Quinta-feira": 5, "Sexta-feira": 6, "Sábado": 7
    };
    
    // Proteção contra dados vazios
    if (!horarios || !Array.isArray(horarios)) return [];
    
    return horarios.sort((a, b) => (ordemDias[a.dia_semana] || 99) - (ordemDias[b.dia_semana] || 99));
  };

  return (
    <main className="min-h-screen bg-slate-200 font-sans selection:bg-marian-gold selection:text-marian-blue">
      <Navbar />

      {/* HEADER */}
      <div className="bg-marian-blue pt-32 pb-20 px-4 text-center relative overflow-hidden shadow-lg border-b-4 border-marian-gold">
         <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/arches.png')]"></div>
         <div className="relative z-10">
            <span className="text-marian-gold font-bold uppercase tracking-[0.3em] text-xs block mb-3 animate-fade-in-up">
                Vida de Oração
            </span>
            <h1 className="text-4xl md:text-5xl font-serif text-white drop-shadow-md">
                Horários de Missa
            </h1>
            <p className="text-blue-200 mt-4 text-sm font-medium max-w-md mx-auto">
                "A Eucaristia é a fonte e o ápice de toda a vida cristã."
            </p>
         </div>
      </div>

      <section className="py-12 px-4 max-w-6xl mx-auto -mt-12 relative z-20">
        
        {loading ? (
            <div className="text-center py-20 bg-white rounded-xl shadow-lg">
                <p className="text-marian-blue font-bold animate-pulse">Buscando horários no sistema...</p>
            </div>
        ) : (
            <>
                {/* --- 1. DESTAQUE: MATRIZ --- */}
                {matriz && (
                <div className="bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-200 mb-12 animate-fade-in-up">
                    <div className="bg-marian-red p-6 flex flex-col items-center justify-center text-center relative overflow-hidden">
                        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/arches.png')]"></div>
                        <Church className="text-white w-8 h-8 mb-2 relative z-10" />
                        <h2 className="text-white font-serif font-bold tracking-widest text-xl uppercase relative z-10">{matriz.nome}</h2>
                        <p className="text-red-100 text-xs uppercase tracking-wider relative z-10 mt-1">Sede Paroquial</p>
                    </div>
                    
                    <div className="divide-y divide-gray-100">
                        {/* AQUI O CÓDIGO GERA AS LINHAS SOZINHO BASEADO NO BANCO */}
                        {ordenarHorarios(matriz.horario_missas).map((h: any) => (
                            <div key={h.id} className="p-6 flex flex-col md:flex-row justify-between items-center gap-4 hover:bg-red-50/30 transition-colors">
                                <div className="flex items-center gap-4 w-full md:w-auto">
                                    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center text-marian-red font-bold text-xs uppercase shrink-0 border border-red-200">
                                        {h.dia_semana.substring(0, 3)}
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-800 text-lg">{h.dia_semana}</h3>
                                        <p className="text-xs text-gray-500 uppercase tracking-wide">{h.descricao || "Santa Missa"}</p>
                                    </div>
                                </div>
                                <div className="flex gap-3 w-full md:w-auto justify-center md:justify-end">
                                    <span className="px-6 py-2 bg-marian-blue text-white font-bold rounded-md text-lg shadow-sm border-b-4 border-blue-900">
                                    {h.horario}
                                    </span>
                                </div>
                            </div>
                        ))}
                        
                        {/* Caso não tenha horários cadastrados ainda */}
                        {(!matriz.horario_missas || matriz.horario_missas.length === 0) && (
                            <div className="p-8 text-center text-gray-400">Nenhum horário cadastrado no sistema.</div>
                        )}
                    </div>
                </div>
                )}

                {/* --- 2. GRID DE CAPELAS --- */}
                <div className="mb-16">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="h-[1px] flex-grow bg-gray-300"></div>
                        <h3 className="text-marian-blue font-serif text-2xl flex items-center gap-2 uppercase tracking-widest">
                            <Star className="w-6 h-6 text-marian-gold fill-marian-gold" /> Comunidades
                        </h3>
                        <div className="h-[1px] flex-grow bg-gray-300"></div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {/* AQUI O CÓDIGO GERA OS CARDS SOZINHO */}
                        {capelas.map((comunidade) => (
                        <div key={comunidade.id} className="bg-white rounded-t-full border border-gray-200 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden group">
                            {/* Cabeçalho colorido da Capela */}
                            <div className="h-32 bg-marian-blue flex items-center justify-center relative group-hover:bg-marian-gold transition-colors duration-500">
                                <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/arches.png')]"></div>
                                <Church className="text-white w-12 h-12 drop-shadow-md" />
                            </div>
                            
                            <div className="p-6 text-center">
                                <h4 className="font-serif font-bold text-gray-900 text-lg mb-1 leading-tight min-h-[3rem] flex items-center justify-center">
                                    {comunidade.nome}
                                </h4>
                                
                                <div className="space-y-3 mt-4">
                                    {ordenarHorarios(comunidade.horario_missas).length > 0 ? (
                                        ordenarHorarios(comunidade.horario_missas).map((h: any) => (
                                            <div key={h.id} className="bg-slate-50 rounded-lg p-2 border border-slate-100">
                                                <p className="text-xs font-bold text-marian-blue uppercase mb-1">{h.dia_semana}</p>
                                                <p className="text-xl font-bold text-gray-800">{h.horario}</p>
                                            </div>
                                        ))
                                    ) : (
                                        <p className="text-xs text-gray-400 italic">Sem horários cadastrados</p>
                                    )}
                                </div>
                            </div>
                        </div>
                        ))}
                    </div>
                </div>
            </>
        )}

        {/* --- 3. INFORMAÇÕES ÚTEIS (Mantido Fixo pois não muda com frequência) --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl shadow-md p-8 border-l-4 border-marian-gold">
                <h3 className="font-serif text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                    <Info className="w-6 h-6 text-marian-gold" /> Confissões (Matriz)
                </h3>
                <ul className="space-y-4 text-sm text-gray-600">
                    <li className="flex justify-between border-b border-gray-100 pb-2">
                        <span className="font-medium">Quartas-feiras</span>
                        <span className="font-bold text-gray-900 bg-gray-100 px-2 py-1 rounded">14h às 17h</span>
                    </li>
                    <li className="flex justify-between border-b border-gray-100 pb-2">
                        <span className="font-medium">Sábados</span>
                        <span className="font-bold text-gray-900 bg-gray-100 px-2 py-1 rounded">09h às 11h</span>
                    </li>
                </ul>
                <p className="text-xs text-gray-400 mt-4 italic">
                    * Atendimentos individuais devem ser agendados na secretaria.
                </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-8 border-l-4 border-marian-blue">
                <h3 className="font-serif text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                    <MapPin className="w-6 h-6 text-marian-blue" /> Secretaria Paroquial
                </h3>
                <ul className="space-y-4 text-sm text-gray-600">
                    <li className="flex justify-between border-b border-gray-100 pb-2">
                        <span className="font-medium">Segunda a Sexta</span>
                        <span className="font-bold text-gray-900">08h - 12h / 13h - 17h</span>
                    </li>
                    <li className="flex justify-between border-b border-gray-100 pb-2">
                        <span className="font-medium">Sábado</span>
                        <span className="font-bold text-gray-900">08h às 12h</span>
                    </li>
                </ul>
                <div className="mt-6 pt-4 border-t border-gray-100">
                     <a href="/solicitar-atendimento" className="text-marian-blue font-bold text-xs uppercase tracking-widest hover:underline flex items-center gap-1">
                        Agendar atendimento online →
                     </a>
                </div>
            </div>
        </div>

      </section>

      <Footer />
    </main>
  );
}