function MainBest(props) {
  return (
    <>
      <div className="col-md-4">
        <a href={"/detail/" + props.items.id}>
          <img src={"/items/" + props.items.id + ".jpg"} alt={props.items.title} width="100%" />{" "}
        </a>
        <p className="main-best-list-title">{props.items.title}</p>
        <p>{props.items.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원</p>
      </div>
    </>
  );
}

export default MainBest;
