import getFormattedDate from "@/lib/getFormatedDate";
import { getPostData, getSortedPostsData } from "@/lib/posts";
import { notFound } from "next/navigation";
import Link from "next/link";
import styles from '@/app/ui/home.module.css';
import { GeistMono } from "geist/font/mono";

export function generateMetadata({ params }: { params: { postId: string } }) {

    const posts = getSortedPostsData();
    const { postId } = params;

    const post = posts.find(post => post.id === postId);

    if (!post) {
        return {
            title: 'Post Not Found'
        };
    }
    return {
        title: post.title,
    };
}

export default async function Post({ params }: { params: { postId: string } }) {
    const posts = getSortedPostsData(); // deduped!
    const { postId } = params;

    if (!posts.find(post => post.id === postId)) {
        return notFound();
    }

    const { title, date, contentHtml } = await getPostData(postId);
    const pubDate = getFormattedDate(date, true);

    return (
        <main className="prose prose-xl prose-slate dark:prose-invert max-auto">
            <h1 className="text-2xl font-bold mt-1 mb-1 text-black-default dark:text-gray-100">{title}</h1>
            <p className={`${GeistMono.className} text-xs mt-0 text-black-default`}>
                {pubDate}
            </p>
            <article className={styles.article} dangerouslySetInnerHTML={{ __html: contentHtml }} />
        </main>
    );
}
