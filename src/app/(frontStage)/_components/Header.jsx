import Image from "next/image";
import Link from "next/link";
import ThemeSwitch from "./ThemeSwitch";

const Header = () => {
  return (
    <header className="header">
      <Link href="/">
        <Image className="invert" src="/next.svg" alt="logo" width={100} height={100} priority />
      </Link>
      <nav>
        <ul>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </nav>
      <ThemeSwitch />
    </header>
  )
}

export default Header