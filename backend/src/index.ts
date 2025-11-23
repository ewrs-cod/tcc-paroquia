export default {
  /**
   * Função de registro (pode deixar vazia)
   */
  register(/*{ strapi }*/) {},

  /**
   * Bootstrap: Roda assim que o Strapi liga.
   * Vamos usar para criar os dados iniciais e pular o bug do painel.
   */
  async bootstrap({ strapi }) {
    try {
      // 1. Conta quantos eventos existem
      // Nota: 'api::evento.evento' é o identificador interno que descobrimos antes
      const count = await strapi.db.query('api::evento.evento').count();

      // 2. Se não tiver nenhum, cria os 3 de teste
      if (count === 0) {
        console.log("⚠️ NENHUM EVENTO ENCONTRADO. INICIANDO SEED AUTOMÁTICO...");

        const eventosIniciais = [
          {
            titulo: "Missa Solene",
            data: "2025-11-24T09:00:00.000Z",
            local: "Igreja Matriz",
            descricao: "Celebração dominical com toda a comunidade.",
            destaque: true,
            publishedAt: new Date(), // Já nasce publicado!
          },
          {
            titulo: "Noite de Louvor",
            data: "2025-11-28T19:30:00.000Z",
            local: "Salão Paroquial",
            descricao: "Venha entregar suas angústias e sair renovado pelo Espírito.",
            destaque: true,
            publishedAt: new Date(),
          },
          {
            titulo: "Cerco de Jericó",
            data: "2025-12-01T19:00:00.000Z",
            local: "Capela São José",
            descricao: "Sete dias e sete noites de oração incessante.",
            destaque: true,
            publishedAt: new Date(),
          }
        ];

        // Loop para criar cada um
        for (const evento of eventosIniciais) {
          await strapi.entityService.create('api::evento.evento', {
            data: evento,
          });
        }

        console.log("✅ 3 EVENTOS CRIADOS E PUBLICADOS COM SUCESSO!");
      } else {
        console.log("ℹ️ Eventos já existem. Pulando seed.");
      }

    } catch (error) {
      console.error("Erro no Seed de Eventos:", error);
    }
  },
};