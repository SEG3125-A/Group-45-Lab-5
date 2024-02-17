document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('book1').addEventListener('click', function() {
        // shows the popup when book button is clicked
        document.getElementById('professional').style.display = 'block';
        choose("Option A")
        
    });
    document.getElementById('choose').addEventListener('click', function(){
        document.getElementById('professional').style.display = 'none';
        document.getElementById('appointment').style.display='block';
    })

    document.getElementById('book').addEventListener('click', function(){
        document.getElementById('appointment').style.display = 'none';
        document.getElementById('payment').style.display='block';  
    })
    document.getElementById('book2').addEventListener('click', function() {
        document.getElementById('professional').style.display = 'block';
        choose("Option A")
    });
    
});

// Function to validate the form fields
function validateForm() {
    var firstName = document.getElementById('first_name').value;
    var lastName = document.getElementById('last_name').value;
    var phoneNumber = document.getElementById('phone').value;
    var date = new Date(document.getElementById('date').value);
    var currentDate = new Date();
    console.log(currentDate);
    console.log(date)
    
    // Check if first name is empty
    if(firstName.trim() === '') {
        alert('Please enter your first name.');
        return false;
    }
    
    // Check if first name is capitalized
    if(firstName.charAt(0) !== firstName.charAt(0).toUpperCase()) {
        alert('Please capitalize the first letter of your first name.');
        return false;
    }
    
    // Check if last name is empty
    if(lastName.trim() === '') {
        alert('Please enter your last name.');
        return false;
    }
    
    // Check if last name is capitalized
    if(lastName.charAt(0) !== lastName.charAt(0).toUpperCase()) {
        alert('Please capitalize the first letter of your last name.');
        return false;
    }

    // Check if phone number is empty
    if(phoneNumber.trim() === '') {
        alert('Please enter your phone number.');
        return false;
    }

    // Check if phone number is valid
    var phoneRegex = /^\d{3}-\d{3}-\d{4}$/;
    if(!phoneRegex.test(phoneNumber)) {
        alert('Please enter a valid phone number in the format xxx-xxx-xxxx.');
        return false;
    }

    // Check if date is empty
    if(document.getElementById('date').value.trim() === '') {
        alert('Please select a date.');
        return false;
    }

    // Check if date is not past the current date
    if(date < currentDate) {
        alert('Please select a date that is in the future.');
        return false;
    }

    // Form is valid
    return true;
}

function choose(option){
    var pic = document.getElementById("proffesion-pic");
    switch(option){
        case "Option A":
            pic.src="pics/professional A.jpg";
    }

    
}
