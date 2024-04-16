"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export type postType = {
  title: FormDataEntryValue | null;
  body: FormDataEntryValue | null;
  id?: FormDataEntryValue | null;
};

export async function updateData(data: postType, method: string, id?: string) {
  const title = data.title;
  const body = data.body;
  console.log(data, method, id);

  const options = {
    method: method,
    headers: {
      "Content-type": "application/json",
    },
    body: id
      ? JSON.stringify({ title, body, id })
      : JSON.stringify({ title, body }),
  };

  const url = id
    ? `http://localhost:9999/topics/${id}`
    : `http://localhost:9999/topics/`;

  const response = await fetch(url, options);
  const result = await response.json();

  console.log(result);
  return result;
}

export async function deleteData(id: string) {
  const options = {
    method: "DELETE",
    headers: {
      "Content-type": "application/json",
    },
  };

  const url = `http://localhost:9999/topics/${id}`;

  const response = await fetch(url, options);
  const result = await response.json();

  console.log(result);
  revalidatePath(`/`);
  redirect(`/`);
}
