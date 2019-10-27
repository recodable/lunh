export default function lunh(value) {
  // Accept only digits, dashes or spaces
  if (/[^0-9-\s]+/.test(value)) return false;

  let bEven = false;
  value = value.replace(/\D/g, '');

  const nCheck = value
    .split('')
    .reverse()
    .reduce((nCheck, char) => {
      let nDigit = parseInt(char, 10);

      if (bEven && (nDigit *= 2) > 9) nDigit -= 9;

      bEven = !bEven;
      return nCheck + nDigit;
    }, 0);

  return nCheck % 10 == 0;
}
