import logo from '../../assets/images/MyContacts.svg';
import { Container } from './styles';

export default function Header() {
  return (
    <Container>
      <img src={logo} alt="MyContacts" width="201" />
    </Container>
  );
}
