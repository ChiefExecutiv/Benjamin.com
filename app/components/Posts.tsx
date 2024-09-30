import { getSortedPostsData } from "@/lib/posts"
import ListItem from "./ListItem"
import { GeistMono } from 'geist/font/mono';

export default function Posts() {
    const posts = getSortedPostsData()

    return (
        <main className={`${GeistMono.className} max-w-2xl m-auto mb-10 text-sm`}>
        <header className="text-gray-500 dark:text-gray-600 flex items-center text-xs">
          <button className="w-12 h-9 text-left text-gray-700 dark:text-gray-400">
            date
          </button>
          <span className="grow pl-2">title</span>

          {/*<button className="h-9 pl-4 text-gray-700 dark:text-gray-400">
            views
          </button>*/}
        </header>

        <List />
      </main>
    )
}

function List() {
    const posts = getSortedPostsData()
    return (
        <ul>
                {posts.map(post => (
                    <ListItem key={post.id} post={post} />
                ))}
        </ul>
    )
}