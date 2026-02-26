"use client";

import { Icon } from "@iconify/react";

export default function Testimonials() {
    return (
        <>
            <section className="py-20 px-6 bg-slate-100/50 border-t border-slate-200/50">
                <div className="max-w-5xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Testimonial 1 */}
                        <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
                            <div className="flex gap-1 text-yellow-400 mb-4">
                                <Icon icon="solar:star-bold" className="text-lg"></Icon>
                                <Icon icon="solar:star-bold" className="text-lg"></Icon>
                                <Icon icon="solar:star-bold" className="text-lg"></Icon>
                                <Icon icon="solar:star-bold" className="text-lg"></Icon>
                                <Icon icon="solar:star-bold" className="text-lg"></Icon>
                            </div>
                            <p className="text-slate-600 text-sm lg:text-[15px] leading-relaxed mb-6 font-light">
                                "Je payais 60€/mois pour une connexion qui sautait tous les soirs. Ce test m'a permis de trouver une offre à 45€ beaucoup plus stable. L'installation a été réglée en 3 jours."
                            </p>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-xs font-medium">LC</div>
                                <div>
                                    <div className="text-sm lg:text-[15px] font-medium text-slate-900">Laurent C.</div>
                                    <div className="text-xs text-slate-700">Télétravailleur</div>
                                </div>
                            </div>
                        </div>

                        {/* Testimonial 2 */}
                        <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
                            <div className="flex gap-1 text-yellow-400 mb-4">
                                <Icon icon="solar:star-bold" className="text-lg"></Icon>
                                <Icon icon="solar:star-bold" className="text-lg"></Icon>
                                <Icon icon="solar:star-bold" className="text-lg"></Icon>
                                <Icon icon="solar:star-bold" className="text-lg"></Icon>
                                <Icon icon="solar:star-bold" className="text-lg"></Icon>
                            </div>
                            <p className="text-slate-600 text-sm lg:text-[15px] leading-relaxed mb-6 font-light">
                                "Processus super fluide ! Le site ne pousse pas à prendre l'offre la plus chère mais vraiment celle qui correspond au besoin. On s'est occupé de ma résiliation, un vrai soulagement."
                            </p>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-xs font-medium">MA</div>
                                <div>
                                    <div className="text-sm lg:text-[15px] font-medium text-slate-900">Marie A.</div>
                                    <div className="text-xs text-slate-700">Mère de famille</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </>
    );
}