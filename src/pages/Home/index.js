import React from 'react';
import { Content, Section } from './HomeElement';
import ElementAimation from '../../components/animation/ElementAnimation';
import ButtomStart from '../../components/ButtomStart';
import imga from '../../images/back.jpg'
const Home = () => {
  
  return (
    <>
      <Section>
        <Content>
          <ElementAimation delay={300}>
            <h2>HAZTE DESTACAR</h2>
          </ElementAimation>
          <ElementAimation delay={300}>
            <p>La forma en que cuentas tu historia hace la diferencia</p>
          </ElementAimation>
          <ElementAimation delay={800}>
            <ButtomStart />
          </ElementAimation>
        </Content>
      </Section>
    </>
  )
}

export default Home