const intersectionAnimation = () => {
  const animElements = document.querySelectorAll(".anim");

  const obersever = new IntersectionObserver((entries) => {
    console.log(entries);

    entries.forEach((entry) => {
      if (entry.intersectionRatio > 0) {
        entry.target.style.animation = `anim1 1s ease-in forwards`;
      } else {
        entry.target.style.animation = `none`;
      }
    });
  });

  animElements.forEach((animElement) => {
    obersever.observe(animElement);
  });

  return () => {};
};

export default intersectionAnimation;
