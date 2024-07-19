import { createPost } from "@/actions/actions";

export default function Form() {
  return (
    <form
      action={createPost}
      className="flex flex-col max-w-[400px] mx-auto gap-2 my-10"
    >
      <input
        type="text"
        name="title"
        placeholder="title for new post"
        className="border rounded px-3 h-10"
        required
      />
      <textarea
        name="body"
        placeholder="body for new post"
        className="border rounded px-3 py-2"
        rows={7}
        required
      />
      <button className="h-10 bg-zinc-700 px-5 rounded text-white">
        submit
      </button>
    </form>
  );
}
