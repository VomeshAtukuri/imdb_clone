import Link from "next/link";
import { signIn, auth, signOut } from "@/auth";


export default async function Navbar() {
  const session = await auth();
  
  return (
    <nav className="bg-gray-900 text-white">
      <div className="container mx-auto flex justify-between items-center p-4">
     
        <Link href="/" className="text-xl font-bold text-yellow-500">
          IMDb Clone
        </Link>

      
        <div className="hidden md:flex items-center space-x-6">
          <Link href="/about" className="hover:text-yellow-500">
            About
          </Link>
          <Link href="/movies" className="hover:text-yellow-500">
            Movies
          </Link>
          <Link href="/tvshow" className="hover:text-yellow-500">
            TV Shows
          </Link>
          <Link href="/watchlist" className="hover:text-yellow-500">
            Watchlist
          </Link>
          {session && session?.user ? (
            <>
              <Link href={`/users/${session?.user?.name}`} className="hover:text-yellow-500">
                {session?.user?.name}
              </Link>
              <form
                action={async () => {
                  "use server";
                  await signOut({ callbackUrl: "/" });
                }}
              >
                <button
                  type="submit"
                  className="bg-yellow-500 hover:bg-yellow-600 text-black px-4 py-2 rounded"
                >
                  Sign Out
                </button>
              </form>
            </>
          ) : (
            <form
              action={async () => {
                "use server";
                await signIn("github");
              }}
            >
              <button
                type="submit"
                className="bg-yellow-500 hover:bg-yellow-600 text-black px-4 py-2 rounded"
              >
                Sign In
              </button>
            </form>
          )}
        </div>

        
        <div className="md:hidden">
          <button
            className="text-white focus:outline-none"
            >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
