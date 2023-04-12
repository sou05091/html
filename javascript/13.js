// function show() {
//     //alert("안녕하세요");
//     event.preventDefault();
//     document.getElementById("h2id").innerHTML = "Hi";
// }

const show = () => {
    //랜덤수 생성(1~6)
    //const는 바뀌면 안되는 것
    let n = Math.floor(Math.random() * 6)+1;
    console.log(n);
    //case3
    document.getElementById("h2id").innerHTML = `<img src="./image/${n}.png"></img>`;
    //case2
    //document.getElementById("h2id").innerHTML = '<img src="./image/'+ n +'1.png"></img>';
    //case1
    // if (n==1){
    //     document.getElementById("h2id").innerHTML = '<img src="./image/1.png"></img>';
    // } else if(n==2){
    // document.getElementById("h2id").innerHTML = '<img src="./image/2.png"></img>';
    // } else if(n==3){
    //     document.getElementById("h2id").innerHTML = '<img src="./image/3.png"></img>';
    // } else if(n==4){
    //     document.getElementById("h2id").innerHTML = '<img src="./image/4.png"></img>';
    // } else if(n==5){
    //     document.getElementById("h2id").innerHTML = '<img src="./image/5.png"></img>';
    // } else {
    //     document.getElementById("h2id").innerHTML = '<img src="./image/6.png"></img>';
    // }
    event.preventDefault();
}

// document.addEventListener("DOMContentLoaded", function(){
//     document.getElementById("h2id").innerHTML = "시작입니다";
// });
// function 코드를 그대로 넣어준다.(이름이 없는 function 존재)

document.addEventListener("DOMContentLoaded", () => {
   // document.getElementById("h2id").innerHTML = "시작입니다";
//    document.querySelector('#h2id').innerHTML = "아이디선택자:시작입니다.";
//    const bt = document.createElement('button');
//     bt.textContent = "확인";
//     document.getElementById('hdiv').append(bt);
});