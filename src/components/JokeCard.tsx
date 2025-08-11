import type { Joke } from "../types/joke";
import VoteButton from "./VoteButtons";

interface Props {
  joke: Joke;
  onVote: (type: "like" | "dislike") => void;
}

export default function JokeCard({ joke, onVote }: Props) {
  return (
    <section className="flex-1 max-w-4xl mx-auto p-8 w-full">
      <article className="bg-white p-8">
        <div className="min-h-[180px]">
          <p className="text-black leading-relaxed mb-16">{joke.content}</p>
        </div>
        <div className="flex flex-col md:flex-row md:items-center gap-6 justify-center">
          <VoteButton
            label="This is Funny!"
            colorClass="bg-primary"
            onClick={() => onVote("like")}
          />
          <VoteButton
            label="This is not funny."
            colorClass="bg-brand"
            onClick={() => onVote("dislike")}
          />
        </div>
      </article>
    </section>
  );
}
