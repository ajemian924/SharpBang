const emailInput = document.getElementById('emailInput')
const passwordInput = document.getElementById('passwordInput')

function login() {
    const credentials = [
        {email: 'admin@email.com', password: 'password'}
    ]
    const email = emailInput.value
    console.log(email)
    const password = passwordInput.value
    console.log(password)

    for(let i = 0; i < credentials.length; i++) {
        if(email == credentials[i].email && password == credentials[i].password) {
            return true
        }
    }
    return false
}

document.getElementById('submitCredentialsButton').addEventListener('click', () => {
    const result = login()

    if(result) {
        document.getElementById('loginWindow').style.display = 'none'
        document.getElementById('programWindow').style.display = 'block'
    }
    else {
        document.getElementById('feedbackText').innerText = 'Username and/or Password is Incorrect'
    }

})
