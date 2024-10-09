import LoginForm from "../../components/frontend/LoginForm"

export default function Login() {
  return (
    <section className="bg-gray-50 dark:bg-gray-900 ">
      <div className="flex flex-col items-center px-6 py-8 mx-auto md:h-screen ">
      <img src="/images/logo.png" alt="Logo" className="mb-8 w-24 h-24" />

        <div className="w-full bg-white rounded-lg shadow-2xl dark:border 
        md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700 ">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 
            md:text-2xl dark:text-white text-center mb-10">
              Please Login First!
            </h1>
            <LoginForm />
          </div>
        </div>
      </div>
    </section>
  );
}
