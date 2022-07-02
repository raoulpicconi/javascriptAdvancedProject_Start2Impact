import { bookList } from "./main";
import { getDescriptionById } from "./requests";

export async function createBookItem(bookTitle, bookAuthors, bookId) {
    /* 
    This function takes the title, authors and identifier of each books as a parameter to create a 
    book element and displays it on the screen.
    */
    let hide = true;
    let desc = await getDescriptionById(bookId);

    const bookItem = document.createElement("li");
    bookList.append(bookItem);
    bookItem.classList.add("card", "mb-3");

    const title = document.createElement("h3");
    title.innerHTML = bookTitle;
    bookItem.append(title);
    title.classList.add("card-header");
        

    const authors = document.createElement("p");
    authors.innerHTML = ("Authors: " + bookAuthors);
    bookItem.append(authors);
    authors.classList.add("card-header");
    
    const expandButton = document.createElement("button");
    expandButton.innerHTML = "🔽";
    title.append(expandButton);
    expandButton.classList.add("float-right")
    expandButton.addEventListener("click", () => {
        if (hide) {
            description.classList.remove("hide");
            expandButton.innerHTML = "❌"
            hide = false;
        } else {
            description.classList.add("hide");
            expandButton.innerHTML = "🔽"
            hide = true;
        };
    });

    const description = document.createElement("div");
    const descriptionTitle = document.createElement("h4");
    descriptionTitle.innerHTML = "Description";
    description.append(descriptionTitle);
    const descriptionText = document.createElement("p");
    desc = validateDescription(desc);
    descriptionText.innerHTML = desc;
    description.append(descriptionText);
    bookItem.append(description);
    description.classList.add("hide", "card-text", "p-4");
}

function validateDescription(description) {
    /*
    This function checks if the description is correctly formatted and converts it to the right form if it isn' t,
    if the description is undefined it displays a standard sorry message. Also removes the useless informations.
    */
    if (typeof description == "object") {
        description = description.value;
    } else if (typeof description == "undefined") {
        description = "Sorry! We can't find the book's description";
    };
    return description.split("---")[0];
}