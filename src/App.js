import './App.css';
import { Switch, Route } from 'react-router-dom';
import Nav from './components/Nav';
import CharacterData from './components/CharacterData';
import QuoteData from './components/QuoteData';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/character" component={CharacterData} />
        <Route exact path="/quote" component={QuoteData} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
      <Footer /> 
    </div>
  );
}

export default App;
