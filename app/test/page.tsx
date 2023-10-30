'use client';
import 'katex/dist/katex.min.css';
import { useEffect } from 'react';
// @ts-ignore
import renderMathInElement from 'katex/dist/contrib/auto-render';
import TeX from '@/components/Tex';

// function processTextForKaTeX(text: string) {
//   // Define regular expressions to match numbers and symbols
//   const numberRegex = /(\d+(\.\d+)?)/g;
//   const symbolRegex = /([+\-*/=^()])/g;
//   const expressionRegex = /(?<!\S)[A-Za-z\s.,?!:;–'"()\[\]/&]+(?!\S)/g;

//   // Replace matched numbers and symbols with KaTeX delimiters
//   const processedText = text
//     .replace(numberRegex, (match: any) => `$$${match}$$`)
//     .replace(symbolRegex, (match: any) => `$$${match}$$`);

//   // const processedExpression = text.replace(expressionRegex, (match: any) => renderText(match));
//   // return processedExpression;
//   return processedText;
// }

// function mathRenderer(text: string) {
//   const processedText = processTextForKaTeX(text);

//   const renderedMath = katex.renderToString(processedText, { throwOnError: false, displayMode: false });

//   return <div dangerouslySetInnerHTML={{ __html: renderedMath }}></div>;
// }

const Page = () => {
  useEffect(() => {
    renderMathInElement(document.body, {
      delimiters: [
        { left: '$$', right: '$$', display: true },
        { left: '$', right: '$', display: false },
        { left: '\\[', right: '\\]', display: true },
        { left: '\\(', right: '\\)', display: false },
      ],
    });
  }, []);

  return (
    <>
      <h1>Hello $5$</h1>
      <h1>
        Hello <TeX>5</TeX>, it&apos;s a privilege to meet you!
      </h1>
    </>
  );
};

export default Page;
