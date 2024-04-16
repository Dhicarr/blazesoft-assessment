"use client"

import Book from "./components/Book/Book";
import Dialog from "./components/Dialog/Dialog";
import { dialogHooks } from "./hooks/dialogHooks";
import { bookHooks } from "./hooks/bookHooks";
import { BookDetails } from "./types/types"
import styles from "./page.module.scss";

export default function IndexPage() {
  const dialogActions = dialogHooks();
  const bookActions = bookHooks();
  
  const listOfBooks=bookActions.allBooks
  const dialogOpen=dialogActions.dialogOpen


  const booksRender=(listOfBooks:Array<BookDetails>)=>{
    return listOfBooks.map((bookInfo: BookDetails, index:number)=>{
      return (
        <li className={styles.BookContainer} key={index}>
          <Book bookInfo={bookInfo}/>
        </li>
        )
    })
  }

  return (
  <main>
    <h1>Book Store</h1>
    {dialogOpen != "" && <Dialog type={dialogOpen}/>}
    <button className={styles.AddButton} onClick={()=>dialogActions.openAddDialog()}>Add Book</button>
    <ul className={styles.BooksList}>
      {booksRender(listOfBooks)}
    </ul>
  </main>
  );
}


