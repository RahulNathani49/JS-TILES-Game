var selectedImages=[];
var count = 0;
var tries=0;
var start = 0;
window.addEventListener('load', (event) => {
    const images = {
        "coffee-00.jpeg":1,
        "coffee-01.jpeg":2,
        "coffee-02.jpeg":3,
        "coffee-03.jpeg":4,
        "coffee-04.jpeg":5,
        "coffee-05.jpeg":6
    }
    console.log('page is fully loaded');
    setInterval(updatetime, 1000);
    const imgArray= ['coffee-00.jpeg', 'coffee-01.jpeg', 'coffee-02.jpeg' , 'coffee-03.jpeg', 'coffee-04.jpeg','coffee-05.jpeg','coffee-00.jpeg', 'coffee-01.jpeg', 'coffee-02.jpeg' , 'coffee-03.jpeg', 'coffee-04.jpeg','coffee-05.jpeg']; 
    var imagecontainer = document.getElementById("imageContainer");
    shuffleArray(imgArray);
    for(let i=0;i<12;i++){
        var div = document.createElement("div");
        div.setAttribute("class","box");
        div.setAttribute("onclick","flip(this)");
        var image = document.createElement("img");
        image.setAttribute("class",images[imgArray[i]]);
        image.src="./image/"+imgArray[i];
        
        div.append(image);
        imagecontainer.append(div);
    }
    function shuffleArray(array) {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }   
    }
    function updatetime(){
        start++;
        document.getElementById("time").innerHTML=(start/60).toFixed(2)+" minutes";
    }
});
function flip(x){
    
    document.getElementById("")
    var image = x.childNodes[0];
    console.log(image.classList[0]);
    console.log(selectedImages);
    if(!selectedImages.includes(image)){
        selectedImages.push(image);
        image.style.transform = "rotateY(0deg)";
    }
    if(selectedImages.length==2){ 
        tries++;
        document.getElementById("tries").innerHTML = tries;   
        if(selectedImages[0].src==selectedImages[1].src){
            setTimeout(function() {
                console.log(selectedImages[0]);
                var tiles = document.getElementsByClassName(selectedImages[1]);
                console.log(tiles);
                for(var i = 0; i < tiles.length; i++)
                {
                   tiles[i].style.transform =  "rotateY(0deg)";
                }
                while (selectedImages.length > 0) {
                    selectedImages.pop();
                }
            count+=2;
            if(count==12){
                alert("Game over!");
            }
            }, 1000);
            if(count==imgArray.length){
                alert("Game Finish,Number of tries was : ",tries+"in"+start/60+"minutes");
            }     
        }
        else{
            
        setTimeout(function() {
            selectedImages[0].style.transform="rotateY(180deg)";   
            selectedImages[1].style.transform="rotateY(180deg)";  
            selectedImages.pop();
            selectedImages.pop();
        }, 1000);
                 
        }
    }
    
}

