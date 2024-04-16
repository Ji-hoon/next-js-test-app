"use client";

import { handleCreate } from "./action";

export default function Create() {
  return (
    <form action={handleCreate}>
      <h2>Create</h2>
      <p>
        <input type="text" name="title" placeholder="title" />
      </p>
      <p>
        <textarea name="body" placeholder="body" />
      </p>
      <input type="submit" value="Create" />
    </form>
  );
}
