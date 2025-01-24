document.getElementById('submit').addEventListener('click', contact);
    
    function contact(event){
        
    // Check first name
    const firstName = document.getElementById('Name');
    if (firstName.value.trim() === '') {
        document.getElementById('invalid').style.display = 'block';
        isValid = false;
    } else {
        document.getElementById('invalid').style.display = 'none';
    }

    // Check last name
    const lastName = document.getElementById('Name');
    if (lastName.value.trim() === '') {
        document.getElementById('invalid').style.display = 'block';
        isValid = false;
    } else {
        document.getElementById('invalid').style.display = 'none';
        isValid = false;
    }

    // Check email
    const email = document.getElementById('email');
    if (email.value.trim() === '') {
        document.getElementById('invalid').style.display = 'block';
        isValid = false;
    } else {
        document.getElementById('invalid').style.display = 'none';
        isValid = false;
    }

    // Check message
    const massage = document.getElementById('massage');
    if (massage.value.trim() === '') {
        document.getElementById('invalid').style.display = 'block';
        console.log("invalid")
        isValid = false;
    } else {
        document.getElementById('invalid').style.display = 'none';
        isValid = false;
    }

    // Prevent form submission if any field is invalid
    if (!isValid) {
        event.preventDefault();
    };
    }
