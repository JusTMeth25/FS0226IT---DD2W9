import "./App.css";
// importazione di Bootstrap per rendere disponibili le funzionalita' e i componenti Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
// Import container bootstrap
import { Container } from "react-bootstrap";

import DayList from "./assets/components/DayList";
import UsersList from "./assets/components/UsersList";
import Products from "./assets/components/Products";
import Counter from "./assets/components/Counter";

// Componenti fissi
import Header from "./assets/components/fixedComponents/Header";
import Footer from "./assets/components/fixedComponents/Footer";

function App() {
  return (
    <>
      <Header />
      <Container>
        <div>
          <DayList />
          <hr />
          <UsersList />
          <hr />
          <Products />
        </div>
          <Counter />
      </Container>
      <Footer />
    </>
  );
}

export default App;
