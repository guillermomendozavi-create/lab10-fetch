var notas = [];

function pintar() {
  var ul = document.getElementById("lista");
  ul.innerHTML = "";
  notas.forEach(function (n, i) {
    var li = document.createElement("li");
    li.innerHTML = n.texto + " (" + n.cat + ") <a href='#' onclick='quitar(" + i + ")'>X</a>";
    ul.appendChild(li);
  });
}

function quitar(i) {
  notas.splice(i, 1);
  pintar();
}

document.getElementById("agregar").addEventListener("click", function () {
  notas.push({
    texto: document.getElementById("texto").value,
    cat: document.getElementById("categoria").value
  });
  pintar();
});

document.getElementById("borrar").addEventListener("click", function () {
  notas = [];
  pintar();
});
