import katex from 'katex';
import 'katex/dist/katex.min.css';

const TeX = ({
  children,
  displayMode = false,
  className = '',
}: {
  children: string;
  displayMode?: boolean;
  className?: string;
}) => {
  if (children == (null || undefined)) return;
  const html = katex?.renderToString(children, { throwOnError: false, displayMode, leqno: false, fleqn: false });

  return <span className={className} dangerouslySetInnerHTML={{ __html: html }} />;
};

export default TeX;
