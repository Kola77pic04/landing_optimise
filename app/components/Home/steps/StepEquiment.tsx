"use client";

import OptionCard from "../OptionCard";
import { QuizData } from "../../../types/quiz";
import { Icon } from "@iconify/react";

interface Props {
  quizData: QuizData;
  updateField: (field: keyof QuizData, value: string) => void;
  nextStep: () => void;
  prevStep: () => void;
}

export default function StepEquiment({ quizData, updateField, nextStep, prevStep }: Props) {
  const options = [
    { label: "Oui", value: "oui" },
    { label: "Non", value: "non" },
    { label: "Je ne sais pas", value: "nsp" },
  ];

  const handleSelect = (value: string) => {
    updateField("eligible", value);
    nextStep();
  };

  return (
    <div className="space-y-6 w-full">
      <button onClick={prevStep} className="text-slate-400 hover:text-slate-600 cursor-pointer flex items-center gap-1 text-xs font-medium mb-4">
        <Icon icon="solar:arrow-left-linear" /> Retour
      </button>
      <h3 className="text-xl font-medium text-slate-900 mb-2 lg:mb-6 lg:text-center">
        Êtes-vous déjà éligible à la fibre ?
      </h3>
      <div className="flex flex-col gap-3">
        {options.map((opt) => (
          <OptionCard
            key={opt.value}
            name="eligible"
            label={opt.label}
            value={opt.value}
            selected={quizData.eligible}
            onClick={() => handleSelect(opt.value)}
          />
        ))}
      </div>
    </div>
  );
}
