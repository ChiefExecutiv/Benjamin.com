import React from 'react'
import Link from 'next/link';
import getFormattedDate from '@/lib/getFormatedDate';

type Props = {
    post: BlogPost
}

export default function ListItem({ post }: Props) {
    const {id, title, date } = post
    const formattedDate = getFormattedDate(date, false)
    const styles = ""
    return (
        <li className='hover:bg-gray-200 transition duration-100 ease-in'>
            <Link href={`/posts/${id}`}>
                <span className='flex border-t border-gray-200'>
                    <span className='pt-3 pb-3 flex items-center flex-grow'>
                        <span className='inline-block self-start flex-shrink-0 w-14 text-gray-500'>
                            {formattedDate}
                        </span>
                        <span className=''>
                            {title}
                        </span>
                    </span>
                </span>
            </Link>
        </li>
    )
}