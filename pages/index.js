import Spotlight from "@/components/Spotlight";
import Link from "next/link";

export default function HomePage({ pieces }) {
  return (
    <>
      <h1>ART GALLERY</h1>
      <Spotlight pieces={pieces} />
      <h2>Just a famous Artist for you</h2>
      <Link href="./art-pieces">Go to all Art Pieces</Link>
    </>
  );
}
