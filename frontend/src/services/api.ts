const API_URL = "http://localhost:1337/api";

// --- INTERFACES (Tipos de dados) ---

export interface Banner {
  id: number;
  titulo: string;
  subtitulo: string;
  link_botao?: string;
  texto_botao?: string;
  imagem: {
    url: string;
  };
}

export interface Evento {
  id: number;
  documentId: string;
  titulo: string;
  data: string;
  local: string;
  descricao: string;
  destaque: boolean;
}

export interface Horario {
  id: number;
  dia_semana: string;
  horario: string;
  descricao?: string;
}

export interface Comunidade {
  id: number;
  documentId: string;
  nome: string;
  endereco?: string;
  horario_missas: Horario[];
}

// --- OBJETO API UNIFICADO ---

export const api = {
  
  // 1. BUSCAR BANNERS (SLIDER) - A função que faltava!
  getBanners: async (): Promise<Banner[]> => {
    try {
      // populate=imagem é essencial para vir a foto
      const url = `${API_URL}/banners?populate=imagem&sort=ordem:asc`;
      const res = await fetch(url, { method: "GET", cache: "no-store" });
      const json = await res.json();
      
      if (!res.ok) throw new Error("Erro ao buscar banners");
      return json.data;
    } catch (error) {
      console.error("Erro API Banners:", error);
      return [];
    }
  },

  // 2. BUSCAR EVENTOS DA HOME
  getEventosDestaque: async (): Promise<Evento[]> => {
    try {
      const url = `${API_URL}/eventos?filters[destaque][$eq]=true&sort=data:asc&pagination[limit]=3`;
      const res = await fetch(url, { method: "GET", cache: "no-store" });
      const json = await res.json();
      if (!res.ok) throw new Error("Erro ao buscar eventos");
      return json.data;
    } catch (error) {
      console.error("Erro API Eventos:", error);
      return [];
    }
  },

  // 3. BUSCAR COMUNIDADES E HORÁRIOS
  getComunidades: async (): Promise<Comunidade[]> => {
    try {
      const url = `${API_URL}/comunidades?populate=*`;
      const res = await fetch(url, { method: "GET", cache: "no-store" });
      const json = await res.json();
      if (!res.ok) throw new Error("Erro ao buscar comunidades");
      return json.data;
    } catch (error) {
      console.error("Erro API Comunidades:", error);
      return [];
    }
  },

  // 4. ENVIAR INSCRIÇÃO DE AGENTE (POST)
  criarInscricaoAgente: async (dados: any) => {
    const url = `${API_URL}/inscricao-agentes`;
    try {
      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ data: dados }),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error?.message || "Erro ao salvar");
      return json;
    } catch (error) {
      console.error("[API] Erro:", error);
      throw error;
    }
  },

  // 5. ENVIAR ATENDIMENTO (POST)
  criarAtendimento: async (dados: any) => {
    const url = `${API_URL}/atendimentos`;
    try {
      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ data: dados }),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error?.message || "Erro ao salvar");
      return json;
    } catch (error) {
      console.error("[API] Erro:", error);
      throw error;
    }
  }
};