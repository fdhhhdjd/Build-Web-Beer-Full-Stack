import React from "react";
import { LoadingImageStyle } from "../../Styles/StylesComponent/LoadingImageStyle";

const LoadingImage = () => {
  return (
    <>
      <LoadingImageStyle />
      <div className="load-page">
        <div className="loader">
          <div>
            <div>
              <div>
                <div>
                  <div>
                    <div>
                      <div>
                        <div></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoadingImage;
