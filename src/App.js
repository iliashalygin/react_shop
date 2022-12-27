
import './App.css';
import Header from './components/header/Header';
import { BrowserRouter } from 'react-router-dom';
import Content from './components/content/Content';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Header />
      <Content />
    </div>
    </BrowserRouter>
  );
}

export default App;
