


let Api_key = "AIzaSyDPJe6ZIDuma-OLZVEwsyfHr65Kkj-_NUQ";

async function showData(){
    try{
        let search = document.getElementById("search").value;
       let  url =`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${search}&type=video&key=${Api_key}`

       let res = await fetch(url);
       let data = await res.json();
       display(data.items);



    } catch (error) {
        console.log(error);
    }


}

function display(data){
    // console.log(data);
    let result = document.getElementById("result");
    result.innerHTML = "";
    data.map((video)=>{


   
    let thumbnail = video.snippet.thumbnails.medium.url;
    let title = video.snippet.title;
    
   const dataVideo = `<img src="${thumbnail}" alt="">
    <div class="videoDet">
    <h3>${title.slice(0,75)}...</h3>
    <p>${video.snippet.channelTitle}</p>
    <p>${video.snippet.publishTime}</p>
</div>
    `;
    let div = document.createElement("div");
    div.setAttribute("onclick", `displayMyVideo('${video.id.videoId}')`);

    div.innerHTML = dataVideo;
    document.getElementById("result").append(div);

})
}


function displayMyVideo(videoId){
    localStorage.setItem("video",videoId);
    window.open("./video.html","_self");
}


async function trend(){
    try {
        let word = "Trending";
        let url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${word}&type=video&key=${Api_key}`;
        let res = await fetch(url);
        let data = await res.json();
        console.log(data);
        display(data.items);

    } catch (error) {
       console.log(Error); 
    }
}
trend();