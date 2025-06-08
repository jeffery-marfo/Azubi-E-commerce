import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import Landing from "./Pages/Landing";
import RootLayouts from "./layouts/RootLayouts";
import Headphones from "./Pages/Headphones";
import Speakers from "./Pages/Speakers";
import Earphones from "./Pages/Earphones";
import HeadphoneDetail from "./Pages/HeadphoneDetail";
import MarkHeadphonesDetail from "./Pages/MarkHeadphonesDetail";
import XX59SectionDetail from "./Pages/XX59SectionDetail";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayouts/>}>
          <Route index={true} element={<Landing />} />
          <Route path='/headphones' element={<Headphones/>}/>
          <Route path='/speakers' element={<Speakers/>}/>
          <Route path='/earphones' element={<Earphones/>}/>
          <Route path='/headphoneDetail' element={<HeadphoneDetail/>}/>
          <Route path='/markheadphoneDetail' element={<MarkHeadphonesDetail/>}/>
          <Route path='/XX59DetailedPage' element={<XX59SectionDetail/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
