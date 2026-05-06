import MovieGallery from "./components/MovieGallery";
import MyFooter from "./components/MyFooter";
import MyHeroSection from "./components/MyHeroSection";
import MyNavbar from "./components/MyNavbar";
import MyProfilePage from "./components/MyProfilePage";
import MySettingPage from "./components/MySettingPage";
import { BrowserRouter, Routes, Route } from "react-router";
import NotFound from "./components/NotFound";
import MovieDetails from "./components/MovieDetails";

function App() {
  return (
    <BrowserRouter>
      {/* // Utilizzo una struttura a flex column per avere header, main e footer in colonna e con altezza minima del 100vh per occupare tutta la pagina
    // dando al main flex-grow 1 per farlo espandere e occupare tutto lo spazio disponibile tra header e footer */}
      <div className="d-flex flex-column min-vh-100">
        <header>
          <MyNavbar />
        </header>
        <main className="flex-grow-1">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <MyHeroSection />
                  <MovieGallery movieTitle="Batman" />
                  <MovieGallery movieTitle="Marvel" />
                  <MovieGallery movieTitle="Star Wars" />
                  <MovieGallery movieTitle="Pokemon" />
                </>
              }
            />
            <Route path="/movie-details/:movieId" element={<MovieDetails />} />
            <Route path="/profile" element={<MyProfilePage />} />
            <Route path="/settings" element={<MySettingPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <MyFooter />
      </div>
    </BrowserRouter>
  );
}

export default App;
