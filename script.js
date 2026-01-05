function calculate(){
  const dob = new Date(document.getElementById('dob').value);
  const today = new Date();

  const age = today.getFullYear() - dob.getFullYear();
  document.getElementById('result').innerText =
    `Your age is ${age} years`;
}
