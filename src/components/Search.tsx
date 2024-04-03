export function Search() {
  return (
    <div className={"search"}>
      <div className="searchForm">
        <input type="text" placeholder={"find a user"} />
      </div>
      <div className="userChat">
        <img
          src="https://images.pexels.com/photos/18151445/pexels-photo-18151445.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
          alt=""
        />
        <div className="userChatInfo">Jane</div>
      </div>
    </div>
  );
}
