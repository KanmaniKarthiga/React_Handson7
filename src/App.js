import { BrowserRouter } from 'react-router-dom';
import './App.css';
import LinkCompo from './Components/LinkCompo';
import RouteCompo from './Components/RouteCompo'

function App() {
  return (
    <BrowserRouter>
      <LinkCompo/>
      <RouteCompo/>
    </BrowserRouter>
  );
}

export default App;
