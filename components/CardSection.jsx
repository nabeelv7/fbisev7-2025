import { CardSpotlight } from "./ui/card-spotlight";

export default function CardSection({ object }) {
    return (
        <main className="max-w-screen-xl justify-center items-center mx-auto flex text-xl flex-wrap gap-5 px-5">
            {object.map((paper, i) => {
                return (
                    <a className="max-md:w-full" key={i} href={paper.link} target="_blank">
                        <Card>
                            <h1>{paper.name}</h1>
                        </Card>
                    </a>
                )
            })}
        </main >
    )
}

export function Card({ children }) {
    return (
        <CardSpotlight className="flex md:w-100 w-full">
            {children}
        </CardSpotlight>
    )
}