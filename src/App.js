import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { PlayList } from "./component/page/PlayList";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" component={PlayList} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
