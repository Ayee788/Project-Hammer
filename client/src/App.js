import './App.css';
import {Routes, Route, Link} from "react-router-dom";
import ChatView from './views/ChatView'
import MainPage from './views/MainPage';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={'/'} element={<MainPage/>}/>
        <Route path={'/chat'} element={<ChatView/>}></Route>
      </Routes>
    </div>
  );
}

export default App;