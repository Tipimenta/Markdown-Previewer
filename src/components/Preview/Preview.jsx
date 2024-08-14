import { useMarkdown } from '../MarkdownContext'
import { marked } from 'marked';
import style from './Preview.module.css';

const Preview = () => {
  const { markdown } = useMarkdown();
  const htmlString = marked(markdown); 

  return (
    <div className={style.preview} id="preview" dangerouslySetInnerHTML={{ __html: htmlString }} />
  );
};

export { Preview };