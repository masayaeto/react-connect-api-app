import logo from './logo.svg';
import './App.css';
// import Basic2 from './components/Basic2';
// import BasicUseEffect from './components/BasicUseEffect';
// import TimerContiner from './components/TimerContiner';
import ApiFetch from './components/ApiFetch';
import AppContext from './contexts/AppContext'
import B from './components/B';
import BasicReducer from './components/BasicReducer';

function App() {
  return (
    <AppContext.Provider value={"value from app.js"}>
      <div className="App">
        <ApiFetch/>
        <B/>
        <BasicReducer/>
      </div>
    </AppContext.Provider>
  );
}

export default App;
