import { Context } from "../deps.ts";
import { createBooks } from "../services/books.ts";

export default async (ctx: Context) => {
  const { request, response } = ctx;
  const data = await request.body().value;
  const result = await createBooks(data);
  response.body = result;
};
