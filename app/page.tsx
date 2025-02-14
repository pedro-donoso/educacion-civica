import Hero from "@/components/hero";

export default async function Home() {
  return (
    <>
      <Hero />

      <main className="flex-1 flex flex-col gap-6 px-4">
        <p className="text-gray-500 mb-4">
          Estamos encantados de tenerte aquí. A continuación, inicia sesión con
          las siguientes opciones:
        </p>

        <div className="bg-gray-100 p-4 rounded-md">
          <h2 className="text-lg font-semibold text-gray-700">
            Iniciar sesión
          </h2>
          <div className="mt-2">
            <p className="text-gray-600">
              Email: <span className="font-medium">probono@mail.com</span>
            </p>
            <p className="text-gray-600">
              Contraseña: <span className="font-medium">123456</span>
            </p>
          </div>
        </div>
      </main>
    </>
  );
}