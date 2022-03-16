import body0 from "./images/body0.png";
import body1 from "./images/body1.png";
import body2 from "./images/body2.png";
import smile0 from "./images/smile0.png";
import smile1 from "./images/smile1.png";
import smile2 from "./images/smile2.png";
import smile3 from "./images/smile3.png";
import addon0 from "./images/addon0.png";
import addon1 from "./images/addon1.png";
import addon2 from "./images/addon2.png";
import addon3 from "./images/addon3.png";
import addon4 from "./images/addon4.png";
import addon5 from "./images/addon5.png";
import addon6 from "./images/addon6.png";
import addon7 from "./images/addon7.png";
import addon8 from "./images/addon8.png";
import addon9 from "./images/addon9.png";
import addon10 from "./images/addon10.png";
import hair0 from "./images/hair0.png";
import hair1 from "./images/hair1.png";
import hair2 from "./images/hair2.png";

const bodies = [body0, body1, body2];
const smiles = [smile0, smile1, smile2, smile3];
const addOnImages = [
  addon0,
  addon1,
  addon2,
  addon3,
  addon4,
  addon5,
  addon6,
  addon7,
  addon8,
  addon9,
  addon10,
  hair0,
  hair1,
  hair2,
];

function DustBunny({ body, smile, addOns }) {
  return (
    <div className="dust-bunny">
      <img src={bodies[body]} />
      {addOns &&
        Array.from(addOns).map((addOn) => {
          return (
            <img
              key={addOn}
              className="dust-bunny-addon"
              src={addOnImages[addOn]}
            />
          );
        })}
      <img className="dust-bunny-smile" src={smiles[smile]} />
    </div>
  );
}

export default DustBunny;
