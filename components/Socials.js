import Link from 'next/link';

import {RiInstagramLine, RiLinkedinLine, RiFacebookLine} from 'react-icons/ri'
const Socials = () => {
  return <div className='flex items-center gap-x-5 text-lg'>
  <Link href={''} className='hover:text-accent  transition-all duration-300'><RiLinkedinLine></RiLinkedinLine></Link>
  <Link href={''} className='hover:text-accent  transition-all duration-300'><RiInstagramLine></RiInstagramLine></Link>
  <Link href={''} className='hover:text-accent  transition-all duration-300'><RiFacebookLine></RiFacebookLine></Link>
  
  </div>;
};

export default Socials;
