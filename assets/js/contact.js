document.getElementById("submit").addEventListener("click", function(event){
    event.preventDefault();
    var email=document.getElementById("email").value;
    var comment=document.getElementById("com").value;
    var name=document.getElementById("name").value;

    var isValid=true;
    if(!validateEmail(email)){
        alert("Vui lòng nhập một dịa chỉ eamil hợp lệ");
        isValid=false;
    }
    if(isValid){
        alert("Đã gửi thông tin liên lạc :\n Tên" + name +"\n Email : "+email+"\n Mesage : "+comment);
    }

});
function validateEmail(email){
    var regex= /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
    return regex.test(email);
}
