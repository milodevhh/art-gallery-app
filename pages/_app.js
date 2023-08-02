import GlobalStyle from "../styles";
import useSWR from "swr";
import Layout from "@/components/Layout";
import { useEffect, useState } from "react";

const fetcher = async (url) => {
  const response = await fetch(url);

  if (!response.ok) {
    const error = new Error("An error occurred while fetching the data.");
    console.log(error);
    error.info = await response.json();
    error.status = response.status;
    throw error;
  }

  return response.json();
};

export default function App({ Component, pageProps }) {
  const [artPiecesInfo, setArtPiecesInfo] = useState([]);

  function handleToggle(slug) {
    setArtPiecesInfo((artPiecesInfo) => {
      // find the movie in the state
      const info = artPiecesInfo.find((info) => info.slug === slug);

      // if the movie is already in the state, toggle the isFavorite property
      if (info) {
        return artPiecesInfo.map((info) =>
          info.slug === slug ? { ...info, isFavorite: !info.isFavorite } : info
        );
      }

      // if the movie is not in the state, add it with isFavorite set to true
      return [...artPiecesInfo, { slug, isFavorite: true }];
    });
  }

  console.log(artPiecesInfo);

  const { data, error, isLoading } = useSWR(
    `https://example-apis.vercel.app/api/art`,
    fetcher
  );

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <>
      <GlobalStyle />
      <Layout>
        <Component
          {...pageProps}
          pieces={data}
          handleToggle={handleToggle}
          artPiecesInfo={artPiecesInfo}
        />
      </Layout>
    </>
  );
}
