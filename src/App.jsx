import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import Landing from "./Pages/Landing";
import RootLayouts from "./layouts/RootLayouts";
import Headphones from "./Pages/Headphones";
import Speakers from "./Pages/Speakers";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayouts/>}>
          <Route index={true} element={<Landing />} />
          <Route path='/headphones' element={<Headphones/>}/>
          <Route path='/speakers' element={<Speakers/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
