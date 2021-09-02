{
    //Buttons
    
    const addButton = document.getElementById("add-button");
    const emptyListButton = document.getElementById("empty-button");
    const clearCompletedButton = document.getElementById("clear-completed-button");
    
    addButton.onclick = addToDoItem;
    emptyListButton.onclick = emptyList;
    clearCompletedButton.onclick = clearCompleted;

    //Other elements
    
    const toDoEntryBox = document.getElementById("todo-entry-box");
    const toDoList = document.getElementById("todo-list");
    const localStorage = window.localStorage;

    //Functions  
    
    (function fillListFromLocalStorage(){
        let keys = Object.keys(localStorage);
        console.log("Keys: ", keys);
        
        keys.forEach(key => {
            newToDoItem(key, true);
        });
    })();
    
    function addToDoItem(){
        let itemText = toDoEntryBox.value;
        newToDoItem(itemText, false);
    }

    function newToDoItem(itemText, fromLocalStorage){
        let toDoItem = document.createElement("li");
        toDoItem.innerHTML = itemText;
        toDoItem.ondblclick = toggleToDoItemsState;
        toDoList.appendChild(toDoItem);

        if (!fromLocalStorage){
            localStorage.setItem(itemText, itemText);
        } 
    }

    function toggleToDoItemsState(){
        if (this.classList.contains("completed")) {
            this.classList.remove("completed")
        } else {
            this.classList.add("completed");
        }
    }

    function clearCompleted() {
        let completedItems = document.getElementsByClassName("completed");
        
        while (completedItems.length > 0) {
            localStorage.removeItem(completedItems.item(0).innerHTML);
            completedItems.item(0).remove();
        }
    }

    function emptyList(){
        let toDoItems = toDoList.children;

        while (toDoItems.length > 0) {
            toDoItems.item(0).remove();
        }
        localStorage.clear();
    }
}