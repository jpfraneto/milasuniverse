import * as React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { aboutDiv, aboutImage, aboutText, button } from './styles.module.css';

export const About = ({ text }) => {
  return (
    <div className={aboutDiv}>
      <StaticImage
        src='../../images/10s1.jpeg'
        className={aboutImage}
        alt='The miracle of life'
      />
      <div className={aboutText}>
        <h3 style={{ marginBottom: '2rem' }}>Hola!</h3>
        <p>
          Este es un espacio que vamos a ir construyendo en conjunto para
          compartir la experiencia de ser papás por primera vez contigo. Los
          primeros 40 días de existencia de nuestra Mila van a ser un espacio
          importante para (re)conocernos, entregarnos cariño y amor. Junto con
          todo lo que vendrá en el futuro.
        </p>
        <p>
          Estamos muy contentos de lo que estamos viviendo, y día a día
          avanzando hacia construirnos como una familia que le aporte al mundo
          conciencia, amor, y muchas de las cosas que hacen falta para que
          podamos vivir en paz.
        </p>
        <p>
          Gracias por estar acá, y por preocuparte de nosotros y de cómo va
          avanzando este proceso.
        </p>
        <p>Nacha, JP y Mila</p>
        <Link className={button} to='cuarentena'>
          Ir al dia a dia
        </Link>
      </div>
    </div>
  );
};
