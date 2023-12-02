import { Button, Text, Wrapper } from './Home.styled';

export default function Home() {
  return (
    <Wrapper>
      <Text>Choose a car for your best trips and adventures</Text>
      <Button to={'/catalog'}>Go to rent</Button>
    </Wrapper>
  );
}
