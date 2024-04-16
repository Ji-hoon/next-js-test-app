"use server";

import { updateData } from "@/utils/handleFormData";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function handleUpdate(formData: FormData) {
  const data = {
    title: formData.get("title"),
    body: formData.get("body"),
    id: formData.get("id"),
  };
  const result = await updateData(data, "PUT", data.id as string);
  const lastId = result.id;
  revalidatePath(`/read/${lastId}`);
  redirect(`/read/${lastId}`);
}
