import "bootstrap/dist/css/bootstrap.min.css";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import PrivacyMessage from "./PrivacyMessage";
import { counterActions } from "../store/counter";
import { privacyActions } from "../store/privacy";

const ModelCard = () => {

    const {counterVal} = useSelector((store) => store.counter);
    const pri = useSelector((store) => store.privacy);
    const dispatch = useDispatch();
    const num = useRef();


    const handleIncrement = () => {
        dispatch(counterActions.incerment());
    };
    const handleDecrement = () => {
        dispatch(counterActions.decrement());
    };
    const handlePrivacy = () => {
        dispatch(privacyActions.toggle());
    }
    const handleAdd = () => {
        dispatch(counterActions.add(num.current.value));
        num.current.value = "";
    }
    const handleSubstract= () => {
        dispatch(counterActions.substract(num.current.value));
        num.current.value = "";
    }
    
  return (
    <center>
      <div className="card" style={{ width: "20rem" }}>
        <div className="card-body">
          <h5 className="card-title">Counter React Redux</h5>
          {pri ? <p className="card-text">Counter value : {counterVal}</p> : <PrivacyMessage/>}
          <button
            type="button"
            className="btn btn-primary"
            style={{ marginRight: "5px" }}
            onClick={handleIncrement}
          >
            +1
          </button>
          <button
            type="button"
            className="btn btn-success"
            style={{ marginRight: "5px" }}
            onClick={handleDecrement}
          >
            -1
          </button>
          <button
            type="button"
            className="btn btn-warning"
            style={{ marginRight: "5px" }}
            onClick={handlePrivacy}
          >
            Privacy Toogle
          </button>
          <br />
          <input
            type="text"
            placeholder="Enter number"
            style={{ width: "7rem" }}
            ref={num}
          />
          <button
            type="button"
            className="btn btn-info"
            style={{ marginRight: "5px" }}
            onClick={handleAdd}
          >
            Add
          </button>
          <button
            type="button"
            className="btn btn-danger"
            style={{ marginRight: "5px" }}
            onClick={handleSubstract}
          >
            Substract
          </button>
        </div>
      </div>
    </center>
  );
};

export default ModelCard;
