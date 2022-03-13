import DustBunny from "./DustBunny";

function Gallery({ dustBunnies }) {
  return (
    <div className="gallery">
      {dustBunnies.map((bunny, index) => {
        return (
          <DustBunny
            key={index}
            body={bunny.body}
            smile={bunny.smile}
            addOns={bunny.addOns}
          />
        );
      })}
    </div>
  );
}

export default Gallery;
