import React from "react";
import Fade from "react-reveal/Fade";

import CompleteIllustration from "assets/images/main/completed.jpg";

export default function Completed() {
  return (
    <Fade>
      <div className="container" style={{ marginBottom: 30 }}>
        <div className="row justify-content-center align-items-center">
          <img src={CompleteIllustration} alt="Complete Checkout" />
          <p className="text-gray-500">
            We will inform you via email later once the transaction has been
            accepted
          </p>
        </div>
      </div>
    </Fade>
  );
}
