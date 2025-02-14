// import Hero from "@/components/hero";
// import ConnectSupabaseSteps from "@/components/tutorial/connect-supabase-steps";
// import SignUpUserSteps from "@/components/tutorial/sign-up-user-steps";
// import { hasEnvVars } from "@/utils/supabase/check-env-vars";

// export default async function Home() {
//   return (
//     <>
//       <Hero />
//       <main className="flex-1 flex flex-col gap-6 px-4">
//         <h2 className="font-medium text-xl mb-4">Next steps</h2>
//         {hasEnvVars ? <SignUpUserSteps /> : <ConnectSupabaseSteps />}
//       </main>
//     </>
//   );
// }

import Hero from "@/components/hero";

export default async function Home() {
  return (
    <>
      <Hero />

      <main className="flex-1 flex flex-col gap-6 px-4">
        <p className="text-gray-500 mb-4">
          Estamos encantados de tenerte aquí. A continuación, Inicia sesion con las siguientes opciones:

          Iniciar sesion

          Email: probono@mail.com
          Contraseña: 123456
        </p>
      </main>
    </>
  );
}