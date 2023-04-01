/* Q1. 승빈이가 시험을 봤습니다. 각 국,수,사,과,영의 점수는 100, 70, 80, 90, 10입니다. 최고점과 최저점을 제외한 나머지 점수의 합을 구하세요. */

const score = [100, 70, 80, 90, 10];
score.sort((a, b) => a - b);
score.pop();
score.shift();
let sum = score.reduce((sum, n) => sum + n);
let ave = Math.floor(sum / 3);
console.log(`총점: ${sum}, 평균: ${ave}`);

/* 
    Q2. 80000원이 넘어가면 10% 할인
        
        let 옷들 = [
        { 이름:드레스, 가격: 40000},
        { 이름: 바지, 가격: 5000},
          ....
       ]  

        input 물건들 (옷들, 개수) 
        리턴 10000원이 넘어가면 10% 할인 or 그냥 그 가격 

        1. cart에 상품 목록과 개수를 받아온다.
        2. 인덱스가 일치하는 것들끼리 곱해준다. (가격 * 수량)

        
        
        return price * num (총액이 80000원이 넘으면 10% 할인)
*/
let products = [
  { name: "드레스", price: 40000 },
  { name: "바지", price: 30000 },
];

function cart(items, quantities) {
  let total = 0;
  for (let i = 0; i < products.length; i++) {
    total += items[i]["price"] * quantities[i];
  }
  let result = total >= 80000 ? 0.9 * total : total;
  console.log(`정가: ${total}`);
  return console.log(`할인적용가: ${result}`);
}

cart(products, [2, 3]);

/* Q3. 학원 가는 길
2호선을 타고 이동하는 학생이 역삼역에 도착했을 때 얼마를 지불하게 될 지 구해보세요.
[지하철 노선도]
- 지하철은 해당 노선 하나만 있는 것으로 간주합니다. (환승 등 상황 고려 X)
- 역간 간격은 1km로 통일합니다.
- 아래의 노선도를 복붙하셔서 사용하세요.
- '성수', '건대입구', '구의', '강변', '잠실나루', '잠실', '잠실새내', '종합운동장', '삼성', '선릉', '역삼', '강남', '교대', '서초', '방배', '사당', '낙성대', '서울대입구', '봉천', '신림', '신대방', '구로디지털단지', '대림', '신도림', '문래', '영등포구청', '당산', '합정', '홍대입구', '신촌', '이대', '아현', '충정로', '시청', '을지로입구', '을지로3가', '을지로4가', '동대문역사문화공원', '신당', '상왕십리', '왕십리', '한양대', '뚝섬'
[지하철 요금 계산 방식]
- 기본 요금 + 추가 요금(거리비례)
- 기본 요금: 1250원 (기본 요금으로는 10km까지 이동 가능합니다.)
- 추가 요금: 10km를 초과할 경우 5km 당 100원을 추가로 부과합니다. 
Input: 출발역
        (노선도 상에 없는 역을 입력한 경우 "존재하지 않는 역입니다."를 콘솔에 로그하세요.)
Output: 요금 

1. 입력한 역의 index - 역삼역의 index < 0 : distance = |결과값|
2. 입력한 역의 index - 역삼역의 index > 0 : distance = 결과값
3. distance > 10 일 때: (distance / 5)을 올림한 값 * 100원
4. 역삼을 입력한 경우: "이미 도착하였습니다."
5. 존재하지 않는 역을 입력한 경우: "존재하지 않는 역입니다."
*/

const lineNumber2 = [
  "성수",
  "건대입구",
  "구의",
  "강변",
  "잠실나루",
  "잠실",
  "잠실새내",
  "종합운동장",
  "삼성",
  "선릉",
  "역삼",
  "강남",
  "교대",
  "서초",
  "방배",
  "사당",
  "낙성대",
  "서울대입구",
  "봉천",
  "신림",
  "신대방",
  "구로디지털단지",
  "대림",
  "신도림",
  "문래",
  "영등포구청",
  "당산",
  "합정",
  "홍대입구",
  "신촌",
  "이대",
  "아현",
  "충정로",
  "시청",
  "을지로입구",
  "을지로3가",
  "을지로4가",
  "동대문역사문화공원",
  "신당",
  "상왕십리",
  "왕십리",
  "한양대",
  "뚝섬",
];
console.log(lineNumber2.indexOf("뚝섬") - lineNumber2.indexOf("역삼"));
function subwayFare(station) {
  let departure = lineNumber2.indexOf(station);
  let arrival = lineNumber2.indexOf("역삼");
  let fare = 1250;
  if (lineNumber2.indexOf(station) < 0)
    return console.log("존재하지 않는 역입니다.");
  if (!(departure - arrival)) return console.log("이미 도착하였습니다.");

  let distance = departure - arrival;
  if (distance < 0) {
    distance = Math.abs(distance);
  } else {
    distance = lineNumber2.length - distance;
  }

  console.log(`이동하신 거리는 ${distance} km 입니다.`);

  if (distance > 10) {
    fare += Math.ceil(distance / 5) * 100;
  }
  return console.log(`지불하실 금액은 ${fare}원입니다.`);
}

subwayFare("역삼");
subwayFare("잠실");
subwayFare("신촌");
subwayFare("뚝섬");
subwayFare("부산");
