import { DiscussionTopics } from "./components/discussion-topics";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { Hero } from "./components/hero";
import { HurryUp } from "./components/hurry-up";
import { Speakers } from "./components/speakers";
import { Sponsors } from "./components/sponsors";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <HurryUp />
        <DiscussionTopics />
        <Sponsors />
        <Speakers />
      </main>
      <Footer />
    </>
  )
}