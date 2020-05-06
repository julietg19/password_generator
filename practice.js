

function generate() {
  let length = document.getElementById("length").value;
  if (isNaN(length)) length = 16;
  if (length < 8) length = 8;
  if (length > 128) length = 128;

  let pw_src = "";

  if (document.getElementById("upper").checked) {
    pw_src += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }

  if (document.getElementById("lower").checked) {
    pw_src += "abcdefghijklmnopqrstuvwqyz";
  }

  if (document.getElementById("num").checked) {
    pw_src += "0123456789";
  }

  if (document.getElementById("char").checked) {
    pw_src += "!@#$%^&*";
  }

  let password = "";
  const characters = pw_src;
  //const characters = "0123456789, abcdefghijklmnopqrstuvwqyz, ABCDEFGHIJKLMNOPQRSTUVWXYZ, !@#$%^&*"

  for (let i = 0; i < length; i++) {
    // Start by setting i = 0
    // Continue doing this loop as long as i<length
    // Each time this  loop loops, increase i by 1 (i++)

    let idx = Math.random() * characters.length;
    idx = Math.floor(idx); // Change idx to an integer
    password = password + characters[idx];
  }

  console.log(password);

  let htmlOutput =
    "<p>Your super secret password is:</p>\n<p>" + password + "</p>\n";

  let e = document.getElementById("password");
  e.innerHTML = htmlOutput;
}
