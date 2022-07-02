import { createBookItem } from "./book-items";

export let bookTitle = "";

export function getBooksBySubject(subject) {
  /* 
  This function takes the subjects searched and makes an axios request to fetch the infos of the books that match
  with the given subject.
  */
  let url = `https://openlibrary.org/subjects/${subject}.json`;
  axios
  .get(url)
  .then((response) => {
      for (let book of response.data.works) {
          let bookAuthors = "";
          bookTitle = book.title;
          for (let author of book.authors) {
              bookAuthors += (author.name + ", ");
          }
          bookAuthors = bookAuthors.slice(0, -2);
          bookAuthors += ".";
          let bookId = book.key;
          createBookItem(bookTitle, bookAuthors, bookId);
      };
      })
  .catch(err=>console.error(err))
}

export async function getDescriptionById(bookId) {
    /* 
    This function takes the identifier of book to fetch the book description.
    */
    let url = `https://openlibrary.org${bookId}.json`
    let bookDescription = await axios.get(url)
    .then((response) => {
        let desc = response.data.description;
        return desc;
    })
    .catch(err=>console.error(err));
    return bookDescription;
}