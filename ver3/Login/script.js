const form = document.getElementById("checkbox-form");
const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const loginButton = document.getElementById("login");

form.addEventListener('submit', handleLogin);
loginButton.addEventListener("click", handleLogin);

function handleLogin(event) {
    event.preventDefault();
    const checkedCheckbox = Array.from(checkboxes).find(checkbox => checkbox.checked);

    if (checkedCheckbox) {
        setTimeout(() => checkedCheckbox.checked = false, 100);
      } else {
        alert('vali roll');
      }
      if (checkedCheckbox) {
        window.location.href = checkedCheckbox.value;
      } 
}
// yks checkbox korraga valitud

checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
      checkboxes.forEach(otherCheckbox => {
        if (otherCheckbox !== checkbox) {
          otherCheckbox.checked = false;
        }
      });
    });
  });