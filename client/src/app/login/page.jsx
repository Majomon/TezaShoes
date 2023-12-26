import MainLogin from "@/components/Login/MainLogin";
import { Toaster } from "sonner";

export const metadata = {
  title: "TezaShoes - Login",
  description: "Login de la web de TezaShoes",
};

async function urlBase() {
  const urlBaseDev = process.env.URL_BASE_DEV;
  return urlBaseDev;
}

async function Login() {
  const url= await urlBase()
  
  return (
    <div className="w-10/12 h-[90vh] mx-auto p-10">
      <Toaster position="top-center" />
      <MainLogin url={url}/>
    </div>
  );
}

export default Login;
