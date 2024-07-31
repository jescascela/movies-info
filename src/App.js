import {Outlet} from 'react-router-dom'

import NavbarMenu from './components/NavbarMenu';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavbarMenu />
      <Outlet />
    </div>
  );
}

export default App;
