document.getElementById("contact-form").addEventListener("submit", (e) => {
  e.preventDefault();
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var massege = document.getElementById("massege").value;
  var data = {
    name,
    email,
    massege,
  };
  fetch("https://blooming-ocean-97845.herokuapp.com/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((data) => alert("Submitted"));
  document.getElementById("contact-form").reset();
});
