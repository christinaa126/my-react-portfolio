import React, { useState } from "react";
import Header from "./Header";
import AboutMe from "./pages/AboutMe";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";
import BottomNav from "./Footer";
import keyboard from "./images/background.jpg";

const styles = {
  paperContainer: {
    backgroundImage: `url(${keyboard})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
};

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState("AboutMe");

  const renderPage = () => {
    switch (currentPage) {
      case "Resume":
        return <Resume />;
      case "Contact":
        return <Contact />;
      case "Portfolio":
        return <Portfolio />;
      default:
        return <AboutMe />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div style={styles.paperContainer} sx={{ height: "100%" }}>
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
      <BottomNav />
    </div>
  );
}
