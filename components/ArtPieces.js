import Image from "next/image";

export default function ArtPieces({ pieces }) {
  return (
    <ul>
      {pieces.map((piece) => {
        return (
          <>
            <Image
              src={piece.imageSource}
              height={200}
              width={300}
              alt={piece.name}
            />
            <li key={piece.slug}>
              title={piece.name}
              artist={piece.artist}
            </li>
          </>
        );
      })}
    </ul>
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
