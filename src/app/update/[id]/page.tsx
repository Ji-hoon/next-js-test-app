"use client";

import { postType } from "@/utils/handleFormData";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { handleUpdate } from "./action";

export default function Update() {
  const params = useParams();
  const [result, setResult] = useState<null | postType>(null);

  useEffect(() => {
    fetch(`http://localhost:9999/topics/${params.id}`)
      .then((response) => response.json())
      .then((result) => {
        setResult(result);
      });
  }, []);

  return (
    <form action={handleUpdate}>
      <h2>
        Update
        <input
          style={{ visibility: "hidden", height: "0", margin: "0", padding: 0 }}
          type="text"
          name="id"
          readOnly
          defaultValue={result?.id as string}
        />
      </h2>

      <p>
        <input
          type="text"
          name="title"
          placeholder="title"
          defaultValue={result?.title as string}
        />
      </p>
      <p>
        <textarea
          name="body"
          placeholder="body"
          defaultValue={result?.body as string}
        />
      </p>
      <input type="submit" value="Update" />
    </form>
  );
}
