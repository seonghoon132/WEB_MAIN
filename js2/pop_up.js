function pop_up() {
    window.open("../popup/popup.html", "팝업테스트", "width=400, height=300, top=10, left=10");
    }

    //  왜 ../를 쓸까? ../은 웹 프로그래밍 상대경로라서 그렇다. 그래서 js2폴더보다 한단계 위로 나가야되기 때문에 ../을 사용해야한다. 2단계면 ../../ 

    function show_clock(){
        let currentDate= new Date(); // 현재시스템날짜객체생성
       let divClock= document.getElementById('divClock');
        let msg = "현재시간: ";
        if(currentDate.getHours()>12){  // 12시보다크면오후아니면오전
       msg += "오후";
        msg += currentDate.getHours()-12+"시";
        }
        else {
        msg += "오전";
        msg += currentDate.getHours()+"시";
        }
        msg += currentDate.getMinutes()+"분";
        msg += currentDate.getSeconds()+"초";
        divClock.innerText= msg;
        if (currentDate.getMinutes()>58) {    //정각1분전빨강색출력
       divClock.style.color="red";
        }
        setTimeout(show_clock, 1000);  //1초마다갱신
    }

     function setCookie(name, value, expiredays) {
 var date = new Date();
 date.setDate(date.getDate() + expiredays);
 document.cookie = escape(name) + "=" + escape(value) + "; expires=" + date.toUTCString() + "; path=/" + ";SameSite=None; Secure";
}

function getCookie(name) {
    var cookie = document.cookie;
    console.log("쿠키를 요청합니다.");
 
    if (cookie != "") {
    var cookie_array = cookie.split("; ");
    for ( var index in cookie_array) {
    var cookie_name = cookie_array[index].split("=");
 
   if (cookie_name[0] == "popupYN") {
    document.cookie = escape(name) + "=" + escape(value) + "; expires=" + date.toUTCString() + "; path=/" + ";SameSite=None; Secure";
    return cookie_name[1];
     }
   }
 }
 return ;
}

function closePopup() {
    if (document.getElementById('check_popup').value) {
    setCookie("popupYN", "N", 1);
    console.log("쿠키를 설정합니다.");
    self.close();
    }
}

    function pop_up() {
        var cookieCheck = getCookie("popupYN");
        if (cookieCheck != "N"){
        window.open("../popup/popup.html", "팝업테스트", "width=400, height=300, top=10, left=10");
        }
    }

    const over = (obj) => {
        obj.src="image/steamlogo2.png";
    };

    const out = (obj) => {
        obj.src="image/logo_steam.svg";
    };

  
        // const over = (obj) => {
        //     obj.src = "image/LOGO.png";
        //     };