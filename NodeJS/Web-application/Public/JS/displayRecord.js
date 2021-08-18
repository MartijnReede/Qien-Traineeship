{
    
    let releaseTitle = document.getElementById("releaseTitle");
    let artist = document.getElementById("artist");
    let label = document.getElementById("label");
    let releaseDate = document.getElementById("releaseDate");
    let recordInfoContainer = document.getElementById("recordInfoContainer2");
    
    
    let currentURL = window.location.href;
    const recordId = currentURL.substring(47, currentURL.length-1);
    
    fetch("http://localhost:8080/digrecords/displayrecord/getrecorddata/" + recordId)
    .then(response => response.json()).then(data => createPageElements(data));

    function createPageElements(data){
        
        const releaseTitleData = data[0].releaseTitle;
        const artistData = data[0].artistName;
        const recordLabelData = data[0].labelName;
        const releaseDateData = data[0].releaseDate;

        releaseTitle.innerHTML = releaseTitleData;
        artist.innerHTML = artistData;
        label.innerHTML = recordLabelData;
        releaseDate.innerHTML = releaseDateData;

        for (let i = 1; i < data.length; i++){
           
           console.log("test");
            let recordInfoRow = document.createElement("div");
            recordInfoRow.setAttribute("class", "recordInfoRow");

            let col25 = document.createElement("div");
            col25.setAttribute("class", "col-25display");

            let text1 = document.createElement("text");
            text1.setAttribute("class", "resultInfo");
            text1.innerHTML = data[i].trackNumber + ": ";

            col25.appendChild(text1);
            recordInfoRow.appendChild(col25);

            let col75 = document.createElement("div");
            col75.setAttribute("class", "col-75display");

            let text2 = document.createElement("text");
            text2.setAttribute("class", "resultInfo");
            text2.innerHTML = data[i].trackName + ".";

            col75.appendChild(text2);
            recordInfoRow.appendChild(col75);

            recordInfoContainer.appendChild(recordInfoRow);

            if (i === data.length - 1){
                recordInfoRow.setAttribute("style", "padding-bottom: 120px;");
            }

        }




        /*

                   
        <div class="recordInfoRow">
        <div class="col-25display">
            <text class="resultInfo">Title: </text>
        </div>
        <div class="col-75display">
            <text class="resultInfo" id="releaseTitle"></text>
        </div>
      </div>

      */
    }
  

}