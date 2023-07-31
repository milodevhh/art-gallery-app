import useSWR from "swr";
import ArtPieces from "@/components/ArtPieces";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function HomePage() {
  const { data, error, isLoading } = useSWR(
    `https://example-apis.vercel.app/api/art`
  );

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return <ArtPieces pieces={data} />;

  console.log(data);
}

/*
"slug":"orange-red-and-green"
"artist":"Steve Johnson"
"name":"Orange Red and Green Abstract Painting"
"imageSource":"https://example-apis.vercel.app/assets/art/orange-red-and-green.jpg"

"year":"2018"
"genre":"Abstract Painting"
"colors":["#0f5855","#e6ba15","#b42011","#cec4c6","#d5561f"]
"dimensions":{"height":2432,"width":1920,"type":"jpg" */
