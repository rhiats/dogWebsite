
var imageIndex = 0;
function main() {

    ///Changes an image in the image caurosel
    ///Parameter: isReverse[Boolean]
    function changeImage(isReverse) {
      let imgAry = ["./dog_shampoo.jpeg","./dog_collar.jpg", "./dog_leash.jpeg"];
      var dogShampooImg = document.getElementById("dog_shampoo");
      imageIndex++;
      imageIndex = imageIndex % imgAry.length
      dogShampooImg.src = imgAry[imageIndex];
    }
    function changeText(isReverse) {

    }
    var leftArrow = document.getElementById("leftArrow");
    var rightArrow = document.getElementById("rightArrow");

    leftArrow.addEventListener("click", function(event){
        changeImage()
    });
    rightArrow.addEventListener("click", function(event) {
        changeImage()
    });

}
main();