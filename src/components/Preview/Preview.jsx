import { useMarkdown } from '../MarkdownContext'
import { marked } from 'marked';
import style from './Preview.module.css';

const Preview = () => {
  const { markdown } = useMarkdown();
  const htmlString = marked(markdown); 

  return (
    <div className={style.preview}>
    <h2>Preview</h2>
    <div className={style.content} id="preview" dangerouslySetInnerHTML={{ __html: htmlString }} />
    </div>
  );
};

export { Preview };