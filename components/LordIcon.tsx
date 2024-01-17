import dynamic from 'next/dynamic';

const LordIcon = async ({ src, size, className }: { src: string; size?: number; className?: string | undefined }) => {
  const LordIconPlayer = dynamic(() => import('@/components/LordIconPlayer'), {
    ssr: false,
    loading: () => <span>Loading</span>,
  });

  // const ICON = 'https://cdn.lordicon.com/egmlnyku.json';

  const response = await fetch(src.startsWith('https') ? src : `https://cdn.lordicon.com/${src}.json`);
  const data = await response.json();

  return <LordIconPlayer className={className} src={data} size={size} />;
};
export default LordIcon;
