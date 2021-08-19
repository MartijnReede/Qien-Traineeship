{

    const releasesContainer = document.getElementById("releasesContainer1");
    const titleContainer = document.getElementById("titleContainer");

    const URL = window.location.href;
    const artistId = URL.substring(47, URL.length-1);
    
    fetch("http://localhost:8080/digrecords/displayartist/getartistdata/" + artistId)
    .then(response => response.json()).then(data => createPageElements(data));

    function createPageElements(data){

        console.log(data);

        let displayArtistName = document.createElement("p");
        displayArtistName.setAttribute("class", "displayArtistName");
        displayArtistName.innerHTML = `Releases by: ${data[0].artistName}`;

        titleContainer.appendChild(displayArtistName);
        
        for (let i = 0; i < data.length; i++) {

            let recordValueNames = ["Title: ", "Release date: ", "Label name: "];
            let recordDataValues = [data[i].releaseTitle, data[i].releaseDate, data[i].labelName];

            let resultContainer = document.createElement("div");
            resultContainer.setAttribute("class", "resultContainer");

            let resultRowsContainer = document.createElement("div");
            resultRowsContainer.setAttribute("class", "resultRowsContainer")

            for (let j = 0; j < recordValueNames.length; j++){
                 let dataResultRow = constructResultRow(recordValueNames[j], recordDataValues[j]);
                 resultRowsContainer.appendChild(dataResultRow)
            }

            resultContainer.appendChild(resultRowsContainer);
            
            let buttonForm = constructFormButton("Select record", "/digrecords/displayrecord/" + data[i].releaseId, "selectRecord");
            resultContainer.appendChild(buttonForm);
            
            releasesContainer.appendChild(resultContainer);
         }

         function constructResultRow(label, resultText){
            
            let recordResultRow = document.createElement("div");
            recordResultRow.setAttribute("id", "resultContainer");
            recordResultRow.setAttribute("class", "resultRow");     
    
            let col15Element = document.createElement("div");
            col15Element.setAttribute("class", "col-15");
    
            let labelElement = document.createElement("text");
            labelElement.setAttribute("class", "resultContainerMessage");
            labelElement.innerHTML = label;
    
            col15Element.appendChild(labelElement);
            
            let col85Element = document.createElement("div");
            col85Element.setAttribute("class", "col-85");
    
            let dataElement = document.createElement("text");
            dataElement.setAttribute("class", "resultContainerMessage");
            dataElement.innerHTML = resultText;
    
            col85Element.appendChild(dataElement);
    
            recordResultRow.appendChild(col15Element);
            recordResultRow.appendChild(col85Element);
    
            return recordResultRow;
        }

        function constructFormButton(text, action, className){

            let buttonForm = document.createElement("form");
            buttonForm.setAttribute("method", "GET");
            buttonForm.setAttribute("action", action);
            buttonForm.setAttribute("class", "selectButtonForm");
    
            let button = document.createElement("input");
            button.setAttribute("type", "submit");
            button.setAttribute("class", className);
            button.setAttribute("value", text);
    
            buttonForm.appendChild(button);
    
            return buttonForm;
        }
    }
}