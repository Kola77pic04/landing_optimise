"use client";

import { useEffect, useState } from "react";
import QuizCard from "./QuizCard";
import { QuizData } from "../../types/quiz";
import ProviderList from "./ProviderList";

export default function QuizSection() {
    const totalSteps = 6;
    const [currentStep, setCurrentStep] = useState(1);
    const [quizData, setQuizData] = useState<QuizData>({
        provider: "",
        eligible: "",
        budget: "",
        address: "",
        firstname: "",
        lastname: "",
        phone: "",
        selectedOffer: "",
    });

    const updateField = (field: keyof QuizData, value: string) => {
        setQuizData((prev) => ({ ...prev, [field]: value }));
        const zipRegex = /^[0-9]{5}$/;
        if (field === "address" && value && zipRegex.test(value)) {
            nextStep();
        }
    };

    const nextStep = () => {
        if (currentStep < totalSteps) setCurrentStep(currentStep + 1);
    };
    const prevStep = () => {
        if (currentStep > 1) setCurrentStep(currentStep - 1);
    };

    const handleSelectOffer = (offer: string) => {
        updateField("selectedOffer", offer);
    };

    return (
        <div className="">
            <ProviderList handleSelectOffer={handleSelectOffer} />
            <div className="py-24 px-6 xl:px-0 lg:max-w-6xl lg:mx-auto" id="form-section">
                <div className="lg:flex lg:justify-between lg:rounded-[2rem] lg:gap-8 lg:bg-white lg:shadow-xl lg:shadow-slate-200/50 lg:border lg:border-slate-100">
                    <div className="relative hidden lg:block lg:w-1/2 lg:h-auto">
                        <img
                            src="./assets/comparer_fibre.png"
                            alt=""
                            className="w-full h-full object-cover lg:rounded-l-[2rem]"
                        />
                    </div>
                    <div className="max-w-2xl mx-auto lg:w-1/2 lg:pt-6 xl:pt-8">
                        <div className="text-center mb-10">
                            <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900 mb-3 lg:px-2">
                                <span className="text-red-700">Freebox</span> Fibre : trouvez l’offre idéale pour votre foyer
                            </h3>
                            <p className="lg:px-4 text-[13px] text-slate-500 font-light">Analyse en 2 min + 100% gratuit + Sans engagement</p>
                        </div>
                        <QuizCard
                            currentStep={currentStep}
                            totalSteps={totalSteps}
                            nextStep={nextStep}
                            prevStep={prevStep}
                            quizData={quizData}
                            updateField={updateField}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
