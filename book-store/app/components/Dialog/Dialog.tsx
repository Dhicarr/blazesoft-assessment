import styles from "./Dialog.module.scss";
import { dialogHooks } from "../../hooks/dialogHooks";
import { bookHooks } from "../../hooks/bookHooks";
import { BookDetails, EventElements } from "../../types/types";

type Props = {
    type:string
};

const Dialog=({type}:Props):React.ReactElement => {
    const dialogActions = dialogHooks();
    const bookActions = bookHooks();

    const categories=bookActions.categories
    const editBookDetails=dialogActions.dialogBook
    

    const submitForm = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        
        const {name,price,category,description} = e.currentTarget.children as EventElements;

        if(type=="edit"){
            let bookToEdit:BookDetails={
                id:editBookDetails.id,
                name:name!.value,
                price:price!.value,
                category:category!.value,
                description:description!.value
            }
            bookActions.editBook(bookToEdit);
        }
        else if(type=="add"){
            let bookToAdd:BookDetails={
                id:String(Date.now()),
                name:name!.value,
                price:price!.value,
                category:category!.value,
                description:description!.value
            }
            bookActions.addBook(bookToAdd);
        }

        dialogActions.closeDialog();
        dialogActions.emptyDialogBook();
    };

    return (
    <div className={styles.PopupBackdrop} onClick={()=>{dialogActions.closeDialog();}}>
        <div className={styles.Popup} onClick={(e)=>{e.stopPropagation()}}>
            <h2 className={styles.Heading}>{type=="add"?"Add":"Modify"} Book</h2>
            <form className={styles.Form} onSubmit={submitForm}>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" defaultValue={type=="edit" ? editBookDetails.name:""} required/>

                <label htmlFor="price">Price</label>
                <input type="number" id="price" defaultValue={type=="edit" ? Number(editBookDetails.price):""} required/>
                
                <label htmlFor="category">Category</label>
                <select id="category" defaultValue={type=="edit" ? editBookDetails.category:"Fantasy"}>
                    {categories.map((category:string,index:number)=>{return <option key={index}>{category}</option>})}
                </select>
                
                <label htmlFor="description">Description</label>
                <textarea id="description" defaultValue={type=="edit" ? editBookDetails.description:""} required/>
                
                <button className={styles.SubmitButton} type="submit">Ok</button>
            </form>
        </div>
    </div>
    );
  }
  export default Dialog;