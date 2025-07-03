import React from "react";

const Steps = ({ currentStep = 1 }) => {
  const steps = [1, 2, 3, 4, 5];

  const getStepStyle = (stepNumber) => {
    if (stepNumber <= currentStep) {
      return "w-12 h-12 bg-[#F28E46] text-[#fff] rounded-[28px] cursor-pointer";
    } else {
      return "w-12 h-12 rounded-[28px] border dark:border-[#535862] border-[#F8F8F8] bg-white dark:bg-[#111111] dark:text-[#FFFFFF] cursor-pointer";
    }
  };

  return (
    <div className="flex items-center justify-center gap-2 sm:gap-6 mt-10">
      {steps.map((step, index) => (
        <React.Fragment key={step}>
          <button className={getStepStyle(step)}>{step}</button>
          {index < steps.length - 1 && (
            <hr className="w-6 sm:w-[53px] text-[#1B1A1959] dark:text-[#E3E3E3]" />
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Steps;
