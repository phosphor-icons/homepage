import React, { useRef, useEffect } from "react";
import { client, hostedFields, Client, HostedFields } from "braintree-web";

const BT_STYLES = {
  ":focus": {
    color: "blue",
  },
  ".valid": {
    color: "green",
  },
  ".invalid": {
    color: "red",
  },
};
const BT_PAYMENT_FIELDS = {
  number: {
    container: "#card-number",
    placeholder: "4111 1111 1111 1111",
  },
  cvv: {
    container: "#cvv",
    placeholder: "123",
  },
  expirationDate: {
    container: "#expiration-date",
    placeholder: "10/2022",
  },
};

const PaymentModal: React.FC<{}> = () => {
  const bt = useRef<Client>();
  const form = useRef<HostedFields>();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!form.current || !bt.current) return;

    const response = await form.current.tokenize();
    console.log({ response });
  };

  useEffect(() => {
    const initializeBt = async () => {
      try {
        bt.current = await client.create({
          authorization: "sandbox_246jdjxq_8h7hm5rvngkykjds",
        });

        form.current = await hostedFields.create({
          client: bt.current!!,
          fields: BT_PAYMENT_FIELDS,
          styles: BT_STYLES,
        });
      } catch (err) {
        console.error(err);
      }
    };

    initializeBt();
  }, []);

  return (
    <form action="/" method="post" onSubmit={handleSubmit}>
      <label htmlFor="card-number">Card Number</label>
      <div id="card-number"></div>

      <label htmlFor="cvv">CVV</label>
      <div id="cvv"></div>

      <label htmlFor="expiration-date">Expiration Date</label>
      <div id="expiration-date"></div>

      <div className="step-button-container">
        <input type="submit" value="Pay" className="main-button" disabled />
      </div>
    </form>
  );
};

export default PaymentModal;
