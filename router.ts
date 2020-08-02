import { Router } from "./deps.ts";

import getBooks from "./handlers/getBooks.ts";
import getBookDetails from "./handlers/getBookDetails.ts";
import createBooks from "./handlers/createBooks.ts";
import updateBook from "./handlers/updateBook.ts";
import deleteBook from "./handlers/deleteBook.ts";

const router = new Router();

router
  .get("/checkHealth", (ctx) => {
    ctx.response.body = "Hello World!";
  })
  .get("/books", getBooks)
  .post("/books", createBooks)
  .get("/books/getBookDetails", getBookDetails)
  .put("/books/updateBook", updateBook)
  .delete("/books/deleteBook", deleteBook);

export default router;
