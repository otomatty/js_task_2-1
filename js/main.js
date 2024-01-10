const fizzBuzz = () => {
  const fizzNum = document.getElementById('fizzNum').value;
  const buzzNum = document.getElementById('buzzNum').value;
  const result = document.getElementById('result');
  result.innerHTML = '<p class="result-title">【出力結果】</p>';

  if (
    !Number.isInteger(Number(fizzNum)) ||
    !Number.isInteger(Number(buzzNum))
  ) {
    result.innerHTML += '<p class="error-message">整数値を入力してください</p>';
    return;
  }

  for (let i = 1; i <= 99; i++) {
    if (i % fizzNum === 0 && i % buzzNum === 0) {
      result.innerHTML += `<p>fizzBuzz ${i}</p>`;
    } else if (i % fizzNum === 0) {
      result.innerHTML += `<p>fizz ${i}</p>`;
    } else if (i % buzzNum === 0) {
      result.innerHTML += `<p>buzz ${i}</p>`;
    }
  }
};

const resetForm = () => {
  document.getElementById('fizzNum').value = '';
  document.getElementById('buzzNum').value = '';
  document.getElementById('result').innerHTML = '';
};
