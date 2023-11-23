// react
import { memo } from 'react';
// next
import Image from 'next/image';
import Link from 'next/link';

function Logo({ 
  ...other
}) {
  return (
    <Link href="/">
      <Image
        src="/assets/logo.png"
        alt="logo"
        priority
        {...other}
      />
    </Link>
  )
}

export default memo(Logo);