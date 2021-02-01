import React from "react";
import Fade from "react-reveal/Fade";

import { InputText } from "elements/Form";

export default function BookingInformation(props) {
  const { data, ItemDetails, checkout } = props;
  console.log(ItemDetails);
  return (
    <Fade>
      <div className="container" style={{ marginBottom: 30 }}>
        <div className="row justify-content-center align-items-center">
          <div className="col-5 border-right py-5" style={{ paddingRight: 80 }}>
            <Fade delay={300}>
              <div className="card">
                <figure className="img-wrapper" style={{ height: 270 }}>
                  <img
                    src={ItemDetails.imageUrls[0].url}
                    alt={ItemDetails.name}
                    className="img-cover"
                  />
                </figure>
              </div>
              <div className="row align-items-cenetr">
                <div className="col">
                  <div className="meta-wrapper">
                    <h3>{ItemDetails.name}</h3>
                    <span className="text-gray-500">
                      {ItemDetails.city}, {ItemDetails.country}
                    </span>
                  </div>
                </div>
                <div className="col-auto">
                  <span>
                    ${+checkout.duration * ItemDetails.price} USD{" "}
                    <span className="text-gray-500">
                      {" "}
                      per {checkout.duration} {ItemDetails.unit}{" "}
                      {+checkout.duration > 1 ? "s" : ""}{" "}
                    </span>{" "}
                  </span>
                </div>
              </div>
            </Fade>
          </div>
          <div className="col-5 py-5" style={{ paddingLeft: 80 }}>
            <Fade delay={600}>
              <label htmlFor="firstName">First Name</label>
              <InputText
                id="firstName"
                name="firstName"
                value={data.firstName}
                onChange={props.onChange}
              ></InputText>

              <label htmlFor="lastName">Last Name</label>
              <InputText
                id="lastName"
                name="lastName"
                value={data.lastName}
                onChange={props.onChange}
              ></InputText>

              <label htmlFor="email">Email Address</label>
              <InputText
                id="email"
                name="email"
                type="email"
                value={data.email}
                onChange={props.onChange}
              ></InputText>

              <label htmlFor="phone">Phone Number</label>
              <InputText
                id="phone"
                name="phone"
                type="tel"
                value={data.phone}
                onChange={props.onChange}
              ></InputText>
            </Fade>
          </div>
        </div>
      </div>
    </Fade>
  );
}
