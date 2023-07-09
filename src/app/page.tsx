'use client'

import CardQuestion from "./components/CardQuestion";
import { questions } from "./data/questions";

const Home = () => {
  const title = 'Quiz de Culinária'
  return (
    <div className="bg-blue-600 h-screen flex text-center justify-center items-center text-black">
      <div className="w-full max-w-xl rounded-md bg-white">
        <div className="p-5 font-bold text-2xl">{title}</div>
        <div className="p-5">
          ...
        </div>
      </div>
    </div>
  )
}
export default Home;