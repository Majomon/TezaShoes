import FormLogin from "@/components/Login/FormLogin";
import { Toaster } from "sonner";

function Login() {
  return (
    <div className="w-10/12 h-[90vh] mx-auto p-10">
      <Toaster position="top-center" />
      <div className="w-full h-full border rounded-xl flex">
        <img
          src="/login/Login1.jpg"
          alt="Login"
          className="w-5/12 h-full rounded-tl-xl rounded-bl-xl "
        />
        <div className="w-7/12 h-full ">
          <FormLogin />
        </div>
      </div>
    </div>
  );
}

export default Login;
