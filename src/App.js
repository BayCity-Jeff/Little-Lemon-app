
import './App.css';

function App() {
  return (
    <>
      <Header>
        <img src="logo.svg" />
        <div>Nav.js</div>
      </Header>
      <Nav>
        <ul>
          <li><a href="/home">HOME</a></li>
          <li><a href="/about">ABOUT</a></li>
          <li><a href="/blog">MENU</a></li>
          <li><a href="/reservations">RESERVATIONS</a></li>
          <li><a href="/order">ORDER ONLINE</a></li>
          <li><a href="/login">LOGIN</a></li>
        </ul>
      </Nav>
      <Main>
        M
      </Main>
      <Footer>
        <meta property='og:image' content='/logo.svg' />
        <div>Nav.js</div>
        <div>Contact element</div>
        <div>Soc element</div>
      </Footer>
    </>
  );
}

export default App;
