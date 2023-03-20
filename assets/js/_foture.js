function showFortune() {
	// 사용자 입력값 가져오기
	var birthYear = parseInt(document.getElementById("birthYear").value);
	var birthMonth = parseInt(document.getElementById("birthMonth").value);
	var birthDay = parseInt(document.getElementById("birthDay").value);
	var gender = document.getElementById("gender").value;

	// 입력값 유효성 검사
	if (isNaN(birthYear) || isNaN(birthMonth) || isNaN(birthDay)) {
		alert("태어난 년도, 월, 일을 모두 입력하세요.");
		return;
	}

	if (birthYear < 1900 || birthYear > 2100 || birthMonth < 1 || birthMonth > 12 || birthDay < 1 || birthDay > 31) {
		alert("올바른 생년월일을 입력하세요.");
		return;
	}

	// 운세 계산
	var fortuneNum = (birthYear + birthMonth + birthDay) % 10;
	var fortuneMessage = "";
	if (gender === "male") {
		if (fortuneNum === 0) {
			fortuneMessage = "남성의 운은 매우 좋습니다.";
		} else if (fortuneNum === 1) {
			fortuneMessage = "남성의 운은 좋습니다.";
		} else if (fortune