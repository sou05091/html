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
    // let r2 = document.getElementById("r2").value;
    // let r3 = document.getElementById("r3").value;
    // let r4 = document.getElementById("r4").value;
    // let r5 = document.getElementById("r5").value;
    // let r6 = document.getElementById("r6").value;
    let user;
    const radio = document.querySelectorAll('input[type=radio]')
    for(let item of radio){
        // console.log(item);
        if (item.checked){//checked = bloolean
            user = item.value;
            break;
        }
    }

    if (n===parseInt(user)){
        document.querySelector('article h1').textContent = '주사위게임 : 맞음'
    } else {
        document.querySelector('article h1').textContent = '주사위게임 : 틀림'
    }
    // if(n==s){
    //     console.log("정답")
    // } else {
    //     console.log("오답")
    //     console.log(s)
    // }
    event.preventDefault();
}