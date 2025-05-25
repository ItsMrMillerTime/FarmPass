document.getElementById('family-form').addEventListener('submit', e => {
  e.preventDefault();
  const email = document.getElementById('family-email').value;
  alert(`Thanks! We'll email you at ${email} when we launch.`);
});

document.getElementById('farm-form').addEventListener('submit', e => {
  e.preventDefault();
  const name = document.getElementById('farm-name').value;
  const email = document.getElementById('farm-email').value;
  alert(`Thanks, ${name}! We'll reach out at ${email} with next steps.`);
});
