/*
문제 1: Fetch
fetch API를 사용하여 다음 URL로 GET 요청을 보내는 JavaScript 함수를 작성하세요: "https://jsonplaceholder.typicode.com/posts/1". 
이 함수는 JSON 응답에서 "title" 속성을 추출하여 반환해야 합니다.
*/
const backend_url = "https://jsonplaceholder.typicode.com/posts/1";

const requestPost = async () => {
  let request = await fetch(backend_url, { method: "GET" });
  request = await request.json();
  console.log(typeof request);
  console.log(request);
  return console.log(request.title);
};

requestPost();

/*
문제 3: Fetch
fetch API를 사용하여 다음 URL로 GET 요청을 보내는 JavaScript 함수를 작성하세요: "https://api.coindesk.com/v1/bpi/currentprice/BTC.json". 
이 함수는 JSON 응답에서 현재 비트코인의 환율을 나타내는 "rate" 속성을 추출하여 웹 페이지에 표시해야 합니다.
*/
const coindesk = "https://api.coindesk.com/v1/bpi/currentprice/BTC.json";

const requestToCoindesk = async () => {
  let request = await fetch(coindesk, { method: "GET" });
  request = await request.json();
  console.log(request.bpi.USD.rate);
  const $content = document.querySelector("#coindesk");
  $content.textContent = request.bpi.USD.rate;
};

requestToCoindesk();
// 참고: 외부 API에 요청을 보내는 문제의 경우, 해당 API에 액세스하는 권한이 있는지 확인하고, 해당 API의 이용 약관을 준수해야 합니다.
