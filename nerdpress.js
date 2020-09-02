
var typing = document.getElementById("ez");
console.log({typing});
typing.onupdate = (event) => {
  console.log(event)
}
function countwords(text){
  var words = text.split(" ");
  //console.log(words);
  return words.length;
}
