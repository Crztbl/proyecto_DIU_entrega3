import React from 'react';
import styled from 'styled-components';
import { Button } from 'react-bootstrap';

const GridWrapper = styled.div`
  display: grid;
  grid-gap: 30px;
  margin-top: 2em;
  margin-left: 15em;
  margin-right: 6em;
  grid-template-columns: 1fr 1fr; // Updated property
  grid-auto-rows: minmax(25px, auto);
`;

const HalfGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  border-right: 1px solid lightgray;
`;

const Line = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  border-bottom: 1px solid lightgray;
  cursor: pointer;
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  font-weight: bold;
`;

export const Home = (props) => (
  <GridWrapper>
    <HalfGrid>
      <Title>Evaluaciones</Title>
      <Button variant="link">
        <Line>Tarea 1</Line>
      </Button>
      <Button variant="link">
        <Line>Tarea 2</Line>
      </Button>
      <Button variant="link">
        <Line>Tarea 3</Line>
      </Button>
      <Button variant="link">
        <Line>Tarea 4</Line>
      </Button>
      <Button variant="link">
        <Line>Entrega 1 Proyecto</Line>
      </Button>
      <Button variant="link">
        <Line>Entrega 2 Proyecto</Line>
      </Button>
      <Button variant="link">
        <Line>Entrega final Proyecto</Line>
      </Button>
    </HalfGrid>
    <HalfGrid>
      <Title>Calificaciones</Title>
      <Button variant="link">
        <Line>Paralelo 1</Line>
      </Button>
      <Button variant="link">
        <Line>Paralelo 2</Line>
      </Button>
    </HalfGrid>
  </GridWrapper>
);
