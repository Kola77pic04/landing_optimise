"use client";

interface Props {
    name: string;
    label: string;
    value: string;
    selected: string;
    onClick?: () => void; // <- ajouter cette ligne
}

export default function OptionCard({ name, label, value, selected, onClick }: Props) {
    const isSelected = selected === value;

    return (
        <div
            onClick={onClick} // <- utiliser onClick ici
            className={`cursor-pointer p-4 rounded-2xl border border-slate-200 font-medium
                  ${isSelected ? "border-blue-500 bg-blue-500/20 ring-1 ring-blue-500" : "bg-white"}
                  hover:border-slate-300 transition-all text-center`}
        >
            {label}
        </div>
    );
}
