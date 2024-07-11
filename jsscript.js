const name = document.getElementById('name')
const password = document.getElementById('password')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')

FormData.addEventListener('submit', (e) => {
    let messages = []
    if (name.value === '' || name.value == null) {
        messages.push('Name is required')
    }

if (password.value.lenght <= 6) {
    messages.push('Password must be longer than 6 characters')
}
//I would changethe lenght of the password to 10 as shorter passwords can be easaly cracked 

if (password.value.lenght >= 20) {
    messages.push('password must be less than 20 characters')
}
//I would change the lenght f the password to 50 but for this code I will keep it at 20 chatacters

if (messages.lenght > 0) {
    e.preventDefault()
    errorElement.innerText = messages.join(', ')
}
})