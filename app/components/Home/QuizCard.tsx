"use client";

import { QuizData } from "../../types/quiz";
import StepZipCode from "./steps/StepZipCode";
import StepEquiment from "./steps/StepEquiment";
import StepCurrentOffer from "./steps/StepCurrentOffer";
import StepProvider from "./steps/StepProvider";
import StepContact from "./steps/StepContact";
import FinishStep from "./steps/FinishStep";
import { useEffect, useState } from "react";

interface Props {
  currentStep: number;
  totalSteps: number;
  nextStep: () => void;
  prevStep: () => void;
  quizData: QuizData;
  updateField: (field: keyof QuizData, value: string) => void;
}

export default function QuizCard({
  currentStep,
  totalSteps,
  nextStep,
  prevStep,
  quizData,
  updateField,
}: Props) {
  const progress = (currentStep / totalSteps) * 100;
  const [people, setPeople] = useState<number>(25);
  
  useEffect(() => {
    setPeople(Math.floor(Math.random() * (151 - 25 + 1)) + 25)
  }, [])

  return (
    <div className="bg-white rounded-[2rem] shadow-xl lg:shadow-none shadow-slate-200/50 border lg:border-none border-slate-100 overflow-hidden">
      {currentStep < 6 && <div className="bg-green-50 p-2 flex items-center gap-2 text-sm justify-center rounded-full m-2 border-slate-200 border lg:mt-0 lg:w-5/6 lg:mx-auto"><span className="font-bold text-green-500 flex items-center gap-2">
        <span className="p-1.5 animate-pulse rounded-full bg-green-500"></span>
        {people} personnes
      </span> comparent en ce moment</div>}
      {currentStep <= 5 && (
        <div className="bg-slate-50/50 lg:bg-transparent lg:border-none border-b border-slate-100 px-8 py-5 flex items-center justify-between">
          <span className="text-xs font-medium tracking-tight text-slate-500 uppercase">
            Étape {currentStep}/{totalSteps}
          </span>
          <div className="w-32 h-1.5 bg-slate-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-blue-500 transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      )}

      <div className={`p-8 lg:pt-4 ${currentStep === 6 ? "flex flex-col items-center justify-center" : ""}`}>
        {currentStep === 1 && <StepProvider quizData={quizData} updateField={updateField} nextStep={nextStep} />}
        {currentStep === 2 && <StepEquiment quizData={quizData} updateField={updateField} nextStep={nextStep} prevStep={prevStep} />}
        {currentStep === 3 && <StepCurrentOffer quizData={quizData} updateField={updateField} nextStep={nextStep} prevStep={prevStep} />}
        {currentStep === 4 && <StepZipCode quizData={quizData} updateField={updateField} nextStep={nextStep} prevStep={prevStep} />}
        {currentStep === 5 && <StepContact quizData={quizData} updateField={updateField} nextStep={nextStep} prevStep={prevStep} />}
        {currentStep === 6 && <FinishStep />}
      </div>
    </div>
  );
}
