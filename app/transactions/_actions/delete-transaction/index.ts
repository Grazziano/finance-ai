"use server";

import { db } from "@/app/_lib/prisma";
import { DeteteTransactionSchema } from "./schema";
import { revalidatePath } from "next/cache";

export const deteteTransaction = async ({
  transactionId,
}: DeteteTransactionSchema) => {
  await db.transaction.delete({
    where: {
      id: transactionId,
    },
  });
  revalidatePath("/transactions");
  revalidatePath("/");
};
