let time = new Date().getTime()
fetch(`config/video.json?t=${time}`, {
    method: "GET",
}).then((response) => response.json()).then((data) => {
    let root = document.querySelector(".main");

    data.forEach((value) => {

        let video = document.createElement("video");
        let source = document.createElement("source");
        let div = document.createElement("div");
        let title = document.createElement("div");
        let description = document.createElement("div");
        let videoContent = document.createElement("div");
        videoContent.classList.add("video-box");
        videoContent.appendChild(video)
        title.innerText = value.title;        
        description.innerText = value.description;  
        title.classList.add("video-title");
        description.classList.add("video-description");
        div.classList.add("video-card");
        
        video.controls = true;
        div.setAttribute("index", value.id);
        div.append(title)
        source.src = `video/${value.video}`;
        source.type = "video/mp4";
        video.preload = "none";
        video.appendChild(source);
        
        div.appendChild(videoContent)
        div.append(description)
        root.appendChild(div);
    })
})




document.onreadystatechange = function () {
    if (document.readyState == "complete") {
        document.querySelector("#close").addEventListener("click", (e) => {
            let alter = document.querySelector(".alert")
            console.log(alter)
            alter.style= "display:none;";
        })
    }
}