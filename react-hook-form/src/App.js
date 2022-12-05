import "./App.css";
import { Card ,Register } from './components'
import { TEXT } from "./constants";

function App() {
  return (
    <div className="container mx-auto">
      <Card cardTitle={TEXT.REGISTER}>
          <Register/>
      </Card>
    </div>
  );
}

export default App;
