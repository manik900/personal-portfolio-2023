// eslint-disable-next-line no-unused-vars
import React from "react";

import Header from "./components/Header";
import Banner from "./components/Banner";
import Nav from "./components/Nav";
import About from "./components/About";
import Services from "./components/Services";
import Work from "./components/Work";
import Contact from "./components/Contact"
const App = () => {
  return (
<div className="bg-gradient-to-r from-cyan-500 via-green-400 to-violet-400">
<Header />
<Banner />
<Nav />
<About />
<Services />
<Work />
<Contact />
<div className="h-[4000px]"></div>
</div>
  )
}

export default App;
