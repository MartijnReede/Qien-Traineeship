{
    const searchButton = document.getElementById("searchButton");
    const searchResultsContainer = document.getElementById("searchResultsContainer");
    const searchInput = document.getElementById("searchInput");
    const categorySelect = document.getElementById("categorySelect");

    searchButton.onclick = function(){
        
        if (searchInput.value === ""){
            alert("Enter something in the search bar first before pressing the search button.");
        } else {
             fetch("http://localhost:8080/searchrecords/" + searchInput.value + "/" + categorySelect.value)
            .then(response => response.json()).then(data => displayData(data));    
        }
    }

    function displayData(data){
       
        clearSearchResultsContainer();

        if (data.length === 1) {
            displayNoResultsFound();
            return;
        }

        const searchType = data[0].searchType;
    
        switch(searchType){

            case "records":
                
                for (let i = 1; i < data.length; i++){
                    
                    let recordValueNames = ["Title: ", "Artist: ", "Label: ", "Release date: "]; 
                    let recordDataValues = [data[i].releaseTitle, data[i].artistName, data[i].labelName, data[i].releaseDate]
                    
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
                    
                    searchResultsContainer.appendChild(resultContainer);
                }
                break;

            case "artists":
                 
                 for (let i = 1; i < data.length; i++){
                 
                    let artistValueNames = ["Artist: "];
                    let artistDataValues = [data[i].artistName];
                    
                    let resultContainer = document.createElement("div");
                    resultContainer.setAttribute("class", "resultContainer");

                    let resultRowsContainer = document.createElement("div");
                    resultRowsContainer.setAttribute("class", "resultRowsContainer");

                    for (let j = 0; j < artistValueNames.length; j++){
                        let dataResultRow = constructResultRow(artistValueNames[j], artistDataValues[j]);
                        resultRowsContainer.appendChild(dataResultRow);
                    }

                    resultContainer.appendChild(resultRowsContainer);
                    
                    let buttonForm = constructFormButton("Select artist", "/digrecords/displayartist/" + data[i].artistId, "selectArtist");
                    resultContainer.appendChild(buttonForm);
                    
                    searchResultsContainer.appendChild(resultContainer);
                }
                break;
            
            case "recordLabels":

                for (let i = 1; i< data.length; i++){

                    let labelValueNames = ["Label: "];
                    let labelDataValues = [data[i].labelName];

                    let resultContainer = document.createElement("div");
                    resultContainer.setAttribute("class", "resultContainer");

                    let resultRowsContainer = document.createElement("div");
                    resultRowsContainer.setAttribute("class", "resultRowsContainer");

                    for (let j = 0; j < labelValueNames.length; j++){
                        let dataResultRow = constructResultRow(labelValueNames[j], labelDataValues[j]);
                        resultRowsContainer.appendChild(dataResultRow);
                    }

                    resultContainer.appendChild(resultRowsContainer);
                    
                    let buttonForm = constructFormButton("Select label", "/digrecords/displaylabel/" + data[i].labelId, "selectLabel");
                    resultContainer.appendChild(buttonForm);
                    
                    searchResultsContainer.appendChild(resultContainer);
                }
                break;

            case "tracks":
        
                for (let i = 1; i < data.length; i++){

                    let trackValueNames = ["Track: ", "Release: ", "Artist: "];
                    let trackDataValues = [data[i].trackName, data[i].releaseTitle, data[i].artistName];

                    let resultContainer = document.createElement("div");
                    resultContainer.setAttribute("class", "resultContainer");

                    let resultRowsContainer = document.createElement("div");
                    resultRowsContainer.setAttribute("class", "resultRowsContainer");

                    for (let j = 0; j < trackValueNames.length; j++){
                        let dataResultRow = constructResultRow(trackValueNames[j], trackDataValues[j]);
                        resultRowsContainer.appendChild(dataResultRow);
                    }

                    resultContainer.appendChild(resultRowsContainer);
                    
                    let buttonForm = constructFormButton("Select track", "/digrecords/displayrecord/" + data[i].releaseId, "selectTrack");
                    resultContainer.appendChild(buttonForm);
                    
                    searchResultsContainer.appendChild(resultContainer);
                }
                break;
            }
    }

    function clearSearchResultsContainer(){

        let child = searchResultsContainer.lastElementChild;

        while (child){
            searchResultsContainer.removeChild(child);
            child = searchResultsContainer.lastElementChild;
        }   
    }

    function displayNoResultsFound(){
        
        let resultContainer = document.createElement("div");
        resultContainer.setAttribute("class", "resultContainer");
        resultContainer.setAttribute("id", "resultContainer");     
        
        let testResult = document.createElement("p");
        testResult.setAttribute("class", "resultContainerMessage");
        testResult.innerHTML = "No results found in our database.";

        resultContainer.appendChild(testResult);
        searchResultsContainer.appendChild(resultContainer);

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