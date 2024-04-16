"use client";

import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import { deleteData } from "@/utils/handleFormData";

export function Controls() {
  const params = useParams();
  const id = params.id;

  const pathname = usePathname();
  // console.log(pathname);

  return (
    <>
      {!pathname.includes("update") && (
        <ul>
          {!pathname.includes("create") && (
            <li>
              <Link href="/create">Create</Link>
            </li>
          )}
          {id && (
            <>
              <li>
                <Link href={`/update/${id}`}>Update</Link>
              </li>
              <li>
                <input
                  onClick={() => deleteData(id as string)}
                  type="button"
                  value="Delete"
                />
              </li>
            </>
          )}
        </ul>
      )}
    </>
  );
}
