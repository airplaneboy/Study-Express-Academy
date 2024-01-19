import dynamic from 'next/dynamic';
import { LordIconPlayer } from '@/components/LordIconPlayer';

const LordIcon = async ({
  src,
  size = 96,
  xsSize,
  smSize,
  mdSize,
  lgSize,
  xlSize,
  xl2Size,
  className,
}: LordIconPlayer) => {
  const LordIconPlayer = dynamic(() => import('@/components/LordIconPlayer'), {
    ssr: false,
    loading: () => <span>Loading</span>,
  });

  // const ICON = 'https://cdn.lordicon.com/egmlnyku.json';

  const response = await fetch(src.startsWith('https') ? src : `https://cdn.lordicon.com/${src}.json`);
  const data = await response.json();

  return (
    <LordIconPlayer
      className={className}
      src={data}
      size={size}
      xsSize={xsSize}
      smSize={smSize}
      mdSize={mdSize}
      lgSize={lgSize}
      xlSize={xlSize}
      xl2Size={xl2Size}
    />
  );
};
export default LordIcon;
