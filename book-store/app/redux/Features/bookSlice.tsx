"use client"
import { createSlice } from "@reduxjs/toolkit"
import initialBook from "../../initialBook.json"
import { BookDetails } from "../../types/types"


export interface bookState {
    listOfBooks: Array<BookDetails>,
    bookCategories: Array<string>,
}

const initialState: bookState = {
    listOfBooks:[...initialBook.books],
    bookCategories:[...initialBook.categories],
}

export const bookSlice= createSlice({
    name:"books",
    initialState,
    reducers: {
        addBookReducer:(state, action)=>{state.listOfBooks=[...state.listOfBooks,action.payload]},
        editBookReducer:(state, action)=>{
            let newList = state.listOfBooks.map((book)=>{
                if(book.id == action.payload.id){
                    return action.payload
                }
                return book
            })
            state.listOfBooks=newList
        },
        removeBookReducer:(state, action)=>{
            state.listOfBooks=state.listOfBooks.filter((book)=>{
                return book.id != action.payload as string
            })
        },
    }
})

export const {addBookReducer, editBookReducer, removeBookReducer} = bookSlice.actions

export default bookSlice.reducer