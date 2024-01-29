import Login from "@/pages/login";
import Image from "next/image";
import Car from '../component/Dashboard/Car'

export default function Home() {
  return (
    <div>
      <Login />
      <Car />
    </div>
  );
}
