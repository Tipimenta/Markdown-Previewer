import { useEffect } from 'react';
import './App.css';
import { Editor, Preview } from './components';
import { MarkdownProvider } from './components/MarkdownContext'

function App() {

  
  useEffect(() => {
   
  },[]);

  return (
    <MarkdownProvider>
      <div className="layout">
        <h1>Markdown Previewer</h1>
        <div className="layout-content">
      <Editor />
      <Preview />
      </div>
      </div>
    </MarkdownProvider>
  );
}

export default App;
