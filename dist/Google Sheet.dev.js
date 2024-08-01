"use strict";

var scriptURL = "https://script.google.com/macros/s/AKfycbz097Uu4LuuSy4vQZme7PvGRJFMKehmmIWrPkKcvAaR_-iTqFyefEt470aEeZ_TL-k1DA/exec";
var form = document.forms['registration-form'];
form.addEventListener('submit', function (e) {
  e.preventDefault();
  fetch(scriptURL, {
    method: 'POST',
    body: new FormData(form)
  }).then(function (response) {
    return alert("Thank you! your form is submitted successfully.");
  }).then(function () {
    window.location.reload();
  })["catch"](function (error) {
    return console.error('Error!', error.message);
  });
});
//# sourceMappingURL=Google Sheet.dev.js.map
