"use client";

import { Icon } from "@iconify/react";
import ProviderCard from "./ProviderCard";
import { useRef, useState, useEffect } from "react";

interface Props {
    handleSelectOffer: (offer: string) => void;
}

const providers = [
    {
        title: "Free",
        img: "./assets/free.webp",
        month: "mois",
        year: "12 mois",
        details: [],
        amount: "23,99€",
        flowRate: "5 Gb/s",
        technology: "Fibre / Wi-Fi 7 + répéteur",
        phone: "Fixes & mobile illimités",
        decoder: "",
        free_family: "Économisez jusqu’à 480€",
    },
    {
        title: "Sosh",
        img: "./assets/sosh.webp",
        details: [],
        month: "mois",
        year: null,
        amount: "24,99€",
        flowRate: "2 Gb/s",
        technology: "Livebox S avec le Wifi 7",
        phone: "Appels illimités vers 100 destinations",
        decoder: "Ultra HD 4K en option"
    },
    {
        title: "Bouygues",
        img: "./assets/bouygues.webp",
        details: [],
        month: "mois",
        year: "12 mois",
        amount: "25,99€",
        flowRate: "8 Gb/s",
        technology: "WiFi 7 tri-bande",
        phone: "Fixes (+110 pays)",
        decoder: "180 chaînes (option)",
    },
    {
        title: "SFR",
        img: "./assets/sfr.webp",
        details: [],
        month: "mois",
        year: "12 mois",
        amount: "29,99€",
        flowRate: "2 Gb/s",
        technology: "Fibre / Wi-Fi 6 + répéteur",
        phone: "Fixes (+100 pays)",
        decoder: "Oui (160 chaînes)",
    },
    {
        title: "Orange",
        img: "./assets/orange.webp",
        month: "mois",
        year: "12 mois",
        details: [],
        amount: "29,99€",
        flowRate: "2 Gb/s",
        technology: "Fibre / Wi-Fi 7",
        phone: "Fixes & mobile illimitée",
        decoder: "Oui (200 chaînes)",
    },
    // Tu peux ajouter d'autres offres ici
];

export default function ProviderList({ handleSelectOffer }: Props) {
    const [showArrows, setShowArrows] = useState(false);
    const carouselRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (providers.length > 4) {
            setShowArrows(true);
        }
    }, []);

    const scroll = (direction: "left" | "right") => {
        if (!carouselRef.current) return;
        const width = carouselRef.current.offsetWidth; // largeur visible
        const scrollAmount = width * 0.8; // scroll de 80% de la largeur visible

        if (direction === "left") {
            carouselRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
        } else {
            carouselRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
        }
    };

    const getMonth = (): string => new Intl.DateTimeFormat("fr-FR", { month: "long" }).format(new Date());
    const getYear = (): string => new Intl.DateTimeFormat("fr-FR", { year: "numeric" }).format(new Date());

    return (
        <div className="pb-16 pt-14 bg-white/50 border-y border-slate-200/50 backdrop-blur-sm px-6 relative">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-2xl text-center text-stone-700 lg:text-3xl font-medium mb-8">
                    Nos meilleures offres de <strong>{getMonth()} <span className="text-blue-600">{getYear()}</span></strong> :
                </h2>

                <div className="relative">
                    {showArrows && (
                        <button
                            onClick={() => scroll("left")}
                            className="hidden lg:block flex items-center justify-center w-9 h-9 cursor-pointer absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition"
                        >
                            <Icon icon="solar:arrow-left-linear" />
                        </button>
                    )}

                    <div
                        ref={carouselRef}
                        className="flex flex-col lg:flex-row gap-6 overflow-x-auto overflow-hidden scrollbar-hide scroll-smooth px-2 custom"
                    >
                        {providers.map((p, idx) => (
                            <div key={`${p.title}-${idx}`} className={`flex-shrink-0 h-full ${providers.length > 4 ? "lg:w-1/4" : ""}`}>
                                <ProviderCard provider={p} handleSelectOffer={handleSelectOffer} />
                            </div>
                        ))}
                    </div>

                    {showArrows && (
                        <button
                            onClick={() => scroll("right")}
                            className="hidden lg:block flex items-center justify-center w-9 h-9 cursor-pointer absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition"
                        >
                            <Icon icon="solar:arrow-right-linear" />
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}
