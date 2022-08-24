import logo from './logo.svg';
import './App.css';

const Header = () => {
  return <h2>Hello World!</h2>
}

const Field = () => {
  return <input placeholder='Type here' type='text' />
}

function Btn() {
  return <button />
}

function App() {
  return (
    <div className="App">
      <Header />
      <Field />
      <Btn />
    </div>
  );
}

export default App;
