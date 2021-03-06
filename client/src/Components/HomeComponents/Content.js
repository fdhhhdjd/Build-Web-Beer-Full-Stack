import React, { useEffect, useState } from "react";
import { ContentHome } from "../../Styles/StylePages/ContentHome";
import {
  content,
  content2,
  content3,
  content4,
  content5,
} from "../../Imports/Image";
import { Buttons } from "../../Imports/Index";
import axios from "axios";
const champImgs = [content, content2, content3, content4, content5];
const Content = () => {
  const [current, setCurrent] = useState(0);
  const [api, setApi] = useState([]);
  const length = champImgs.length;
  useEffect(() => {
    const slider = setInterval(() => {
      setCurrent(current === length - 1 ? 0 : current + 1);
    }, 3000);

    return () => {
      clearInterval(slider);
    };
  }, [current, length]);
  return (
    <>
      <ContentHome>
        <section className="home" id="home">
          <div className="content">
            <h3>Beer Club Vietnamese </h3>
            <p>
              we always bring to everyone all the best selling beers and many
              places in the world, there are many types of high to low from high
              to low strength depending on each person, we always bring you !
            </p>
            <Buttons
              css="btn"
              name="Facebook"
              href="http://profile-forme.surge.sh"
            />
          </div>
          <div className="image" id="welcome__img__slide">
            {champImgs.map((item, index) => {
              return (
                <div
                  key={index}
                  className={index === current ? "slide active" : "slide"}
                >
                  {index === current && (
                    <img
                      src={item}
                      key={index}
                      alt="Travel image"
                      className="image"
                    />
                  )}
                </div>
              );
            })}
          </div>
        </section>
      </ContentHome>
    </>
  );
};

export default Content;
