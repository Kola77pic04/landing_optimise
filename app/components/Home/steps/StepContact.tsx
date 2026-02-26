"use client";

import { useState } from "react";
import { QuizData } from "../../../types/quiz";
import { Icon } from "@iconify/react";

interface Props {
  quizData: QuizData;
  updateField: (field: keyof QuizData, value: string) => void;
  nextStep: () => void;
  prevStep: () => void;
}

export default function StepContact({ quizData, updateField, nextStep, prevStep }: Props) {
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};

    if (!quizData.firstname || quizData.firstname.trim().length < 3)
      newErrors.firstname = "Le prénom doit contenir au moins 3 caractères";
    if (!quizData.lastname || quizData.lastname.trim().length < 3)
      newErrors.lastname = "Le nom doit contenir au moins 3 caractères";
    if (!quizData.phone) newErrors.phone = "Téléphone requis";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log(quizData);
      nextStep();
    }
  };

  const renderInput = (field: keyof QuizData, placeholder: string, type = "text") => (
    <div>
      <input
        type={type}
        placeholder={placeholder}
        value={quizData[field]}
        onChange={(e) => updateField(field, e.target.value)}
        className={`w-full p-3 rounded-xl border ${
          errors[field] ? "border-red-500" : "border-slate-200"
        } focus:outline-none focus:ring-2 focus:ring-blue-500/20`}
      />
      {errors[field] && <p className="text-xs text-red-500 mt-1">{errors[field]}</p>}
    </div>
  );

  return (
    <div className="space-y-6 w-full">
      <button
        onClick={prevStep}
        className="text-slate-400 hover:text-slate-600 cursor-pointer flex items-center gap-1 text-xs font-medium"
      >
        <Icon icon="solar:arrow-left-linear" /> Retour
      </button>

      <h3 className="text-xl font-medium text-slate-900 mb-2">
        Vos informations personnelles
      </h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        {renderInput("firstname", "Prénom")}
        {renderInput("lastname", "Nom")}
        {renderInput("phone", "Téléphone", "tel")}

        <p className="text-xs text-slate-400 mt-2 text-center">
          🔒 Vos données personnelles restent strictement confidentielles.
        </p>

        <button
          type="submit"
          className="w-full cursor-pointer bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-medium"
        >
          Voir mon offre personnalisée
        </button>
      </form>
    </div>
  );
}
