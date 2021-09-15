import './App.css';
import Header from './components/Header';
import Header2 from './components/Header2';
import NewsNotification from './components/NewsNotification';
import AdvertNotification from './components/AdvertNotification';
import MainSection from './components/MainSection';

function App() {
document.body.style = 'background: whitesmoke;';
  return (
    <div>
      <Header/>
      <Header2/>
      <NewsNotification/>
      <AdvertNotification/>
      <MainSection/>
    </div>
  );
}

export default App;
