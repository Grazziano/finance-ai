import { auth } from "@clerk/nextjs/server";
import Navbar from "../_components/navbar";
import { redirect } from "next/navigation";

const SubscriptionPage = async () => {
  const { userId } = await auth();

  if (!userId) {
    redirect("/login");
  }

  return (
    <>
      <Navbar />
      <div className="flex h-full w-full items-center justify-center">
        <h1 className="text-2xl font-bold">Subscription</h1>
      </div>
    </>
  );
};

export default SubscriptionPage;
