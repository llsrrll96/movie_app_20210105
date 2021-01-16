import React from "react";
import {HashRouter,Route} from "react-router-dom"; //여러 라우터들이 있다.
import Home from "./routes/Home";
import About from "./routes/About";
import Detail from "./routes/Detail"
import Navigation from "./components/Navigation";

function App() {
    return (
        //exact : 유일한 경로 하나
        //Navigation 내의 Link를 쓰기위해서는 Router 내에 선언
        <HashRouter>
            <Navigation /> 
            <Route path="/" exact={true} component ={Home}/>
            <Route path="/about" component ={About}/>
            <Route path="/movie/:id" component={Detail}/>
        </HashRouter>
    );
}
export default App;
