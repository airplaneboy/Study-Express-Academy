import Lottie from 'lottie-react';
import wavyAnimation from '@/public/assets/lottie/Wavy.json';

const Example = ({ className }: { className: string | undefined }) => {
  return <Lottie className={className} animationData={wavyAnimation} />;
};

export default Example;
