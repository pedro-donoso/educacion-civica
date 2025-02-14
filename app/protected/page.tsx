import { createClient } from "@/utils/supabase/server";
import { InfoIcon } from "lucide-react";
import { redirect } from "next/navigation";

export default async function ProtectedPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/sign-in");
  }

  return (
    <div className="flex-1 w-full flex flex-col gap-12"
     style={{

        backgroundImage: 'url("https://definicion.de/wp-content/uploads/2008/07/imputabilidad.png")', // Reemplaza con tu URL

        backgroundSize: 'cover', // Asegura que la imagen cubra toda la pantalla

        backgroundPosition: 'center', // Centra la imagen

        backgroundRepeat: 'no-repeat', // Evita que la imagen se repita

        minHeight: '100vh', // Asegura que el contenedor tenga al menos la altura de la ventana

      }}
    >
      <div className="w-full">
        <div className="bg-accent text-sm p-3 px-5 rounded-md text-foreground flex gap-3 items-center">
          <InfoIcon size="16" strokeWidth={2} />
          Esta es una página protegida que solo puedes ver si está autenticado
        </div>
      </div>

      {/* Mensaje de bienvenida */}
      <div className="bg-green-100 text-green-800 p-4 rounded-md">
        <h2 className="font-bold text-xl">¡Bienvenido, {user.email}!</h2>
      </div>

      {/* Instrucciones del juego */}
      <div className="bg-blue-100 text-blue-800 p-4 rounded-md">
        <h2 className="font-bold text-xl">Instrucciones del Juego</h2>
        <p className="mt-2">
          1. Responde las preguntas de educación cívica seleccionando la opción
          correcta.
        </p>
        <p>2. Cada respuesta correcta te otorgará puntos.</p>
        <p>3. Al final del quiz, verás tu puntuación total.</p>
        <p>4. ¡Diviértete y aprende mientras juegas!</p>
      </div>
    </div>
  );
}