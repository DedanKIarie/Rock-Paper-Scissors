
let outer = document.getElementById("div");

let inner = outer.appendChild(document.createElement("div"));
inner.classList.add("innerdiv");

let list = inner.appendChild(document.createElement("ol"));
list.classList.add("list");
for (i=1;i<=3; i++) {
    let content = list.appendChild(document.createElement("li"));
    content.innerText = "Name";
    content.classList.add("data");
    
}
