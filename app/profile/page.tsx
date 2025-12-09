import { getServerSession } from "next-auth";
import prisma from "@/lib/prisma";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { authOptions } from "../api/auth/[...nextauth]/auth";

export default async function ProfilePage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    return (
      <div className="max-w-xl mx-auto p-6 text-center">
        <h1 className="text-2xl font-bold mb-4">Вы не авторизованы</h1>
        <Link href="/api/auth/signin">
          <Button>Войти</Button>
        </Link>
      </div>
    );
  }

  const user = await prisma.user.findUnique({
    where: { email: session.user?.email || "" },
    include: { posts: true },
  });

  return (
    <div className="max-w-2xl mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-bold mb-4">Мой профиль</h1>

      <Card className="shadow-lg">
        <CardContent className="p-4 space-y-3">
          <p><strong>Имя:</strong> {user?.name}</p>
          <p><strong>Email:</strong> {user?.email}</p>

          <Link href="/profile/edit">
            <Button className="mt-4">Редактировать профиль</Button>
          </Link>
        </CardContent>
      </Card>

      <h2 className="text-xl font-semibold">Мои посты</h2>
      <div className="space-y-4">
        {user?.posts.map(post => (
          <Card key={post.id} className="shadow-md">
            <CardContent className="p-4">
              <h3 className="text-lg font-semibold">{post.title}</h3>
              <p className="text-gray-700 mt-2">{post.content}</p>
              <Link href={`blog/posts/${post.id}/edit`}>
                <Button className="mt-3">Редактировать</Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}