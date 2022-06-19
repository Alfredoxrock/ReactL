import logo from './logo.svg';
import './App.css';
import Title from './components/samples';
import Welcome from './components/welcome';
import Hi from './components/hello';
import Message from './components/message';
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
      <Counter></Counter>
      <Title className="Bruce" heroName="Batman">

        <p>This is children props.....</p>
      </Title>
      <Title className="Clark" heroName="Superman">
        <button>Click</button>
      
      </Title>
      <Title className="Diana" heroName="Wonderwoman">
        <input type="text" placeholder="Enter Text"></input>

      </Title>
      <Welcome className="Bruce" heroName="Batman"/>
      <Welcome className="Clark" heroName="Superman"/>
      <Welcome className="Diana" heroName="Wonderwoman"/>

      <Message/>
    </div>
  );
}

export default App;
