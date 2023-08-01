import Image from "next/image";
import Link from "next/link";

export default function ArtPieces({ pieces }) {
  return (
    <>
      <h1> List of all Art Pieces</h1>
      <ul>
        {pieces.map((piece) => {
          return (
            <li key={piece.slug}>
              <Image
                src={piece.imageSource}
                height={300}
                width={200}
                alt={piece.name}
              />
              <h2>{piece.name}</h2>
              <h3>{piece.artist}</h3>
              <Link href={`art-pieces/${piece.slug}`}>{piece.name}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}
