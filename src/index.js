import React from "react";
import ReactDom from "react-dom";
import { RootComponent } from "./components/RootComponent/RootComponent";


const root = document.querySelector(".root");
ReactDom.render(<RootComponent />, root);
