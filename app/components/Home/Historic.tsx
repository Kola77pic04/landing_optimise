"use client";

import { useEffect, useRef, useState } from "react";
import { useCountUp } from "../../hooks/useCountUp";
import { Stat } from "./Stat";

export default function Historic() {
    const sectionRef = useRef<HTMLElement | null>(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.disconnect(); // une seule fois
                }
            },
            { threshold: 0.3 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    function formatCount(value: number): string {
        if (value >= 1_000_000_000) {
            return `${Math.floor(value / 1_000_000_000)} Milliard`;
        }

        if (value >= 1_000_000) {
            return `${Math.floor(value / 1_000_000)} M`;
        }

        if (value >= 1_000) {
            return `${Math.floor(value / 1_000)} K`;
        }

        return value.toString();
    }


    const years = useCountUp(25, visible);
    const users = useCountUp(550000, visible);
    const clients = useCountUp(1200, visible);
    const interactions = useCountUp(1_000_000_000, visible);

    return (
        <section
            ref={sectionRef}
            className="bg-linear relative py-20 lg:py-24 px-4 lg:px-0"
            id="historics"
        >
            <div className="shape-layer"></div>
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 md:gap-16 gap-12 text-white text-xl md:text-lg">
                <Stat value={`${years}+`} label="années d'expertise dans l'engagement client" />
                <Stat value={`${users.toLocaleString()}+`} label="utilisateurs dans plus de 47 pays sur les cinq continents" />
                <Stat value={`${clients}+`} label="clients dans le monde entier" />
                <Stat value={formatCount(interactions)} label="interactions traitées chaque année" />
            </div>
        </section>
    );
}
