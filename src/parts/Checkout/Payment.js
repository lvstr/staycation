import React from "react";
import Fade from "react-reveal/Fade";

import { InputText, InputFile } from "elements/Form";

import LogoMandiri from "assets/images/logo/logo_mandiri.png";
import LogoBca from "assets/images/logo/logo_bca.png";

export default function Payment(props) {
  const { data, ItemDetails, checkout } = props;

  const tax = 10;
  const subTotal = ItemDetails.price * checkout.duration;
  const grandTotal = ((subTotal * tax) / 100) * subTotal;

  return (
    <Fade>
      <div className="container" style={{ marginBottom: 30 }}>
        <div className="row justify-content-center align-items-center">
          <div className="col-5 border-right py-5" style={{ paddingRight: 80 }}>
            <Fade delay={300}>
              <p className="mb-4">Transfer Pembayaran:</p>
              <p>Tax: {tax}</p>
              <p>Sub Total: ${subTotal} USD </p>
              <p>Total: ${grandTotal} USD </p>
              <div className="row mt-4">
                <div className="col-3 text-right">
                  <img src={LogoBca} alt="Bank Central Asia" width="50" />
                </div>
                <div className="col">
                  <dl>
                    <dd>Bank Central Asia</dd>
                    <dd>2208 3956</dd>
                    <dd>Lvstr</dd>
                  </dl>
                </div>
              </div>

              <div className="row">
                <div className="col-3 text-right">
                  <img src={LogoMandiri} alt="Mandiri" width="50" />
                </div>
                <div className="col">
                  <dl>
                    <dd>Bank Mandiri</dd>
                    <dd>2208 1996</dd>
                    <dd>Lvstr</dd>
                  </dl>
                </div>
              </div>
            </Fade>
          </div>

          <div className="col-5 py-5" style={{ paddingLeft: 80 }}>
            <Fade delay={600}>
              <label htmlFor="proofPayment">Upload Bukti Transfer</label>
              <InputFile
                id="proofPayment"
                accept="image/*"
                name="proofPayment"
                value={data.proofPayment}
                onChange={props.onChange}
              ></InputFile>

              <label htmlFor="bankName">Asal Bank</label>
              <InputText
                id="bankName"
                name="bankName"
                value={data.bankName}
                onChange={props.onChange}
              ></InputText>

              <label htmlFor="bankHolder">Nama Pengirim</label>
              <InputText
                id="bankHolder"
                name="bankHolder"
                value={data.bankHolder}
                onChange={props.onChange}
              ></InputText>
            </Fade>
          </div>
        </div>
      </div>
    </Fade>
  );
}
