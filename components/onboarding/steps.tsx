interface Step {
  id: string;
  label: string;
}

interface StepsProps {
  steps: Step[];
  currentStep: number;
  className?: string;
}

export function Steps({ steps, currentStep, className = "" }: StepsProps) {
  return (
    <div className={`flex items-center justify-center gap-2 ${className}`}>
      {steps.map((step, index) => {
        const isCompleted = index < currentStep;
        const isCurrent = index === currentStep;

        return (
          <div key={step.id} className="flex items-center">
            {index > 0 && (
              <div
                className={`h-px w-12 mx-2 ${
                  index <= currentStep ? "bg-primary" : "bg-border"
                }`}
              />
            )}
            <div
              className={`
                flex items-center justify-center w-8 h-8 rounded-full text-sm font-medium
                ${
                  isCompleted
                    ? "bg-primary text-primary-foreground"
                    : isCurrent
                    ? "border-2 border-primary text-primary"
                    : "border-2 border-border text-muted-foreground"
                }
              `}
            >
              {index + 1}
            </div>
          </div>
        );
      })}
    </div>
  );
}