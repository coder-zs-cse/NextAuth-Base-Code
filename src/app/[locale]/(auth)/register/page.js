import RegisterForm from "@/components/auth/RegisterForm";
import Link from "next/link";

function Register() {
  return (
    <div className=" bg-gray-100 flex flex-col justify-center py-6 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className=" text-center text-3xl font-extrabold text-gray-900">
          Create your account
        </h2>
      </div>
      <RegisterForm />
    </div>
  );
}

export default Register;
