"use client";

import { Icon } from "@iconify/react";
import Link from "next/link";

interface Provider {
    title: string;
    img: string;
    month: string;
    year?: string | null;
    amount: string;
    flowRate: string;
    technology: string;
    phone: string;
    decoder?: string;
    free_family?: string;
    details?: string[];
}

interface Props {
    provider: Provider;
    handleSelectOffer: (offer: string) => void;
}

export default function ProviderCard({ provider, handleSelectOffer }: Props) {
    return (
        <div className={`p-8 rounded-3xl bg-slate-50 border border-slate-800 ${provider.title !== "Sosh" ? "lg:min-h-108 justify-between" : "lg:h-108 justify-between lg:justify-center"} flex flex-col`}>
            <div>
                <h3 className="flex justify-between lg:items-center text-lg font-medium text-slate-900 mb-2">
                    {provider.title}
                    <img src={provider.img} alt={`Logo ${provider.title}`} className="w-10 h-10 object-contain" />
                </h3>
                <p className="text-sm text-slate-600 mb-6">
                    {provider.free_family ? provider.free_family : "Pour les petits besoins."}
                </p>
                <div className="text-3xl font-semibold tracking-tighter text-slate-900 mb-8">
                    {provider.amount}
                    <span className="text-sm text-slate-600 font-normal">/{provider.month}</span>
                </div>
            </div>

            <ul className="space-y-4 mb-8 text-sm text-slate-600">
                {provider.flowRate && (
                    <li className="flex items-start gap-3">
                        <Icon icon="solar:check-circle-linear" className="text-blue-500 text-lg shrink-0" />
                        {provider.flowRate}
                    </li>
                )}
                {provider.technology && (
                    <li className="flex items-start gap-3">
                        <Icon icon="solar:check-circle-linear" className="text-blue-500 text-lg shrink-0" />
                        {provider.technology}
                    </li>
                )}
                {provider.phone && (
                    <li className="flex items-start gap-3">
                        <Icon icon="solar:check-circle-linear" className="text-blue-500 text-lg shrink-0" />
                        {provider.phone}
                    </li>
                )}
                {provider.decoder && (
                    <li className="flex items-start gap-3">
                        <Icon icon="solar:check-circle-linear" className="text-blue-500 text-lg shrink-0" />
                        {provider.decoder}
                    </li>
                )}
                {provider.details &&
                    provider.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                            <Icon icon="solar:check-circle-linear" className="text-blue-500 text-lg shrink-0" />
                            {detail}
                        </li>
                    ))}
            </ul>

            <Link
                onClick={() => handleSelectOffer(provider.title)} // <- on envoie le nom du provider sélectionné
                href="#form-section"
                className="block w-full py-3 px-4 rounded-xl border border-slate-700 text-center text-sm font-medium hover:bg-slate-200 transition-colors"
            >
                Obtenir les détails
            </Link>
        </div>
    );
}
