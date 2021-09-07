{
    let releaseTitle = document.getElementById("releaseTitle");
    let artist = document.getElementById("artist");
    let label = document.getElementById("label");
    let releaseDate = document.getElementById("releaseDate");
    let recordInfoContainer = document.getElementById("recordInfoContainer2");
    let artistPageForm = document.getElementById("artistPageForm");
    let labelPageForm = document.getElementById("labelPageForm");
    
    let currentURL = window.location.href;
    const recordId = currentURL.substring(47, currentURL.length-1);
    
    fetch("http://localhost:8080/digrecords/displayrecord/getrecorddata/" + recordId)
    .then(response => response.json()).then(data => createPageElements(data));

    function createPageElements(data){

        artistPageForm.setAttribute("action", `/digrecords/displayartist/${data[0].artist_id}`);
        labelPageForm.setAttribute("action", `/digrecords/displaylabel/${data[0].label_id}`);

        const releaseTitleData = data[0].record_title;
        const artistData = data[0].artist_name;
        const recordLabelData = data[0].label_name;
        const releaseDateData = data[0].release_date;
        
        releaseTitle.innerHTML = releaseTitleData;
        artist.innerHTML = artistData;
        label.innerHTML = recordLabelData;
        releaseDate.innerHTML = releaseDateData;

        for (let i = 0; i < data.length; i++){
           
            let recordInfoRow = document.createElement("div");
            recordInfoRow.setAttribute("class", "recordInfoRow");

            let col25 = document.createElement("div");
            col25.setAttribute("class", "col-25display");

            let text1 = document.createElement("text");
            text1.setAttribute("class", "resultInfo");
            text1.innerHTML = (i + 1) + ": ";

            col25.appendChild(text1);
            recordInfoRow.appendChild(col25);

            let col75 = document.createElement("div");
            col75.setAttribute("class", "col-75display");

            let text2 = document.createElement("text");
            text2.setAttribute("class", "resultInfo");
            text2.innerHTML = data[i].track_title;

            if (i === data.length - 1) {
                col25.setAttribute("style", "padding-bottom: 30px;")
            }

            col75.appendChild(text2);
            recordInfoRow.appendChild(col75);

            recordInfoContainer.appendChild(recordInfoRow);
        }
    }
}