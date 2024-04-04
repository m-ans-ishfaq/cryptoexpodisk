import Image from "next/image";
import { DISCUSSION_TOPICS } from "../data/discussion-topics";

export function DiscussionTopics()
{
    return (
        <section id="discussion-topics" className="flex justify-center py-20 px-4">
            <div className="container flex flex-col justify-center">
                <div className="flex flex-col gap-2 md:gap-4 text-center">
                    <h2 className="text-3xl md:text-5xl font-bold">
                        Discussion Topics
                    </h2>
                    <p className="md:text-xl font-medium text-neutral-800">
                        Identifying the gamechanging trends in the web 3.0 ecosystem
                    </p>
                </div>
                
                <ul className="mt-20 shadow-lg">
                    {DISCUSSION_TOPICS.map(({title, description, people}, key1) => (
                        <li key={key1} className={`flex flex-col md:flex-row gap-4 mx-8 py-8 ` + (key1 + 1 == DISCUSSION_TOPICS.length ? "" : "border-b-2 border-neutral-400 border-dotted")}>
                            <div className="flex flex-col gap-4 md:w-[25%]">
                                {people.map(({person, company, avatar}, key2) => (
                                    <div key={key2} className="flex flex-col items-center text-center">
                                        <div className="bg-primary-yellow rounded-full w-16 overflow-hidden">
                                            <Image src={avatar} alt={person} />
                                        </div>
                                        <strong className="text-lg md:text-2xl">{person}</strong>
                                        <span>{company}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="md:w-[75%] md:flex flex-col justify-center gap-4 pl-4 border-l-2 border-neutral-300">
                                <h4 className="font-bold text-xl md:text-3xl">{title}</h4>
                                <p className="text-justify">{description}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}