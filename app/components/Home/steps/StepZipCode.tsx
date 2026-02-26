"use client";

import { useEffect, useState } from "react";
import { QuizData } from "../../../types/quiz";
import { Icon } from "@iconify/react";
import Link from "next/link";

interface Props {
  quizData: QuizData;
  updateField: (field: keyof QuizData, value: string) => void;
  nextStep: () => void;
  prevStep: () => void;
}

export default function StepZipCode({ quizData, updateField, nextStep, prevStep }: Props) {
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const zipRegex = /^[0-9]{5}$/;

    if (!quizData.address || !zipRegex.test(quizData.address)) {
      setError("Veuillez saisir un code postal valide (5 chiffres)");
      return;
    }
    setError("");
    nextStep();
  };

  return (
    <div className="space-y-6">
      <button
        onClick={prevStep}
        className="text-slate-400 hover:text-slate-600 cursor-pointer flex items-center gap-1 text-xs font-medium"
      >
        <Icon icon="solar:arrow-left-linear" /> Retour
      </button>

      <h3 className="text-xl font-medium text-slate-900 mb-2">
        Quel est votre code postal ?
      </h3>
      <p className="text-xs text-slate-500 mb-4">
        🔒 Vos données personnelles restent strictement confidentielles.
      </p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Code postal"
          value={quizData.address}
          maxLength={5}
          onChange={(e) => updateField("address", e.target.value)}
          className={`w-full p-3 rounded-xl border ${
            error ? "border-red-500" : "border-slate-200"
          } focus:outline-none focus:ring-2 focus:ring-blue-500/20`}
        />
        {error && <p className="text-xs text-red-500">{error}</p>}

        <p className="text-xs text-slate-400 mt-2">
          Vos données sont collectées afin d'étudier votre éligibilité aux offres de nos <span className="">partenaires</span> et de vous transmettre une ou plusieurs propositions commerciales. Pour en savoir plus, consultez notre <Link href="#" className="font-medium underline cursor-pointer hover:text-blue-500">politique de confidentialité</Link>.
        </p>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-medium"
        >
          Suivant
        </button>
      </form>
    </div>
  );
}
