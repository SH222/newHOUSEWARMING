import { useEffect } from "react";
import { Tab, Tabs } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { addItem } from "../store/cartList";

function Detail(props) {
  let { id } = useParams();
  let searchItem = props.items.find((x) => x.id == id);
  let option = searchItem.option;
  let dispatch = useDispatch();

  useEffect(() => {
    let watched = localStorage.getItem("watched");
    watched = JSON.parse(watched);
    watched.push(searchItem.id);
    watched = new Set(watched); // 중복 제거
    watched = Array.from(watched); // array 로 변환

    localStorage.setItem("watched", JSON.stringify(watched));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="detail-container">
        <div className="row">
          <a href="/furniture" className="detail-category">
            <p>{searchItem.category}</p>
          </a>
          <div className="col-md-6">
            <img src={"/items/" + searchItem.id + ".jpg"} alt="detail_img" width="100%" className="detail-img" />
          </div>
          <div className="col-md-6">
            <div className="detail-content">
              <p className="pt-1 detail-brand">브랜드 {searchItem.brand}</p>
              <h4 className="pt-4 detail-title">{searchItem.title}</h4>
            </div>
            <p className="pt-5 detail-price">{searchItem.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원</p>
            <h4 className="pt-1 detail-delivery">
              <b>배송</b> {searchItem.delivery}
            </h4>
            {option.length < 1 ? null : (
              <select name="cars" id="cars" className="detail-dropdown">
                {option.map(function (item, i) {
                  return (
                    <option value={item} key={item}>
                      {item}
                    </option>
                  );
                })}
              </select>
            )}

            <button
              className="detail-btn"
              variant="primary"
              onClick={() => {
                dispatch(
                  addItem({
                    id: searchItem.id,
                    img: "./items/" + searchItem.id + ".jpg",
                    title: searchItem.title,
                    option: "",
                    price: searchItem.price,
                    count: 1,
                  })
                );
              }}
            >
              주문하기
            </button>
          </div>
        </div>
        <Tabs defaultActiveKey="home" id="fill-tab-example" className="mb-3 detail-tab" fill>
          <Tab eventKey="home" title="상품상세">
            <img src="/items/1-1.png" alt="detail_img" width="100%" />
          </Tab>
          <Tab eventKey="profile" title="배송/문의">
            <div className="detali-tab-delivery">
              <h5>배송</h5>
              <table className="detail-tab-table">
                <tbody>
                  <tr>
                    <th>배송</th>
                    <td>화물 택배 상품</td>
                  </tr>
                  <tr>
                    <th>배송비</th>
                    <td>무료배송</td>
                  </tr>
                  <tr>
                    <th>도서 산간 추가 배송비</th>
                    <td>5,000원</td>
                  </tr>
                  <tr>
                    <th>배송 불가 지역</th>
                    <td>배송 불가 지역 없습니다.</td>
                  </tr>
                  <tr>
                    <th>지역별 차등 배송비</th>
                    <td>제주 10,000원</td>
                  </tr>
                </tbody>
              </table>
              <h5>교환/반품</h5>
              <table className="detail-tab-table">
                <tbody>
                  <tr>
                    <th>반품 배송비</th>
                    <td>10,000원 (최초 배송비가 무료인 경우 무조건 부과)</td>
                  </tr>
                  <tr>
                    <th>교환 배송비</th>
                    <td>10,000원</td>
                  </tr>
                  <tr>
                    <th>보내실 곳</th>
                    <td>(08066) 서울 특별시 동작구 ㅇㅇㅇㅇㅇ</td>
                  </tr>
                </tbody>
              </table>
              <div className="detail-tab-div">
                <h4>반품/교환 요청 기간</h4>
                <p>
                  1. 구매자 단순 변심은 상품 수령 후 7일 이내
                  <br />
                  2. 표시/광고와 상이, 상품 하자의 경우 상품 수령 후 3개월 이내(판매자 반품 배송비 부담)
                </p>
                <p></p>
              </div>
            </div>
          </Tab>
        </Tabs>
      </div>
    </>
  );
}

export default Detail;
