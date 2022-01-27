function getmeme(){
    murl ="https://waifu.pics/api/sfw/waifu"
    fetch(murl)
    .then(function(response){
        console.log(response)
        return response.json();
    })
    .then(function(data){
        display_meme(data.url)
    })
    .catch(function(error){
        console.log("Error: " + error);
    });
}

function display_meme(image_url){
    document.getElementById("waif").src =image_url

}
function displayResult() {

    var table = document.getElementById("table");
    var row = table.insertRow(1);
    var x = row.insertCell(-1);


    var img = document.createElement('img');
    img.src = waif.src;

    x.appendChild(img);
    
}