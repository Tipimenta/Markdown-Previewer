import { useMarkdown } from '../MarkdownContext'
import style from './Editor.module.css';

const Editor = () => {
  const { markdown, setMarkdown } = useMarkdown();

  const handleChange = (event) => {
    setMarkdown(event.target.value); 
  };

  return (
    <div className={style.editor}>
    <h2>Editor</h2>
    <div className={style.content}>
      <textarea 
        value={markdown}
        onChange={handleChange}
        placeholder="Digite seu Markdown aqui..."
        id="editor"
      />
      </div>
    </div>
  );
};

export { Editor };