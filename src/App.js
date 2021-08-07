import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import Header from './components/Header';
import Button from './components/Button';
import Cards from './components/Cards';
import img1 from './assets/img1.png';
import img2 from './assets/img2.png';

function App() {
  return (
    <div className="app">
      <Header />
      <section className="app__hero">
        <div className="app__heroCont">
          <h2>The gift of happiness</h2>
          <p>Show your gratitude with one of our gift sets, large and small,<br /> specially designed to spread joy to someone you love.</p>
          <Button url="/" variant="colored" text="SHOP NOW" />
        </div>
      </section>
      <section className="app__cardsCont">
        <Cards pic={img2} />
        <Cards pic={img1} />
      </section>
    </div>
  );
}

export default App;
