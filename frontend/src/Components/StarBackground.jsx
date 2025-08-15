import React, { useEffect, useState } from "react";

function StarBackground() {
  const [stars, setStars] = useState([]);
  const [meteors, setMeteor] = useState([]);

  useEffect(() => {
    generateStars();
    generateMeteor();
    const handleWindowResize = () => {
      generateStars;
    };
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  const generateStars = () => {
    //determine the number of stars based on the window size
    const numOfStars = Math.floor(
      (window.innerWidth * window.innerHeight) / 10000
    );
    const newStars = [];
    for (let i = 0; i < numOfStars; i++) {
      newStars.push({
        id: i,
        size: Math.random() * 3 + 1, // Random size between 1 and 4px
        x: Math.random() * 100, //position of star
        y: Math.random() * 100,
        opacity: Math.random() * 0.5 + 0.5, // Random opacity between 0.5 and 1
        animationDuration: Math.random() * 4 + 2 + "s", // Random duration between 2s and 6s
      });
    }
    setStars(newStars);
  };
  const generateMeteor = () => {
    //determine the number of meteors based on the window size
    const numOfMeteors = 4; // Fixed number of meteors for simplicity
    const newMeteors = [];
    for (let i = 0; i < numOfMeteors; i++) {
      newMeteors.push({
        id: i,
        size: Math.random() * 2 + 1, // Random size between 1 and 3px
        x: Math.random() * 100, //position of star
        y: Math.random() * 20,
        delay: Math.random() * 15, // Random delay between 0 and 15s
        animationDuration: Math.random() * 3 + 3 + "s", // Random duration between 3s and 6s
      });
    }
    setMeteor(newMeteors);
  };
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {stars.map((star) => (
        <div
          key={star.id}
          className="star animate-pulse-subtle "
          style={{
            width: star.size + "px",
            height: star.size + "px",
            left: star.x + "%",
            top: star.y + "%",
            opacity: star.opacity,
            animationDuration: star.animationDuration + "s",
          }}
        />
      ))}
      {meteors.map((meteor) => (
        <div
          key={meteor.id}
          className="meteor animate-meteor "
          style={{
            width: meteor.size * 50 + "px",
            height: meteor.size * 2 + "px",
            left: meteor.x + "%",
            top: meteor.y + "%",
            animationDelay: meteor.delay,
            animationDuration: meteor.animationDuration + "s",
          }}
        />
      ))}
    </div>
  );
}

export default StarBackground;
