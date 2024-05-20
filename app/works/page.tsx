import React from "react";
import { motion } from "framer-motion";

import Image from "next/image";
import Link from "next/link";
import Layout from "../components/Layout";
import localImage from "./img/test.jpg";
import youtubeImage from "./img/yt.png";
import rsImage from "./img/rs.png";
import v2iImage from "./img/v2i.png";
import arduinoImage from "./img/arduino.png";
import accImage from "./img/acc.png";
import humanImage from "./img/human.png";
import portImage from "./img/port.png";

const items = [
  {
    id: 1,
    title: "Youtube Downloader",
    image: youtubeImage,
    link: "https://github.com/asasakk/youtube-dl",
  },
  {
    id: 2,
    title: "RelativeStrength-Calc",
    image: rsImage,
    link: "https://github.com/asasakk/Relative-Strength-calc",
  },
  {
    id: 3,
    title: "Video to Image",
    image: v2iImage,
    link: "https://github.com/asasakk/video2img",
  },
  {
    id: 4,
    title: "ObjectDetectionArduinoController",
    image: arduinoImage,
    link: "https://github.com/asasakk/ObjectDetectionArduinoController",
  },
  {
    id: 5,
    title: "AccelerometerMusicPlayer",
    image: accImage,
    link: "https://github.com/asasakk/AccelerometerMusicPlayer",
  },
  {
    id: 6,
    title: "Human Detection.js",
    image: humanImage,
    link: "https://github.com/asasakk/human-detection.js",
  },
  {
    id: 7,
    title: "Portfolio",
    image: portImage,
    link: "https://github.com/asasakk/portfolio",
  },
];

export default function Works() {
  return (
    <Layout>
      <main className="flex min-h-screen flex-col items-center justify-between p-8 sm:p-12 md:p-16 lg:p-24 xl:p-48">
        <div className="mt-16 sm:mt-20 md:mt-24 lg:mt-28 xl:mt-32">
          <h1 className="text-[min(13vw,100px)]">Works</h1>
        </div>
        <div className="gap-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-12">
          {items.map((item) => (
            <Link href={item.link} key={item.id}>
              <div className="w-full h-auto">
                <Image
                  src={item.image}
                  alt={item.title}
                  className="w-full h-auto"
                />
                <p className="mt-2 text-center">{item.title}</p>
              </div>
            </Link>
          ))}
        </div>
        
      </main>
    </Layout>
  );
}
