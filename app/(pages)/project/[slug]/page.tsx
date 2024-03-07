"use client";

import { readMore } from "@/app/data/readMore";
import { Button, Link } from "@nextui-org/react";

import Image from "next/image";
import { useRouter } from "next/navigation";

const ProjectDetails = ({ params }: { params: { slug: string } }) => {
  const router = useRouter();

  const projectDetails =
    readMore?.[params.slug?.toString() as keyof typeof readMore];

  if (!projectDetails) return null;

  return (
    <div className="flex flex-col h-screen  relative z-40 bg-gradient-to-tl from-slate-900 via-slate-900 to-blue-900 text-white">
      <div className="flex flex-col space-y-8 py-5 px-10 overflow-auto ">
        <div className="flex w-full">
          <Button onClick={() => router.back()} color="primary">
            Go back
          </Button>
        </div>

        <div className="flex flex-col space-y-3">
          <h1 className="font-bold text-xl">{projectDetails.name}</h1>

          <Link
            target="_blank"
            href={projectDetails.link}
            color="warning"
            showAnchorIcon
          >
            {projectDetails.paid ? "Go to site" : "Live Demo"}
          </Link>
        </div>

        <div className="flex w-full items-center justify-center pt-5">
          {projectDetails.video ? (
            <video
              autoPlay={true}
              width="640"
              height="360"
              className="w-[800px]"
              controls
              muted
            >
              <source src={"/video/" + projectDetails.video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : (
            <Image
              src={projectDetails.img}
              alt={projectDetails.name}
              width="640"
              height="360"
              className="w-[800px]"
              priority
              unoptimized={true}
            />
          )}
        </div>

        <p>{"Tech Stack: " + projectDetails.techStack}</p>

        <div
          dangerouslySetInnerHTML={{ __html: projectDetails.description }}
          className="flex flex-col space-y-5"
        ></div>

        {projectDetails.paid && (
          <div className="flex flex-wrap space-x-1">
            <span>Please</span>
            <Link
              target="_blank"
              href={"https://linkedin.com/in/krishnaarjuntech"}
              color="warning"
              showAnchorIcon
            >
              connect
            </Link>
            <span>with me for Demo!</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectDetails;
