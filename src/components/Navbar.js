import Link from "next/link";

function Navbar() {
  return (
    <header>
      <div className="nav-container">
        <div className="nav-start">
          <Link href="/">Logo</Link>
        </div>

        <div className="nav-end">
          <Link href="/getting-started">Getting Started</Link>
          <Link href="/controllers">Controllers</Link>
          <Link href="/characters">Characters</Link>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
