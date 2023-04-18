import { Container, Footer, Overlay } from './styles';
import Button from '../Button';

export default function Modal() {
  return (
    <Overlay>
      <Container>
        <h1>Título do modal</h1>
        <p>corpo do modal</p>

        <Footer>
          <button className="cancel-button" type="button">Cancelar</button>
          <Button type="button">Deletar</Button>
        </Footer>
      </Container>
    </Overlay>
  );
}
