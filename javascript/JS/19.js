//배열 filter 구현
const myFilter = (item) => {
}

document.addEventListener("DOMContentLoaded", () => {
    const cbt1s = document.querySelectorAll(".cbt1") ;
    const cbt2s = document.querySelectorAll(".cbt2") ;
    const cbt3s = document.querySelectorAll(".cbt3") ;
    const btReset = document.querySelector("#btReset") ;
    const txt1 = document.querySelector("#txt1") ;


    //배열의 초기화
    let arr = [] ;

    //버튼 이벤트 추가
    //reset기능 구현
    btReset.addEventListener('click', (e)=>{
        e.preventDefault() ;
        txt1.value = '';
        arr = [] ;
    });

    //배열에 자료 추가
    for(let cbt1 of cbt1s) {
        cbt1.addEventListener('click', (e)=>{
            e.preventDefault() ;
            //console.log(cbt1.textContent)
            switch (cbt1.textContent) {
                case '사과' :
                    arr.push('🍎') ;
                    break;
                case '바나나' :
                    arr.push('🍌') ;
                    break;
                case '오렌지' :
                    arr.push('🍊') ;
                    break;
                case '수박' :
                    arr.push('🍉') ;
                    break;
            }
            console.log(arr)
            //txt1.value = arr.toString() ;
            txt1.value = arr.join(',') ;
        }) ;
    }


    //배열에서 자료삭제
    for(let cbt2 of cbt2s) {
        cbt2.addEventListener('click', (e)=>{
            e.preventDefault() ;
            let gubun = cbt2.textContent.replace('삭제','')//삭제라는 문자열을 제거후 새롭게 저장 (ex 사과삭제 -> 사과)
            console.log(gubun) 
            let temp = [];
            // for(let item of arr){
            //     switch (gubun){
            //         case '사과':
            //             if (item != '🍎') temp.push(item);
            //             break;
            //         case '바나나':
            //             if (item != '🍌') temp.push(item);
            //             break;
            //         case '오렌지':
            //             if (item != '🍊') temp.push(item);
            //             break;
            //         case '수박':
            //             if (item != '🍉') temp.push(item);
            //             break;

            //         }
            // }
            for(let item of arr){
            switch (gubun) {
                case '사과' :
                    arr = arr.filter((item) => item != '🍎' );
                    break;
                case '바나나' :
                    arr = arr.filter((item) => item != '🍌' );
                    break;
                case '오렌지' :
                    arr = arr.filter((item) => item != '🍊' );
                    break;
                case '수박' :
                    arr = arr.filter((item) => item != '🍉' );
                    break;
                }
            }
            // filter = 원본 배열을 변경하지 않으며, 순서대로 각 요소를 처리하며, 새로운 배열을 생성하여 반환한다.
            arr = temp;
            console.log("cbt2", temp);
            //txt1.value = arr.toString() ;
            txt1.value = arr.join(',') ;
        }) ;
    }

    for(let cbt3 of cbt3s){
        cbt3.addEventListener('click', (e)=>{
        e.preventDefault() ;
        let gubun = cbt3.textContent.split('->')[0].trim; // '->'을 기준으로 나누고 뒤에있는 문자열은 삭제한다.
        //split() 메서드는 구분자를 인수로 받아 문자열을 나누며, 나누어진 문자열 조각들로 이루어진 새로운 배열을 반환한다.

        // for (let item of arr){
        //     switch(gubun){
        //         case '사과':
        //             if (item == '🍎') temp.push('당')
        //             else temp.push(item);    
        //             break;
        //         case '바나나':
        //             if (item == '🍌') temp.push('오')
        //             else temp.push(item);    
        //             break;
        //         case '오렌지':
        //             if (item == '🍊') temp.push('아')
        //             else temp.push(item);    
        //             break;
        //         case '수박':
        //                 if (item == '🍉') temp.push('브')
        //                 else temp.push(item);    
        //                 break;
        //     }
        // }
             switch (gubun) {
                case '사과' :
                    arr = arr.map((item) => item == '🍎' ? '🥭' : item);
                    // map은  각 요소에 대해 주어진 함수를 호출하고, 그 결과를 새로운 배열로 반환하는 메서드
                    break;
                case '바나나' :
                    arr = arr.map((item) => item == '🍌' ? '🥒': item);
                    break;
                case '오렌지' :
                    arr = arr.map((item) => item == '🍊' ? '🥑': item );
                    break;
                case '수박' :
                    arr = arr.map((item) => item == '🍉' ? '🥦': item );
                    break;
            }
            console.log("cbt3", arr);
        });
    }
});
