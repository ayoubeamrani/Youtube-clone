import logo from './logo.svg';
import './App.css';
// import Styles from './components/Styles.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
// import Mytest from './components/Mytest';





function App() {
  return (
    <div className="App">

      <Header />
      <div className="mainContent">
        <Sidebar />
        <div className="filtervideos">
          <div className="videos"></div>
        </div>
      </div>
      {/* <h1>hello world</h1> */}
      {/* <Mytest /> */}
    </div>
  );
}

export default App;
