import './App.scss';
import { Footer } from './components/partials/footer/footer';
import { Header } from './components/partials/header/header';
import { MainContent } from './components/partials/main/main';
import { ShowNav } from './components/partials/nav/nav';


const App = () => {
  return (
    <div className="App">
      <Header pageTitle="Spirit"/>
      <div className="main-content">
        <nav className="main-navigation">
            <ShowNav />
        </nav>
      <MainContent />
      </div>
      <Footer />
    </div>
  );
}

export default App;
