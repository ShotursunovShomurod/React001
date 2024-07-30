import logo from './logo.svg';
import './App.css';
import Header from './components/header/header';
import Hero from './components/hero/hero';
import Sevvice from './components/sevvice/sevvice';
import Mextreo from './components/maxtreo/maxtreo';
import Years from './components/years/years';
import Testimonial from './components/testimonial/testimonial';
import Letest from './components/letest/letesgt';
import Forget from './components/forget/forget';
function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <Sevvice/>
      <Mextreo/>
      <Years/>
      <Testimonial/>
      <Letest/>
      <Forget/>
    </div>
  );
}

export default App;
