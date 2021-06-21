import React, { useState } from "react";

import { StepProps } from "./DonationModal";

enum DonationAmount {
  FIVE_DOLLARS = 5,
  TEN_DOLLARS = 10,
  TWENTY_DOLLARS = 20,
  FIFTY_DOLLARS = 50,
  ONE_HUNDRED_DOLLARS = 100,
  CUSTOM = -1,
}

const DonationStepMethod: React.FC<StepProps> = ({
  previousStep,
  nextStep,
  close,
}) => {
  const [donationType, setDonationType] = useState<DonationAmount>();
  const [donationAmount, setDonationAmount] = useState<number>(0);

  const onDonationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDonationType(+e.target.value as DonationAmount);
    if (!(+e.target.value === DonationAmount.CUSTOM))
      setDonationAmount(+e.target.value);
  };

  void previousStep;

  return (
    <>
      <h3>
        Thanks for using Phosphor! Would you like to make a donation to help
        support our work?
      </h3>
      <div className="radio-group">
        <div className="radio-button">
          <input
            type="radio"
            id="donate-5"
            name="donation-type"
            value={DonationAmount.FIVE_DOLLARS}
            checked={donationType === DonationAmount.FIVE_DOLLARS}
            onChange={onDonationChange}
          />
          <label htmlFor="donate-5">$5</label>
        </div>
        <div className="radio-button">
          <input
            type="radio"
            id="donate-10"
            name="donation-type"
            value={DonationAmount.TEN_DOLLARS}
            checked={donationType === DonationAmount.TEN_DOLLARS}
            onChange={onDonationChange}
          />
          <label htmlFor="donate-10">$10</label>
        </div>
        <div className="radio-button">
          <input
            type="radio"
            id="donate-20"
            name="donation-type"
            value={DonationAmount.TWENTY_DOLLARS}
            checked={donationType === DonationAmount.TWENTY_DOLLARS}
            onChange={onDonationChange}
          />
          <label htmlFor="donate-20">$20</label>
        </div>
        <div className="radio-button">
          <input
            type="radio"
            id="donate-50"
            name="donation-type"
            value={DonationAmount.FIFTY_DOLLARS}
            checked={donationType === DonationAmount.FIFTY_DOLLARS}
            onChange={onDonationChange}
          />
          <label htmlFor="donate-50">$50</label>
        </div>
        <div className="radio-button">
          <input
            type="radio"
            id="donate-100"
            name="donation-type"
            value={DonationAmount.ONE_HUNDRED_DOLLARS}
            checked={donationType === DonationAmount.ONE_HUNDRED_DOLLARS}
            onChange={onDonationChange}
          />
          <label htmlFor="donate-100">$100</label>
        </div>
        <div className="radio-button">
          <input
            type="radio"
            id="donate-custom"
            name="donation-type"
            value={DonationAmount.CUSTOM}
            checked={donationType === DonationAmount.CUSTOM}
            onChange={onDonationChange}
          />
          <label htmlFor="donate-custom">
            Other: $
            <input
              type="number"
              min={2}
              max={1000000}
              id="donate-custom"
              value={donationAmount}
              disabled={donationType !== DonationAmount.CUSTOM}
              onChange={(e) => setDonationAmount(+e.target.value)}
            />
          </label>
        </div>
      </div>
      <div className="step-button-container">
        <button className="main-button" onClick={close}>
          No thanks
        </button>
        <button
          className="main-button"
          onClick={nextStep}
          disabled={!(donationType && donationAmount)}
        >
          Next
        </button>
      </div>
    </>
  );
};

export default DonationStepMethod;
