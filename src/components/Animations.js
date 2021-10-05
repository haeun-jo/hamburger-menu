import gsap from 'gsap';

// Open menu
export const staggerReveal = (node1, node2) => {
  gsap.from([node1, node2], {
    duration: 0.8,
    height: 0,
    transformOrigin: 'right top',
    skewY: 2,
    ease: 'power3.inOut',
    stagger: {
      amount: 0.1
    }
  });
};

// Close menu
export const staggerRevealClose = (node1, node2) => {
  gsap.to([node1, node2], {
    duration: 0.8,
    height: 0,
    ease: 'power3.inOut',
    stagger: {
      amount: 0.07
    }
  });
}

// Stagger the links to appear
export const staggerText = (node1, node2, node3) => {
  gsap.from([node1, node2, node3], {
    duration: 0.8,
    y: 100,
    delay: 0.1,
    ease: 'power3.inOut',
    stagger: {
      amount: 0.3
    }
  });
};

// Fade up for the additional info on our menu
export const fadeInUp = node => {
  gsap.from(node, {
    duration:1,
    y: 60,
    delay: 0.2,
    opacity: 0,
    ease: 'power3.inOut'
  });
};

// Hover on the link
export const handleHover = e => {
  gsap.to(e.target, {
    duration: 0.3,
    y: 3,
    skewX: 4,
    ease: 'power3.inOut'
  });
};

// Hover off the link
export const handleHoverExit = e => {
  gsap.to(e.target, {
    duration: 0.3,
    y: -3,
    skewX: 0,
    ease: 'power3.inOut'
  });
};

// Adds city image once you hover on
export const handleCity = (city, target) => {
  gsap.to(target, {
    duration: 0,
    background: `url(${city}) center center`
  });
  gsap.to(target, {
    duration: 0.4,
    opacity: 1,
    ease: 'power3.inOut'
  });
  gsap.from(target, {
    duration: 0.4,
    skewY: 2,
    transformOrigin: 'right top'
  });
};

// Removes the city image once you hover off
export const handleCityReturn = target => {
  gsap.to(target, {
    duration: 0.4,
    opacity: 0
  });
};
