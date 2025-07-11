
"use client";

import CustomCheckbox from "./CustomCheckbox";

const Stage = ({ formData, setFormData, selection, onSelectionChange }) => {
  const handleCheckboxChange = (key, checked) => {
    const newSelection = {
      ...selection,
      [key]: checked,
    };

    onSelectionChange(newSelection);

    const formDataKeyMap = {
      idea: "bosqichIdea",
      mvpInProgress: "bosqichMvpJarayoni",
      postMvp: "bosqichPostMvp",
    };

    setFormData({
      ...formData,
      [formDataKeyMap[key]]: checked,
    });
  };

  return (
    <div className="flex flex-col items-start w-[398px] sm:w-[628px]">
      <div className="mt-12 mb-[262px] text-black dark:text-white">
        <p className="font-semibold text-[20px]">
          Startupingiz hozir qaysi bosqichda?
        </p>
        <div className="flex flex-col gap-4 mt-8">
          <CustomCheckbox
            id="idea-checkbox"
            checked={selection.idea}
            onChange={(checked) => handleCheckboxChange("idea", checked)}
            label="Gʼoya ( Idea )"
          />
          <CustomCheckbox
            id="mvp-progress-checkbox"
            checked={selection.mvpInProgress}
            onChange={(checked) =>
              handleCheckboxChange("mvpInProgress", checked)
            }
            label="MVP ishlab chiqilmoqda"
          />
          <CustomCheckbox
            id="post-mvp-checkbox"
            checked={selection.postMvp}
            onChange={(checked) => handleCheckboxChange("postMvp", checked)}
            label="Post MVP ( MVP ishlab chiqilgan )"
          />
        </div>
      </div>
    </div>
  );
};

export default Stage;
