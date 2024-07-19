import Form from "@/components/form";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";

export default async function CreatePost() {
  return (
    <main className="text-center pt-16">
      <h1 className="text-3xl md:text-4xl font-bold">create post</h1>
      <Form />
      <LogoutLink className="bg-zinc-200 py-2 px-5 rounded">log out</LogoutLink>
    </main>
  );
}
