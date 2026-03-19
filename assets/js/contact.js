document.addEventListener('DOMContentLoaded', function () {
  var form = document.getElementById('quote-request-form');
  if (!form) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var name    = form.querySelector('#name').value;
    var phone   = form.querySelector('#phone').value;
    var email   = form.querySelector('#email').value;
    var suburb  = form.querySelector('#suburb').value;
    var vehicle = form.querySelector('#vehicle-type').value;
    var colour  = form.querySelector('#vehicle-colour').value;
    var service = form.querySelector('#service').value;
    var plan    = form.querySelector('#plan').value;
    var date    = form.querySelector('#date').value;
    var message = form.querySelector('#message').value;

    var subject = 'Quote Request - ' + service;
    var body = 'Hi,\n\n'
      + 'I\'d like to request a quote.\n\n'
      + 'Name: '           + name    + '\n'
      + 'Phone: '          + phone   + '\n'
      + 'Email: '          + email   + '\n'
      + 'Suburb: '         + suburb  + '\n'
      + 'Vehicle: '        + vehicle + '\n'
      + 'Colour: '         + colour  + '\n'
      + 'Service: '        + service + '\n'
      + 'Plan: '           + plan    + '\n'
      + 'Preferred date: ' + date    + '\n'
      + 'Message: '        + message + '\n\n'
      + 'Thanks';

    window.location.href = 'mailto:customcarandfleetdetailing@gmail.com'
      + '?subject=' + encodeURIComponent(subject)
      + '&body='    + encodeURIComponent(body);
  });
});
