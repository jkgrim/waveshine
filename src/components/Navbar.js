import Link from "next/link";
import Image from "next/image";
import logo from "../images/main-logo.png";

function Navbar() {
  return (
    <header>
      <div className="nav-container">
        <Link href="/">
          <Image src={logo} />
        </Link>
        <Link href="/getting-started">Getting Started</Link>
        <Link href="/controllers">Controllers</Link>
        <Link href="/characters">Characters</Link>
        <Link href="/frame-data">Frame Data</Link>
      </div>
    </header>
  );
}

export default Navbar;
