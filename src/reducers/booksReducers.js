"use strict"
export function booksReducers(state = {books:[]}, action) {
    switch (action.type) {
        case "GET_BOOKS":        
            //let books  = state.concat(action.payload)
            return {...state, books:[...state.books]}
            break;
        case "POST_BOOK":
          
            //let books  = state.concat(action.payload)

            return {books:[...state.books,...action.payload]}
            break;
        case "DELETE_BOOK":
            const currentBookToDelete = [...state.books];
            // console.log("currentBookToDelete",currentBookToDelete);
            //determine at which index in books is the book to deleted
            const indexToDelete = currentBookToDelete.findIndex(function(book){
                return book.id === action.payload.id;
            })
            // console.log("indexToDelete",indexToDelete)
        return { 
            books:[...currentBookToDelete.slice(0, indexToDelete), ...currentBookToDelete.slice(indexToDelete + 1)]           
        }
        break;
        case "UPDATE_BOOK":        
            // Create a copy of the current array of           
            const currentBookToUpdate = [...state.books];
            // Determine at which index in books array is the book to be deleted
            const indexToUpdate = currentBookToUpdate.findIndex(
                    function (book) {
                        return book.id === action.payload.id;
                    }
            )
            // Create a new book object with the new values and with the same array index of the item we want to replace. To achieve this we will use ...spread but we could use concat methos too
            const newBookToUpdate = {
                ...currentBookToUpdate[indexToUpdate],
                title: action.payload.title
            }
            // This Log has the purpose to show you how newBookToUpdate looks like
            //console.log("what is it newBookToUpdate", newBookToUpdate);

            //use slice to remove the book at the specified index, replace with the new object and concatenate witht he rest of items in the array
            return {books: [...currentBookToUpdate.slice(0, indexToUpdate), newBookToUpdate, ...currentBookToUpdate.slice(indexToUpdate + 1)]}            
            //-------------------------------------------
        break;
    }
    return state
}