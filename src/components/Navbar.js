import Link from "next/link";

function Navbar() {
  return (
    <header>
      <div className="nav-container">
        <Link href="/">Logo</Link>
        <Link href="/getting-started">Getting Started</Link>
        <Link href="/controllers">Controllers</Link>
        <Link href="/characters">Characters</Link>
        <Link href="/frame-data">Frame Data</Link>
      </div>
    </header>
  );
}

export default Navbar;
