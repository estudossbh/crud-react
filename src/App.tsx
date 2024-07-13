import React from 'react';
import logo from './logo.svg';
import './App.css';

// spa
// single page aplication
const Button: React.FC<{ change: boolean; color: string; text: string; onClick: () => void }> = (props) => {
  return <button type='button' style={{ backgroundColor: props.color }} onClick={props.onClick}> 
    {props.change ? 'mudou' : props.text}
  </button>;
};

const App = () => {
  const [change, setChange] = React.useState(false);

  const handleClick = () => {
    setChange(state => !state);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit aaaaa <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Button change={change} color='red' text='teste' onClick={handleClick} />
    </div>
  );
}

export default App;
