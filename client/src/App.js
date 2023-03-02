import {Routes, Route} from "react-router-dom";
import "./Chat.css";
import "./App.css";
import ChatView from './views/ChatView'
import MainPage from './views/MainPage';



function App() {
  return (
    <div>
      <Routes>
        <Route path={'/'} element={<MainPage/>}/>
        <Route path={'/chat'} element={<ChatView/>}></Route>
      </Routes>
    </div>
  );
}

export default App;