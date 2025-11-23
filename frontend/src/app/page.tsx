import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSlider from "@/components/HeroSlider";
import { ArrowRight, Calendar, MapPin } from "lucide-react";
import { api } from "@/services/api";

// Função para buscar dados no servidor (Server Component)
async function getDados() {
  try {
    const eventos = await api.getEventosDestaque();
    return eventos;
  } catch (error) {
    console.error("Erro ao buscar eventos:", error);
    return [];
  }
}

export default async function Home() {
  const eventos = await getDados();

  const formatarData = (dataString: string) => {
    if (!dataString) return { dia: "--", mes: "---", hora: "--:--" };
    const data = new Date(dataString);
    const dia = data.getUTCDate().toString().padStart(2, '0');
    const mes = data.toLocaleString('pt-BR', { month: 'short', timeZone: 'UTC' }).replace('.', '');
    const hora = data.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit', timeZone: 'UTC' });
    return { dia, mes, hora };
  };

  return (
    <main className="min-h-screen bg-slate-200 font-sans selection:bg-marian-red selection:text-white overflow-x-hidden">
      
      <Navbar />

      <HeroSlider />

      {/* Espaçador */}
      <div className="h-20 md:h-32"></div>

      {/* Seção de Boas Vindas */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-marian-red font-bold uppercase tracking-[0.2em] text-xs mb-4 block">
            Paz e Bem
          </span>
          <h2 className="text-3xl md:text-4xl font-serif text-marian-blue mb-6">
            Uma comunidade viva, <br/>guiada pelo Espírito Santo
          </h2>
          <p className="text-gray-600 text-lg font-light leading-relaxed">
            Seja bem-vindo ao site oficial da nossa paróquia. Aqui você encontra informações sobre os sacramentos, 
            horários de celebrações e a vida pastoral de nossa comunidade em Piracicaba.
          </p>
          <div className="w-24 h-1 bg-marian-gold mx-auto mt-8"></div>
        </div>
      </section>

      {/* Seção de Eventos */}
      <section className="py-16 bg-white relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
             <h2 className="text-3xl font-serif text-marian-blue">Agenda Paroquial</h2>
             <button className="text-marian-red hover:text-marian-blue transition-colors text-sm font-bold uppercase tracking-wider flex items-center cursor-default opacity-50">
                Próximas Celebrações
             </button>
          </div>

          {eventos && eventos.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {eventos.map((evento) => {
                const { dia, mes, hora } = formatarData(evento.data);
                
                return (
                  <div key={evento.id} className="group cursor-pointer h-full">
                    {/* Imagem em Arco (Vitral) */}
                    <div className="h-96 rounded-t-full relative overflow-hidden border-b-4 border-marian-gold shadow-lg bg-gray-100 transition-transform duration-500 hover:-translate-y-2">
                      
                      {/* Imagem */}
                      <div 
                        className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-700" 
                        style={{backgroundImage: 'url(https://images.unsplash.com/photo-1438232992991-995b7058bbb3?q=60&w=800)'}}
                      ></div>
                      
                      {/* Gradiente para o texto */}
                      <div className="absolute inset-0 bg-gradient-to-t from-marian-blue/95 via-transparent to-transparent opacity-90 group-hover:opacity-80 transition-opacity"></div>
                      
                      {/* CORREÇÃO: DATA CENTRALIZADA (Estilo Rosácea) */}
                      {/* Antes estava 'top-6 right-6', o que cortava na curva. Agora está centralizado. */}
                      <div className="absolute top-6 left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur-md rounded-full w-16 h-16 flex flex-col items-center justify-center text-marian-blue shadow-xl border-2 border-marian-gold/20 z-10">
                          <span className="text-xl font-serif font-bold leading-none">{dia}</span>
                          <span className="text-[10px] font-bold uppercase mt-1 tracking-wider">{mes}</span>
                      </div>

                      {/* Texto Overlay */}
                      <div className="absolute bottom-0 left-0 p-8 w-full text-center">
                          <h3 className="text-2xl font-serif text-white mb-3 group-hover:text-marian-gold transition-colors leading-tight drop-shadow-md">
                            {evento.titulo}
                          </h3>
                          
                          <div className="flex flex-col items-center gap-2 border-t border-white/10 pt-4">
                            <div className="flex items-center text-white/90 text-xs uppercase tracking-widest font-bold bg-black/20 px-3 py-1 rounded-full">
                              <Calendar className="w-3 h-3 mr-2" />
                              <span>{hora}</span>
                            </div>
                            <div className="flex items-center text-white/80 text-xs uppercase tracking-widest">
                              <MapPin className="w-3 h-3 mr-2" />
                              <span>{evento.local}</span>
                            </div>
                          </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-16 bg-gray-50 rounded-lg border-2 border-dashed border-gray-200">
              <p className="text-gray-500 font-serif text-lg mb-2">Nenhum evento encontrado.</p>
              <p className="text-sm text-gray-400">
                Verifique se o Strapi está rodando e se há eventos publicados com "Destaque: True".
              </p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}