import { ThemeProvider } from "styled-components";
import "./App.css";
import Counter from "./components/Counter";
import { theme } from "./theme";
import "antd/dist/antd.min.css";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Counter />
      </div>
    </ThemeProvider>
  );
}

export default App;
