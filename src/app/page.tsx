import CreatePost from "@/components/CreatePost";
import { currentUser } from "@clerk/nextjs/server";

export default async function Home() {
  const user = await currentUser();
  return (
    <div className="grid grid-cols-1 lg:grid-cols-10 gap-6">
      <div className="lg:col-span-6 bg-blue-600 h-[100vh]">
        {user ? <CreatePost /> : null}
      </div>
      <div className="hidden lg:block lg:col-span-4 sticky top-20 bg-red-600 h-48">
        who to follow
      </div>
    </div>
  );
}
