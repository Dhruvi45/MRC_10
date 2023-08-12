import './App.css';
import MyRoutes from './component/MyRoutes';
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <div className="App">
       <BrowserRouter>
          <MyRoutes />
        </BrowserRouter>
    </div>
  );
}

export default App;
