import { mdiFormatQuoteCloseOutline } from '@mdi/js';
import Icon from '@mdi/react';

export default function SocialProof() {
    return (
        <>
            <section id="impact" className="bg-[#f4f4f4] border-b border-slate-100 py-16 lg:pt-14 lg:pb-18">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center max-w-2xl mx-auto mb-16 lg:mb-10 animate-fade-up">
                        <h2 className="text-3xl font-semibold tracking-tight text-[#0f172a] mb-4">L'impact de l'IA sur la relation client</h2>
                        <p className="text-gray-600">Découvrez ce que les leaders du secteur disent de notre plateforme omnicanale.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6 animate-fade-up">
                        <div className="hover:bg-slate-50 hover:duration-300 hover:ease-linear transition-all bg-white p-8 rounded-2xl shadow-sm border flex flex-col justify-between border-gray-100 hover:shadow-md transition-shadow delay-100">
                            <div className="flex items-start justify-between mb-6">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-slate-700 border border-slate-600"></div>
                                    <div>
                                        <p className="text-sm font-semibold">Thomas D.</p>
                                        <p className="text-[10px] text-slate-700 uppercase">Directeur Relation Client</p>
                                    </div>
                                </div>
                                    <Icon path={mdiFormatQuoteCloseOutline} size={1.5} className='text-[#24B7C3]' />
                            </div>
                            <p className="text-sm text-slate-600 leading-relaxed mb-6">"L'automatisation intelligente de Vocalcom a absorbé <span className="text-[#00bfc3] font-medium">40% de nos appels entrants</span> dès le premier mois. Nos agents ne traitent plus que les cas à forte valeur ajoutée."</p>
                            <div className="pt-6 border-t border-slate-200">
                                <p className="text-3xl font-bold text-[#24B7C3]">-35%</p>
                                <p className="text-[10px] text-slate-400 mt-1 uppercase tracking-wide">De coûts opérationnels</p>
                            </div>
                        </div>

                        <div className="hover:bg-slate-50 hover:duration-300 hover:ease-linear transition-all bg-white p-8 rounded-2xl shadow-sm border flex flex-col justify-between border-gray-100 hover:shadow-md transition-shadow delay-100">
                            <div className="flex items-start justify-between mb-6">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-slate-700 border border-slate-600"></div>
                                    <div>
                                        <p className="text-sm font-semibold">Sarah L.</p>
                                        <p className="text-[10px] text-slate-700 uppercase">COO, Fintech</p>
                                    </div>
                                </div>
                                    <Icon path={mdiFormatQuoteCloseOutline} size={1.5} className='text-[#24B7C3]' />
                            </div>
                            <p className="text-sm text-slate-600 leading-relaxed mb-6">"La solution Omnicanale a permis d'unifier nos 5 canaux. Le contexte client remonte instantanément, ce qui a drastiquement réduit notre temps moyen de traitement."</p>
                            <div className="pt-6 border-t border-slate-200">
                                <p className="text-3xl font-bold text-blue-400">x2.5</p>
                                <p className="text-[10px] text-slate-400 mt-1 uppercase tracking-wide">Productivité Agents</p>
                            </div>
                        </div>

                        <div className="hover:bg-slate-50 hover:duration-300 hover:ease-linear transition-all bg-white p-8 rounded-2xl shadow-sm border flex flex-col justify-between border-gray-100 hover:shadow-md transition-shadow delay-100">
                            <div className="flex items-start justify-between mb-6">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-slate-700 border border-slate-600"></div>
                                    <div>
                                        <p className="text-sm font-semibold">Marc R.</p>
                                        <p className="text-[10px] text-slate-700 uppercase">Responsable IT</p>
                                    </div>
                                </div>
                                    <Icon path={mdiFormatQuoteCloseOutline} size={1.5} className='text-[#24B7C3]' />
                            </div>
                            <p className="text-sm text-slate-600 leading-relaxed mb-6">"L'implémentation a été transparente. Pas de hardware, tout dans le cloud. L'IA s'adapte en temps réel aux pics de charge sans que nous ayons à intervenir."</p>
                            <div className="pt-6 border-t border-slate-200">
                                <p className="text-3xl font-bold text-[#904b99]">99.99%</p>
                                <p className="text-[10px] text-slate-400 mt-1 uppercase tracking-wide">Disponibilité (SLA)</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
}