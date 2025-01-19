import { FaLinkedin } from "react-icons/fa6";
import InteractiveForm from "./components/InteractiveForm";


export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-[#EDEADE] w-full">
      <FaLinkedin size={50} color="#0A66C2" />
      <div className="flex flex-col justify-center items-center mt-7 w-full max-w-3xl py-3">
        <p className="text-[#040506] text-3xl font-extrabold">Idea to linkedIn post in seconds.</p>
        <p className="text-[#040506] text-xl">Automate-linkedin is your superhuman linkedIn post writer expert.</p>
      </div>
      <InteractiveForm />
    </div>
  );
}