"use server";

import { db } from "@/app/_lib/prisma";
import { auth, clerkClient } from "@clerk/nextjs/server";
import OpenAI from "openai";
import { GenerateAiReportSchema, generateAiReportSchema } from "./schema";

const DUMMY_REPORT = `
Para oferecer recomendações financeiras mais direcionadas, seria útil ter informações sobre sua situação atual, incluindo:

1. **Renda mensal:** Renda fixa e variada.
2. **Despesas mensais:** Divida em categorias como moradia, alimentação, transporte, dívidas e lazer.
3. **Dívidas e empréstimos:** Se houver, inclua valores e taxas de juros.
4. **Investimentos:** Tipos de investimentos, valor investido e objetivo.
5. **Metas financeiras:** Objetivos a curto, médio e longo prazo.

Com esses dados, posso gerar um relatório personalizado com orientações em áreas como:

- **Controle de gastos**
- **Planejamento de metas**
- **Oportunidades de investimento**
- **Educação financeira** 

Se preferir um guia geral para iniciar, posso também compartilhar práticas financeiras comuns para melhorar seu planejamento e gestão de recursos.
`;

export const generateAiReport = async ({ month }: GenerateAiReportSchema) => {
  generateAiReportSchema.parse({ month });
  const { userId } = await auth();

  if (!userId) {
    throw new Error("Unauthorized");
  }

  const user = await clerkClient().users.getUser(userId);
  const hasPremium = user.publicMetadata.subscriptionPlan === "premium";

  if (!hasPremium) {
    throw new Error("You need a premium plan to generate AI reports");
  }

  if (!process.env.OPEN_AI_API_KEY) {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    return DUMMY_REPORT;
  }

  const openAi = new OpenAI({
    apiKey: process.env.OPEN_AI_API_KEY,
  });

  // pear as transações do mês recebido
  const transactions = await db.transaction.findMany({
    where: {
      date: {
        gte: new Date(`2024-${month}-01`),
        lt: new Date(`2024-${month}-31`),
      },
    },
  });

  // mandar as transações para o ChatGPT e pedir para ele gerar um relatório com insights
  const content = `Gere um relatório com insights sobre as minhas finanças, com dicas e orientações de como melhorar minha vida financeira.
  As transações estão divididas por ponto e virgula. A estrutura de cada mês é {DATA}-{TIPO}-{VALOR}-{CATEGORIA}. São elas:
  ${transactions
    .map(
      (transaction) =>
        `${transaction.date.toLocaleDateString("pt-BR")}-R$${transaction.amount}-${transaction.type}-${transaction.category}`,
    )
    .join(";")}
  `;

  const completion = await openAi.chat.completions.create({
    // model: "gpt-4o-mini",
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "system",
        content:
          "Você é um especialista em gestão e organização de finanças pessoais. Você auda as pessoas a organizar suas finanças e ajudar com dicas e orientações de como melhorar sua vida financeira.",
      },
      { role: "user", content },
    ],
  });

  // pegar o relatório gerado pelo ChatGPT e mandar para o usuário
  return completion.choices[0].message.content;
};
