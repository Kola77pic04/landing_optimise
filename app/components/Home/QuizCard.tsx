"use client";

import { QuizData } from "../../types/quiz";
import StepZipCode from "./steps/StepZipCode";
import StepEquiment from "./steps/StepEquiment";
import StepCurrentOffer from "./steps/StepCurrentOffer";
import StepProvider from "./steps/StepProvider";
import StepContact from "./steps/StepContact";
import FinishStep from "./steps/FinishStep";

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

  return (
    <div className="bg-white rounded-[2rem] shadow-xl lg:shadow-none shadow-slate-200/50 border lg:border-none border-slate-100 overflow-hidden">
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

      <div className={`p-8 ${currentStep === 6 ? "flex flex-col items-center justify-center" : ""}`}>
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
