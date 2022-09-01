<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous">
</head>
<body>
<c:import url="../template/header.jsp"></c:import>

	<h1>동의페이지</h1>
	
	<div>
		전체동의<input type="checkbox" name="" id="all">
		동의(필수)<input type="checkbox" name="" id="" class="cb req">
		동의(필수)<input type="checkbox" name="" id="" class="cb req">
		동의(선택)<input type="checkbox" name="" id="" class="cb">
	</div>

	<form action="./join.iu" id="frm">
		<button type="button" id="join">회원가입</button>
	</form>
	
	<c:import url="../template/footer.jsp"></c:import>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa" crossorigin="anonymous"></script>
<script src="/resources/images/js/member.js"></script>
<script>
	check();
</script>
</body>
</html>