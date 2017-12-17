"use strict"

//GET  BOOK LIST
export function getBooks(book){   
    return {
        type:"GET_BOOKS"        
    }
}

//POST A BOOK
export function postBooks(book){
    debugger;
    return {
        type:"POST_BOOK",
        pay: book
    }
}

export function deleteBooks(id){
    return {
        type:"DELETE_BOOK",
        pay: id
    }
}

export function updateBooks(book){
    return {
        type:"UPDATE_BOOK",
        pay: book
    }
}