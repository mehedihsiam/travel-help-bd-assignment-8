import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header'
import Banner from './components/Banner/Banner';
import Body from './components/BodyContainer/Body';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Banner></Banner>
      <Body></Body>
    </div>
  );
}

export default App;
