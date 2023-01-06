import './App.css';
import {data} from './util/data.js' //array
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Body from './components/Body';


function App() {
  return (
    <div className="App">
      <Header />
      <Body data={data}/>
    </div>
  );
}

export default App;
