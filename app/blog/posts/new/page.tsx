import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/auth";
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import PostForm from "@/components/PostForm";

export default async function NewPost() {
  const session = await getServerSession(authOptions);
  if (!session) return "Sign in to create a post";

  async function createPost(formData: FormData) {
    "use server";

    const title = formData.get("title") as string;
    const content = formData.get("content") as string;

    await prisma.post.create({
      data: {
        title,
        content,
        authorId: session.user.id!,
      },
    });

    revalidatePath("/blog/posts");
    redirect("/blog/posts");
  }

  return (
    <PostForm 
      action={createPost}
      mode="create"
    />
  );
}
