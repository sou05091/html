const show = () => {
    event.preventDefault();
    let n = Math.floor(Math.random()*6) +1;
    document.querySelector(".h2Class>img").setAttribute("src", `./image/${n}.png`);
}