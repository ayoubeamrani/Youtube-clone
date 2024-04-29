import logo from './logo.svg';
import './App.css';
// import Styles from './components/Styles.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Ytags from './components/Ytags';
import Video from './components/Video';
import Data from './components/Data';







function App() {

  const myAll = Data.map((pro) =>{return (
        
    <Video product={pro} key={pro.id} thum={pro.image} log={pro.logo} title={pro.title} channel={pro.channel} views={pro.views} date={pro.date}/> 
     
 )})
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

          


          <div className="videos">
            {/* <Video />
            <Video />
            <Video />
            <Video />
            <Video />
            <Video />
            <Video />
            <Video />
            <Video /> */}
            {myAll}
          </div>



        </div>
      </div>
      {/* <h1>hello world</h1> */}
      {/* <Mytest /> */}
    </div>
  );
}

export default App;
