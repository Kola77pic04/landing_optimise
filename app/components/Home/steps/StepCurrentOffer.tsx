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

export default function StepCurrentOffer({ quizData, updateField, nextStep, prevStep }: Props) {
  const options = [
    { label: "Moins de 40€", value: "moins-40" },
    { label: "40€ – 60€", value: "40-60" },
    { label: "60€ – 90€", value: "60-90" },
    { label: "Plus de 90€", value: "plus-90" },
  ];

  const handleSelect = (value: string) => {
    updateField("budget", value);
    nextStep();
  };

  return (
    <div className="space-y-6 w-full">
      <button onClick={prevStep} className="text-slate-400 hover:text-slate-600 cursor-pointer flex items-center gap-1 text-xs font-medium mb-4">
        <Icon icon="solar:arrow-left-linear" /> Retour
      </button>
      <h3 className="text-xl font-medium text-slate-900 mb-2 lg:mb-6 lg:text-center">
        Quel est votre budget mensuel idéal ?
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {options.map((opt) => (
          <OptionCard
            key={opt.value}
            name="budget"
            label={opt.label}
            value={opt.value}
            selected={quizData.budget}
            onClick={() => handleSelect(opt.value)}
          />
        ))}
      </div>
    </div>
  );
}
