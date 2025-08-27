const productBtns = document.querySelectorAll(".productBtn");

productBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    const alertBox = document.createElement("div");
    alertBox.innerText = "Your Request Has Been Received";
    alertBox.style.backgroundColor = "#020035";
    alertBox.style.color = "#FFFFFF";
    alertBox.style.padding = "10px";
    alertBox.style.borderRadius = "20px";
    alertBox.style.textAlign = "center";
    alertBox.style.fontSize = "24px";
    alertBox.style.fontWeight = "700";
    alertBox.style.position = "fixed";
    alertBox.style.top = "250px"; 
    alertBox.style.right = "20px";   
    alertBox.style.zIndex = "9999";
    document.body.prepend(alertBox);

    setTimeout(() => { alertBox.remove(); }, 3000);
  });
});
function showTime() {
  const now = new Date();

  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  const timeString = `${hours}:${minutes}:${seconds}`;

  document.getElementById("clock").innerText = timeString;
}
showTime();
setInterval(showTime, 1000);
