
export function emailValidation(action) {
  action.addEventListener('submit', () => {
    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    let emailf = email.value.trim()
    if (emailf === '') {
      alert('Please, fill in the empty space');
      return false
    }

    if (!emailf.match(emailPattern)) {
      alert('Provide a valid Email')
      return false
    }

    alert('Subscribed');
    return true
  })
}