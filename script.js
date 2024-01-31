
var imageIndex = 0;

var dogItemsObj = { 
    items: [
        {
            image: "./dog_shampoo.jpeg", 
            title: "<strong> BK Dog Shampoo </strong>", 
            description: "Organic, made from only natural ingredients. <br/> Affordable, while being good for you dog's skin",
            description2: "<li> Frangrence Free</li> <li> Contains Aloe </li> <li> Helps with shedding </li>"
        } ,
        {
            image: "./dog_collar.jpg", 
            title: "<strong> BK Dog Collar </strong>", 
            description: "Quality material collar that does <br/> not choke the dog",
            description2: "<li> Fragrence Free </li>  <li> Buckle support</li> <li> Optional name tag </li>"
        } ,
        {
            image: "./dog_leash.jpeg", 
            title: "<strong> BK Dog Leash </strong>", 
            description: "Sturdy leash for taking your <br/> dog on walks",
            description2: "<li> Fragrence free </li> <li>various lengths</li> <li>various colors </li>"
        } ,
    ]

}

function main() {

    ///Changes an image in the image caurosel
    ///Parameter: isReverse[Boolean]
    function changeImage(isReverse) {
      var dogShampooImg = document.getElementById("dog_shampoo");
      imageIndex++;
      imageIndex = imageIndex % dogItemsObj.items.length;
      var dogObj =  dogItemsObj.items[imageIndex];
      dogShampooImg.src = dogObj.image;
    }
    function changeText(isReverse) {
        var title = document.getElementById("title");
        var line1 = document.getElementById("line1");
        var list_items = document.getElementById("list");
    

        var dogObj =  dogItemsObj.items[imageIndex];
        title.innerHTML = dogObj.title;
        line1.innerHTML = dogObj.description;
        list_items.innerHTML = dogObj.description2;
        
    }
    var leftArrow = document.getElementById("leftArrow");
    var rightArrow = document.getElementById("rightArrow");

    leftArrow.addEventListener("click", function(event){
        changeImage()
        changeText()
    });
    rightArrow.addEventListener("click", function(event) {
        changeImage()
        changeText()
    });

}
main();