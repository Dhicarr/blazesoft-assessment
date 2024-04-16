import { useDispatch, useSelector} from "react-redux";
import { setDialogReducer, setDialogBookReducer } from "../redux/Features/dialogSlice";
import { BookDetails } from "../types/types";

export const dialogHooks = () => {
    const dispatch = useDispatch();

    const openEditDialog=()=>{
        dispatch(setDialogReducer("edit"));
    }
    const openAddDialog=()=>{
        dispatch(setDialogReducer("add"));
    }
    const closeDialog=()=>{
        dispatch(setDialogReducer(""));
    }

    const emptyDialogBook=()=>{
        dispatch(setDialogBookReducer(null))
    }
    const addDialogBook=(book:BookDetails)=>{
        dispatch(setDialogBookReducer(book))
    }
    const dialogBook=useSelector((state:any)=>state.dialogStates.dialogBook)
    const dialogOpen=useSelector((state:any)=>state.dialogStates.dialogOpen)

    return {dialogOpen, dialogBook, openEditDialog, openAddDialog, closeDialog, emptyDialogBook, addDialogBook}
}
