import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Body from './components/Body';
import MobileHeader from './components/Mobile/MobileHeader';
import MobileFooter from './components/Mobile/MobileFooter';

function App() {
  return (
    <div className='overflow-auto overflow-x-hidden min-h-screen'>
      <MobileHeader />
      <Header />
      <Body/>
      <MobileFooter/>
      <Footer /> 
    </div>
  );
}

export default App;
