import Img from "../img/img.png";
import Attach from "../img/attach.png";
export function Input() {
  return (
    <div className={"input"}>
      <input type="text" placeholder="Type something..." />
      <div className="send">
        <img src={Attach} alt="attach" />
        <input type="file" id={"file"} hidden={true} />
        <label htmlFor="file">
          <img src={Img} alt="img" />
        </label>
        <button>send</button>
      </div>
    </div>
  );
}
