import React from 'react';
import {
  PlansContainer,
  Title,
  Table,
  TableRow,
  TableCell,
  CheckIcon,
  Bullet,
  ButtonGroup
} from './style';


export default function Products() {
  return (
    <PlansContainer id="Products">
  <Title>Nossos Planos</Title>
  <ButtonGroup>
    <button className="secondary">Assistência <br /> Manutenção</button>
    <button className="secondary">Amenities <br />  e Kits</button>
    <button className="secondary">Aluguel de <br /> Enxoval</button>
    <button className="secondary">Arrumação <br /> e Limpeza</button>
    </ButtonGroup>
  <Table>
  <tbody>
      <TableRow>
        <TableCell><Bullet color="#1AB2A0" /> Master</TableCell>
        <TableCell><CheckIcon>✔</CheckIcon></TableCell>
        <TableCell><CheckIcon>✔</CheckIcon></TableCell>
        <TableCell><CheckIcon>✔</CheckIcon></TableCell>
        <TableCell><CheckIcon>✔</CheckIcon></TableCell>
      </TableRow>
      <TableRow>
        <TableCell><Bullet color="#389197" /> Premium</TableCell>
        <TableCell><CheckIcon>✔</CheckIcon></TableCell>
        <TableCell><CheckIcon>✔</CheckIcon></TableCell>
        <TableCell><CheckIcon>✔</CheckIcon></TableCell>
        <TableCell></TableCell>
      </TableRow>
      <TableRow>
        <TableCell><Bullet color="#0C373C" /> Superior</TableCell>
        <TableCell><CheckIcon>✔</CheckIcon></TableCell>
        <TableCell><CheckIcon>✔</CheckIcon></TableCell>
        <TableCell></TableCell>
        <TableCell></TableCell>
      </TableRow>
      <TableRow>
        <TableCell><Bullet color="#0A4C4C" /> Standard</TableCell>
        <TableCell></TableCell>
        <TableCell></TableCell>
        <TableCell></TableCell>
        <TableCell><CheckIcon>✔</CheckIcon></TableCell>
      </TableRow>
      </tbody>
  </Table>
</PlansContainer>

  );
}