function uuid(length=12) {
  let string = "0123456789qwertyuiopasdfghjklzxcvbnm";
  let ramdomString = "";
  for (let i = 0; i < length; i++) {
    let random = Math.floor(Math.random() * 37);
    ramdomString += string.charAt(random);
  }
  return ramdomString;
}

module.exports = uuid;
