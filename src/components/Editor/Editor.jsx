import { useMarkdown } from '../MarkdownContext'
import style from './Editor.module.css';

const Editor = () => {
  const { markdown, setMarkdown } = useMarkdown();

  const handleChange = (event) => {
    setMarkdown(event.target.value); 
  };

  return (
    <div className={style.editor}>
      <textarea 
        value={markdown}
        onChange={handleChange}
        placeholder="Digite seu Markdown aqui..."
        id="editor"
      />
    </div>
  );
};

export { Editor };