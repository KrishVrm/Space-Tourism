import {BrowserRouter as Router} from 'react-router-dom';
import {Header} from './components/atom-components/Header';
import { AnimatedRoutes } from './components/AnimatedRoutes';
import './styles/App.css';

function App() {
  return (
    <>
    <Router>
      <Header/>
      <AnimatedRoutes/>
    </Router>
    </>
  );
}

export default App;
