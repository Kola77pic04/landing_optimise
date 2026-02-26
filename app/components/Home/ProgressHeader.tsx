interface Props {
  currentStep: number;
  totalSteps: number;
}

export default function ProgressHeader({ currentStep, totalSteps }: Props) {
  const progress = (currentStep / totalSteps) * 100;

  return (
    <div className="bg-slate-50/50 border-b border-slate-100 px-8 py-5 flex items-center justify-between">
      <span className="text-xs font-medium text-slate-500 uppercase">
        Étape {currentStep}/{totalSteps}
      </span>

      <div className="w-32 h-1.5 bg-slate-200 rounded-full overflow-hidden">
        <div
          className="h-full bg-blue-500 transition-all duration-500"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}
