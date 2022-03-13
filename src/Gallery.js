import DustBunny from "./DustBunny";

function Gallery({ dustBunnies }) {
  return (
    <div className="gallery">
      {dustBunnies.map((bunny) => {
        return <DustBunny body={bunny.body} smile={bunny.smile} />;
      })}
    </div>
  );
}

export default Gallery;
