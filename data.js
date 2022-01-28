function getpic(){
    murl ="https://waifu.pics/api/sfw/waifu"
    fetch(murl)
    .then(function(response){
        console.log(response)
        return response.json();
    })
    .then(function(data){
        display_pic(data.url)
    })
    .catch(function(error){
        console.log("Error: " + error);
    });
}

function display_pic(image_url){
    document.getElementById("waif").src =image_url

}
function getpic2(){
    murl ="https://waifu.pics/api/sfw/hug"
    fetch(murl)
    .then(function(response){
        console.log(response)
        return response.json();
    })
    .then(function(data){
        display_pic2(data.url)
    })
    .catch(function(error){
        console.log("Error: " + error);
    });
}

function display_pic2(image_url){
    document.getElementById("waif").src =image_url

}
function getpic3(){
    murl ="https://waifu.pics/api/sfw/pat"
    fetch(murl)
    .then(function(response){
        console.log(response)
        return response.json();
    })
    .then(function(data){
        display_pic3(data.url)
    })
    .catch(function(error){
        console.log("Error: " + error);
    });
}

function display_pic3(image_url){
    document.getElementById("waif").src =image_url

}