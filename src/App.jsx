import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import Landing from "./Pages/Landing";
import RootLayouts from "./layouts/RootLayouts";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayouts/>}>
          <Route index={true} element={<Landing />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
