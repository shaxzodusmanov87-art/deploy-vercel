import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/auth";
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import PostForm from "@/components/PostForm";

export default async function EditPost({ params }: { params: Promise<{ id: string }> }) {
    const session = await getServerSession(authOptions);
    if (!session) return "Not allowed";
  
    const { id } = await params;
  
    const postId = Number(id);   // ID поста у тебя числовой — это норма
    const userId = session.user.id; // А вот user.id — всегда строка UUID
  
    const post = await prisma.post.findUnique({
      where: { id: postId },
    });
  
    if (!post) return "Post not found";
    if (post.authorId !== userId) return "Not your post";
  
    async function updatePost(formData: FormData) {
      "use server";
  
      const title = formData.get("title") as string;
      const content = formData.get("content") as string;
  
      await prisma.post.update({
        where: { id: postId },
        data: { title, content },
      });
  
      revalidatePath("/blog/posts");
      redirect("/blog/posts");
    }
  
    return (
      <PostForm
        action={updatePost}
        mode="edit"
        initialTitle={post.title}
        initialContent={post.content}
      />
    );
  }
  