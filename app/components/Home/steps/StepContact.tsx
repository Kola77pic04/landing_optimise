"use client";

import { useState } from "react";
import { QuizData } from "../../../types/quiz";
import { Icon } from "@iconify/react";
import { parsePhoneNumberWithError } from 'libphonenumber-js/mobile';

interface Props {
  quizData: QuizData;
  updateField: (field: keyof QuizData, value: string) => void;
  nextStep: () => void;
  prevStep: () => void;
}

export default function StepContact({ quizData, updateField, nextStep, prevStep }: Props) {
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validatePhoneLive = (input: string): string | null => {
    if (!input) return null;
    if (input.length < 10) return null;

    const cleaned = input.replace(/\s+/g, '').replace(/[^0-9+]/g, '');
    const digitsOnly = cleaned.replace(/\D/g, '');

    // 1. Préfixe valide
    const startsWithValidPrefix =
      cleaned.startsWith('06') ||
      cleaned.startsWith('07') ||
      cleaned.startsWith('+336') ||
      cleaned.startsWith('+337');

    if (!startsWithValidPrefix) {
      return `Désolé le ${input} ne nous permet pas de vous adresser votre code de validation par SMS. Merci de saisir un numéro de mobile valide pour que nous puissions vous adresser votre SMS de confirmation.`;
    }

    // 2. Blocage : chiffres répétitifs (00000000 à 99999999)
    for (let i = 0; i <= 9; i++) {
      if (digitsOnly.includes(`${i}`.repeat(8))) {
        return `Merci de saisir un numéro de mobile valide si vous souhaitez réellement recevoir cette offre d'assurance que tout le monde s'arrache.`;
      }
    }

    // 3. Blocage : motifs 0x0x0x0x (x de 1 à 9)
    for (let i = 1; i <= 9; i++) {
      const pattern = new RegExp(`(0${i}){4,}`); // ex: 01010101, 02020202...
      if (pattern.test(digitsOnly)) {
        return `Merci de saisir un numéro de mobile valide si vous souhaitez réellement recevoir cette offre d'assurance que tout le monde s'arrache.`;
      }
    }

    // 4. Séquence interdite : 12345678
    if (digitsOnly.includes('12345678')) {
      return `Merci de saisir un numéro de mobile valide si vous souhaitez réellement recevoir cette offre d'assurance que tout le monde s'arrache.`;
    }

    return null;
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};

    if (!quizData.firstname || quizData.firstname.trim().length < 3) {
      newErrors.firstname = "Le prénom doit contenir au moins 3 caractères";
    }
    if (!quizData.lastname || quizData.lastname.trim().length < 3) {
      newErrors.lastname = "Le nom doit contenir au moins 3 caractères";
    }
    if (!quizData.phone) {
      console.log("Phone is required");
      newErrors.phone = "Téléphone requis";
    } else {

      // Autoriser uniquement les chiffres et un '+' au début
      let cleaned = quizData.phone.replace(/[^0-9+]/g, '');

      let formattedPhone = '';

      // Appliquer un formatage en fonction de la longueur et du préfixe
      if ((cleaned.startsWith('+33') && cleaned.length === 13)) {
        formattedPhone = cleaned.replace(
          /(\+33)(\d{1})(\d{2})(\d{2})(\d{2})(\d{2})/,
          '$1 $2 $3 $4 $5 $6'
        );
      } else if ((cleaned.startsWith('+33') && cleaned.length === 12)) {
        formattedPhone = cleaned.replace(
          /(\+33)(\d{1})(\d{1})(\d{2})(\d{2})(\d{2})(\d{2})?/,
          '$1 $2$3 $4 $5 $6 $7'
        );
      } else if ((cleaned.startsWith('33') && cleaned.length === 11)) {
        formattedPhone = cleaned.replace(
          /(33)(\d{1})(\d{2})(\d{2})(\d{2})(\d{2})/,
          '$1 $2 $3 $4 $5 $6'
        );
      } else if ((cleaned.startsWith('06') || cleaned.startsWith('07')) && cleaned.length === 10) {
        formattedPhone = cleaned.replace(
          /(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})/,
          '$1 $2 $3 $4 $5'
        );
      } else {
        formattedPhone = cleaned;
      }

      updateField('phone', formattedPhone);

      const error = validatePhoneLive(formattedPhone);
      if (error) {
        newErrors.phone = error;
      }

      if (formattedPhone.length < 10) {
        newErrors.phone = 'Au moins 10 chiffres requis';
      } else {
        const phoneNumber = parsePhoneNumberWithError(formattedPhone, 'FR');
        if (!phoneNumber.isValid()) {
          newErrors.phone = 'Veuillez entrer un numéro de téléphone valide';
        }
      }
    }
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
        className={`w-full p-3 rounded-xl border ${errors[field] ? "border-red-500" : "border-slate-200"
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
