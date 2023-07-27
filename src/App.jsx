import { useState } from "react";
import "./App.css";
import Editor from "./components/Editor/Editor";
import { initialData } from "./data";

function App() {
  const [document, setDocument] = useState(initialData);

  return (
    <div className="app">
      <h1 className="app__title"> WYSIWYG Editor</h1>

      <Editor initialValue={document} onChange={setDocument} />
    </div>
  );
}

export default App;
