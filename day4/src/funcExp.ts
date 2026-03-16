// 함수 표현식은 호이스팅이 되지 않으므로 호출 전 사용 시 오류가 발생함

try {
  // hello(name);
} catch (error) {
  console.error(error);
}

const hello = (name: string) => {
  console.log(name);
};

hello("name");
