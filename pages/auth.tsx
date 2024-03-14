import { useState } from "react";
import { useSupabaseClient, useUser } from "@supabase/auth-helpers-react";
import Image from "next/image";
import cn from "@/utils/cn";
import { FcGoogle } from "react-icons/fc";
import Redirect from "@/components/Redirect";

export default function Auth() {
  const supabaseClient = useSupabaseClient();
  const [isLoading, setLoading] = useState(true);
  const user = useUser();
  if (user) {
    return <Redirect to="/" />;
  }

  return (
    <div className="w-full flex flex-col gap-10 h-screen pt-10 p-5 overflow-hidden">
      {" "}
      <div className="flex flex-col gap-10">
        <div className="flex items-center gap-10">
          <Image
            src="/auth/landing.png"
            alt=""
            width={80}
            height={80}
            className={cn(
              "object object-cover bg0",
              isLoading ? "blur-2xl grayscale" : "blur-0 grayscale-0"
            )}
            onLoadingComplete={() => setLoading(false)}
          />
          <h1 className="font-black text-4xl">Daily Budget</h1>
        </div>
        <div>
          <h1 className="text-3xl font-semibold">
            Track and analyze your expense today.
          </h1>
          <p className="mt-5 text-gray-500">
            offer a way to keep track of your financial expenses in a convenient
            and organized way. It typically allows you to input information
            about your expenses and provides tools for analyzing and
            categorizing this information to help you better understand your
            spending habits.
          </p>
        </div>
        <button
          className="mx-auto w-full hover:ring-2 ring-1 rounded-sm ring-zinc-600 flex items-center gap-3 px-4 group"
          onClick={() => {
            supabaseClient.auth.signInWithOAuth({
              provider: "google",
            });
          }}
        >
          <FcGoogle className="h-8 w-8" />
          <span className="flex-1 group-hover:tracking-wider transitional-all">
            Login to continue
          </span>
        </button>
      </div>
    </div>
  );
}
