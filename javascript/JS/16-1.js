document.addEventListener("DOMContentLoaded", ()=> {
    const bt1 = document.querySelector('#bt1');
    bt1.addEventListener('click',() => {

    let n = Math.floor(Math.random() * 6)+1;
    console.log(n);
    document.getElementById("h2id").innerHTML = `<img src="./image/${n}.png"></img>`;
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
    event.preventDefault();
    });
});