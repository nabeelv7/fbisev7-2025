import CardSection from "@/components/CardSection";
import papers from "@/app/papers";

export default function Home() {
  return (
    <>
      <div className="max-w-screen-xl mx-auto flex justify-center items-center p-5">
        <h1 className="text-3xl font-medium font-garamond">12 Model Papers</h1>
      </div>
      <CardSection object={papers[12]} />
    </>
  );
}

export const metadata = {
  title: "FBISE Model Papers",
  description: "A collection of all the updated FBISE board model papers",
}
