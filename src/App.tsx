import * as React from "react";
import { BrowserRouter, Routes } from "react-router-dom";
import { createRootes } from "./constants/routes";
import { AppRoute } from "./controllers/AppRoute/AppRoute";
import "./App.scss";
import { v4 as uuidv4 } from "uuid";
import AppHeader from "./components/appHeader/appHeader";

function App() {
  return (
    <>
      <div className="App" key={uuidv4()}>
        <AppHeader />
        <BrowserRouter>
          <Routes>{createRootes().map((route) => AppRoute(route))}</Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
