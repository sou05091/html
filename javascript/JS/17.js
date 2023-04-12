const cTof = (temp) => {
    let ftemp = (temp * 9/5) + 32;
    return ftemp;
}
const fToc = (temp) => {
    let ctemp = (temp - 32) * 5/9;
    return ctemp;
}

const selToggle = (s1, s2, t1, t2,) => {
    t1.value = '';
    t2.value = '';

    if(s1.value == '℃'){
        s2.value = '℉';
    } else if(s1.value == '℉'){
        s2.value = '℃';
    }
}


document.addEventListener("DOMContentLoaded", () => {
    const sel1 = document.querySelector('#sel1');
    const sel2 = document.querySelector('#sel2');

    const d1 = document.querySelector('#d1');
    const d2 = document.querySelector('#d2');

    const t1 = document.querySelector('#t1');
    const t2 = document.querySelector('#t2');


    //select change
    sel1.addEventListener('change', (event) => {
        selToggle(sel1, sel2, t1, t2);
        d1.textContent = sel1.value;
        d2.textContent = sel2.value;
        // d1.textContent = event.target.value;
        // t1.value = '';
        // t2.value = '';
        // if(sel1.value == '℃'){
        //     sel2.value = '℉';
        // } else if(sel1.value == '℉'){
        //     sel2.value = '℃';
        // }

        // d1.textContent = sel1.value;
        // d2.textContent = sel2.value;
    });
    sel2.addEventListener('change', () => {
        selToggle(sel2, sel1, t1, t2);
        d1.textContent = sel1.value;
        d2.textContent = sel2.value;
        // d2.textContent = event.target.value;
        // if(sel2.value == '℃'){
        //     sel1.value = '℉';
        // } else if(sel2.value == '℉'){
        //     sel1.value = '℃';
        // }

        // d1.textContent = sel1.value;
        // d2.textContent = sel2.value;
    });

    //change temp
    t1.addEventListener('input', (event) => {
        console.log(event.target.value);
        if(sel1.value == sel2.value){
            t2.value = t1.value
        } else if (sel1.value == '℃' && sel2.value == '℉') {
            t2.value = cTof(t1.value);
        } else if (sel1.value == '℉' && sel2.value == '℃') {
            t2.value = fToc(t1.value);
        }
    });
        // const res = (t1-32)*5/9;
        // const res2 = (t2-32)/1.8;
    // } 
})