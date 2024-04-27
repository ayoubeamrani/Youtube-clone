import logo from './logo.svg';
import './App.css';
// import Styles from './components/Styles.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Ytags from './components/Ytags';
// import Mytest from './components/Mytest';





function App() {
  return (
    <div className="App">

      <Header />
      <div className="mainContent">
        <div className="mySide">
          <Sidebar />
        </div>
        
        <div className="tags-videos">
          <div className="tags">
            <Ytags id='tagOn' tag="All" />
            <Ytags tag="Music" />
            <Ytags tag="Playlists" />
            <Ytags tag="Chill-out music" />
            <Ytags tag="Gaming" />
            <Ytags tag="Live" />
            <Ytags tag="Piano" />
            <Ytags tag="Religious recitation" />
            <Ytags tag="Animated films" />
            <Ytags tag="Sheikh" />
            <Ytags tag="ASMR" />
            <Ytags tag="Healing prayer" />
          </div>
        </div>
      </div>
      {/* <h1>hello world</h1> */}
      {/* <Mytest /> */}
    </div>
  );
}

export default App;
