import "./styles.css";
import { store } from "./data";
import { Provider } from "react-redux";
import Counter from "./Counter";
export default function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
        <Counter />
      </div>
    </Provider>
  );
}
