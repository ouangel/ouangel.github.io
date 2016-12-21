var contact = document.getElementById("contact");
var subject = document.getElementById("subject");
var company = document.getElementById("company");
var username = document.getElementById("name");
var email = document.getElementById("email");
var message = document.getElementById("message");


contact.onsubmit = function(){

	var data = {
		subject: subject.value,
		company: company.value,
		name: username.value,
		email: email.value,
		message: message.value
	}

	$.ajax({
		url:"php/contact.php",
		data:data,
		method:"POST",
		dataType:"JSON",
		success: function(resp){

			 console.log(resp);

			
			alert(resp.message);

			location.reload();	

		}

	});

	return false;
}


