var showPassword = document.querySelector('#tongglePassword')
var pwd = document.querySelector('#pwd')
var iconLoading = document.querySelector('.loading')


var onShowPassword = function(){
    showPassword.classList.toggle("fa-lock-open")
    if(pwd.type==="password"){
        pwd.type="text"
    }
    else{
        pwd.type="password"
    }
}
showPassword.addEventListener('click',onShowPassword)

// Validation form login
const checkUsername = (username)=>{
    if(!username) 
    return "Hãy Nhập Username!"
    else if(username.length <5) 
       return "Username Cần Chứa 5 Kí Tự"
    else
        return true
}
const checkPassword = (password)=>{
    if(!password) 
    return "Hãy Nhập Password!"
    else if(password.length <5) 
       return "Password Cần Chứa 5 Kí Tự"
    else
        return true
}
const showError = (element , message)=>{
    element.style.display = 'block'
    element.innerHTML = message;
    element.className = "errorMessge"
}
const hideError = (element)=>{
    element.style.display = 'none'
}
const validation = (userName,password)=>{
    const errorUsername = document.querySelector('#errorUsername')
    const errorPassword = document.querySelector('#errorPassword')
    // Validation UserName
    let messageErrorUsername = checkUsername(userName)
    if(typeof messageErrorUsername === "string"){
        showError(errorUsername,messageErrorUsername)
    }else{
        hideError(errorUsername)
    }
    // Validation Password
    let messageErrorPassword = checkPassword(password)
    if(typeof messageErrorPassword === "string"){
        showError(errorPassword,messageErrorPassword)
    }else{
        hideError(errorPassword)
    }
    if(messageErrorUsername===true&& messageErrorPassword===true){
        return true
    }
    else return false
}
const login = (userName ,password)=>{
    if(userName === "Phạm Văn Tâm" && password ==="Tambao@1911"){
        window.location.assign("./loading.html")
        return true;
    }
    return false;
    
}

const showLoading = ()=>{
    iconLoading.style.display = 'flex'
}
const hideLoading = ()=>{
    iconLoading.style.display = 'none'
}

const onSubmitForm = (form)=>{
    const userName = form.name.value;
    const password = form.password.value
    const checkValidation= validation(userName,password)
    if(checkValidation===true){
        showLoading();
        setTimeout(()=>{
            const checkLogin = login(userName,password)
            if(checkLogin===false){
            swal(
                'Sai Rồi',
                'Tên Đăng Nhập Hoặc Mật Khẩu Không Đúng',
                'error'
              )
            }
            hideLoading();
        },1000)

    }
}
