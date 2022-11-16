import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addCount, deleteItem, subCount } from "../store/cartList";

function Cart() {
  let state = useSelector((state) => {
    return state;
  });
  let dispatch = useDispatch();
  let sum = [];
  let total = 0;
  let user = localStorage.getItem("member");
  user = JSON.parse(user);
  console.log(user);
  return (
    <>
      <h4 className="cart-title">{user.id}님의 장바구니</h4>
      <Table className="cart-table">
        <thead>
          <tr>
            <th></th>
            <th>상품사진</th>
            <th>상품명</th>
            <th>수량</th>
            {/* <th>옵션</th> */}
            <th>가격</th>
            <th>+</th>
            <th>-</th>
            <th>삭제</th>
          </tr>
        </thead>
        <tbody>
          {state.cartList.map((item, i) => {
            return (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>
                  <a href={"/detail/" + state.cartList[i].id}>
                    <img src={state.cartList[i].img} alt={i} className="cart-img" />
                  </a>
                </td>
                <td>
                  <a href={"/detail/" + state.cartList[i].id}>{state.cartList[i].title}</a>
                </td>
                <td>{state.cartList[i].count}</td>
                {/* <th>{state.cartList[i].option}</th> */}
                <th>{(state.cartList[i].price * state.cartList[i].count).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원</th>
                <td>
                  <button
                    onClick={() => {
                      // total[i] = state.cartList[i].price * (state.cartList[i].count + 1);
                      // result = total.reduce(function add(sum, currvalue) {
                      //   return sum + currvalue;
                      // }, 0);

                      dispatch(addCount(state.cartList[i].id));
                    }}
                  >
                    +
                  </button>
                </td>
                <td>
                  {state.cartList[i].count <= 1 ? (
                    <button onClick={() => alert("1개 미만의 수량은 선택하실 수 없습니다. \n삭제를 원하지면 삭제 버튼을 눌러주세요")}>
                      -
                    </button>
                  ) : (
                    <button
                      onClick={() => {
                        dispatch(subCount(state.cartList[i].id));
                      }}
                    >
                      -
                    </button>
                  )}
                </td>
                <td>
                  <button
                    onClick={() => {
                      dispatch(deleteItem(state.cartList[i].id));
                    }}
                  >
                    삭제
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <div className="cart-total">
        <p>
          {state.cartList.map(function (item, i) {
            sum.push(state.cartList[i].price * state.cartList[i].count);
            total = sum.reduce((a, b) => a + b);
            return null;
            // return total;
          })}
          총 {total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원
        </p>
      </div>
    </>
  );
}

export default Cart;
