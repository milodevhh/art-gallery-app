import Link from "next/link";
import Image from "next/image";

export default function HomePage({ pieces }) {
  const index = Math.floor(Math.random() * pieces.length);
  console.log(index);
  return (
    <>
      <article key={pieces[index].slug}>
        <Image
          src={pieces[index].imageSource}
          height={300}
          width={200}
          alt={pieces[index].name}
        />
        <h2>{pieces[index].name}</h2>
        <h3>{pieces[index].artist}</h3>
      </article>
      <Link href="./art-pieces">Go to all Art Pieces</Link>
    </>
  );
}
