{
    fetch("http://localhost:8080/getallusers")
    .then(response => response.json()).then(data => createPageElements(data));

    function createPageElements(data){
        console.log("FROM JS FILE: ", data);
    }
}