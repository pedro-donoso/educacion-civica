import { resetPasswordAction } from "@/app/actions";
import { FormMessage, Message } from "@/components/form-message";
import { SubmitButton } from "@/components/submit-button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default async function ResetPassword(props: {
  searchParams: Promise<Message>;
}) {
  const searchParams = await props.searchParams;
  return (
    <form className="flex flex-col w-full max-w-md p-4 gap-2 [&>input]:mb-4">
      <h1 className="text-2xl font-medium">Resetear Contraseña</h1>
      <p className="text-sm text-foreground/60">
        Por favor, introduce tu nueva contraseña.
      </p>
      <Label htmlFor="password">Nueva contraseña</Label>
      <Input
        type="password"
        name="password"
        placeholder="Nueva contraseña"
        required
      />
      <Label htmlFor="confirmPassword">Confirmar contraseña</Label>
      <Input
        type="password"
        name="confirmPassword"
        placeholder="Confirmar contraseña"
        required
      />
      <SubmitButton formAction={resetPasswordAction}>
        Resetear contraseña
      </SubmitButton>
      <FormMessage message={searchParams} />
    </form>
  );
}
