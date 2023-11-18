import React, { useState } from 'react';
import styled from 'styled-components';
import { Card, Button, Table } from 'react-bootstrap';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column; /* Add this line to center align the title */
  height: 100vh;
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 20px;
`;

const TableContainer = styled.div`
  width: 70%; /* Adjust the width as needed */
`;

const SearchBox = styled.input`
  position: absolute;
  top: 10px;
  left: 10px;
  padding: 5px;
`;

export const Calificaciones = (props) => {
  const [showPopup, setShowPopup] = useState(false);

  const handleButtonClick = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <Container>
      <Title>Tarea 3</Title> {/* Add the title here */}
      <TableContainer>
        <Card>
          <Card.Body>
            <Button onClick={handleButtonClick} variant="primary" style={{ float: 'right' }}>
              Subir calificaciones a SIGA
            </Button>
            <SearchBox type="text" placeholder="Buscar alumno" /> {/* Add the search box here */}
            <Table striped bordered hover>
            <thead>
              <tr>
                <th>Imagen Usuario</th>
                <th>Nombre/Apellido(s)</th>
                <th>Numero de ID</th>
                <th>Correo Electronico</th>
                <th>Estado</th>
                <th>Calificacion</th>
                <th>Ultima modificacion</th>
                <th>Archivo emitido</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>A</td>
                <td>Cristobal Alvarez</td>
                <td>123456789</td>
                <td>cristobal@gmail.com</td>
                <td>Pendiente</td>
                <td> - </td>
                <td> - </td>
                <td> - </td>
              </tr>
              <tr>
                <td>A</td>
                <td>Fabian Maldonado</td>
                <td>134152134</td>
                <td>fabu@gmail.com</td>
                <td>Enviado para calificar</td>
                <td> 98% </td>
                <td> 13 de Noviembre </td>
                <td> Tarea_3.pdf </td>
              </tr>
              <tr>
                <td>A</td>
                <td>Nicolas Paz</td>
                <td>458657867</td>
                <td>nicolaspaz@gmail.com</td>
                <td>Enviado para calificar</td>
                <td> 66% </td>
                <td> 10 de Noviembre </td>
                <td> Tarea_3.pdf </td>
              </tr>
            </tbody>
            </Table>
          </Card.Body>
        </Card>
      </TableContainer>
      {showPopup && (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0, 0, 0, 0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div style={{ background: '#fff', padding: '20px', borderRadius: '5px' }}>
            <p>Ingrese todas las calificaciones antes de continuar</p>
            <Button onClick={closePopup} variant="primary">
              Close
            </Button>
          </div>
        </div>
      )}
    </Container>
  );
};
