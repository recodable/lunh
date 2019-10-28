export default function lunh(value: string): boolean {
  // Accept only digits, dashes or spaces
  if (/[^0-9-\s]+/.test(value)) return false;

  value = value.replace(/\D/g, '');

  const total: number = value
    .split('')
    .reverse()
    .reduce((total: number, char: string, index: number): number => {
      let value = +char;
      const isEven: boolean = (index + 1) % 2 === 0;

      if (isEven) value *= 2;

      if (value > 9) value -= 9;

      return total + value;
    }, 0);

  return total % 10 === 0;
}

module.exports = lunh;
