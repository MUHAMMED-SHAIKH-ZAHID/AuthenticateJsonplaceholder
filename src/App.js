import { BrowserRouter } from "react-router-dom";
import RoutePage from "./Route/RoutePage";


function App() {
  return (
    <div className="App">
     <BrowserRouter >
     <RoutePage />
     </BrowserRouter>
    </div>
  );
}

export default App;
