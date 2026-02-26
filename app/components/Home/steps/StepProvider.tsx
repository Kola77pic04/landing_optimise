"use client";

import OptionCard from "../OptionCard";
import { QuizData } from "../../../types/quiz";
import { useState, useEffect } from "react";

interface Props {
  quizData: QuizData;
  updateField: (field: keyof QuizData, value: string) => void;
  nextStep: () => void;
}

export default function StepProvider({ quizData, updateField, nextStep }: Props) {
  const providers = ["orange", "sfr", "bouygues", "free", "autre", "aucune"];

  // Filtrer l’offre déjà sélectionnée
  const availableProviders = providers.filter(
    (p) => p.toLowerCase() !== quizData?.selectedOffer?.toLowerCase()
  );

  const handleSelect = (value: string) => {
    updateField("provider", value);
    nextStep();
  };

  return (
    <div className="space-y-6 w-full">
      <h3 className="text-xl font-medium text-slate-900 lg:text-center">
        Quelle est votre box Internet actuelle ?
      </h3>
      <div className="grid grid-cols-2 gap-3">
        {availableProviders.map((p) => (
          <OptionCard
            key={p}
            name="provider"
            label={p.toUpperCase()}
            value={p}
            selected={quizData.provider || ""}
            onClick={() => handleSelect(p)}
          />
        ))}
      </div>
    </div>
  );
}
