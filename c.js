var imageLoader = document.querySelector("#imageLoader")
var bright = document.getElementById("bright");
var sat = document.getElementById('saturation');
var blu = document.getElementById("blu");
var contrast = document.getElementById("contrast");
var invert = document.getElementById("invert");
var bwhite = document.getElementById("bwhite");
var reset = document.getElementById("reset");
var slider=document.getElementsByClassName("slider");
var gssc=document.getElementById("gssc")
var canvas = document.getElementById("canvas");
const image_input = document.querySelector("imageLoader");
const bri_check=document.getElementById("bri_check");
const sat_check=document.getElementById("sat_check");
const gre_check=document.getElementById("gre_check");
const cont_check=document.getElementById("cont_check");
var uploaded_image;
const main=document.getElementById("main");
reset.addEventListener('click',function(){window.location.reload(true);})

imageLoader.addEventListener('change', function() {
    const reader = new FileReader();
  reader.addEventListener('load', () => {
  canvas.src=reader.result;});
  reader.readAsDataURL(this.files[0]);
});

for(let i=0;i<slider.length;i++){
    slider[i].addEventListener('input',editor);
}
function editor(){
    if(bri_check.checked == true){
        canvas.style.filter=`brightness(${bright.value}%)`;
    }
    if(sat_check.checked == true){
        canvas.style.filter=`saturate(${sat.value}%)`;
    }
    if(cont_check.checked == true){
        canvas.style.filter=`contrast(${contrast.value}%)`;
    }
    if(gre_check.checked == true){
        canvas.style.filter=`grayscale(${gssc.value}%)`;
    }
}
invert.addEventListener('click',function(){
    if(invert.checked == true){canvas.style.filter=`invert(100%)`;};
    if(invert.checked == false){canvas.style.filter=`invert(0%)`;};
})
bwhite.addEventListener('click',function(){
    if(bwhite.checked == true){canvas.style.filter=`grayscale(100%)`;};
    if(bwhite.checked == false){canvas.style.filter=`grayscale(0%)`;};
})



