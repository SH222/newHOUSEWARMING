# HOUSEWARMING

### 다양한 인테리어 소품과 생활 용품을 볼 수 있는 웹사이트

<br/>
<p align="center"><img width="60%" src="public\img\play.gif"></p>

#### [노션](https://tar-tuba-6c9.notion.site/Project-2-HOUSEWARMING-3523b7ba43e541bbbf08219c04b0132a)

<br/>

## 기술 스택

<br/>
  <img src="https://img.shields.io/badge/HTML-E34F26?style=for-the-badge&logo=HTML5&logoColor=white">
  <img src="https://img.shields.io/badge/CSS-1572B6?style=for-the-badge&logo=CSS3&logoColor=white">
  <img src="https://img.shields.io/badge/JS(ES6)-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=white">
  <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=white">
  <img src="https://img.shields.io/badge/Redux-764ABC?style=for-the-badge&logo=Redux&logoColor=white">  
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=Node.js&logoColor=white">
  <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=GitHub&logoColor=white">
  
<br/>

## 구현 기능

<br/>

### 1. Login / Logout

<br/>
<p align="center"><img width="50%" src="public\img\login.png"></p>

- **localStorage** 활용해 회원 로그인 정보를 관리했습니다.
- 회원 정보가 들어있는 **localStorage가 비어있으면 modal창 출력이 출력**됩니다.
- 임의의 아이디와 비밀번호를 입력 후 로그인 버튼을 클릭하면 localStorage에 값이 저장되며 logout 버튼을 클릭하기 전까지는 모달창이 나타나지 않습니다.
- 오른쪽 상단의 **logout 버튼을 클릭**하면 **localStorage의 회원 정보가 삭제**되고 **modal창이 출력**됩니다.

<br/>

### 2. 메인 슬라이드

<br/>
<p align="center"><img width="50%" src="public\img\slide.png"></p>

<br/>

- 메인 페이지에 자동으로 사진이 변환되는 슬라이더를 구현하였습니다.
- 배너 이미지는 public 폴더에 넣어 import 하지 않아도 쉽게 사용할 수 있도록 했습니다.

<br/>

### 3. 메인페이지 NEW ARRIVAL, BEST 아이템 리스트

<br/>
<p align="center"><img width="50%" src="public\img\mainList.png"></p>

<br/>

- 임의의 상품 데이터를 ajax 형태로 만들어 놓고 useState로 불러와 map을 이용해 list로 출력했습니다.
- NEW ARRIVAL 상품은 상품 코드가 가장 큰 순서대로, BEST 상품은 구매 수량이 많은 순서대로 정렬하였습니다.

<br/>

### 4. 카테고리별 상품 리스트 (정렬, 더보기 버튼)

<br/>
<p align="center"><img width="50%" src="public\img\cateList.png"></p>

<br/>

- Items.filter()를 이용해 데이터를 카테고리별로 분류하여 출력했습니다.
- sort(), reverse() 함수를 이용해 이름순, 낮은 가격순, 높은 가격순으로 정렬할 수 있게 했습니다.
- 기본적으로 8개의 아이템이 출력되도록 하기 위해 btnCount state에 8을 넣었습니다.
- Items.map() 내부에 && 연산자를 사용해서 btnCount가 8일 경우에만 <ItemList />를 출력했습니다.
- 더보기 버튼을 클릭하면 btnCount에 +8이 되어 && 연산자의 조건이 변경될 수 있도록 하였습니다.

<br/>

### 5. 상품 디테일 페이지 (주문하기 버튼, option, tab)

<br/>
<p align="center"><img width="50%" src="public\img\detailPage.png"></p>

<br/>

- detail.js 컴포넌트를 생성하여 상품 각각의 사진과 이름, 가격, 옵션 등을 볼 수 있도록 만들었습니다.
- 상품의 옵션은 map()을 이용하여 상품 데이터에 저장되어 있는 배열을 option 태그로 반복 출력했습니다.
- 옵션이 없는 상품은 select option 태그가 출력되지 않습니다.
- 주문하기 버튼을 누르면 장바구니에 클릭한 상품이 추가됩니다. 만약 이미 장바구니에 있는 상품이라면 갯수가 1 추가됩니다.
- 부트스트랩의 Tabs을 이용해 상품 상세와 배송/문의 탭을 만들었습니다.
- detail.js 컴포넌트를 생성하여 상품 각각의 사진과 이름, 가격, 옵션 등을 볼 수 있도록 만들었습니다.
- 상품의 옵션은 map()을 이용하여 상품 데이터에 저장되어 있는 배열을 option 태그로 반복 출력했습니다.
- 옵션이 없는 상품은 select option 태그가 출력되지 않습니다.
- 주문하기 버튼을 누르면 장바구니에 클릭한 상품이 추가됩니다. 만약 이미 장바구니에 있는 상품이라면 갯수가 1 추가됩니다.
- 부트스트랩의 Tabs을 이용해 상품 상세와 배송/문의 탭을 만들었습니다.

  <br/>

### 6. 장바구니 페이지

<br/>
<p align="center"><img width="50%" src="public\img\cart.png"></p>

<br/>

- 디테일 페이지에서 주문하기 버튼을 클릭하면 장바구니 데이터에 상품이 추가되도록 구현했습니다.
- 상단에는 localStorage에 저장된 회원의 아이디가 출력됩니다.
- +, - 버튼을 누르면 상품이 추가, 삭제되며 수량에 맞춰 가격 또한 변동됩니다.
- 수량이 1개 남았을 때 - 버튼을 클릭하게 되면 경고창이 뜨게 됩니다.
- 삭제 버튼을 누르면 상품이 삭제됩니다.
- 상품사진과 상품명을 누르면 상품 상세 페이지로 이동합니다.

<br/>

### 7. 최근 항목

<br/>
<p align="center"><img width="50%" src="public\img\main.png"></p>

<br/>

- localStorage에 최근 본 상품의 id값을 저장하여 해당 아이디와 일치하는 상품의 사진과 상품명을 출력되도록 했습니다.
- 사진과 상품명을 클릭하면 상품 디테일 페이지로 이동합니다.
- useEffect()를 이용하여 홈페이지에 처음 접속했을 때 localStorage에 빈 배열이 생성되도록 했습니다.
- array object 값을 localStorage에 set, get 하기 위해 JSON.stringify와 JSON.parse를 활용했습니다.
- localStorage에 저장된 상품이 3개가 넘게 되면 가장 먼저 저장된 상품을 remove() 되도록 했습니다.

<br/>
