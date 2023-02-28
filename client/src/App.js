import './App.css';
import {Routes, Route, Link} from "react-router-dom";
import ChatView from './views/ChatView'


function App() {
  return (
    <div className="App">
      <h1>Jobs Board</h1>
      <Routes>
        <Route path={'/chat'} element={<ChatView/>}></Route>
      </Routes>
    </div>
  );
}

export default App;