import Image from "next/image";

const Avatar = () => {
  return (
    <div className="hidden w-50 h-50 xl:flex xl:max-w-none xl:w-[50%] xl:h-50">
    <Image src={'/Kanya-BG.png'} width={737} height={600} alt="my photo" className="w-full h-full"/>
    </div>
  );
};

export default Avatar;
