class Counter {
  constructor(runEveryFiveTimes) {
    this.Counter = 0;
    this.callback = runEveryFiveTimes;
  }

  increase() {
    this.Counter++;
    console.log(this.Counter);
    if (this.Counter % 5 === 0) {
      // 인자를 전달하지 않으면 runEveryFiveTimes의 값은 undefined가 됨 > this.callback도 undefined가 됨
      // 이 상태에서 코드 실행 시 TypeError 발생 (undefined는 호출 불가능하기 때문)
      // this.callback이 undefined인지(콜백 함수 등록했는지) 검사해서 true일 경우에만 호출되도록 해야 함

      //   if (this.callback) {
      //     this.callback(this.Counter);
      //   }

      this.callback && this.callback(this.Counter);
    }
  }
}

function printSth(num) {
  console.log(`${num}번째`);
}

function alertSth(num) {
  alert(`${num}번째`);
}

// 하나의 클래스로 다양한 기능을 수행하는 오브젝트들 생성 가능
const printCounter = new Counter(printSth);
const alertCounter = new Counter(alertSth);

coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
