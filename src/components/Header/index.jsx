// import styles
import { Container } from './styles';

function Header() {
  return (
    <>
      <Container className="header">
        <nav>
          <ul className="navigation">
            <li>Button Generator</li>
            <li>About</li>
          </ul>
        </nav>
      </Container>
    </>
  );
}

export default Header;
