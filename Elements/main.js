
//just element style.......
document.getElementById('first').style.textAlign = "center";
document.getElementById('first').style.paddingTop = "150px"
document.getElementById('form-1').style.display = "flex"
document.getElementById('first').style.paddingBottom = "10px"
const firstInpt = document.getElementById('first-input')

firstInpt.style.width = "500px"
firstInpt.style.marginLeft = "23%"
firstInpt.style.borderRadius = "5px"

//b, d, l, section make up........
const clickBreak = document.getElementById('click-break').addEventListener('click', function () {
    document.getElementById('Breakfast').style.display = "block"
    document.getElementById('Lunch').style.display = "none"
    document.getElementById('Dinner').style.display = "none"

});
const clickLun = document.getElementById('click-lun').addEventListener('click', function () {
    document.getElementById('Breakfast').style.display = "none"
    document.getElementById('Lunch').style.display = "block"
    document.getElementById('Dinner').style.display = "none"


});
const clickDin = document.getElementById('click-din').addEventListener('click', function () {
    document.getElementById('Breakfast').style.display = "none"
    document.getElementById('Lunch').style.display = "none"
    document.getElementById('Dinner').style.display = "block"


});

//delivary see more and less........
document.getElementById('see-more').addEventListener('click', function () {

    show('extra', 'see-less', 'see-more')


})
document.getElementById('see-less').addEventListener('click', function () {

    less('extra', 'see-more', 'see-less')


})
//2
document.getElementById('see-more2').addEventListener('click', function () {

    show('extra2', 'see-less2', 'see-more2')


})
document.getElementById('see-less2').addEventListener('click', function () {

    less('extra2', 'see-more2', 'see-less2')


})
//3
document.getElementById('see-more3').addEventListener('click', function () {

    show('extra3', 'see-less3', 'see-more3')


})

document.getElementById('see-less3').addEventListener('click', function () {

    less('extra3', 'see-more3', 'see-less3')


})
function show(extra, less, show) {
    document.getElementById(extra).style.display = "block";
    document.getElementById(less).style.display = "block"
    document.getElementById(show).style.display = "none"

}
function less(extra, show, less) {

    document.getElementById(extra).style.display = "none";
    document.getElementById(show).style.display = "block"
    document.getElementById(less).style.display = "none"


}
//sign up
const Signup = document.getElementById('sign-up').addEventListener('click', function () {
    document.getElementById('main').style.display = "none";
    document.getElementById('sign2').style.display = "block";

})
//search meal
const searchMeal = document.getElementById('search-meal').addEventListener('click', function () {
    const firstInpt = document.getElementById('first-input').value;
    if(firstInpt == "Breakfast"){
        document.getElementById('Lunch').style.display = "block";
        document.getElementById('main').style.display = "none"
        
        
    }
    

})




