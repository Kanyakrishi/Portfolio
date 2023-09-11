import Link from 'next/link';
import Image from 'next/image';

import { RiLinkedinLine, RiGithubFill, RiMailLine } from "react-icons/ri";
const Socials = () => {
  return <div className='flex items-center gap-x-5 text-lg'>
  <Link target="_blank"  href={"https://www.linkedin.com/in/kanya-krishi14/"} className='hover:text-accent  transition-all duration-300'><RiLinkedinLine></RiLinkedinLine></Link>
  <Link target="_blank"  href={"https://github.com/Kanyakrishi"} className='hover:text-accent  transition-all duration-300'><RiGithubFill></RiGithubFill> </Link>
  <Link target="_blank"  href={"https://leetcode.com/kanyakrishi/"} className='hover:text-accent  transition-all duration-300'><Image src={'./leetcode.svg'} width={20} height={20} alt='leetcode icon'/></Link>
  <Link target="_blank"  href={"mailto:kanyakrishi@gmail.com"} className='hover:text-accent  transition-all duration-300'><RiMailLine></RiMailLine> </Link>
  </div>;
};

export default Socials;
