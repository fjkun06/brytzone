import { brytzone } from '@/app/[locale]/home/header';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react'

const SpecialNav = () => {
  const router = useRouter();

  return (
    <nav className={`${brytzone}_special_nav`}>
        <Image priority quality={100} width={96} height={72} src={'/assets/images/icon.png'} alt="brytzone-logo" onClick={() => router.push("/")} />
        {/* <Image quality={100} width={84} height={63} src={'/assets/images/icon.png'} alt="brytzone-logo" onClick={() => router.push("/")} /> */}
  </nav>
  )
}

export default SpecialNav
