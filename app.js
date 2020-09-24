
const sendData = () => {
    let txt = document.querySelector('#mytextarea').value;
    let wordCount = 0;
    for (var i = 0; i <= txt.length; i++) {
      if (txt.charAt(i) == ' ') {
        wordCount++;
      }
    }
    if (wordCount < 100){
        document.querySelector('.info').innerHTML = 'יש להזין לפחות מאה מילים'
    } else {
        document.querySelector('.info').innerHTML = `מעולה! שלחת לפחות 100 מילים. הנה המילים ששלחת: `
        document.querySelector('.txt').innerHTML = `${txt}`
        console.log(`מספר המילים עומד על ${wordCount} מילים`);
        txt = '';
    }
}