import getInfo from "@/lib/actions";

export default async function HomePage() {
  const data = await getInfo()
  const stuff = ""

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <div>{data.data}</div>
    </main>
  );
}
