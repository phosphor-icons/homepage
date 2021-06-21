import React from "react";

import { StepProps, DonationType } from "./DonationModal";

const DonationStepMethod: React.FC<StepProps> = ({
  previousStep,
  nextStep,
  close,
  routeProps,
}) => {
  const { donationType, donationAmount, setDonationType, setDonationAmount } =
    routeProps;

  const onDonationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDonationType(+e.target.value as DonationType);
    if (!(+e.target.value === DonationType.CUSTOM))
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
            value={DonationType.FIVE_DOLLARS}
            checked={donationType === DonationType.FIVE_DOLLARS}
            onChange={onDonationChange}
          />
          <label htmlFor="donate-5">$5</label>
        </div>
        <div className="radio-button">
          <input
            type="radio"
            id="donate-10"
            name="donation-type"
            value={DonationType.TEN_DOLLARS}
            checked={donationType === DonationType.TEN_DOLLARS}
            onChange={onDonationChange}
          />
          <label htmlFor="donate-10">$10</label>
        </div>
        <div className="radio-button">
          <input
            type="radio"
            id="donate-20"
            name="donation-type"
            value={DonationType.TWENTY_DOLLARS}
            checked={donationType === DonationType.TWENTY_DOLLARS}
            onChange={onDonationChange}
          />
          <label htmlFor="donate-20">$20</label>
        </div>
        <div className="radio-button">
          <input
            type="radio"
            id="donate-50"
            name="donation-type"
            value={DonationType.FIFTY_DOLLARS}
            checked={donationType === DonationType.FIFTY_DOLLARS}
            onChange={onDonationChange}
          />
          <label htmlFor="donate-50">$50</label>
        </div>
        <div className="radio-button">
          <input
            type="radio"
            id="donate-100"
            name="donation-type"
            value={DonationType.ONE_HUNDRED_DOLLARS}
            checked={donationType === DonationType.ONE_HUNDRED_DOLLARS}
            onChange={onDonationChange}
          />
          <label htmlFor="donate-100">$100</label>
        </div>
        <div className="radio-button">
          <input
            type="radio"
            id="donate-custom"
            name="donation-type"
            value={DonationType.CUSTOM}
            checked={donationType === DonationType.CUSTOM}
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
              disabled={donationType !== DonationType.CUSTOM}
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
