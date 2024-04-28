import React, { useState } from "react";

function FamilySite() {
  const [selectedLink, setSelectedLink] = useState("");

  const handleSelectChange = (e) => {
    setSelectedLink(e.target.value);
  };

  const goToLink = () => {
    if (selectedLink) {
      window.open(selectedLink, "_blank");
    }
  };

  return (
    <div>
      <select
        id="familysite"
        onChange={handleSelectChange}
        value={selectedLink}
      >
        <option value="" class="familysiteTitle">
          계열사 바로가기
        </option>
        <optgroup label="CJ그룹">
          <option value="http://www.cj.net/">CJ주식회사</option>
        </optgroup>
        <optgroup label="식품 &amp; 식품서비스">
          <option value="https://www.cj.co.kr/kr/index">CJ제일제당</option>
          <option value="https://www.cjfoodville.co.kr/main.asp">
            CJ푸드빌
          </option>
          <option value="http://www.cjfreshway.com/index.jsp">
            CJ프레시웨이
          </option>
        </optgroup>
        <optgroup label="생명공학">
          <option value="https://www.cj.co.kr/kr/about/business/bio">
            CJ제일제당 BIO사업부문
          </option>
          <option value="https://www.cj.co.kr/kr/about/business/bio">
            CJ Feed&amp;Card
          </option>
        </optgroup>
        <optgroup label="물류 &amp; 신유통">
          <option value="https://www.cjlogistics.com/ko/main">
            CJ대한통운
          </option>
          <option value="http://www.cjenc.co.kr/kr/Default.asp">
            CJ대한통운 건설부문
          </option>
          <option value="https://www.oliveyoung.co.kr/store/company/brandStory.do">
            CJ올리브영
          </option>
          <option value="https://www.cjolivenetworks.co.kr:449/">
            CJ올리브네트웍스
          </option>
          <option value="https://www.cjoshopping.com:9002/index.asp">
            CJ ENM 커머스부문
          </option>
        </optgroup>
        <optgroup label="엔터테인먼트 &amp; 미디어">
          <option value="https://www.cjenm.com/ko/">
            CJ ENM 엔터테인먼트부문
          </option>
          <option value="http://corp.cgv.co.kr/">CJ CGV</option>
        </optgroup>
      </select>
      <a href="#none" class="btn_familysite" onClick={goToLink}>
        GO
      </a>
    </div>
  );
}

export default FamilySite;
