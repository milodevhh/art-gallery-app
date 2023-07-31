import Image from "next/image";

export default function ArtPieces({ pieces }) {
  return (
    <>
      <h1> List of all Art Pieces</h1>
      {pieces.map((piece) => {
        return (
          <>
            <Image
              src={piece.imageSource}
              height={200}
              width={300}
              alt={piece.name}
            />
            <h2 key={piece.slug}>{piece.name}</h2>
            <h3>{piece.artist}</h3>
          </>
        );
      })}
    </>
  );
}

{
  /* export default function Lights({ lights, handleToggle }) {
  return (
    <>
      <StyledLights>
        {lights.map((light) => {
          return (
            <Light
              key={light.id}
              lightName={light.name}
              isOn={light.isOn}
              onToggle={() => handleToggle(light.id)}
              //onToggleOn={() => handleToggleOn()}
            />
          );
        })}
      </StyledLights>
    </>
  );
} */
}
