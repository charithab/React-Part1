import React from "react";
import ReactDOM  from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";


const AppLogo = () => {
    return(
        <div className="app">
            <Header />
            <Body />
        </div>
    )
}

// JSX to make our life easier

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLogo />);
