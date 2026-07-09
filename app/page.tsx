"use client";

import { useTRPC } from "@/trpc/client";
import { useQuery } from "@tanstack/react-query";

const Page = () => {
  const trpc = useTRPC();
  return(
    <div className = "flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black" >
      {/* { JSON.stringify(users) } */}
    </div >
  );
};

  
export default Page;