import Card from "./Card";
import { ContainerStyled } from "./styles/Container.styled";
import data from "../data";

export default function Main() {
  const destinations = data.map(item => <Card key={item.id} {...item} />);
  return <ContainerStyled>{destinations}</ContainerStyled>;
}
