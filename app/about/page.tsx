import Image from "next/image";
import Layout from "../components/Layout";


export default function About() {
  return (
    <Layout>
      <main className="flex min-h-screen flex-col items-center justify-between pt-48">
        <h1 className="text-[min(13vw,100px)]">About me</h1>
      </main>
    </Layout>
  );
}
