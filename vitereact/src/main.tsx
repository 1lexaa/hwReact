import ReactDOM from "react-dom/client";
import App  from "./App.tsx";
import "./index.css";

import Book from "./components/Book.tsx"
import Music from "./components/Music.tsx";
import Recipe from "./components/Recipe.tsx";
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <>
    <App />
   <Book />
   <Music />
   <Recipe />
  </>
);