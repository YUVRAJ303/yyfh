import React from "react";
import Navbar from "./components/common/navbar";
import MainPage from "./pages/mainPage";
import SearchPage from "./pages/searchPage";

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <MainPage />
      <SearchPage />
    </div>
  );
};

export default App;
