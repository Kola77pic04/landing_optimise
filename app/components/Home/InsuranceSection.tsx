"use client";

import { Icon } from "@iconify/react";

export default function InsuranceSection() {
    return (
        <>
            <section className="py-16 bg-white/50 border-y border-slate-200/50 backdrop-blur-sm px-6">
                <div className="max-w-5xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                        <div className="flex flex-col items-center text-center">
                            <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
                                <Icon icon="solar:bolt-linear" className="text-2xl" />
                            </div>
                            <h3 className="text-xl font-semibold tracking-tight text-slate-900 mb-2">Installation rapide</h3>
                            <p className="text-sm text-slate-700 font-light">Des techniciens disponibles sous 48h pour un raccordement sans coupure.</p>
                        </div>

                        <div className="flex flex-col items-center text-center">
                            <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
                                <Icon icon="solar:shield-check-linear" className="text-2xl" />
                            </div>
                            <h3 className="text-xl font-semibold tracking-tight text-slate-900 mb-2">Connexion stable garantie</h3>
                            <p className="text-sm text-slate-700 font-light">Profitez d'un débit constant, même avec plusieurs appareils connectés simultanément.</p>
                        </div>

                        <div className="flex flex-col items-center text-center">
                            <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
                                <Icon icon="solar:headphones-round-sound-linear" className="text-2xl" />
                            </div>
                            <h3 className="text-xl font-semibold tracking-tight text-slate-900 mb-2">Support réactif</h3>
                            <p className="text-sm text-slate-700 font-light">Une équipe d'experts basée en France, joignable facilement en cas de besoin.</p>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
}