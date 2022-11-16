function Login({ inputs, setInputs, login, setLogin }) {
  // let nextInputs = "";
  const onChange = (e) => {
    // 비구조화 할당
    const { name, value } = e.target;
    const nextInputs = {
      ...inputs,
      [name]: value,
    };
    setInputs(nextInputs);
  };

  const loginBtn = () => {
    const userObj = inputs;
    localStorage.setItem("member", JSON.stringify(userObj));
    setLogin(1);
    console.log(login);
  };
  return (
    <>
      <div className="login-container">
        <div className="login-modal">
          <h2>SIGN IN</h2>
          <input type="text" placeholder="ID" name="id" onChange={onChange} />
          <input type="password" placeholder="PW" name="pw" onChange={onChange} />
          <button onClick={loginBtn}>로그인</button>
          <a href="/">아이디찾기</a>
          <a href="/">회원가입</a>
        </div>
      </div>
    </>
  );
}

export default Login;
