export default function lunh(value) {
  // Accept only digits, dashes or spaces
  if (/[^0-9-\s]+/.test(value)) return false;

  let nCheck = 0;
  let bEven = false;
  value = value.replace(/\D/g, '');

  value
    .split('')
    .reverse()
    .forEach(char => {
      let nDigit = parseInt(char, 10);

      if (bEven && (nDigit *= 2) > 9) nDigit -= 9;

      nCheck += nDigit;
      bEven = !bEven;
    });

  return nCheck % 10 == 0;
}
