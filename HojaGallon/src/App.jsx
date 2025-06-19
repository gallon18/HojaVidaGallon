import './App.css';
import Encabezado from './components/Encabezado.jsx';
import Acerca from './components/acerca.jsx';
import Educación from './components/Educación.jsx';
import Habilidades from './components/Habilidades.jsx';
import Referencias from './components/Referencias.jsx';

function App() {
  return (
    <div className="App">
      <Encabezado />
      <main className="container">
        <Acerca />
        <Experiencia />
        <Educación />
        <Habilidades />
        <Referencias />
      </main>
    </div>
  )
}

export default App;
