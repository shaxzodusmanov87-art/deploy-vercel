"use client";

import Form from "next/form";

export default function PostForm({ 
  action,
  mode,
  initialTitle = "",
  initialContent = "",
}: {
  action: (formData: FormData) => void;
  mode: "create" | "edit";
  initialTitle?: string;
  initialContent?: string;
}) {
  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">
        {mode === "create" ? "Create New Post" : "Edit Post"}
      </h1>

      <Form action={action} className="space-y-6">
        <div>
          <label htmlFor="title" className="block text-lg mb-2">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            defaultValue={initialTitle}
            className="w-full px-4 py-2 border rounded-lg"
          />
        </div>

        <div>
          <label htmlFor="content" className="block text-lg mb-2">
            Content
          </label>
          <textarea
            id="content"
            name="content"
            defaultValue={initialContent}
            rows={6}
            className="w-full px-4 py-2 border rounded-lg"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600"
        >
          {mode === "create" ? "Create Post" : "Update Post"}
        </button>
      </Form>
    </div>
  );
}
