"use client";

import { Icon } from "@iconify/react";

export default function Credibility() {
  return (
    
        <section className="py-20 px-6 border-t border-slate-200/50">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900 mb-2">Pourquoi nous choisir ?</h2>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-8 gap-x-12">
                    <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center shrink-0">
                            <Icon icon="solar:check-circle-linear" className="text-green-600 text-xl"></Icon>
                        </div>
                        <div>
                            <h3 className="text-lg font-medium text-slate-900 mb-1">Débit garanti</h3>
                            <p className="text-sm lg:text-[15px] text-slate-700 font-light">Ce que nous promettons est ce que vous obtenez. Fini les débits théoriques jamais atteints.</p>
                        </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center shrink-0">
                            <Icon icon="solar:check-circle-linear" className="text-green-600 text-xl"></Icon>
                        </div>
                        <div>
                            <h3 className="text-lg font-medium text-slate-900 mb-1">Aucune surprise sur la facture</h3>
                            <p className="text-sm lg:text-[15px] text-slate-700 font-light">Des prix clairs, fixes et transparents dès le premier jour de l'abonnement.</p>
                        </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center shrink-0">
                            <Icon icon="solar:check-circle-linear" className="text-green-600 text-xl"></Icon>
                        </div>
                        <div>
                            <h3 className="text-lg font-medium text-slate-900 mb-1">Accompagnement personnalisé</h3>
                            <p className="text-sm lg:text-[15px] text-slate-700 font-light">Un conseiller dédié pour vous orienter vers l'offre la plus adaptée à votre consommation réelle.</p>
                        </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center shrink-0">
                            <Icon icon="solar:check-circle-linear" className="text-green-600 text-xl"></Icon>
                        </div>
                        <div>
                            <h3 className="text-lg font-medium text-slate-900 mb-1">Migration simplifiée</h3>
                            <p className="text-sm lg:text-[15px] text-slate-700 font-light">On s'occupe de la résiliation auprès de votre ancien opérateur. Vous ne gérez rien.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

  );
}
