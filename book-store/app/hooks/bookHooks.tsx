
import { useDispatch, useSelector} from "react-redux";
import {addBookReducer, editBookReducer, removeBookReducer} from "../redux/Features/bookSlice";
import { BookDetails } from "../types/types";

export const bookHooks = () => {
    const dispatch = useDispatch();

    const addBook=(book:BookDetails)=>{
        dispatch(addBookReducer(book))
    }

    const editBook=(book:BookDetails)=>{
        dispatch(editBookReducer(book))
    }

    const removeBook=(id:string)=>{
        dispatch(removeBookReducer(id))
    }

    const allBooks=useSelector((state:any)=>state.bookStates.listOfBooks)
    const categories=useSelector((state:any)=>state.bookStates.bookCategories)

    return {categories, allBooks, addBook, editBook, removeBook}
}
