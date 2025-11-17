const emailInput = document.getElementById('emailInput')
const passwordInput = document.getElementById('password')

function login() {
    const credentials = [
        {email: 'admin@email.com', password: 'password'}
    ]
    const email = emailInput.value
    const password = passwordInput.value;

    credentials.forEach((element) => {
        if(email === element.email && password === element.password) {
            return true
        }
    })
    return false
}

document.getElementById('submitCredentialsButton').addEventListener('click', () => {
    const result = login()
    if(result) {
        document.getElementById('loginWindow').style.display = 'none'
        document.getElementById('programWindow').style.display = 'block'
    }
})
