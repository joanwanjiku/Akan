let btn = document.getElementById('submitBtn');

btn.addEventListener('click', () =>{    
        validateDate()
})
// 
const validateDate = () => {
    let date = document.getElementById('date').value;
    let radioBtns = document.querySelectorAll('input[name="gridRadios"]');
    let selectedGender;
    for (let radiobtn of radioBtns){
        if (radiobtn.checked) {
            selectedGender = radiobtn.value
        }
    }
    let errorMsg = document.getElementById('error');
    if (date === "" || selectedGender === undefined){
        errorMsg.classList.add('error');
    }else {
        // btn.removeAttribute('disabled', '')   
        console.log(`  ${date} ${selectedGender}`)
        errorMsg.classList.remove('error');
    }
}
const findAkanName = (date, gender) => {

}

