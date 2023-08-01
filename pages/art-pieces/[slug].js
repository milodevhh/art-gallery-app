import ArtPieceDetails from "@/components/ArtPieceDetails";
import { useRouter } from "next/router";

export default function ArtPieces({ pieces }) {
  const router = useRouter();
  const artPiece = pieces.find(({ slug }) => slug === router.query.slug);

  console.log(artPiece);

  return <ArtPieceDetails artPiece={artPiece} />;
}

/*   const { data, error, isLoading } = useSWR(
    `https://example-apis.vercel.app/api/art/${slug}`
  ); 

  if (error) {
    return <div>failed to load</div>;
  }

  if (isLoading) {
    return <div>loading...</div>;
  }
*/
