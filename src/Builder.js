import body0 from "./images/body0.png";
import body1 from "./images/body1.png";
import body2 from "./images/body2.png";
import smile0 from "./images/smile0.png";
import smile1 from "./images/smile1.png";
import smile2 from "./images/smile2.png";
import addOn0 from "./images/addon0.png";
import addOn1 from "./images/addon1.png";
import addOn2 from "./images/addon2.png";
import addOn3 from "./images/addon3.png";

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
          <img src={body0} alt="" />
        </label>
        <label>
          <input
            type="radio"
            checked={body === 1}
            onChange={() => onBodyChange(1)}
          />
          <img src={body1} alt="" />
        </label>
        <label>
          <input
            type="radio"
            checked={body === 2}
            onChange={() => onBodyChange(2)}
          />
          <img src={body2} alt="" />
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
          <img src={smile0} alt="" />
        </label>
        <label>
          <input
            type="radio"
            checked={smile === 1}
            onChange={() => onSmileChange(1)}
          />
          <img src={smile1} alt="" />
        </label>
        <label>
          <input
            type="radio"
            checked={smile === 2}
            onChange={() => onSmileChange(2)}
          />
          <img src={smile2} alt="" />
        </label>
      </div>

      <div className="builder-addons">
        <p>Choose your add-ons:</p>
        <label>
          <input
            type="checkbox"
            checked={addOns.has(0)}
            onChange={() => onAddOnChange(0)}
          />
          <img src={addOn0} alt="" />
        </label>
        <label>
          <input
            type="checkbox"
            checked={addOns.has(1)}
            onChange={() => onAddOnChange(1)}
          />
          <img src={addOn1} alt="" />
        </label>
        <label>
          <input
            type="checkbox"
            checked={addOns.has(2)}
            onChange={() => onAddOnChange(2)}
          />
          <img src={addOn2} alt="" />
        </label>
        <label>
          <input
            type="checkbox"
            checked={addOns.has(3)}
            onChange={() => onAddOnChange(3)}
          />
          <img src={addOn3} alt="" />
        </label>
      </div>
    </div>
  );
}

export default Builder;
