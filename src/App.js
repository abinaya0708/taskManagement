// import logo from './logo.svg';
// import './App.css';
import { Provider } from "react-redux";
import { Store } from "./Redux/Store/Store";
import { Routing } from "./Redux/Routing";
function App() {
  return (
    
    <div>
      <Provider store={Store}>
        <Routing/>
      </Provider>
    </div>
  );
}

export default App;
