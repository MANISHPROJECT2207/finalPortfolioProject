const sidebar = document.querySelector(".sidebar");
const blockDom = document.querySelector(".sidebar .block-dom");
const closeSideBar = document.querySelector(".sidebar .sidebar-content .close-sidebar")
const showSideBar = document.querySelector(".show-sidebar");
const navbar = document.querySelector(".navbar")


showSideBar.addEventListener("click", () => (
  sidebar.classList.add("show"),
  navbar.classList.add('d-none')))

closeSideBar.addEventListener("click", () => (sidebar.classList.remove("show"), navbar.classList.remove('d-none')))

blockDom.addEventListener("click", () => (sidebar.classList.remove("show"), navbar.classList.remove('d-none')))


const sidebar2 = document.querySelector(".sidebar2");
const blockDom2 = document.querySelector(".sidebar2 .block-dom2");
const closeSideBar2 = document.querySelector(".sidebar2 .sidebar-content .close-sidebar")
const showSideBar2 = document.querySelector(".value2");



showSideBar2.addEventListener("click", () => (
  sidebar2.classList.add("show"),
  navbar.classList.add('d-none')))

closeSideBar2.addEventListener("click", () => (sidebar2.classList.remove("show"), navbar.classList.remove('d-none')))

blockDom2.addEventListener("click", () => (sidebar2.classList.remove("show"), navbar.classList.remove('d-none')))
const sidebar3 = document.querySelector(".sidebar3");
const blockDom3 = document.querySelector(".sidebar3 .block-dom3");
const closeSideBar3 = document.querySelector(".sidebar3 .sidebar-content .close-sidebar")
const showSideBar3 = document.querySelector(".value3");



showSideBar3.addEventListener("click", () => (
  sidebar3.classList.add("show"),
  navbar.classList.add('d-none')))

closeSideBar3.addEventListener("click", () => (sidebar3.classList.remove("show"), navbar.classList.remove('d-none')))

blockDom3.addEventListener("click", () => (sidebar3.classList.remove("show"), navbar.classList.remove('d-none')))


$('.carousel').carousel()



let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};








const formElem = document.querySelector("form");

// submit handler

formElem.addEventListener("submit", (e) => {
  // on form submission, prevent default
  e.preventDefault();
  // construct a FormData object, which fires the formdata event
  const formData = new FormData(formElem);
  // formdata gets modified by the formdata event
  console.log(formData.get("name"));

  console.log(formData.get("email")); 
  console.log(formData.get("message"));
  alert("name: " + formData.get("name") + " email: " + formData.get("email") + " message: " + formData.get("message"))
  
});
