import useSWR from "swr";
import ArtPieces from "@/components/ArtPieces";
import Link from "next/link";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function HomePage() {
  const { data, error, isLoading } = useSWR(
    `https://example-apis.vercel.app/api/art`
  );

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return <Link href="./art-pieces"> Overview Page</Link>;
}
