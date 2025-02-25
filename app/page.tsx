import Link from "next/link"

export default function About() {
    return (
        <article className="" style={{color: "rgb(31 41 55)"}}>
            <h1 className="font-bold my-5">About</h1>

            <p className="">
                I'm Benjamin Kawuki, a student of economics and computer programmer.
                I spend considerable time learning, exploring, as Steve Jobs put it "Find something you love". 
            </p>
            
            <p className="my-5">
                I've always been curious about the processes and operations of computer software. More so now I've been
                very interested in emerging technology which compelled me to learn how these tools are made and exactly
                what processes and calculations bring them to life.
            </p>

            <p className="my-5">
                Currently, I'm a student of Economics at Makerere University Business School. A course which has 
                given me even further insight into working with and computationally modelling real-world data. 
            </p>

            <p className="my-5">
                Feel free to explore some of my <Link href="/Thoughts" className="underline decoration-1 underline-offset-2">writing</Link> and <Link href="/Projects" className="underline decoration-1 underline-offset-2">Projects</Link>
            </p>

        </article>
    )
}