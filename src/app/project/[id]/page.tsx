"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import axios from "axios";
import Loading from "@/app/loading";
import { FaGithub } from "react-icons/fa";
import { GrSend } from "react-icons/gr";
import { IoCaretBackCircle } from "react-icons/io5";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";

function Page() {
  const { id: projectId } = useParams();
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [imageLoading, setImageLoading] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1200, // Increase the duration for smoother animations
      easing: 'ease-in-out', // Use a smooth easing function
      once: true, // Ensure animations occur only once when scrolling down
      mirror: false // Disable animations when scrolling back up
    });

    if (projectId) {
      setLoading(true);
      setError("");
      axios
        .get(
          `https://portfolio-backend-sable-delta.vercel.app/api/projects/${projectId}`
        )
        .then((response) => {
          setData(response.data);
          setLoading(false);
          AOS.refresh(); // Refresh AOS to apply animations on dynamically loaded content
        })
        .catch((error) => {
          setError("فشل في جلب بيانات المشروع");
          setLoading(false);
        });
    }
  }, [projectId]);

  return loading || imageLoading ? (
    <Loading />
  ) : (
    <div
      style={{
        position: "relative",
        background: "linear-gradient(to bottom, gray 200px, black 200px)",
      }}
      className="min-h-screen cursor-default overflow-hidden py-20"
    >
      <div className="container">
        <div className="relative bg-gray-50 rounded-xl overflow-hidden" data-aos="fade-up">
          {error && <p className="text-red-500">{error}</p>}
          {data && (
            <div>
              <div className="py-20 px-10 lg:px-40 xl:px-52">
                <Link href="/" className="cursor-none">
                  <div className="bg-secoundDarkBg w-fit mb-4 flex justify-center items-center text-xs px-2 py-1 rounded-full gap-2 hover:text-black hover:bg-gray-300 duration-300 hover:scale-105 text-white">
                    <IoCaretBackCircle />
                    <span>back</span>
                  </div>
                </Link>
                <div className="flex flex-wrap flex-col md:flex-row items-center justify-between mb-20">
                  <h1 className="font-bold text-3xl capitalize" data-aos="fade-right">
                    {data.title}
                  </h1>
                  <div className="flex space-x-4 capitalize">
                    {data.githubLink && (
                      <a href={data.githubLink} target="_blank">
                        <div className="bg-secoundDarkBg w-fit m-auto flex justify-center items-center text-sm px-3 py-1 rounded-full mt-6 gap-2 hover:text-black hover:bg-gray-300 duration-300 hover:scale-105 text-white" >
                          <FaGithub />
                          <span>source code</span>
                        </div>
                      </a>
                    )}
                    {data.appLink && (
                      <a href={data.appLink} target="_blank">
                        <div className="bg-[#E41B3F] w-fit m-auto flex justify-center items-center text-sm px-3 py-1 rounded-full mt-6 gap-2 hover:text-black hover:bg-gray-300 duration-300 hover:scale-105 text-white">
                          <GrSend />
                          <span>visit website</span>
                        </div>
                      </a>
                    )}
                  </div>
                </div>
                <div className="table-auto w-full">
                  <div className="w-full overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                      <tbody>
                        <tr className="flex flex-col sm:flex-row gap-4 sm:gap-10 mb-10" data-aos="fade-up">
                          <td className="text-gray-400 font-semibold py-2 pr-4 w-1/6">
                            Skills
                          </td>
                          <td className="flex flex-wrap gap-4 md:w-2/3">
                            {data.skills.map((s: any) => (
                              <a key={s._id} href={s.link} target="_blank" rel="noopener noreferrer">
                                <p className="px-2 py-1 text-sm border border-black opacity-40 rounded-full hover:opacity-50 hover:scale-105 duration-300">
                                  {s.title}
                                </p>
                              </a>
                            ))}
                          </td>
                        </tr>
                        <tr className="flex flex-col sm:flex-row gap-4 sm:gap-10" data-aos="fade-up">
                          <td className="text-gray-400 font-semibold py-2 pr-4 w-1/6">
                            Description
                          </td>
                          <td className="md:w-2/3 opacity-40 text-sm">
                            {data.description}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          )}
          <div className="w-full relative">
            <div className="bg-[#E41B3F] h-1"></div>
            <Image
              onLoadingComplete={() => setImageLoading(false)}
              src={data.image.large.url}
              layout="responsive"
              width={100}
              height={30}
              alt={data.title || "Project image"}
              className="rounded-b-xl"
              data-aos="fade-in"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
