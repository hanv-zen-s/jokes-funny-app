import { useJokes } from "../hooks/useJokes";
import JokeCard from "../components/JokeCard";

export default function HomePage() {
  const { current, finished, vote } = useJokes();

  if (finished) {
    return (
      <div className="max-w-4xl mx-auto p-6 text-center">
        <div className="bg-white rounded p-10">
          <h2 className="text-5xl font-semibold mb-4">
            That's all the jokes for today!
          </h2>
          <p className="text-gray-600">Come back another day!</p>
        </div>
      </div>
    );
  }

  if (!current) return null;

  return (
    <>
      <section className="bg-brand text-white py-16 min-h-[196px]">
        <div className="max-w-4xl mx-auto px-6 text-center ">
          <h1 className="text-3xl md:text-4xl font-bold">
            A joke a day keeps the doctor away
          </h1>
          <p className="mt-2 opacity-90 font-medium text-sm">
            If you joke wrong way, your teeth have to pay. (Serious)
          </p>
        </div>
      </section>
      <JokeCard joke={current} onVote={vote} />
    </>
  );
}
