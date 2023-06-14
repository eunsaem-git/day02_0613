//front : window.document
//node.js : 기본적인 객체, 변수
//console : 콘솔 창에 결과를 출력
//참고: https://nodejs.org/docs/latest-v18.x/api/console.html
//다양한 콘솔을 사용할 수 있음

console.log('node.js'); //html 형식
console.dir('directory json') //json 형식(디렉토리를 json 형태로 출력)
console.count();
console.count();
console.count(); //count를 자동 출력

console.time('for start');
let sum = 0;
for(let a=0; a<1000; a++) {
    sum+=a;
}
console.log(sum);
console.timeEnd('for start');


