
function addingEventListener() {
    const input = document.getElementById('button');
    input.addEventListener('click', function() {
      alert('I was clicked!');
    })
}
addingEventListener();

// document.getElementById("button").addEventListener("click", () => alert("I was clicked!"));