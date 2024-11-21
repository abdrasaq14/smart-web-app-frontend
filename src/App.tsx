import { BrowserRouter as Router } from "react-router-dom";
import { RouteToRender } from "./routes";
import routes from "./routes";

function App() {
  return (
    <Router>
      <RouteToRender route={routes} />
    </Router>
  );
}

export default App;
