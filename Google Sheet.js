const scriptURL ="https://script.google.com/macros/s/AKfycbz097Uu4LuuSy4vQZme7PvGRJFMKehmmIWrPkKcvAaR_-iTqFyefEt470aEeZ_TL-k1DA/exec" 
const form = document.forms['registration-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})