import { useState } from "react";
import Profile from "./Profile";
import Steps from "./Steps";
import Stage from "./Stage";
import StageInfo from "./StageInfo";
import Contact from "./Contact";
import Investment from "./Investment";
import StageNow from "./StageNow";
import StageAbout from "./StageAbout";

const FormState = () => {
  const [step, setStep] = useState(1);
  const [subStep, setSubStep] = useState(0);
  const [stageSelection, setStageSelection] = useState({
    idea: false,
    mvpInProgress: false,
    postMvp: false,
  });

  const isWithSubSteps = stageSelection.idea && stageSelection.mvpInProgress;

  const handleBack = () => {
    if (step === 3 && isWithSubSteps && subStep > 0) {
      setSubStep(subStep - 1);
    } else if (step > 1) {
      setStep(step - 1);
      setSubStep(0);
    }
  };

  const handleNext = () => {
    if (step === 3 && isWithSubSteps) {
      if (subStep < 2) {
        setSubStep(subStep + 1);
        return;
      }
    }
    setStep(step + 1);
    setSubStep(0);
  };

  const handleStageSelectionChange = (selection) => {
    setStageSelection(selection);
    console.log("Selected:", selection);
  };

  const handleSubmit = () => {
    console.log("Submitting:", stageSelection);
    window.location.href = "/";
  };

  return (
    <div className="max-w-[628px] mx-auto w-full mb-[55px] sm:mb-20">
      <Steps currentStep={step} />

      {step === 1 && <Profile />}

      {step === 2 && (
        <Stage
          selection={stageSelection}
          onSelectionChange={handleStageSelectionChange}
        />
      )}

      {step === 3 && isWithSubSteps && subStep === 0 && <StageInfo />}
      {step === 3 && isWithSubSteps && subStep === 1 && <StageNow />}
      {step === 3 && isWithSubSteps && subStep === 2 && <StageAbout />}
      {step === 3 && !isWithSubSteps && <StageAbout />}

      {step === 4 && <Contact />}
      {step === 5 && <Investment />}

      <div className="flex gap-4">
        {step > 1 && (
          <button
            onClick={handleBack}
            className="bg-gray-500 text-white h-[50px] px-6 rounded-xl cursor-pointer flex-1 w-full mt-4"
          >
            Orqaga
          </button>
        )}
        <button
          onClick={step === 5 ? handleSubmit : handleNext}
          className="bg-[#F28E46] text-white h-[50px] px-6 rounded-xl cursor-pointer flex-1 w-full mt-4"
        >
          {step === 5 ? "Tugatish" : "Davom etish"}
        </button>
      </div>
    </div>
  );
};

export default FormState;
