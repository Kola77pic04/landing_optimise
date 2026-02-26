import { mdiPhone, mdiRobot, mdiAccountGroup, mdiSync, mdiChartLine } from "@mdi/js";
import Icon from "@mdi/react";
import Link from "next/link";

export default function AIFirst() {
    return (
        <section className="grid grid-cols-1 gap-6 max-w-7xl pb-16 lg:pt-4 lg:pb-18 mx-auto px-6">
            <div className="mb-8 lg:mb-6">
                <h2 className="text-3xl md:text-4xl md:text-center font-semibold mt-3 text-slate-900 tracking-tight">L’IA est au centre de l’expérience client, des opérations et de l’automatisation.</h2>
                <p className="sm:text-lg md:text-center mt-3 text-slate-900 tracking-tight"> L’objectif : offrir une expérience client plus rapide et plus personnalisée, tout en augmentant l’efficacité des agents humains et en réduisant les coûts.</p>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                <div className="bg-[#f6f7fc] lg:col-span-2 rounded-2xl p-4 lg:p-5 border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-500 group overflow-hidden relative">
                    <div className="absolute top-0 right-0 w-64 h-64 opacity-5 rounded-full blur-3xl -mr-16 -mt-16 transition-opacity group-hover:opacity-10"></div>

                    <div className="relative z-10">
                        <div className="w-12 h-12 rounded-xl bg-[#24B7C3]/60 border border-slate-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                            <Icon path={mdiPhone} className="w-6 h-6 lg:w-5 lg:h-5 text-black/80" />
                        </div>
                        <p className="text-sm lg:text-xl text-slate-800 leading-relaxed max-w-md">L’IA est le premier point de contact pour les clients (chatbots, voicebots, messaging, routage intelligent)</p>
                    </div>
                </div>
                <div className="bg-[#f6f7fc] rounded-2xl p-4 lg:p-5 border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-500 group overflow-hidden relative">
                    <div className="absolute top-0 right-0 w-64 h-64 opacity-5 rounded-full blur-3xl -mr-16 -mt-16 transition-opacity group-hover:opacity-10"></div>

                    <div className="relative z-10">
                        <div className="w-12 h-12 rounded-xl bg-[#24B7C3]/60 border border-slate-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                            <Icon path={mdiRobot} className="w-6 h-6 lg:w-5 lg:h-5 text-black/80" />
                        </div>
                        <p className="text-sm lg:text-[16px] text-slate-800 leading-relaxed max-w-md">L’IA traite de manière autonome les demandes courantes, avec une escalade fluide vers des agents humains uniquement lorsque cela est nécessaire.</p>
                    </div>
                </div>
                <div className="bg-[#f6f7fc] rounded-2xl p-4 lg:p-5 border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-500 group overflow-hidden relative">
                    <div className="absolute top-0 right-0 w-64 h-64 opacity-5 rounded-full blur-3xl -mr-16 -mt-16 transition-opacity group-hover:opacity-10"></div>

                    <div className="relative z-10">
                        <div className="w-12 h-12 rounded-xl bg-[#24B7C3]/60 border border-slate-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                            <Icon path={mdiAccountGroup} className="w-6 h-6 lg:w-5 lg:h-5 text-black/80" />
                        </div>
                        <p className="text-sm lg:text-[16px] text-slate-800 leading-relaxed max-w-md">L’IA augmente les agents les performances des humains, en leur fournissant des suggestions en temps réel, des synthèses, des indicateurs de sentiment et des automatisations de workflows.</p>
                    </div>
                </div>
                <div className="bg-[#f6f7fc] lg:col-span-2 rounded-2xl p-4 lg:p-5 border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-500 group overflow-hidden relative">
                    <div className="absolute top-0 right-0 w-64 h-64 opacity-5 rounded-full blur-3xl -mr-16 -mt-16 transition-opacity group-hover:opacity-10"></div>

                    <div className="relative z-10">
                        <div className="w-12 h-12 rounded-xl bg-[#24B7C3]/60 border border-slate-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                            <Icon path={mdiSync} className="w-6 h-6 lg:w-5 lg:h-5 text-black/80" />
                        </div>
                        <p className="text-sm lg:text-[16px] text-slate-800 leading-relaxed">Elle unifie les interactions sur la voix, le chat, l’email et la messagerie au sein d’un système intelligent unique, capable de mémoriser et de comprendre le contexte client et de personnaliser chacune de ses réponses.</p>
                    </div>
                </div>
                <div className="bg-[#f6f7fc] md:col-span-2 rounded-2xl p-4 lg:p-5 border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-500 group overflow-hidden relative">
                    <div className="absolute top-0 right-0 w-64 h-64 opacity-5 rounded-full blur-3xl -mr-16 -mt-16 transition-opacity group-hover:opacity-10"></div>

                    <div className="relative z-10">
                        <div className="w-12 h-12 rounded-xl bg-[#24B7C3]/60 border border-slate-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                            <Icon path={mdiChartLine} className="w-6 h-6 lg:w-5 lg:h-5 text-black/80" />
                        </div>
                        <p className="text-sm lg:text-[16px] text-slate-800 leading-relaxed">Quality Monitoring : L’IA exploite 100% de vos échanges clients et vous permet de connaître leur niveau de satisfaction et ce qui compte pour eux</p>
                    </div>
                </div>
            </div>
            <div className="bg-white shadow lg:shadow-xl border-gray-200 flex flex-col md:items-center gap-4 lg:gap-6 md:mt-6 border-[1px] px-4 py-6 md:p-5 rounded-2xl">
                <p className="text-center font-semibold text-slate-900 text-xl md:text-3xl lg:text-4xl">Augmentez la satisfaction de vos clients et vos ventes</p>
                <Link href="#demo" className="p-4 md:px-10 md:py-3.5 text-center rounded-full md:w-auto md:text-lg md:uppercase bg-gradient-to-r from-slate-600 to-black/80 text-white text-xs font-medium hover:bg-slate-800 transition-all hover:shadow-lg transform hover:-translate-y-0.5">
                    Demandez une démo
                </Link>
            </div>
        </section>
    );
}
