document.addEventListener("DOMContentLoaded", () => {
    const bts = document.querySelectorAll('button');
    console.log(bts);

    // document.querySelector('#h2id').textContent = bts.textContent;
    //case1
    for(let i = 0; i < bts.length; i++){
        console.log(bts[i].textContent);
        document.querySelectorAll('#h2id').textContent = bts.textContent
    }
    //case2
    // bts.forEach((item, idx)=>{
    //     console.log(idx, item.textContent);
    // })
    //case3
    // for(let idx in bts){
    //     console,log()
    // }
    //case4
    // for(let item of bts){
    //     console.log(item.textContent);
    // }
    // for(let [k,v] of bts.entries()){
    //     console.log(k,v.textContent);
    // }
});