import {session_set2} from './session.js';

function join(){ // 회원가입기능
    let form = document.querySelector("#join_form"); // 로그인폼식별자
    let name = document.querySelector("#form3Example1c");
    let email = document.querySelector("#form3Example3c");
    let password = document.querySelector("#form3Example4c");
    let re_password= document.querySelector("#form3Example4cd");
    let agree = document.querySelector("#form2Example3c");

    form.action= "../index.html"; // 로그인성공시이동
    form.method= "get"; // 전송방식

    if(name.value.length=== 0 || email.value.length=== 0 || password.value.length=== 0 || re_password.length=== 0){
        alert("회원가입폼에모든정보를입력해주세요.");
    }
    else{
         const newSignUp = new SignUp(name.value, email.value, password.value, re_password.value); // 회원가입정보객체생성
         session_set2(newSignUp); // 세션저장및객체전달
         form.submit(); // 폼실행
    }

}

export function session_set(){ //세션 저장(객체)
    let en_text = encrypt_text(objString); // 암호화
    sessionStorage.setItem("Session_Storage_id", id.value);
    sessionStorage.setItem("Session_Storage_object", objString);
    sessionStorage.setItem("Session_Storage_pass", en_text);
    } else {
        alert("세션 스토리지 지원 x");
    }
export function session_set2(obj){
    if (sessionStorage) {
        const objString = JSON.stringify(obj);
        sessionStorage.setItem("Sessiong_Storage_join", objString);
    }
    else {
        alert(alert("세션 스토리지 지원 x");)
    }
}

class SignUp {
 constructor(name, email, password, re_password) {
 // 생성자 함수: 객체 생성 시 회원 정보 초기화
    this._name = name;
    this._email = email;
    this._password = password;
    this._re_password = re_password;
 }

 // 전체 회원 정보를 한 번에 설정하는 함수
 setUserInfo(name, email, password, re_password) {
    this._name = name;
    this._email = email;
    this._password = password;
    this._re_password = re_password;
 }
 // 전체 회원 정보를 한 번에 가져오는 함수
 getUserInfo() {
    return {
        name: this._name,
        email: this._email,
        password: this._password,
        re_password: this._re_password
    };
 }
}

document.getElementById("join_btn").addEventListener('click', join); // 이벤트리스너

