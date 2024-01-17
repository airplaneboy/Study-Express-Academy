import dynamic from 'next/dynamic';

const IconServer = async ({ src }: { src: string }) => {
  const LordIcon2 = dynamic(() => import('@/components/LordIcon'), {
    ssr: false,
    loading: () => <span>Loading</span>,
  });

  // const ICON = 'https://cdn.lordicon.com/egmlnyku.json';

  const response = await fetch(src.startsWith('https') ? src : `https://cdn.lordicon.com/${src}.json`);
  const data = await response.json();

  return <LordIcon2 src={data} />;
};
export default IconServer;
