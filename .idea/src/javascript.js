function newUkol() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("input").value;
  var t = document.createTextNode(inputValue);
  var chckBox = document.createElement("input");

  li.appendChild(t);
  chckBox.type = "checkbox";
  chckBox.className = "checkbox";
  if (inputValue === '') {
    alert("Nezapsal si název úkolu...");
  } else {
    li.style = "background-color:  #e6e6a3";
    li.appendChild(chckBox);
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("input").value = "";

  chckBox.onclick = function(){
    li.style = "background-color: grey; text-decoration: line-through";
  }

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}

var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}



