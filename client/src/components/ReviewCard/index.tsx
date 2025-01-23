import React from "react";
import {
  Card, Header, Title, Text, Name, Data
} from "./style";

type ReviewCardProps = {
  name: string;
  date: string;
  title: string;
  text: string;
};

export default function ReviewCard({ name, date, title, text}: ReviewCardProps) {
  return (
    <Card>
      <Header>
        <Name>{name}</Name>
        <Data>{date}</Data>
      </Header>
      <Title>{title}</Title>
      <Text>
        {text}
      </Text>
    </Card>
  );
}
