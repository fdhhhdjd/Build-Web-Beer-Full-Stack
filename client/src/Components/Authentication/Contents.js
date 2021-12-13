import React from "react";
import Lottie from "react-lottie";
import { Button } from "../../Imports/Index";
import { defaultOptions, defaultOptions1 } from "../../Imports/Lottie";
const Contents = ({ handleFlag, flag }) => {
  return (
    <>
      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>Note New Here?</h3>
            <p>
              Hello everyone,i am tai,you is have account yet ? Can I help you?
              I am ready to help you now !
            </p>
            <Button
              className="btn transparent"
              id="sign-up-btn"
              onClick={handleFlag}
              title="Sign Up"
            />
          </div>
          <div className="image">
            <Lottie options={defaultOptions} />
          </div>
        </div>
        <div className="panel right-panel">
          <div className="content">
            <h3>Are you ready to go home website?</h3>
            <p>
              Thank you was a visit company TaiHeo Dev Web, I wish you a good
              day,I love you so much
            </p>
            <Button
              className="btn transparent"
              id="sign-in-btn"
              onClick={handleFlag}
              title="Sign in"
            />
          </div>
          <div className="image">
            <Lottie options={defaultOptions1} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Contents;
