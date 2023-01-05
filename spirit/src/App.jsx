import './App.scss';
import { Footer } from './components/partials/footer/footer';
import { Header } from './components/partials/header/header';

const App = () => {
  return (
    <div className="App">
      <Header pageTitle="Velkommen til min react side"/>
      <Footer />
    </div>
  );
}

export default App;
