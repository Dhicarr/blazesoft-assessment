import { BookDetails } from "../../types/types"
import { dialogHooks } from "../../hooks/dialogHooks";
import { bookHooks } from "../../hooks/bookHooks";
import styles from "./Book.module.scss"

type Props = {
  bookInfo: BookDetails;
};

const Book=({bookInfo}:Props):React.ReactElement => {
  const dialogActions = dialogHooks();
  const bookActions = bookHooks();

  const handleDelete=(e:React.MouseEvent<HTMLButtonElement>)=>{
    e.stopPropagation()
    bookActions.removeBook(bookInfo.id)
  }

  const handleEdit=()=>{
    dialogActions.addDialogBook(bookInfo)
    dialogActions.openEditDialog()
  }

  return (
  <div className={styles.BookItem} onClick={()=>{handleEdit()}}>
    <div className={styles.BookTitle}>{bookInfo.name}</div>
    <div>{bookInfo.description}</div>
    <div>{bookInfo.category}</div>
    <div><b>Price:</b> ${bookInfo.price}</div>
    <button className={styles.DeleteButton} onClick={(e)=>{handleDelete(e)}}>Delete</button>
  </div>
  );
}
export default Book;


