import React, { useRef, useState, useEffect } from "react";
import dropin, { Dropin } from "braintree-web-drop-in";
import { StepProps } from "./DonationModal";

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

const PaymentModal: React.FC<StepProps> = ({ previousStep }) => {
  const instance = useRef<Dropin>();
  const [isValid, setIsValid] = useState<boolean>(false);

  const submit = async () => {
    if (!instance.current) return;
    const payload = await instance.current.requestPaymentMethod();
    console.log({ payload });
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
            amount: "10.00",
            currency: "USD",
            commit: true,
          },
          paypalCredit: {
            flow: "checkout",
            amount: "10.00",
            currency: "USD",
            commit: true,
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
  }, []);

  return (
    <>
      <div id="braintree-dropin"></div>
      <div className="step-button-container">
        <button className="main-button" onClick={previousStep}>
          Back
        </button>
        <button className="main-button" onClick={submit} disabled={!isValid}>
          Submit
        </button>
      </div>
    </>
  );
};

export default PaymentModal;
