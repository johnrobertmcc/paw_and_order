import Container from '@/components/Container';

export default function Home() {
  return ['iceland', 'testing'].map((el) => (
    <Container tag="section">{el}</Container>
  ));
}

