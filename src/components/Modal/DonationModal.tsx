import React, { useState } from "react";
import { useSetRecoilState } from "recoil";
import { X } from "phosphor-react";

import { modalOpenAtom } from "../../state/atoms";
import DonationStepMethod from "./DonationStepMethod";
import DonationStepDropin from "./DonationStepDropin";
import DonationStepThanks from "./DonationStepThanks";

const routes = [DonationStepMethod, DonationStepDropin, DonationStepThanks];

export interface StepProps {
  previousStep: () => void;
  nextStep: () => void;
  close: () => void;
}

interface StepperProps {
  routes: Array<React.FC<StepProps>>;
  routeProps: any;
  close: () => void;
}

const Stepper: React.FC<StepperProps> = ({ routes, routeProps, close }) => {
  const [currentStep, setCurrentStep] = useState<number>(0);

  const previousStep = () => {
    if (currentStep <= 0) return;
    setTimeout(() => setCurrentStep((c) => c - 1), 500);
  };

  const nextStep = () => {
    if (currentStep >= routes.length - 1) return;
    setTimeout(() => setCurrentStep((c) => c + 1), 500);
  };

  const Component = routes[currentStep];

  return (
    <>
      <Component
        previousStep={previousStep}
        nextStep={nextStep}
        close={close}
        {...routeProps}
      />
    </>
  );
};

const DonationModal: React.FC<{}> = () => {
  const setModalOpen = useSetRecoilState(modalOpenAtom);
  const close = () => setModalOpen(false);

  return (
    <div className="modal-content">
      <button
        className="modal-close-button"
        onClick={() => setModalOpen(false)}
      >
        <X size={32} />
      </button>
      <Stepper routes={routes} routeProps={{}} close={close} />
    </div>
  );
};

export default DonationModal;
