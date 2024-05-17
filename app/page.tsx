import Image from "next/image";
import Link from "next/link";
import localImage from "./img/icon2.png";
import "./styles/style.css";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center pt-24 md:pt-48 ">
      <div className="py-8">My Portfolio</div>
      <Image src={localImage} alt="うちのねこ" />

      <Link href="/about" legacyBehavior>
        <a className="pt-8 hover:text-gray-900 custom-mr-5">About me</a>
      </Link>
      <Link href="/works" legacyBehavior>
        <a className="pt-8 hover:text-gray-900 custom-mr-5">Works</a>
      </Link>
    </main>
  );
}
