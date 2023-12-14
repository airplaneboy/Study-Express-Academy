import katex from 'katex';
import 'katex/dist/katex.min.css';

const TeX = ({ children, displayMode = false }: { children: string; displayMode?: boolean }) => {
  const html = katex.renderToString(children, { throwOnError: false, displayMode });

  return <span dangerouslySetInnerHTML={{ __html: html }} />;
};

export default TeX;
