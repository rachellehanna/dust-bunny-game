import body0 from "./images/body0.png";
import body1 from "./images/body1.png";
import body2 from "./images/body2.png";
import smile0 from "./images/smile0.png";
import smile1 from "./images/smile1.png";
import smile2 from "./images/smile2.png";
import smile3 from "./images/smile3.png";
import addOn0 from "./images/addon0.png";
import addOn1 from "./images/addon1.png";
import addOn2 from "./images/addon2.png";
import addOn3 from "./images/addon3.png";
import addOn4 from "./images/addon4.png";
import addOn5 from "./images/addon5.png";
import addOn6 from "./images/addon6.png";
import addOn7 from "./images/addon7.png";
import addOn8 from "./images/addon8.png";
import addOn9 from "./images/addon9.png";
import addOn10 from "./images/addon10.png";

import hair0 from "./images/hair0.png";
import hair1 from "./images/hair1.png";
import hair2 from "./images/hair2.png";

function Builder({
  body,
  smile,
  addOns,
  onBodyChange,
  onSmileChange,
  onAddOnChange,
}) {
  return (
    <div className="builder">
      <div className="builder-body">
        <p>Choose your dust:</p>
        <label>
          <input
            type="radio"
            checked={body === 0}
            onChange={() => onBodyChange(0)}
          />
          <img src={body0} alt="A dust bunny form in gray." />
        </label>
        <label>
          <input
            type="radio"
            checked={body === 1}
            onChange={() => onBodyChange(1)}
          />
          <img src={body1} alt="A dust bunny form in green." />
        </label>
        <label>
          <input
            type="radio"
            checked={body === 2}
            onChange={() => onBodyChange(2)}
          />
          <img src={body2} alt="A dust bunny form in brown." />
        </label>
      </div>
      <div className="builder-smile">
        <p>Choose your smile:</p>
        <label>
          <input
            type="radio"
            checked={smile === 0}
            onChange={() => onSmileChange(0)}
          />
          <img src={smile0} alt="A happy smile." />
        </label>
        <label>
          <input
            type="radio"
            checked={smile === 1}
            onChange={() => onSmileChange(1)}
          />
          <img src={smile1} alt="A fabulous smile." />
        </label>
        <label>
          <input
            type="radio"
            checked={smile === 2}
            onChange={() => onSmileChange(2)}
          />
          <img src={smile2} alt="A stunned and shy smile." />
        </label>
        <label>
          <input
            type="radio"
            checked={smile === 3}
            onChange={() => onSmileChange(3)}
          />
          <img src={smile3} alt="A happy smile with glasses." />
        </label>
      </div>

      <p>Choose your add-ons:</p>
      <div className="builder-addons">
        <label>
          <input
            type="checkbox"
            checked={addOns.has(0)}
            onChange={() => onAddOnChange(0)}
          />
          <img src={addOn0} alt="Dirt add-on." />
          <p>Dirt</p>
        </label>
        <label>
          <input
            type="checkbox"
            checked={addOns.has(1)}
            onChange={() => onAddOnChange(1)}
          />
          <img src={addOn1} alt="Nails add-on." />
          <p>Nails</p>
        </label>
        <label>
          <input
            type="checkbox"
            checked={addOns.has(2)}
            onChange={() => onAddOnChange(2)}
          />
          <img src={addOn2} alt="Lint add-on." />
          <p>Lint</p>
        </label>
        <label>
          <input
            type="checkbox"
            checked={addOns.has(3)}
            onChange={() => onAddOnChange(3)}
          />
          <img src={addOn3} alt="Hair add-on." />
          <p>Hair</p>
        </label>
        <label>
          <input
            type="checkbox"
            checked={addOns.has(4)}
            onChange={() => onAddOnChange(4)}
          />
          <img src={addOn4} alt="Fish food add-on." />
          <p>Fish food</p>
        </label>

        <label>
          <input
            type="checkbox"
            checked={addOns.has(5)}
            onChange={() => onAddOnChange(5)}
          />
          <img src={addOn5} alt="Pet hair add-on." />
          <p>Pet hair</p>
        </label>

        <label>
          <input
            type="checkbox"
            checked={addOns.has(6)}
            onChange={() => onAddOnChange(6)}
          />
          <img src={addOn6} alt="Crumbs add-on." />
          <p>Crumbs</p>
        </label>

        <label>
          <input
            type="checkbox"
            checked={addOns.has(7)}
            onChange={() => onAddOnChange(7)}
          />
          <img src={addOn7} alt="Herbs add-on." />
          <p>Herbs</p>
        </label>

        <label>
          <input
            type="checkbox"
            checked={addOns.has(8)}
            onChange={() => onAddOnChange(8)}
          />
          <img src={addOn8} alt="Eyelashes add-on." />
          <p>Eyelashes</p>
        </label>

        <label>
          <input
            type="checkbox"
            checked={addOns.has(9)}
            onChange={() => onAddOnChange(9)}
          />
          <img src={addOn9} alt="Cat litter add-on." />
          <p>Cat litter</p>
        </label>

        <label>
          <input
            type="checkbox"
            checked={addOns.has(10)}
            onChange={() => onAddOnChange(10)}
          />
          <img src={addOn10} alt="Makeup add-on." />
          <p>Makeup</p>
        </label>

        <label>
          <input
            type="checkbox"
            checked={addOns.has(11)}
            onChange={() => onAddOnChange(11)}
          />
          <img src={hair0} alt="Mohawk-style hairdo add-on." />
          <p>Mohawk</p>
        </label>

        <label>
          <input
            type="checkbox"
            checked={addOns.has(12)}
            onChange={() => onAddOnChange(12)}
          />
          <img src={hair1} alt="Elvis-style hairdo add-on." />
          <p>Elvis</p>
        </label>

        <label>
          <input
            type="checkbox"
            checked={addOns.has(13)}
            onChange={() => onAddOnChange(13)}
          />
          <img src={hair2} alt="Joker-style hairdo add-on." />
          <p>Joker</p>
        </label>
      </div>
    </div>
  );
}

export default Builder;
