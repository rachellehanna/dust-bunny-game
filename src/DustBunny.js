import body0 from "./images/body0.png";
import body1 from "./images/body1.png";
import body2 from "./images/body2.png";
import smile0 from "./images/smile0.png";
import smile1 from "./images/smile1.png";
import smile2 from "./images/smile2.png";
import addon0 from "./images/addon0.png";
import addon1 from "./images/addon1.png";
import addon2 from "./images/addon2.png";
import addon3 from "./images/addon3.png";

const bodies = [body0, body1, body2];
const smiles = [smile0, smile1, smile2];
const addOnImages = [addon0, addon1, addon2, addon3];

function DustBunny({ body, smile, addOns }) {
  return (
    <div className="dust-bunny">
      <img src={bodies[body]} alt="" />
      <img className="dust-bunny-smile" src={smiles[smile]} alt="" />
      {Array.from(addOns).map((addOn) => {
        return (
          <img
            key={addOn}
            className="dust-bunny-addon"
            src={addOnImages[addOn]}
            alt=""
          />
        );
      })}
    </div>
  );
}

export default DustBunny;
