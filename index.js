let username

document.getElementById('send_button').onclick = function() {
    username = document.getElementById('user_input').value
    document.getElementById('welcome_message').textContent = `Welcome, ${username}!`
    console.log(username)
}
