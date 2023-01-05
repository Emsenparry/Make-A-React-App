import './App.scss';
import { Footer } from './components/partials/footer/footer';
import { Header } from './components/partials/header/header';
import { MainContent } from './components/partials/main/main';


const App = () => {
  return (
    <div className="App">
      <Header pageTitle="Spirit"/>
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
