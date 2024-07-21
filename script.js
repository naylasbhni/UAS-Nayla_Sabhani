document.addEventListener('DOMContentLoaded', function() {
    const text1 = document.querySelector('#typing-text-1');
    const text2 = document.querySelector('#typing-text-2');
    const text3 = document.querySelector('#typing-text-3');

    const textContent1 = "Selamat Datang";
    const textContent2 = "Di Kumpulan Corat-Coret Saya ";
    const textContent3 = "Semoga Kalian Menyukai Tulisanku.... ;}";

    text1.textContent = '';
    text2.textContent = '';
    text3.textContent = '';

    let index1 = 0;
    let index2 = 0;
    let index3 = 0;

    function type1() {
        if (index1 < textContent1.length) {
            text1.textContent += textContent1.charAt(index1);
            index1++;
            setTimeout(type1, 100);
        } else {
            setTimeout(type2, 1000);
        }
    }

    function type2() {
        if (index2 < textContent2.length) {
            text2.textContent += textContent2.charAt(index2);
            index2++;
            setTimeout(type2, 100);
        } else {
            setTimeout(type3, 1000);
        }
    }

    function type3() {
        if (index3 < textContent3.length) {
            text3.textContent += textContent3.charAt(index3);
            index3++;
            setTimeout(type3, 100);
        }
    }

    type1();
});
