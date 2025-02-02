import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";


//component imports
import MyFooter from "./components/Myfooter/Myfooter.component"
import MyNav from "./components/MyNav/MyNav.component"
import Welcome from "./components/Welcome/Welcome.component";

//data import
import bookStore from "./assets/scifi.json";

//context import
import {
  BookContext,
  ThemeContext,
  AsinSelectedContext,
} from "./Contexts/context";
import Homepage from "./Pages/Homepage/Homepage.page";
import NotFound from "./Pages/NotFound/NotFound.page";
import BookPreview from "./Pages/BookDetails/BookPreview.page";
import BookDetails from "./Pages/BookDetails/BookDetails.pages";

function App() {
  const [bookList, setBookList] = useState(bookStore);
  const [theme, setTheme] = useState("dark");
  const [asinSelected, setAsinSelected] = useState(null);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <BrowserRouter>
      <AsinSelectedContext.Provider
        value={{ asinSelected, setAsinSelected }}
      >
        <BookContext.Provider
          value={{ bookList, setBookList }}
        >
          <ThemeContext.Provider value={theme}>
            <div
              className={`App ${theme}`}
              data-bs-theme={theme}
            >
              <MyNav toggleTheme={toggleTheme} />

              <Routes>
                <Route path="/" element={<Homepage />} />

                <Route
                  path="/book/:asin"
                  element={<BookDetails />}
                />
                <Route path="*" element={<NotFound />} />
              </Routes>

              <MyFooter />
            </div>
          </ThemeContext.Provider>
        </BookContext.Provider>
      </AsinSelectedContext.Provider>
    </BrowserRouter>
  );
}

export default App;