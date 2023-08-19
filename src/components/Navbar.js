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

        <div className="dropdown">
          <Link href="/getting-started">Getting Started</Link>

          <div className="dropdown-items">
            <Link href="getting-started/slippi">Installing Slippi</Link>
            <Link href="getting-started/guides">Beginner Melee Guides</Link>
            <Link href="getting-started/smash-doc">Smash Documentary</Link>
          </div>
        </div>

        <div className="dropdown">
          <Link href="/controllers">Controllers</Link>

          <div className="dropdown-items">
            <Link href="/controllers/modding">Modding</Link>
            <Link href="/controllers/styles">Styles</Link>
            <Link href="/controllers/where-to-buy">Where to Buy</Link>
          </div>
        </div>

        <div className="dropdown">
          <Link href="/characters">Characters</Link>

          <div className="dropdown-items">
            <Link href="/characters/discords">Character Discords</Link>
            <Link href="/characters/tier-list-generator">
              Tier List Generator
            </Link>
          </div>
        </div>

        <div className="dropdown">
          <Link href="/frame-data">Frame Data</Link>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
