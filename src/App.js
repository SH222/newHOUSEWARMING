// import logo from "./logo.svg";
import "./App.css";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import data from "./data";
import { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import MainItems from "./pages/MainItems";
import MainBest from "./pages/MainBest";
import ItemList from "./pages/ItemList";
import Detail from "./pages/Detail";
import Cart from "./pages/Cart";
import Recent from "./pages/Recent";
import Login from "./pages/Login";

function App() {
  let member = localStorage.getItem("member");

  useEffect(() => {
    if (!localStorage.getItem("watched")) {
      localStorage.setItem("watched", JSON.stringify([]));
    }
  }, []);

  const [items, setItems] = useState(data);
  const [inputs, setInputs] = useState({ id: "", pw: "" });
  const [login, setLogin] = useState(0);

  let [btnCount, setBtnCount] = useState(8);

  let copyItems = [...items];
  let newArrival = copyItems.slice(-5, -1);
  let bestSort = copyItems.sort(function (a, b) {
    return a.sell - b.sell;
  });
  let bestSlice = bestSort.slice(-7, -1);
  let [eventAlert, setEventAlert] = useState(true);
  const navigate = useNavigate();
  const moveCart = () => {
    navigate("/cart");
  };

  // data
  let fu = items.filter((x) => x.category === "furniture");
  let ki = items.filter((x) => x.category === "kitchen");
  let fa = items.filter((x) => x.category === "fabric");
  let la = items.filter((x) => x.category === "lamp");
  let pl = items.filter((x) => x.category === "plants");
  let an = items.filter((x) => x.category === "animals");
  let sp = items.filter((x) => x.category === "sports");

  return (
    <>
      <div className="App">
        {member == null ? (
          <Login inputs={inputs} setInputs={setInputs} login={login} setLogin={setLogin} />
        ) : null}
        {eventAlert === true ? (
          <div className="main-alert" id="sel">
            <span>
              10월 신제품 특가 ~20% 할인 행사 | 회원가입 시 모든 카테고리에 사용 가능한 10%쿠폰 추가
              증정{" "}
            </span>
            <button
              className="alert-btn"
              onClick={() => {
                setEventAlert(false);
              }}
            >
              X
            </button>
          </div>
        ) : (
          <div></div>
        )}

        <div className="con">
          <div className="member-div">
            <button
              onClick={() => {
                localStorage.removeItem("member");
              }}
            >
              Logout
            </button>
            <button onClick={moveCart}>Cart</button>
          </div>
          <header className="header">
            <a href="/">
              <img src="/img/header.png" alt="housewarming" width={250} height={100} />
            </a>
          </header>
          <nav className="main-nav">
            <a href="/furniture" className="nav-a">
              furniture
            </a>
            <a href="/kitchen" className="nav-a">
              kitchen
            </a>
            <a href="/fabric" className="nav-a">
              fabric
            </a>
            <a href="/lamp" className="nav-a">
              lamp
            </a>
            <a href="/plants" className="nav-a">
              plants
            </a>
            <a href="/animals" className="nav-a">
              animals
            </a>
            <a href="/sports" className="nav-a">
              sports
            </a>
          </nav>
          <Recent items={items} />
          <Routes>
            <Route
              path="/"
              element={
                <div>
                  <Carousel fade>
                    <Carousel.Item>
                      <img
                        className="d-block w-100 main-banner"
                        src="/img/banner1.jpg"
                        alt="banner1"
                        style={{ height: "10%" }}
                      />
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        className="d-block w-100 main-banner"
                        src="/img/banner1.jpg"
                        alt="banner1"
                        style={{ height: "10%" }}
                      />
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        className="d-block w-100 main-banner"
                        src="/img/banner1.jpg"
                        alt="banner1"
                        style={{ height: "10%" }}
                      />
                    </Carousel.Item>
                  </Carousel>
                  <hr />
                  <h5 className="main-new-arrival">NEW ARRIVAL</h5>
                  <div className="row">
                    {newArrival.map(function (items, i) {
                      return <MainItems items={items} key={i} />;
                    })}
                  </div>
                  <hr />
                  <h5 className="main-best-items">BEST</h5>
                  <div className="row bestItemList">
                    {bestSlice.map(function (items, i) {
                      return <MainBest items={items} key={i} />;
                    })}
                  </div>
                </div>
              }
            />
            <Route
              path="/furniture"
              element={
                <>
                  <div className="sub-page-header">
                    <h4 className="sub-page-title">Furniture</h4>
                    <button
                      className="sub-page-sort-btn"
                      onClick={() => {
                        let newData = fu.sort((x, y) => x.title.localeCompare(y.title));
                        setItems(newData);
                      }}
                    >
                      이름
                    </button>
                    <button
                      className="sub-page-sort-btn"
                      onClick={() => {
                        let newData = fu.sort((x, y) => x.price - y.price);
                        setItems(newData);
                      }}
                    >
                      낮은가격순
                    </button>
                    <button
                      className="sub-page-sort-btn"
                      onClick={() => {
                        let newData = fu.reverse((x, y) => x.price - y.price);
                        setItems(newData);
                      }}
                    >
                      높은가격순
                    </button>
                  </div>
                  <div className="row item-list">
                    {fu.map(
                      (listItem, i) => i < btnCount && <ItemList listItem={listItem} key={i} />
                    )}
                  </div>
                  <button
                    className="see-more-btn"
                    onClick={() => {
                      setBtnCount(btnCount + 8);
                    }}
                  >
                    more
                  </button>
                </>
              }
            />
            <Route
              path="/kitchen"
              element={
                <>
                  <div className="sub-page-header">
                    <h4 className="sub-page-title">Kitchen</h4>
                    <button
                      className="sub-page-sort-btn"
                      onClick={() => {
                        let newData = ki.sort((x, y) => x.title.localeCompare(y.title));
                        setItems(newData);
                      }}
                    >
                      이름
                    </button>
                    <button
                      className="sub-page-sort-btn"
                      onClick={() => {
                        let newData = ki.sort((x, y) => x.price - y.price);
                        setItems(newData);
                      }}
                    >
                      낮은가격순
                    </button>
                    <button
                      className="sub-page-sort-btn"
                      onClick={() => {
                        let newData = ki.reverse((x, y) => x.price - y.price);
                        setItems(newData);
                      }}
                    >
                      높은가격순
                    </button>
                  </div>

                  <div className="row item-list">
                    {ki.map(
                      (listItem, i) => i < btnCount && <ItemList listItem={listItem} key={i} />
                    )}
                  </div>
                  <button
                    className="see-more-btn"
                    onClick={() => {
                      setBtnCount(btnCount + 8);
                    }}
                  >
                    more
                  </button>
                </>
              }
            />
            <Route
              path="/fabric"
              element={
                <>
                  <div className="sub-page-header">
                    <h4 className="sub-page-title">Fabric</h4>
                    <button
                      className="sub-page-sort-btn"
                      onClick={() => {
                        let newData = fa.sort((x, y) => x.title.localeCompare(y.title));
                        setItems(newData);
                      }}
                    >
                      이름
                    </button>
                    <button
                      className="sub-page-sort-btn"
                      onClick={() => {
                        let newData = fa.sort((x, y) => x.price - y.price);
                        setItems(newData);
                      }}
                    >
                      낮은가격순
                    </button>
                    <button
                      className="sub-page-sort-btn"
                      onClick={() => {
                        let newData = fa.reverse((x, y) => x.price - y.price);
                        setItems(newData);
                      }}
                    >
                      높은가격순
                    </button>
                  </div>
                  <div className="row item-list">
                    {fa.map(
                      (listItem, i) => i < btnCount && <ItemList listItem={listItem} key={i} />
                    )}
                  </div>
                  <button
                    className="see-more-btn"
                    onClick={() => {
                      setBtnCount(btnCount + 8);
                    }}
                  >
                    more
                  </button>
                </>
              }
            />
            <Route
              path="/lamp"
              element={
                <>
                  <div className="sub-page-header">
                    <h4 className="sub-page-title">Lamp</h4>
                    <button
                      className="sub-page-sort-btn"
                      onClick={() => {
                        let newData = la.sort((x, y) => x.title.localeCompare(y.title));
                        setItems(newData);
                      }}
                    >
                      이름
                    </button>
                    <button
                      className="sub-page-sort-btn"
                      onClick={() => {
                        let newData = la.sort((x, y) => x.price - y.price);
                        setItems(newData);
                      }}
                    >
                      낮은가격순
                    </button>
                    <button
                      className="sub-page-sort-btn"
                      onClick={() => {
                        let newData = la.reverse((x, y) => x.price - y.price);
                        setItems(newData);
                      }}
                    >
                      높은가격순
                    </button>
                  </div>
                  <div className="row item-list">
                    {la.map(
                      (listItem, i) => i < btnCount && <ItemList listItem={listItem} key={i} />
                    )}
                  </div>
                  <button
                    className="see-more-btn"
                    onClick={() => {
                      setBtnCount(btnCount + 8);
                    }}
                  >
                    more
                  </button>
                </>
              }
            />
            <Route
              path="/plants"
              element={
                <>
                  <div className="sub-page-header">
                    <h4 className="sub-page-title">Plants</h4>
                    <button
                      className="sub-page-sort-btn"
                      onClick={() => {
                        let newData = pl.sort((x, y) => x.title.localeCompare(y.title));
                        setItems(newData);
                      }}
                    >
                      이름
                    </button>
                    <button
                      className="sub-page-sort-btn"
                      onClick={() => {
                        let newData = pl.sort((x, y) => x.price - y.price);
                        setItems(newData);
                      }}
                    >
                      낮은가격순
                    </button>
                    <button
                      className="sub-page-sort-btn"
                      onClick={() => {
                        let newData = pl.reverse((x, y) => x.price - y.price);
                        setItems(newData);
                      }}
                    >
                      높은가격순
                    </button>
                  </div>
                  <div className="row item-list">
                    {pl.map(
                      (listItem, i) => i < btnCount && <ItemList listItem={listItem} key={i} />
                    )}
                  </div>
                  <button
                    className="see-more-btn"
                    onClick={() => {
                      setBtnCount(btnCount + 8);
                    }}
                  >
                    more
                  </button>
                </>
              }
            />
            <Route
              path="/animals"
              element={
                <>
                  <div className="sub-page-header">
                    <h4 className="sub-page-title">Plants</h4>
                    <button
                      className="sub-page-sort-btn"
                      onClick={() => {
                        let newData = an.sort((x, y) => x.title.localeCompare(y.title));
                        setItems(newData);
                      }}
                    >
                      이름
                    </button>
                    <button
                      className="sub-page-sort-btn"
                      onClick={() => {
                        let newData = an.sort((x, y) => x.price - y.price);
                        setItems(newData);
                      }}
                    >
                      낮은가격순
                    </button>
                    <button
                      className="sub-page-sort-btn"
                      onClick={() => {
                        let newData = an.reverse((x, y) => x.price - y.price);
                        setItems(newData);
                      }}
                    >
                      높은가격순
                    </button>
                  </div>
                  <div className="row item-list">
                    {an.map(
                      (listItem, i) => i < btnCount && <ItemList listItem={listItem} key={i} />
                    )}
                  </div>
                  <button
                    className="see-more-btn"
                    onClick={() => {
                      setBtnCount(btnCount + 8);
                    }}
                  >
                    more
                  </button>
                </>
              }
            />
            <Route
              path="/sports"
              element={
                <>
                  <div className="sub-page-header">
                    <h4 className="sub-page-title">Plants</h4>
                    <button
                      className="sub-page-sort-btn"
                      onClick={() => {
                        let newData = sp.sort((x, y) => x.title.localeCompare(y.title));
                        setItems(newData);
                      }}
                    >
                      이름
                    </button>
                    <button
                      className="sub-page-sort-btn"
                      onClick={() => {
                        let newData = sp.sort((x, y) => x.price - y.price);
                        setItems(newData);
                      }}
                    >
                      낮은가격순
                    </button>
                    <button
                      className="sub-page-sort-btn"
                      onClick={() => {
                        let newData = sp.reverse((x, y) => x.price - y.price);
                        setItems(newData);
                      }}
                    >
                      높은가격순
                    </button>
                  </div>
                  <div className="row item-list">
                    {sp.map(
                      (listItem, i) => i < btnCount && <ItemList listItem={listItem} key={i} />
                    )}
                  </div>
                  <button
                    className="see-more-btn"
                    onClick={() => {
                      setBtnCount(btnCount + 8);
                    }}
                  >
                    more
                  </button>
                </>
              }
            />
            <Route path={"/detail/:id"} element={<Detail items={items} />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>
        <footer className="footer py-5 bg-dark mt-auto ">
          사업자번호 120808-08020606 김승현
          <br />
          회사소개 | 제휴제안 | 이용약관 | 개인정보처리방침 | 고객센터
        </footer>
      </div>
    </>
  );
}

export default App;
