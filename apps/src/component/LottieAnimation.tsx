// LottieAnimation.js
import React from 'react';
import Lottie from 'react-lottie';
import animationData from '../utils/main.json';
import reviewData from '../utils/Review.json'
import LikeData from '../utils/like.json'

const LottieAnimation = () => {
  const defaultOptions = {
    loop: true, // Set to false if you don’t want the animation to loop
    autoplay: true, // Set to false if you don’t want the animation to start automatically
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return <Lottie options={defaultOptions} height={400} width={400} />;
};
export const ReviewLottieAnimation = () => {
  const defaultOptions = {
    loop: true, // Set to false if you don’t want the animation to loop
    autoplay: true, // Set to false if you don’t want the animation to start automatically
    animationData: reviewData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return <Lottie options={defaultOptions} height={200} width={200} />;
}
export const LikeLottie = () => {
  const defaultOptions = {
    loop: true, // Set to false if you don’t want the animation to loop
    autoplay: true, // Set to false if you don’t want the animation to start automatically
    animationData: LikeData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return <Lottie options={defaultOptions}  />;
};
export default LottieAnimation;
