import Link from "next/link"

export default function About() {
    return (
        <article className="" style={{color: "rgb(31 41 55)"}}>
            <h1 className="font-bold my-5">About Me</h1>

            <p className="">
                I'm Benjamin Kawuki David, a student of economics.
                I spend considerable time learning, exploring, as Steve Jobs put it "Find something you love". 
                In that case, I love a lot of things. 
                I have a vast range of interests, from computers, computer software and economics.
            </p>

            <p className="my-5">
                A lot of my projects and work revolve around economic modelling, algorithm design 
                especially in the machine learning department. 
                I firmly believe in using the best tools to ensure welfare and opportunity for all humans.
            </p>

            <p className="my-5">
                "Be not as you are, but as you should be" -- High Evolutionary. 
                That has been my personal philosophy carrying forward. To better oneself and 
                become the best version of you possible, that's where I find fulfilment.
            </p>

            <p className="my-5">
                Feel free to explore some of my <Link href="/">writing</Link> and <Link href="/Dashboard">Projects</Link>
            </p>

        </article>
    )
}