import { LoginContainer } from "@/components/admin/LoginContainer";
import { logo } from "@/app/assets/assets";
import Image from "next/image";

export const metadata = {
  title: "Admin | Login",
  description: "Admin login page",
};

export default function AdminLoginPage() {
  return (
    <div className="min-h-svh grid md:grid-cols-2">
      <div className="relative hidden bg-white md:flex my-auto w-full px-8 justify-center">
        <Image
          src={logo}
          alt="Concrete Solutions Logo"
          className="absolute inset-0 object-contain top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-md"
        />
      </div>
      <div className="flex my-auto w-full px-8 justify-center min-h-svh bg-gray-50">
        <LoginContainer />
      </div>
    </div>
  );
}