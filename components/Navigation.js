import Link from "next/link";

export default function Navigation() {
  return (
    <nav>
      <Link href="/">Spotlight</Link>
      <Link href="/art-pieces">All Art Pieces</Link>
      <Link href="/">Favorites</Link>
    </nav>
  );
}
