"use client";

import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";

export default function HeroHome() {
  const [search, setSearch] = useState<string | null>(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setSearch(params.get("utm_term"));
  }, []);

    useEffect(() => {
        localStorage.removeItem("selectedOffer");
    }, []);

    return (
        <>
            <section className="pt-32 pb-16 md:pt-40 md:pb-24 px-6 relative">
                <div className="max-w-5xl mx-auto text-center">
                    {search && <h2 className="mb-8 text-xl lg:text-3xl font-medium text-center">{search}</h2>}
                    {/* Social Proof Pill */}
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-blue-200/50 bg-blue-50/50 text-blue-700 text-xs font-medium mb-8 shadow-sm backdrop-blur-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></span>
                        +2 500 clients déjà accompagnés
                    </div>

                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-900 mb-6 leading-[1.15] max-w-4xl mx-auto">
                        Passez à la fibre plus rapide,<br className="hidden md:block" />
                        plus stable, <span className="text-blue-600">plus économique.</span>
                    </h2>

                    <p className="text-base md:text-lg text-slate-500 mb-10 max-w-2xl mx-auto leading-relaxed font-light">
                        Comparez votre offre actuelle et découvrez si vous pouvez obtenir mieux pour moins cher.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
                        <a href="#form-section" className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 rounded-full bg-slate-900 hover:bg-slate-800 text-white text-sm font-medium transition-all shadow-lg shadow-slate-900/20 hover:shadow-xl hover:shadow-slate-900/30 hover:-translate-y-0.5 active:translate-y-0">
                            Tester mon éligibilité
                            <Icon icon="solar:arrow-right-linear" className="text-lg"></Icon>
                        </a>
                    </div>

                    {/* Abstract Illustration (Box + Waves) */}
                    <div className="lg:hidden relative w-full max-w-lg mx-auto h-48 md:h-64 flex items-center justify-center mt-12 overflow-hidden">
                        <div className="absolute w-[100%] h-[100%] border border-blue-200 rounded-[3rem] animate-[ping_3s_cubic-bezier(0,0,0.2,1)_infinite] opacity-20"></div>
                        <div className="absolute w-[80%] h-[80%] border border-blue-400 rounded-[2.5rem] animate-[ping_3s_cubic-bezier(0,0,0.2,1)_infinite_0.5s] opacity-40"></div>
                        <div className="absolute w-[60%] h-[60%] border border-blue-500 rounded-[2rem] animate-[ping_3s_cubic-bezier(0,0,0.2,1)_infinite_1s] opacity-60"></div>
                        <div className="relative z-10 w-48 h-16 md:w-56 md:h-20 bg-white rounded-2xl shadow-xl shadow-blue-900/5 border border-slate-100 flex items-center px-6 justify-between">
                            <div className="flex gap-2">
                                <div className="w-2 h-2 rounded-full bg-slate-200"></div>
                                <div className="w-2 h-2 rounded-full bg-slate-200"></div>
                                <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]"></div>
                            </div>
                            <Icon icon="solar:wi-fi-router-minimalistic-linear" className="text-2xl text-slate-300"></Icon>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
}