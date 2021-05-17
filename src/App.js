import React,{useState} from "react";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import SideBar from "./Components/Sidebar/Sidebar"
import "./App.css";

import Home from "./Components/Home/Home"
import Dashboard from "./Components/Dashboard/Dashboard"
import { BrowserRouter, Route, Switch,useHistory } from "react-router-dom";
import Listing from "./Components/Listing/Listing";


function App() {
  const [sideToggle,setSideToggle] = useState(true)

  return (
    <div className="app-content">
       <BrowserRouter histroy={useHistory}>
      <div className="sidebar">
      <SideBar toggleSide={sideToggle}/>
      </div>
      <div className={`header-content ${sideToggle && `width-full`}`}>
      <Header toggelSideBar={e=>setSideToggle(!sideToggle)} />
      <div className="body-content">
        <Switch>
          <Route path="/home" exact component={Home} />
          <Route path="/dashboard" exact component={Dashboard} />
          <Route path="/" exact component={Listing} />
        </Switch>
      </div>
      <Footer />
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
