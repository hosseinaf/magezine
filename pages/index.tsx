import Link from "next/link";
import { useState } from "react";
import { useRouter } from "../node_modules/next/router";
import en from "../locales/en";
import fa from "../locales/fa";
export default function Home() {
   
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : fa;
  return (
    <div>
      <main>
         
        <div className="hero">
           
          
          <section className="pt-8 pb-20 flex flex-col items-center">
            
            <h1 className="text-5xl text-white text-shadow font-bold px-8 text-center">
              {t.hero}
            </h1>
            <hr className="mt-16 mb-8 w-32 border-t-2 border-white" />
            <p className="text-white text-shadow px-8">{t.description}</p>
          </section>
        </div>
     
      </main>
    </div>
  );
}
