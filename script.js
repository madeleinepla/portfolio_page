function sendMail(params) {
  const name = document.getElementById('name');
  const email = document.getElementById('email');
  const message = document.getElementById('message');

  let tempParams = {
    from_name: name.value,
    to_name: "Madeleine",
    reply_to: email.value,
    message: message.value,
  }

  emailjs.send('service_5eefk17', 'template_yv65ndf', tempParams)
    .then(function(res) {
      console.log("sucess", res.status);
      name.value = '';
      email.value = '';
      message.value = '';

      var tag = document.createElement("li");
      var text = document.createTextNode("Message sent!");
      tag.appendChild(text);
      var element = document.getElementById("new");
      element.appendChild(tag);
    })
}

function resetMail() {
  document.getElementById('name').value = '';
  document.getElementById('email').value = '';
  document.getElementById('message').value = '';
}