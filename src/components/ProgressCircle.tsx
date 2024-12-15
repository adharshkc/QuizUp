import React from "react";

interface ProgressCircleProps {
  currentStep: number;
  totalSteps: number;
}

const ProgressCircle: React.FC<ProgressCircleProps> = ({
  currentStep,
  totalSteps,
}) => {
  const progress = (currentStep / totalSteps) * 100;

  return (
    <div className="relative rounded-full w-32 h-32 bg-white">
      {/* Background Circle */}
      <svg className="w-full h-full">
        <circle
          cx="50%"
          cy="50%"
          r="45%"
          stroke="#E5E7EB"
          strokeWidth="10"
          fill="none"
        />
      </svg>

      {/* Progress Arc */}
      <svg
        className="absolute top-0 left-0 w-full h-full rotate-[270deg]"
        style={{ transform: "rotate(-90deg)" }}
      >
        <circle
          cx="50%"
          cy="50%"
          r="45%"
          stroke="#22C55E"
          strokeWidth="10"
          fill="none"
          strokeDasharray="283" /* Total circumference: 2 * π * r */
          strokeDashoffset={`${283 - (progress / 100) * 283}`}
          strokeLinecap="round"
        />
      </svg>

      {/* Step Text */}
      <div className="absolute inset-0 flex items-center justify-center text-center">
        <span className="text-4xl font-bold text-gray-800">{currentStep}</span>
        <span className="text-lg text-gray-500">/{totalSteps}</span>
      </div>
    </div>
  );
};

export default ProgressCircle;
