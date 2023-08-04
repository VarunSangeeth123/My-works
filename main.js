var btn1 = document.getElementById("qqqq");
var spn1 = document.getElementById("view");

btn1.addEventListener("click", check);

function check() {
  let txt = document.getElementById("abc").value;
  

  fetch(
    `https://api.weatherapi.com/v1/current.json?key=0065d70af882431283465225230108&q=${txt}`
  )
    // Handle success
    .then((response) => response.json()) // convert to json

    .then((json) => {
      console.log(json.current.temp_c);
      spn1.innerHTML = json.current.temp_c;
    })
    .catch((err) => console.log());
}
