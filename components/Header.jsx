import { useState } from "react"
import Wrapper from "./Wrapper"
import Link from "next/link"
import Image from "next/image"
import Menue from "./Menue"

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false)
  const [showCatMenue, setshowCatMenue] = useState(false)
  const [show, setShow] = useState("translate-y-0")
  const [lastScrolly, setLastScrolly] = useState(0)
  return (
    <header
      className={`w-full h-[50px] md:h-[80px] bg-white flex items-center justify-between z-20 sticky top-0 transition-transform duration-300 ${show}`}
    >
      <Wrapper>
        <Link href='/'>
          <Image
            src='/logo.svg'
            alt='logo'
            className='w-[40px] md:w-[60px]'
            width={40}
            height={40}
          />
        </Link>
        <Menue showCatMenue={showCatMenue} setshowCatMenue={setshowCatMenue} />
      </Wrapper>
    </header>
  )
}

export default Header
