"use server";

import { updateData } from "@/utils/handleFormData";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function handleCreate(formData: FormData) {
  const data = {
    title: formData.get("title"),
    body: formData.get("body"),
  };

  const result = await updateData(data, "POST");
  const lastId = result.id;
  revalidatePath(`/read/${lastId}`);
  redirect(`/read/${lastId}`);
}
