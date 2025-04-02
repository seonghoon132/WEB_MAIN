document.getElementById("search_btn").addEventListener('click', search_message);

function search_message(){
    alert("검색을 수행합니다!");
}

function googleSearch() {
    const searchTerm = document.getElementById("search_input").value.trim(); // 검색어 가져오기 (앞뒤 공백 제거)
    if (searchTerm === "") {
        alert("검색어를 입력하세요!");
        return false;
    }
    
    const googleSearchUrl = `https://www.google.com/search?q=${encodeURIComponent(searchTerm)}`;
    
    window.open(googleSearchUrl, "_blank"); // 새 창에서 검색 실행
    return false; // 폼 제출 방지
}
