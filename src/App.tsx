import "./App.css";

import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from "./pages/Home";
import TopBar from "./components/TopBar/TopBar";

function App() {
  return (
    <>
      <div className="flex flex-col w-full bg-slate-400">
        <BrowserRouter>
          <TopBar></TopBar>
          <Routes>
            <Route path="/" element = {<Home></Home>} ></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}
export default App;
