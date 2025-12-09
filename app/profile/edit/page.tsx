import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/auth";
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default async function EditProfile() {
  const session = await getServerSession(authOptions);
  if (!session) return "Not allowed";

  const userId = session.user.id;

  const user = await prisma.user.findUnique({
    where: { id: userId },
  });

  if (!user) return "User not found";

  async function updateProfile(formData: FormData) {
    "use server";

    const name = formData.get("name") as string;

    await prisma.user.update({
      where: { id: userId },
      data: { name },
    });

    revalidatePath("/profile");
    redirect("/profile");
  }

  return (
    <form action={updateProfile} className="max-w-md mx-auto space-y-4 p-6">
      <h1 className="text-2xl font-bold mb-4">Edit Profile</h1>

      <div>
        <label className="block mb-1 text-lg">Name</label>
        <input
          name="name"
          defaultValue={user.name ?? ""}
          className="w-full border p-2 rounded"
          required
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded"
      >
        Update
      </button>
    </form>
  );
}
