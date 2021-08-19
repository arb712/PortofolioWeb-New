import { BrowserRouter as Router } from "react-router-dom";
import PageWrapper from "./components/Pages/PageWrapper";
import Home from "./components/Pages/Home";

function App() {
  return (
    <>
      <Router>
        <PageWrapper>
          <Home exact path="/" component={Home} />
        </PageWrapper>
      </Router>
    </>
  );
}

export default App;
