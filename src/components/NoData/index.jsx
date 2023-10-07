import no__result from "../../assets/img/no__results.png";
import "./style.css";

export default function NoData() {
  return (
    <div className="no__data">
      <h2 className="no__data-title">Character not found</h2>
      <img src={no__result} alt="No results" className="no__data-img" />
    </div>
  );
}
