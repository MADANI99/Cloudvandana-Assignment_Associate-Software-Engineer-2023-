function submitForm() {
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const dob = document.getElementById('dob').value;
    const country = document.getElementById('country').value;
    const gender = Array.from(document.getElementsByName('gender'))
        .filter(el => el.checked)
        .map(el => el.value)
        .join(', ');
    const profession = document.getElementById('profession').value;
    const email = document.getElementById('email').value;
    const mobile = document.getElementById('mobile').value;

    const popupContent = `First Name: ${firstName}<br>
                          Last Name: ${lastName}<br>
                          Date of Birth: ${dob}<br>
                          Country: ${country}<br>
                          Gender: ${gender}<br>
                          Profession: ${profession}<br>
                          Email: ${email}<br>
                          Mobile Number: ${mobile}`;

    document.getElementById('popupContent').innerHTML = popupContent;
    document.getElementById('popup').style.display = 'block';
    resetForm();
}
function resetForm() {
    document.getElementById('surveyForm').reset();
}
function closePopup() {
    document.getElementById('popup').style.display = 'none';
}
