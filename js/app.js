window.onscroll = function() {scrollFunction()};
const arrow =()=>{
  document.querySelector("#arrow").addEventListener("click",() => {
   document.getElementById('arrow').style.display = "none";
   onclick = window.scrollBy(0, 180);
   console.log("1")
  })
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-20px";

  }
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("home").style.height = "80vh";
    document.getElementById("heading").style.top= "60%";
  } else {
    document.getElementById("home").style.height = "100vh";
    document.getElementById("heading").style.top= "50%";
  }
  if (document.body.scrollTop>20 || document.documentElement.scrollTop>20){
    document.getElementById('arrow').style.display = "none";
  }
  else {
    document.getElementById('arrow').style.display ="block"
  }
}
arrow();
