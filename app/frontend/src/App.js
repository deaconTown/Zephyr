import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Body from './components/Body';

function App() {
  return (
    <div className='overflow-auto min-h-screen'>
      <Header/>
      <Body/>
      <Footer/>
    </div>
  );
}

export default App;
