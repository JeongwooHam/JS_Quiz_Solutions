// 오늘의 썸트렌드

let sometrend = [
  {
    date: "0330",
    dayOfWeek: "목",
    title:
      "20대 남성이 웹툰에 진심인 이유 | 침착맨, 박태준 유니버스, 학원물, 남중남고, 소갈비찜 레시피",
    tag: ["#문화", "#미디어", "#콘텐츠"],
    category: "생활변화관측소",
    bgImg:
      "https://static.some.co.kr/sometrend/attachments/content/32e97d5c-c8ec-4493-921d-100476d717e6/750_380%20(375_190)%20(3).jpg",
    contentLink:
      "https://some.co.kr/contents/detail/xykoHF41?startPage=1&cornerType=LIFE_OBSERVATORY",
  },
  {
    date: "0405",
    dayOfWeek: "수",
    title: "'BTS 지민, 빌보드 찢었다' 핫 100 1위 ... K팝 솔로 최초",
    tag: ["#문화", "#연예"],
    category: "AI리포트",
    bgImg:
      "	https://static.some.co.kr/sometrend/attachments/co…5-a5c7-7d9150d1298c/750_380%20(375_190)%20(3).jpg",
    contentLink:
      "https://some.co.kr/contents/detail/x2L1cNT1?startPage=1&cornerType=AI_REPORT",
  },
  {
    date: "0403",
    dayOfWeek: "월",
    title: "이번에는 4050 트렌드다! 4050 소셜 트렌드 리포트",
    tag: ["#트렌드"],
    category: "AI리포트",
    bgImg:
      "https://static.some.co.kr/sometrend/attachments/content/b6ef8a33-fc0f-42b6-a83c-1070ebf5bb69/750_380 (375_190) (3).jpg",
    contentLink:
      "https://some.co.kr/contents/detail/OrDUAOpf?startPage=1&cornerType=AI_REPORT",
  },
  {
    date: "0317",
    dayOfWeek: "금",
    title: "인공지능의 한 획을 그은 대화형 서비스, 챗GPT",
    tag: ["ChatGPT", "테크"],
    category: "생활변화관측소",
    bgImg:
      "https://static.some.co.kr/sometrend/attachments/content/d0650bcb-dd4e-491c-bf09-999bdbbac0e8/750_380%20(375_190)%20(3).jpg",
    contentLink:
      "https://some.co.kr/contents/detail/gck2V2Tp?startPage=1&cornerType=LIFE_OBSERVATORY",
  },
  {
    date: "0315",
    dayOfWeek: "금",
    title: "'검정고무신' 작가의 눈물 '비극이 된 기영이'",
    tag: ["#문화", "#콘텐츠"],
    category: "AI리포트",
    bgImg:
      "https://static.some.co.kr/sometrend/attachments/content/16ece76d-798f-47ba-adba-691732b2c007/750_380%20(375_190)%20(3).jpg",
    contentLink:
      "https://some.co.kr/contents/detail/onM24vYX?startPage=1&cornerType=AI_REPORT",
  },
  {
    date: "0327",
    dayOfWeek: "월",
    title: "AI가 알려주는 2023 마케팅 전략의 모든 것!",
    tag: ["#트렌드", "#마케팅", "#테크"],
    category: "AI리포트",
    bgImg:
      "https://static.some.co.kr/sometrend/attachments/content/21faf041-6dfa-4b57-a950-a6b2a6a21e1f/750_380%20(375_190)%20(3).jpg",
    contentLink:
      "https://some.co.kr/contents/detail/VG42hnep?startPage=1&cornerType=AI_REPORT",
  },
  {
    date: "0306",
    dayOfWeek: "월",
    title: "마케터가 알면 좋은 ChatGPT 활용법, ‘ChatGPT’ 소셜 분석 리포트",
    tag: ["#마케팅", "#ChatGPT", "#테크"],
    category: "AI리포트",
    bgImg:
      "https://static.some.co.kr/sometrend/attachments/content/ddb78600-0400-4cc6-bbe0-d219e7140632/750_380%20(375_190)%20(3).jpg",
    contentLink:
      "https://some.co.kr/contents/detail/OmOcWCG0?startPage=1&cornerType=AI_REPORT",
  },
  {
    date: "0320",
    dayOfWeek: "월",
    title: "빅데이터로 보는 2023 S/S 트렌드 리포트",
    tag: ["#빅데이터", "#트렌드", "#패션"],
    category: "AI리포트",
    bgImg:
      "https://static.some.co.kr/sometrend/attachments/content/bc4460d8-0b2c-4cfb-a1f5-f67337401574/750_380%20(375_190)%20(3).jpg",
    contentLink:
      "https://some.co.kr/contents/detail/4dYygH8w?startPage=1&cornerType=AI_REPORT",
  },
  {
    date: "0206",
    dayOfWeek: "월",
    title: "영화 'HER'이 현실이 되다? 인공지능 'ChatGPT' 파헤쳐 보기",
    tag: ["#ChatGPT", "#테크"],
    category: "AI리포트",
    bgImg:
      "https://static.some.co.kr/sometrend/attachments/content/fc09b383-a2e0-46bd-97a3-488caa18b76d/750_380%20(375_190)%20(3).jpg",
    contentLink:
      "https://some.co.kr/contents/detail/IPo4QqQ7?startPage=1&cornerType=AI_REPORT",
  },
  {
    date: "0322",
    dayOfWeek: "수",
    title: "한국에 상륙한 '애플페이' 반응은?",
    tag: ["#테크"],
    category: "AI리포트",
    bgImg:
      "https://static.some.co.kr/sometrend/attachments/content/e1c35f7e-933b-4cc6-bdb5-4e40edcc710f/750_380%20(375_190)%20(3).jpg",
    contentLink:
      "https://some.co.kr/contents/detail/OBIj62MT?startPage=1&cornerType=AI_REPORT",
  },
];

// 1. map (모든 게시물 date의 value값에 년도 정보 추가하기)
const resultOfMap = sometrend.map((el) => {
  let newEl = { ...el };
  newEl.date = "23" + newEl.date;
  return newEl;
});
console.log(resultOfMap);

console.log("============================================================");

// 2. filter (tag에 ChatGPT가 포함된 게시물만 추리기)
const resultOfFilter = sometrend.filter((el) => el.tag.includes("#ChatGPT"));
console.log(resultOfFilter);

console.log("============================================================");

// 3. find (#제목에 애플페이가 들어가는 게시물 찾기)
const resultOfFind = sometrend.find((el) => el.title.includes("애플페이"));
console.log(resultOfFind);

console.log("============================================================");

// 4. findIndex (주어진 날짜에 작성된 게시물 찾기. 0320)
const resultOfFindIndex = sometrend.findIndex((el) => el.date === "0320");
console.log(resultOfFindIndex);

console.log("============================================================");

// 5. every (모든 게시물의 카테고리가 'AI리포트'인지 확인하기)
const resultOfEvery = sometrend.every((el) => el.category === "AI리포트");
console.log(resultOfEvery);

console.log("============================================================");

// 6. some (3월에 쓰인 게시물이 있는지 확인하기)
const resultOfSome = sometrend.some((el) => parseInt(el.date) > 300);
console.log(resultOfSome);

console.log("============================================================");

// 7. sort (최신순으로 정렬하기)
const resultOfSort = sometrend.sort((a, b) => b.date - a.date);
console.log(resultOfSort);

console.log("============================================================");

// 8. 게시물 추가하기
const newContent = {
  date: "0309",
  dayOfWeek: "목",
  title:
    "저 무신사 냄새 나나요? '무신사 냄새' 논란이 2030에게 미친 영향! (feat. SNL)",
  tag: ["#패션", "#미디어"],
  category: "생활변화관측소",
  bgImg:
    "https://static.some.co.kr/sometrend/attachments/content/37cb0863-9237-46b4-a505-24d6454f37fe/750_380%20(375_190)%20(3).jpg",
  contentLink:
    "https://some.co.kr/contents/detail/g4MyBB1p?startPage=1&cornerType=LIFE_OBSERVATORY",
};
sometrend.push(newContent);
console.log(sometrend);

console.log("============================================================");

// 9. 게시물 삭제하기
sometrend.shift();
console.log(sometrend);
