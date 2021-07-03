import React, { useRef, useState, useEffect } from "react";
import dropin, { Dropin } from "braintree-web-drop-in";
import axios from "axios";
import { CurrencyCircleDollar } from "phosphor-react";

import { StepProps } from "./DonationModal";

const PaymentServer = axios.create({
  baseURL: "https://us-central1-phosphor-14c61.cloudfunctions.net/paymentsApi",
});

const BT_PAYMENT_FIELDS = {
  number: {
    placeholder: "4111 1111 1111 1111",
  },
  cvv: {
    placeholder: "123",
  },
  expirationDate: {
    placeholder: "10/22",
  },
  cardholderName: {
    placeholder: "Person McFace",
  },
};

const PaymentModal: React.FC<StepProps> = ({
  nextStep,
  previousStep,
  routeProps,
}) => {
  const instance = useRef<Dropin>();
  const [isValid, setIsValid] = useState<boolean>(false);
  const [isLoading, setLoading] = useState<boolean>(false);

  const { donationAmount } = routeProps;

  const submit = async () => {
    if (!instance.current) return;

    setLoading(true);

    try {
      const payload = await instance.current.requestPaymentMethod();
      console.log({ ...payload, donationAmount });
      const response = await PaymentServer.post("/", {
        ...payload,
        donationAmount,
      });

      console.log({ response });
      if (!!response.data?.success) {
        nextStep();
      } else {
        setIsValid(false);
      }
    } catch (_e) {
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const initializePayments = async () => {
      try {
        instance.current = await dropin.create({
          authorization: "sandbox_246jdjxq_8h7hm5rvngkykjds",
          container: "#braintree-dropin",
          card: {
            cardholderName: {
              required: true,
            },
            overrides: {
              fields: BT_PAYMENT_FIELDS,
            },
          },
          paypal: {
            flow: "checkout",
            amount: donationAmount.toFixed(2).toString(),
            currency: "USD",
            commit: false,
          },
          paypalCredit: {
            flow: "checkout",
            amount: donationAmount.toFixed(2).toString(),
            currency: "USD",
            commit: false,
          },
          venmo: { allowNewBrowserTab: false },
        });
        instance.current.on("paymentMethodRequestable", () => setIsValid(true));
        instance.current.on("noPaymentMethodRequestable", () =>
          setIsValid(false)
        );
      } catch (err) {
        console.error(err);
      }
    };

    initializePayments();
  }, [donationAmount]);

  return (
    <>
      <div id="braintree-dropin"></div>
      <div className="donation-details">
        <CurrencyCircleDollar size={64} weight="duotone" />
        <span>
          Preparing your ${routeProps.donationAmount.toFixed(2)} donation...
        </span>
      </div>
      <div className="step-button-container">
        <button className="main-button" onClick={previousStep}>
          Back
        </button>
        <button
          className="main-button"
          onClick={submit}
          disabled={isLoading || !isValid}
        >
          {isLoading ? "Processing..." : "Donate"}
        </button>
      </div>
    </>
  );
};

export default PaymentModal;
