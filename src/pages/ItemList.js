function ItemList({ listItem }) {
  return (
    <>
      <div className="col-md-3">
        <a href={"/detail/" + listItem.id} className="sub-detail-link">
          <img src={"/items/" + listItem.id + ".jpg"} alt={listItem.title} width="100%" />
          <p className="main-best-list-title">{listItem.title}</p>
        </a>
        <p>{listItem.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원</p>
      </div>
    </>
  );
}

export default ItemList;
