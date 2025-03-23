export default async function Home() {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="flex items-center justify-center flex-col border border-amber-400 p-8 rounded-lg text-center w-[40%] h-[40%]">
        <h1 className="text-2xl font-bold mb-4">DREAMFOOT</h1>
        <div className="flex flex-col space-y-2">
          <a href="/new-game" className="text-blue-500 hover:underline">Novo jogo</a>
          <a href="/load-game" className="text-blue-500 hover:underline">Carregar jogo</a>
          <a href="/editor" className="text-blue-500 hover:underline">Editor</a>
          <a href="/about-game" className="text-blue-500 hover:underline">Sobre o jogo</a>
        </div>
      </div>
    </div>
  );
}
