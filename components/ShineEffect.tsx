const ShineEffect = () => {
  return (
    <div
      className={`bg-[linear-gradient(45deg,transparent_25%,rgba(253,230,138,.7)_50%,transparent_75%,transparent_100%)]  absolute inset-0 w-full h-full  bg-[length:250%_250%,100%_100%] bg-[position:-100%_0,0_0] bg-no-repeat  transition-[background-position_0s_ease] duration-0 animate-shine pointer-events-none`}
      // className={`bg-[linear-gradient(45deg,transparent_25%,rgba(254,249,195,.7)_50%,transparent_75%,transparent_100%)]  absolute inset-0 w-full h-full  bg-[length:250%_250%,100%_100%] bg-[position:-100%_0,0_0] bg-no-repeat  transition-[background-position_0s_ease] duration-0 animate-shine pointer-events-none`}
    />
  );
};

export default ShineEffect;
