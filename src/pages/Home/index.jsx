import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Base } from "../../components/Base";
import { ImageCard } from "../../components/ImageCard";

import styles from "./home.module.css";

export const Home = () => {
  const navigate = useNavigate();

  const onMovieSelect = () => {
    navigate("/movie");
  };

  return (
    <div className={styles.homeContainer}>
      <div className={styles.homeSlider}>
        <HomeSlider />
      </div>
      <div>
        <MovieContainer onMovieSelect={onMovieSelect} />
      </div>
    </div>
  );
};

const MovieContainer = ({ onMovieSelect }) => {
  return (
    <div className={styles.movieContainer}>
      <div className={styles.sectionTitle}>Movies</div>
      <div className={styles.movieList}>
        <ImageCard onClick={onMovieSelect} name="Nai Sekar" />
        <ImageCard name="Nai Sekar" />
        <ImageCard name="Nai Sekar" />
        <ImageCard name="Nai Sekar" />
        <ImageCard name="Nai Sekar" />
      </div>
    </div>
  );
};

const sliderImage = [
  "https://in.bmscdn.com/promotions/cms/creatives/1641189495411_1638331721816_1240x300freeaccessbannercopy.png",
  "https://in.bmscdn.com/promotions/cms/creatives/1641477547540_web02.png",
  "https://in.bmscdn.com/promotions/cms/creatives/1641886091471_theking.jpg",
];

const HomeSlider = () => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  console.log(activeImageIndex);

  const [activeImagePositon, setActiveImagePosition] = useState(0);

  // let calculatedPosition = useMemo(() => {
  //   return activeImageIndex % sliderImage.length;
  // }, [activeImageIndex]);

  const onSliderLeft = () => {
    if (activeImageIndex === 0) {
      setActiveImagePosition(
        activeImagePositon + 1200 * (sliderImage.length - 2)
      );
      setActiveImageIndex(sliderImage.length - 2);
      return;
    }
    setActiveImagePosition(activeImagePositon - 1200);
    setActiveImageIndex(activeImageIndex - 1);
  };

  const onSliderRight = () => {
    if (activeImageIndex === sliderImage.length - 2) {
      setActiveImagePosition(0);
      setActiveImageIndex(0);
      return;
    }
    setActiveImagePosition(activeImagePositon + 1200);
    setActiveImageIndex(activeImageIndex + 1);
  };

  return (
    <div className={styles.sliderContainer}>
      <div onClick={onSliderLeft} className={styles.leftArrow}>
        {"<"}
      </div>
      <div
        className={`${styles.sliderImgOne} `}
        style={{ left: activeImagePositon }}
      >
        <img alt="img1" src={sliderImage[0]} />
      </div>
      <div
        className={`${styles.sliderImgTwo} `}
        style={{ left: activeImagePositon }}
      >
        <img alt="img2" src={sliderImage[1]} />
      </div>
      <div
        className={`${styles.sliderImgThree} `}
        style={{ left: activeImagePositon }}
      >
        <img alt="img3" src={sliderImage[2]} />
      </div>
      <div onClick={onSliderRight} className={styles.rightArrow}>
        {">"}
      </div>
    </div>
  );
};
