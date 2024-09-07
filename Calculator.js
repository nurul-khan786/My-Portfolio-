let string = "";
let buttons = document.querySelectorAll('.button');

function clearLastEntry() {
  // Remove the last character from the string
  string = string.slice(0, -1);
  document.querySelector('input').value = string;
}

Array.from(buttons).forEach((button) => {
  button.addEventListener('click', (e) => {
    if (e.target.innerHTML == '=') {
      string = eval(string);
      document.querySelector('input').value = string;
    }
    else if (e.target.innerHTML == 'C') {
      clearLastEntry();
    }
    else if (e.target.innerHTML == '00') {
      string = string + '00';
      document.querySelector('input').value = string;
    }
    else if (e.target.innerHTML == '0') {
      string = string + '0';
      document.querySelector('input').value = string;
    }
    else if (e.target.innerHTML == 'x') {
      string = string + '*';
      document.querySelector('input').value = string;
    }
    else if (e.target.innerHTML == '%') {
      string = string + '/100';
      document.querySelector('input').value = string;
    }
    else if (e.target.innerHTML == 'Clr') {
      string = " ";
      document.querySelector('input').value = string;
    }
    else {
      console.log(e.target)
      string = string + e.target.innerHTML;
      document.querySelector('input').value = string;
    }

  })
})