function appendValue(value) {
    document.getElementById('display').value += value;
  }

  function clearDisplay() {
    document.getElementById('display').value = '';
  }

  function calculate() {
    try {
      document.getElementById('display').value = eval(document.getElementById('display').value);
    } catch (error) {
      alert("Nimadur noto'g'ri kiritildi!");
    }
  }

  function removeLast() {
    let display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
  }
