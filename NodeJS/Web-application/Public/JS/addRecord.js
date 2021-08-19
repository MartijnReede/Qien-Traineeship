{
    const addTrackButton = document.getElementById("addTrack");
    const removeTrackButton = document.getElementById("removeTrack");
    const tracksContainer = document.getElementById("tracks");
    const submitRecord = document.getElementById("submitRecord");

    let trackAmount = 1;

    addTrackButton.onclick = function(){
        let rowDiv = document.createElement("div");
        rowDiv.setAttribute("class", "row");

        let col25Div = document.createElement("div");
        col25Div.setAttribute("class", "col-25");

        let col75Div = document.createElement("div");
        col75Div.setAttribute("class", "col-75")

        let trackLabel = document.createElement("label");
        trackLabel.setAttribute("class", "addRecordLabel");
        trackLabel.innerHTML = `Track ${++trackAmount}:`;

        let trackInputField = document.createElement("input");
        trackInputField.setAttribute("type", "text");
        trackInputField.setAttribute("name", "track");
        trackInputField.setAttribute("class", "addRecordInput");
        trackInputField.setAttribute("required", "required");

        tracksContainer.appendChild(rowDiv);
        rowDiv.appendChild(col25Div);
        col25Div.appendChild(trackLabel);
        rowDiv.appendChild(col75Div);
        col75Div.appendChild(trackInputField);
    }

    removeTrackButton.onclick = function(){
        if (trackAmount > 1){
            lastTrack = tracksContainer.lastChild;
            tracksContainer.removeChild(lastTrack);
            trackAmount--;
        }
    }
}