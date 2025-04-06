import "./App.css";
import Attention from "./components/Attention";
import Hero from "./components/Hero";
// import Navbar from "./components/Navbar";
import Phonecontact from "./components/Phonecontact";
import WhatWeOffer from "./components/WhatWeOffer";

function App() {
  return (
    <div className="">
      <Hero />
      <WhatWeOffer />
      <Phonecontact/>
      <Attention/>
    </div>
  );
}

export default App;
