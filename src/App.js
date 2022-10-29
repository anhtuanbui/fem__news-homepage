import "./App.scss";
import Header from "./sections/Header/Header.jsx";
import Intro from "./sections/Intro/Intro.jsx";
import TopArticles from "./sections/TopArticles/TopArticles";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <Intro />
        <TopArticles/>
      </div>
    </div>
  );
}

export default App;
