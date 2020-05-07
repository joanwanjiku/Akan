let btn = document.getElementById('submitBtn');
btn.addEventListener('click', () =>{    
    validateDate()
    // clear the input fields
})
// validation for date and gender
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
        // console.log(`${date} ${selectedGender}`)
        findAkanName(date, selectedGender);
        errorMsg.classList.remove('error');
    }
}

// returns an Akan name
const findAkanName = (date, gender) => {
/* Day of the week (d) = ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) mod 7  */
    let cc = date.split('-')[0].slice(0, 2);
    let yy = date.split('-')[0].slice(2, date.split('-')[0].length);
    let month = date.split('-')[1];
    let day = date.split('-')[2];
    let maleNames = [ 'Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame']
    let femaleNames = [ 'Akosua', 'Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua', 'Ama']
    let dayOfTheWeek = parseInt((((cc / 4) - 2 * cc - 1) + (5 * yy / 4) + (26 * (month + 1) / 10) + day) % 7)
    if (gender == 'female'){
        document.getElementById('akan').innerHTML = femaleNames[dayOfTheWeek];
    }else {
        document.getElementById('akan').innerHTML = maleNames[dayOfTheWeek];
    }   
  
}



