'use client';
import Sparkles from '@/components/Sparkles';

export default function Home() {
  return (
    <div className='bg-black text-white w-96 h-96'>
      <div className='bg-[linear-gradient(45deg,transparent_25%,rgba(68,68,68,.2)_50%,transparent_75%,transparent_100%)] bg-zinc-950 relative max-w-md overflow-hidden rounded-xl border border-slate-900 bg-[length:250%_250%,100%_100%] bg-[position:-100%_0,0_0] bg-no-repeat px-8 py-16 shadow-2xl transition-[background-position_0s_ease] hover:bg-[position:200%_0,0_0] duration-0 hover:duration-[1500ms] '>
        <Sparkles delay={{ min: 500, max: 500 }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta asperiores repudiandae provident numquam
          consectetur porro nesciunt expedita quae. Expedita placeat, qui dolor voluptates magni facilis iusto ullam
          beatae distinctio quidem, quos perspiciatis at officia debitis. Consequatur ducimus impedit facere placeat,
          rem vitae totam cum, perferendis facilis modi minus amet optio magnam odio at sequi minima nisi nostrum error
          tenetur eius, quis quasi vel? Aliquid earum ut sint? Exercitationem, quos consequuntur, hic culpa
          necessitatibus repellat, minus voluptates magnam ex ducimus architecto voluptatum reiciendis incidunt
          asperiores suscipit doloribus omnis provident mollitia rem commodi. Commodi vel nostrum temporibus eligendi
          accusantium debitis animi odit.
        </Sparkles>
      </div>
    </div>
  );
}
