import React from "react";
import Navbar from "./components/common/navbar";
import MainPage from "./pages/mainPage";
import SearchPage from "./pages/searchPage";
import SelectDatePage from "./pages/selectDatePage";
import ConfirmationPage from "./pages/confirmationPage";
const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      
      <ConfirmationPage /> 
    </div>
  );
};

export default App;
