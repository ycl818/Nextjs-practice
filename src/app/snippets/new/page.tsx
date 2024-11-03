import React from "react";
import { db } from "@/db";
import { redirect } from "next/navigation";

const SinppetCreatePage = () => {
  async function createSnippet(formData: FormData) {
    // This needs to be a server action!
    "use server";
    // Check the user's inputs and make sure they're valid
    const title = formData.get("title") as string;
    const code = formData.get("code") as string;

    // Create a new record in the database
    const sinppet = await db.snippet.create({
      data: {
        title,
        code,
      },
    });
    console.log(sinppet);

    // Redirect the user back the ther root route
    redirect("/");
  }

  return (
    <form action={createSnippet}>
      <h3 className="font-bold m-3">Create a Snippet</h3>
      <div className="flex flex-col gap-4">
        <div className="flex gap-4">
          <label htmlFor="title" className="w-12">
            Title
          </label>
          <input
            name="title"
            className="border rounded p-2 w-full"
            id="title"
          />
        </div>
        <div className="flex gap-4">
          <label htmlFor="code" className="w-12">
            Code
          </label>
          <textarea
            name="code"
            className="border rounded p-2 w-full"
            id="code"
          />
        </div>

        <button type="submit" className="rounded p-2 bg-blue-200">
          Create
        </button>
      </div>
    </form>
  );
};

export default SinppetCreatePage;
