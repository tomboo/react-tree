import React from "react";
import { Provider } from 'react-redux'
import FileExplorer from "./FileExplorer/FileExplorer";
import { generateStore } from "../store"
import "./styles.css";

// App Component
//
function App() {
  console.log('App');
  const store = generateStore();
  console.log(store);
  console.log(store.getState());
  
  return (
    <Provider store={store}>
      <div className="App">
        <FileExplorer />
      </div>
    </Provider>
  );
}

export default App;
