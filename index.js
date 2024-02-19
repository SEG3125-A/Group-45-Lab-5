document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('book1').addEventListener('click', function() {
        document.getElementById('professional').style.display = 'block';
        choose("Mark");
        
    });
    document.getElementById('choose').addEventListener('click', function(){
        document.getElementById('professional').style.display = 'none';
        document.getElementById('appointment').style.display='block';
    })

    document.getElementById('book').addEventListener('click', function(){
        if(validateAppointmentForm()){  
            document.getElementById('appointment').style.display = 'none';
            document.getElementById('payment').style.display='block';  
        }
    })
    document.getElementById('book2').addEventListener('click', function() {
        document.getElementById('professional').style.display = 'block';
        choose("Mark");
    });

    document.getElementById('pay').addEventListener('click', function(){
        if(validatePaymentForm()){
            document.getElementById('payment').style.display='none';  
        }

    })
    
});

function validatePaymentForm(){
    var card_num = document.getElementById('card-num').value;
    var csv = document.getElementById('csv').value;
    var expiry_date = new Date(document.getElementById('expiry-date').value);
    var currentDate = new Date();

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

    if(card_num.toString().length !== 16){
        alert('Please enter a 16 digit card number');
        return false;
    }
    
    if(csv.toString().length !== 3){
        alert('Please enter a 3 digit csv');
        return false;
    }
    return true
}

// Function to validate the form fields
function validateAppointmentForm() {
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
    var pic = document.getElementById("pic");
    var description = document.getElementById("description");
    switch(option){
        case "Mark":
            pic.src="pics/mark.jpg";
            description.textContent = "Mark is an experienced bike mechanic specializing in tire repairs.";
            break;
        case "Jones":
            pic.src="pics/jones.jpg";
            description.textContent = "Jones is a skilled mechanic with expertise in gear systems.";
            break;
        case "Ben":
            pic.src="pics/ben.jpg";
            description.textContent = "Ben is a passionate cyclist and expert in bike maintenance.";
            break;
        case "Bob":
            pic.src="pics/bob.jpg";
            description.textContent = "Bob has years of experience in repairing all types of bicycles.";
            break;
        case "Joseph":
            pic.src="pics/joseph.jpg";
            description.textContent = "Joseph is a friendly mechanic known for his quick and reliable service.";
            break;
        default:
            pic.src="";
            description.textContent = "";
    }
}
