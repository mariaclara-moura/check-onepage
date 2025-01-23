import {  Container, Card, Title, Description, AppImage} from "./style";
import React from 'react';
import {Limpeza, Manutencao, Amenities, Enxoval} from '../../assets';
import Image from 'next/image';
  
  const services = [
    {
      title: 'Arrumação e Limpeza',
      text: 'Nossas especialistas em bem-estar garantem um ambiente impecável, com uma lembrança olfativa assinada, uso de produtos de alta qualidade e cuidado com todos os detalhes. E o melhor, sem imprevistos! É só esperar a boa avaliação chegar.',
      img: Limpeza
    },
    {
      title: 'Aluguel de Enxoval',
      text: 'Oferecemos itens premium cuidadosamente selecionados, garantindo conforto excepcional e alta durabilidade. Cada detalhe é pensado para proporcionar uma experiência de qualidade superior e atender às necessidades com excelência.',
      img: Enxoval
    },
    {
      title: 'Amenities e Kits Boas-Vindas',
      text: 'Nosso foco está em oferecer toques especiais que agregam valor à estadia, deixando memórias positivas e um impacto duradouro.',
      img: Amenities
    },
    {
      title: 'Acesso a Assistência e Manutenção',
      text: 'Conte com nossa equipe para resolver problemas técnicos de forma rápida e eficiente, garantindo que seu imóvel esteja sempre disponível e em boas condições.',
      img: Manutencao
    }
  ];

export default function Services
(){
    return (
    <Container id="Services">
             {services.map((service, index) => (
         <Card key={index}>
         {service.title === "Acesso a Assistência e Manutenção" || service.title === "Aluguel de Enxoval" ? (
           <>
             <AppImage src={service.img} alt={service.title} />
             <div style={{ display: 'flex', flexDirection: 'column', width: '50%', alignSelf: 'center', padding:'2.5rem' }}>
             <Title style={{ textAlign: "right" }}>{service.title}</Title>
             <Description  style={{ textAlign: "right" }}>{service.text}</Description>
             </div>

           </>
         ) : (
           <>
            <div style={{ display: 'flex', flexDirection: 'column', width: '50%', alignSelf: 'center', padding:'2.5rem' }}>
             <Title style={{ textAlign: "left" }}>{service.title}</Title>
             <Description style={{ textAlign: "left" }}>{service.text}</Description>
             </div>
             <AppImage src={service.img} alt={service.title} />
           </>
         )}
       </Card>
        ))}
      </Container>
      );
}