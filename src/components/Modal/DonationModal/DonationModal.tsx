import React, { useState } from "react";

import { ModalInstance } from "../Modal";
import DonationStepMethod from "./DonationStepMethod";
import DonationStepDropin from "./DonationStepDropin";
import DonationStepThanks from "./DonationStepThanks";

const routes = [DonationStepMethod, DonationStepDropin, DonationStepThanks];

export enum DonationType {
  FIVE_DOLLARS = 5,
  TEN_DOLLARS = 10,
  TWENTY_DOLLARS = 20,
  FIFTY_DOLLARS = 50,
  ONE_HUNDRED_DOLLARS = 100,
  CUSTOM = -1,
}

interface RouteProps {
  donationType: DonationType | undefined;
  setDonationType: React.Dispatch<
    React.SetStateAction<DonationType | undefined>
  >;
  donationAmount: number;
  setDonationAmount: React.Dispatch<React.SetStateAction<number>>;
}

export interface StepProps {
  previousStep: () => void;
  nextStep: () => void;
  close: () => void;
  routeProps: RouteProps;
}

interface StepperProps {
  routes: Array<React.FC<StepProps>>;
  routeProps: RouteProps;
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
        routeProps={routeProps}
      />
    </>
  );
};

const DonationModal = ({ close }: ModalInstance): JSX.Element => {
  const [donationType, setDonationType] = useState<DonationType | undefined>();
  const [donationAmount, setDonationAmount] = useState<number>(0);

  return (
    <>
      <div className="modal-titlebar">
        <h2>Donate</h2>
      </div>
      <Stepper
        routes={routes}
        routeProps={{
          donationType,
          setDonationType,
          donationAmount,
          setDonationAmount,
        }}
        close={close}
      />
    </>
  );
};

export default DonationModal;
