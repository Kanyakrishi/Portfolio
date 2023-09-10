import Image from "next/image";

const Avatar = () => {
  return (
    <div className="hidden xl:flex xl:max-w-none">
    <Image src={'/Kanya-BG.png'} width={737} height={600} alt="my photo" className="w-full h-full"/>
    </div>
  );
};

export default Avatar;
