import { z } from "zod";

export const deteteTransactionSchema = z.object({
  transactionId: z.string().uuid(),
});

export type DeteteTransactionSchema = z.infer<typeof deteteTransactionSchema>;
