# Movie Reservation Web Page
> **Super Coding 2401 2차 프로젝트** <br/> **개발기간 : 2024.04.14. ~ 2024.05.07.**

<br>

## 배포 주소

> **프론트 배포 주소** : [https://movie-reservation-seven.vercel.app] (현재 서버가 작동되지 않습니다.)

<br>

## 웹개발 팀원소개
|      김세연       |          성세리         |       조현아         |                                                                                                               
| :------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | 
|   <img width="160px" src="https://avatars.githubusercontent.com/u/141703065?v=4" />    |                      <img width="160px" src="https://avatars.githubusercontent.com/u/65022003?v=4" />    |                   <img width="160px" src="https://avatars.githubusercontent.com/u/66656181?v=4/">   |
|   [@sennydayk](https://github.com/sennydayk)   |    [@Seongseri](https://github.com/Seongseri)  | [@hyeon-aa](https://github.com/hyeon-aa)  |
| SuperCoding 2401 기수 | SuperCoding 2401 기수 | SuperCoding 2401 기수 |

<br>

## 1. 프로젝트 소개

- 본 프로젝트는 CGV 웹사이트의 핵심 기능만 추출하여 보다 간단하게 구현한 클론코딩 웹사이트로, 유저가 영화 차트를 조회하고 예매를 할 수 있는 사이트입니다.
- 유저는 회원가입과 로그인을 통해 개인정보를 등록하고 관리할 수 있습니다.
- 영화는 예매율순/평점순으로 구분하여 정렬 조회할 수 있습니다.
- 원하는 상영관과 영화 시간대를 선택해서 예매할 수 있고, 예매 내역 확인과 취소를 할 수 있습니다.
- 관람한 영화에 대한 리뷰 작성, 수정, 삭제를 할 수 있습니다.

<br>

## 2. 시작 가이드
### Requirements
For building and running the application you need:

- [Node.js v20.15.1](https://nodejs.org/en/download/package-manager)
- [Npm 9.2.0](https://www.npmjs.com/package/download)

### Installation
``` bash
$ git clone https://github.com/MovieReservationProject/MovieReservation-FE.git
$ cd DrugStore-FE
$ npm install
$ npm run master
```

---

<br>

## 3. 기술 스택
### Environment
![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-007ACC?style=for-the-badge&logo=Visual%20Studio%20Code&logoColor=white)
![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=Git&logoColor=white)
![Github](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=GitHub&logoColor=white) 
![Vercel](https://img.shields.io/badge/Vercel-00000?style=for-the-badge&logo=Vercel&logoColor=white) 

### Config
![npm](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)        

### Development
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=Javascript&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Css](https://img.shields.io/badge/Css-1572B6?style=for-the-badge&logo=Css&logoColor=white)

### Communication
![Notion](https://img.shields.io/badge/Notion-000000?style=for-the-badge&logo=Notion&logoColor=white)
![Discord](https://img.shields.io/badge/Discord-5865F2?style=for-the-badge&logo=Discord&logoColor=white)

---

<br>

## 4. 채택한 기술과 전략

### React, css

- **React**
  - 코드 컴포넌트화를 통해 재사용성과 추후 유지보수를 고려하였습니다.
  - Header, Footer와 같이 중복되어 표시되는 요소에 대해 리소스 절약이 가능하였습니다.    
- **css**
  - 코드의 가독성을 높이기 위해 스타일은 css 파일로 분리했습니다.
  - 스타일 충돌을 방지하기 위해 classname은 `페이지명-스타일명`으로 통일하였습니다.

### 브랜치 전략

- git-flow 전략을 기반으로 master, develop 브랜치와 보조 브랜치를 운용하였습니다.
  - **master** : 배포 단계에서만 사용하는 배포용 브랜치입니다.
  - **develop** : 개발 단계에서 git-flow의 master 역할을 하는 브랜치입니다.
  - **feature** : 기능 단위로 독립적인 개발 환경을 생성하여 개발한 뒤 merge 후 삭제하는 브랜치입니다. (ex. feature/mypage-reviewadd)

  <br>
  
## 5. 프로젝트 구조

```
📦movie-reservation
┣ 📂src
┃ ┣ 📂assets
┃ ┃ ┣ 📂img
┃ ┃ ┃ ┣ .
┃ ┃ ┗ 📂png
┃ ┃ ┃ ┣ .
┃ ┣ 📂components
┃ ┃ ┣ 📂Footer
┃ ┃ ┃ ┣ 📜CompanyInfo.js
┃ ┃ ┃ ┣ 📜FamilySite.js
┃ ┃ ┃ ┣ 📜Footer.css
┃ ┃ ┃ ┣ 📜Footer.js
┃ ┃ ┃ ┗ 📜LinkList.js
┃ ┃ ┣ 📂Header
┃ ┃ ┃ ┣ 📜Header.css
┃ ┃ ┃ ┣ 📜Header.js
┃ ┃ ┃ ┣ 📜Logo.js
┃ ┃ ┃ ┣ 📜Navigation.js
┃ ┃ ┃ ┣ 📜Search.js
┃ ┃ ┃ ┗ 📜UserActions.js
┃ ┃ ┗ 📂MyPage
┃ ┃ ┃ ┣ 📂MovieLog
┃ ┃ ┃ ┃ ┣ 📜MovieInfo.js
┃ ┃ ┃ ┃ ┣ 📜MovieLog.css
┃ ┃ ┃ ┃ ┣ 📜MovieLog.js
┃ ┃ ┃ ┃ ┣ 📜Pagination.css
┃ ┃ ┃ ┃ ┣ 📜Pagination.js
┃ ┃ ┃ ┃ ┣ 📜ReviewModal.css
┃ ┃ ┃ ┃ ┣ 📜ReviewModal.js
┃ ┃ ┃ ┃ ┣ 📜StarInput.js
┃ ┃ ┃ ┃ ┣ 📜StarRating.js
┃ ┃ ┃ ┃ ┗ 📜WarningMovieForm.js
┃ ┃ ┃ ┣ 📂PayDetail
┃ ┃ ┃ ┃ ┣ 📜MyPage.css
┃ ┃ ┃ ┃ ┣ 📜MyPage.js
┃ ┃ ┃ ┃ ┣ 📜PolicySection.js
┃ ┃ ┃ ┃ ┣ 📜ReservationItem .js
┃ ┃ ┃ ┃ ┣ 📜ReserveInfo.css
┃ ┃ ┃ ┃ ┣ 📜ReserveInfo.js
┃ ┃ ┃ ┃ ┣ 📜TabMenu.js
┃ ┃ ┃ ┃ ┗ 📜WarningSignForm.js
┃ ┃ ┃ ┗ 📂UserInfo
┃ ┃ ┃ ┃ ┣ 📜PasswordEdit.js
┃ ┃ ┃ ┃ ┣ 📜PersonalInfo.js
┃ ┃ ┃ ┃ ┣ 📜PhoneNumberEdit.js
┃ ┃ ┃ ┃ ┗ 📜UserInfo.css
┃ ┣ 📂pages
┃ ┃ ┣ 📂DetailPage
┃ ┃ ┃ ┣ 📜DetailPage.css
┃ ┃ ┃ ┗ 📜DetailPage.js
┃ ┃ ┣ 📂DetailPage 2
┃ ┃ ┣ 📂Login
┃ ┃ ┃ ┣ 📜Login.css
┃ ┃ ┃ ┗ 📜Login.js
┃ ┃ ┣ 📂Mainpage
┃ ┃ ┃ ┣ 📜Mainpage.css
┃ ┃ ┃ ┣ 📜Mainpage.js
┃ ┃ ┃ ┣ 📜Movie.css
┃ ┃ ┃ ┗ 📜Movie.js
┃ ┃ ┣ 📂Mainpage 2
┃ ┃ ┣ 📂Reservation
┃ ┃ ┃ ┣ 📜Calendar.js
┃ ┃ ┃ ┣ 📜Cinema.js
┃ ┃ ┃ ┣ 📜ErrorModal.js
┃ ┃ ┃ ┣ 📜Main.js
┃ ┃ ┃ ┣ 📜Movie.js
┃ ┃ ┃ ┣ 📜Mychangereserve.js
┃ ┃ ┃ ┣ 📜Myreserve.js
┃ ┃ ┃ ┣ 📜Reservation.css
┃ ┃ ┃ ┣ 📜Reservation.js
┃ ┃ ┃ ┣ 📜ReservationChange.js
┃ ┃ ┃ ┣ 📜Timetable.js
┃ ┃ ┃ ┗ 📜setupproxy.js
┃ ┃ ┗ 📂SignIn
┃ ┃ ┃ ┣ 📜SignIn.css
┃ ┃ ┃ ┗ 📜SignIn.js
┃ ┣ 📂store
┃ ┃ ┣ 📜index.js
┃ ┃ ┗ 📜reservation-slice.js
┃ ┣ 📜.DS_Store
┃ ┣ 📜App.css
┃ ┣ 📜App.js
┃ ┣ 📜App.test.js
┃ ┣ 📜index.css
┃ ┣ 📜index.js
┃ ┣ 📜logo.svg
┃ ┣ 📜reportWebVitals.js
┃ ┗ 📜setupTests.js
┣ 📜.DS_Store
┣ 📜.gitignore
┣ 📜README.md
┣ 📜package-lock.json
┣ 📜package.json
┗ 📜vercel.json

```

---

<br>

## 6. 역할 소개

### 김세연 🐰

- **UI & 기능** : 로그인, 회원가입, 메인페이지, 상세페이지

### 성세리 🐻

-  **UI & 기능** : 마이페이지(회원정보 조회, 예매내역 조회, 리뷰 작성/수정/삭제)
  
### 조현아 🐱

-  **UI & 기능** : 영화 예매, 영화 예매내역 변경

---

<br>

## 7. 페이지별 기능

### [메인페이지]

- 서비스 초기화면으로 영화 차트를 조회할 수 있습니다.
- 영화 차트는 예매율순/평점순으로 정렬할 수 있습니다.

<br>

![메인페이지](https://github.com/user-attachments/assets/e063ce97-0171-4960-8d00-c316d0e58c91)

![메인페이지 정렬](https://github.com/user-attachments/assets/ad2310b8-8385-4547-9575-df898c88d88e)

<br>

### [회원가입 페이지]

- 비밀번호 유효성 검사와 비밀번호 확인을 통해 보안성을 높입니다.
- 유저는 아이콘 클릭으로 비밀번호 표시 숨김을 해제하여 입력한 텍스트를 확인할 수 있어 오타나 잘못 입력하는 것을 방지할 수 있습니다.
- 이미 회원인 경우, 로그인 페이지로 이동 가능합니다.

<br>

<img width="1470" alt="회원가입 UI" src="https://github.com/user-attachments/assets/e2873c42-afea-4ae3-8138-59f95b345342">

![회원가입 비밀번호](https://github.com/user-attachments/assets/cb6d6877-5a2c-4e40-8483-1822b0eb9993)

<br>

### [로그인 페이지]

- 유저는 가입한 이메일과 비밀번호로 로그인이 가능합니다.
- 유저는 아이콘 클릭으로 비밀번호 표시 숨김을 해제할 수 있습니다.
- 로그인/로그아웃 시 홈으로 이동되며, 로그인 상태에서는 로그아웃 버튼이, 로그아웃 상태에서는 로그인 버튼이 헤더에 표시됩니다.

<br>

![로그인](https://github.com/user-attachments/assets/9ff8604a-7bd8-449b-8695-6365921cfcf2)

<br>

### [상세페이지]

- 유저는 보고 싶은 영화의 상세정보를 확인할 수 있습니다.
- 유저는 해당 영화에 등록된 모든 실관람평을 확인할 수 있습니다.
- 해당 영화 예매 페이지로 이동할 수 있습니다.

<br>

<img width="1470" alt="상세페이지" src="https://github.com/user-attachments/assets/9b93a6c8-f644-432f-aee3-c93082aa86f4">

<img width="1470" alt="상세페이지 리뷰" src="https://github.com/user-attachments/assets/83231a7b-017b-4469-b646-caedb5925c15">

<br>


### [영화 예매 페이지]

- 유저는 상영관 -> 상영시간 순으로 선택하고 선택한 정보를 확인한 뒤 예매를 진행할 수 있습니다.
- 상영일자는 주간 캘린더를 사용하여 일주일 단위로 확인 가능합니다.
- 유저가 선택한 예매정보를 화면 우측에서 실시간으로 확인 가능하도록 구현하여 가독성과 편의성을 높입니다.
- 선택한 상영일자에 상영 정보가 없을 경우, 상영 정보가 없다는 모달창이 표시됩니다.

<br>

<img width="1470" alt="예매 UI" src="https://github.com/user-attachments/assets/01209a97-32b7-4004-bd58-3be3ad774948">

![예매](https://github.com/user-attachments/assets/9ddc6771-5ac7-4d8b-8b7d-1c5d05ea55df)

<br>

### [마이페이지 - 결제내역 조회]

- 유저가 예매한 모든 내역을 결제정보로 조회할 수 있습니다.
- 예매 내역 변경과 예매 취소가 가능합니다.

<br>

<img width="1470" alt="예매내역" src="https://github.com/user-attachments/assets/aa81864d-4068-49dd-ae3b-2c3df5ad830b">

![예매 취소](https://github.com/user-attachments/assets/900643c5-3bb8-461f-9e58-8aa968805800)


<br>

### [마이페이지 - 관람한 영화 조회]

- 유저가 예매한 모든 내역을 영화 포스터와 영화 정보로 조회할 수 있습니다.
- 모달창을 통해 평점이 포함된 리뷰를 작성, 수정, 삭제할 수 있습니다.

<br>

<img width="1470" alt="리뷰작성" src="https://github.com/user-attachments/assets/33aa20e8-184c-4147-b263-bf04cac86d1f">


---


<br>

## 8. 회고

- ***[이론으로 배운 내용의 체득]*** : 프로젝트 초기 셋팅부터 협업, 배포까지 진행하는 경험이 처음이었기에 기술적 측면에서도, 소통적 측면에서도 어려움을 많이 겪었습니다. 만들고 싶은 서비스를 직접 개발하면서 그동안 이론과 간단한 실습으로만 공부했던 React라는 프레임워크의 특징(컴포넌트 재사용성, 유지보수성, 동적 렌더링 등)에 대해서 체득할 수 있었습니다.
- ***[백엔드와의 협업]*** : 백엔드 팀원들과의 첫 협업을 진행하면서 서버 구조와 api 명세서 작성법, 엔티티 구조 등에 대해 파악해볼 수 있는 기회로 작용하였습니다.
