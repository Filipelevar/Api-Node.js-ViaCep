let merda = 'Filipelevar@icloud.com'

function validateEmail (email) {
    const regex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/
    console.log(email)
    if (email !== '' && email.match(regex)){ 
        console.log('true')
    }
    return false;
}
validateEmail(merda);