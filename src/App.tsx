import Button from "./components/Button";
import Alert from "./components/Alert";
import { useState } from "react";

function App() {
  const [alertState, setAlertState] = useState(false);

  return (
    <div>
      {alertState && (
        <Alert onClick={() => setAlertState(false)}>My Alert</Alert>
      )}
      <Button style="primary" onClick={() => setAlertState(true)}>
        Click me
      </Button>
    </div>
  );
}

export default App;
