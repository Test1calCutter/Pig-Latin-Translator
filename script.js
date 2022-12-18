

function pl() {
    var data = document.getElementById("test-input").value;
    var vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]
    
    var words = data.split(" ")
    var final = ""
    
    for (var i = 0; i < words.length; i += 1) {
      if (vowels.includes(words[i].charAt(0))) {
        let word = words[i] + "yay"
        final = final + `${word} `
      } else {
        let fword = words[i].charAt(0)
        let word = words[i].slice(1) + fword +"ya"
        final = final + `${word} `
      }
    }
    
    
    document.getElementById("answer").innerHTML = final.substring(0, final.length - 1) 
}

function blockSpecialChar(e) {
/* Checking if the key pressed is a letter or a number. */
    var k = e.keyCode;
    return ((
     k < 91) || (k > 96 && k < 123) || k == 8   || (k >= 48 && k <= 57));
}