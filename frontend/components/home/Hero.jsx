// This component is used to create a hero section on the home page of the application.
// It is a reusable component that can be used in different parts of the application.
// It accepts children and hero as props. The hero prop is used to set the class name of the section.
// The default value for the hero prop is 'defaultHero'.
import React from 'react';

function Hero({ children, hero }) {
  return (
    <section className={hero}>
      {children}
    </section>
  );
}

Hero.defaultProps = {
  hero: 'defaultHero'
};

export default Hero;
