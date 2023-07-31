export default function ArtPieces({ pieces }) {
  return (
    <ul>
      {pieces.map((piece) => {
        return (
          <li key={piece.slug}>
            imageSource={piece.imageSource}
            title={piece.name}
            artist={piece.artist}
          </li>
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
