import { useEffect } from "react";

function Recent({ items }) {
  let watched = JSON.parse(localStorage.getItem("watched"));

  useEffect(() => {
    if (watched.length > 3) {
      watched.splice(0, 1);
      // watched = new Set(watched); // 중복 제거
      // watched = Array.from(watched); // array 로 변환
      localStorage.setItem("watched", JSON.stringify(watched));
    }
  }, []);

  return (
    <>
      {localStorage.getItem("watched") == null ? (
        console.log("null입니당")
      ) : (
        <div className="recent-container">
          <b>
            <p>최근 본 상품</p>
          </b>
          {watched.map(function (item, i) {
            return (
              <div key={i} className="recent-item">
                <a href={"/detail/" + items[item - 1].id}>
                  <img src={"/items/" + items[item - 1].id + ".jpg"} alt="recent_img" />
                  <p>{items[item - 1].title}</p>
                </a>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}

export default Recent;
