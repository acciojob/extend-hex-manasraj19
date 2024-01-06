const extendHex = (shortHex) => {
  // write your code here
  shortHex = shortHex.replace(/^#/, '');

  if(!/^[0-9a-fA-F]{3}$/.test(shortHex)){
    return "Invalid Input";
  }

  const fullhex= shortHex.split('').map(char => char.repeat(2)).join('');

  return `#${fullhex}`;
};

// Do not change the code below.
const shortHex = prompt("Enter Short Hex.");
alert(extendHex(shortHex));
