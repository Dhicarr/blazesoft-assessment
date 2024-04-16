"use client"
import { createSlice } from "@reduxjs/toolkit"
import { BookDetails } from "../../types/types"

export interface dialogState {
    dialogOpen: string,
    dialogBook: BookDetails | null
}

const initialState: dialogState = {
    dialogOpen:"",
    dialogBook:null
}

export const dialogSlice= createSlice({
    name:"dialog",
    initialState,
    reducers: {
        setDialogReducer:(state,action)=>{state.dialogOpen=action.payload},
        setDialogBookReducer:(state,action)=>{state.dialogBook=action.payload},
    }
})

export const {setDialogReducer, setDialogBookReducer} = dialogSlice.actions

export default dialogSlice.reducer