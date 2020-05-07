let btn = document.getElementById('submitBtn');

btn.addEventListener('click', () =>{    
        validateDate()
})
// 
const validateDate = () => {
    let date = document.getElementById('date').value;
    let errorMsg = document.getElementById('error');
    if (date === ""){
        errorMsg.classList.add('error');
    }else {
        // btn.removeAttribute('disabled', '')              
        errorMsg.classList.remove('error');               
        console.log(date)
    }
}

