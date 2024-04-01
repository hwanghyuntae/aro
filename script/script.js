$(function () {
    $('.ss1').click(function () {
        $('.popup1').fadeIn();      // .show(); 
        $('.popup2,.popup3').fadeOut();      // .show(); 
    });
    $('.ss2').click(function () {
        $('.popup2').fadeIn();      // .show(); 
        $('.popup1,.popup3').fadeOut();      // .show(); 
    });
    $('.ss3').click(function () {
        $('.popup3').fadeIn();      // .show(); 
        $('.popup2,.popup1').fadeOut();      // .show(); 
    });

    /*따라다니는 마우스*/
    document.addEventListener('mousemove', (e) => {
        let mouseX = e.pageX + 10; // document의 x좌표값
        let mouseY = e.pageY + 10; // document의 y좌표값

        let cursor = document.querySelector('.cursor');
        cursor.style.left = mouseX + 'px';
        cursor.style.top = mouseY + 'px';
    })

    const loader = document.querySelector('.loader');
    const html = document.querySelector('html');
    html.style.overflow = 'hidden'; //로딩 중 스크롤 방지

    window.addEventListener('load', () => {

        setTimeout(() => { //로딩속도 구현

            loader.style.opacity = '0';
            html.style.overflow = 'auto'; //스크롤 방지 해제

            setTimeout(() => {
                loader.style.display = 'none';
            }, 400);

        }, 3500);

    });


});