import Home from './components/home';
import Sobre from './components/sobre';
import Alunos from './components/alunos';
import {BrowserRouter, Routes, Link, Route} from 'react-router-dom'
import {Nav} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
  return (
    <div className="App">
      <h1>TESTE</h1>

      <BrowserRouter>

      <Nav variant='tabs'>
        <Nav.Link as={Link} to={"/"}>Pagina Inicial</Nav.Link>
        <Nav.Link as={Link} to={"/alunos"}>Alunos</Nav.Link>
        <Nav.Link as={Link} to={"/sobre"}>Sobre</Nav.Link>
      </Nav>


      <Routes>
        <Route path="/" index element={<home/>}></Route>
        <Route path="/alunos" index element={<Alunos/>}></Route>
        <Route path="/sobre" index element={<Sobre/>}></Route>
      </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
