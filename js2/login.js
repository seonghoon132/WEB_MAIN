const check_xss = (input) => {
    // DOMPurify 라이브러리 로드 (CDN 사용)
    const DOMPurify = window.DOMPurify;
    // 입력 값을 DOMPurify로 sanitize
    const sanitizedInput = DOMPurify.sanitize(input);
    // Sanitized된 값과 원본 입력 값 비교
   if (sanitizedInput !== input) {
    // XSS 공격 가능성 발견 시 에러 처리
   alert('XSS 공격 가능성이 있는 입력값을 발견했습니다.');
    return false;
    }
    // Sanitized된 값 반환
   return sanitizedInput;
    };

const check_input = () => {
    const loginForm = document.getElementById('login_form');
    const loginBtn = document.getElementById('login_btn');
    const emailInput= document.getElementById('typeEmailX');
    const passwordInput = document.getElementById('typePasswordX');
    const c = '아이디, 패스워드를체크합니다';
        alert(c);
    const emailValue = emailInput.value.trim();
    const passwordValue = passwordInput.value.trim();
    const sanitizedPassword = check_xss(passwordInput);
    // check_xss 함수로 비밀번호 Sanitize
    const sanitizedEmail = check_xss(emailInput);
    // check_xss 함수로 비밀번호 Sanitize
    
    if (emailValue === '') {
        alert('이메일을입력하세요.');
        return false;
    }

    if (passwordValue === '') {
        alert('비밀번호를입력하세요.');
        return false;
    }

    if (emailValue.length < 5) {
        alert('아이디는최소5글자이상입력해야합니다.');
        return false;
    }

    if (passwordValue.length < 12) {
        alert('비밀번호는반드시12글자이상입력해야합니다.');
        return false;
    }
        
    const hasSpecialChar = passwordValue.match(/[!,@#$%^&*()_+\=\[\]{};':"\\|,.<>\/?]+/) !== null;
        
    if (!hasSpecialChar) {
        alert('패스워드는특수문자를1개이상포함해야합니다.');
        return false;
    }
        
    const hasUpperCase = passwordValue.match(/[A-Z]+/) !== null;
    const hasLowerCase = passwordValue.match(/[a-z]+/) !== null;
        
    if (!hasUpperCase || !hasLowerCase) {
        alert('패스워드는대소문자를1개이상포함해야합니다.');
        return false;
    }
       
    if (!sanitizedEmail) {
        // Sanitize된 비밀번호 사용
       return false;
    }

    if (!sanitizedPassword) {
        // Sanitize된 비밀번호 사용
       return false;
    }

    console.log('이메일:', emailValue);
    console.log('비밀번호:', passwordValue);
    loginForm.submit();
    
    };
        document.getElementById("login_btn").addEventListener('click', check_input);
   
    