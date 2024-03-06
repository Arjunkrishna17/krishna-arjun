import { Card, CardBody, CardFooter, Image, Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";

import { projectData } from "../data/project";

interface props {
  data: (typeof projectData)[0];
}

const ProjectCard = ({ data }: props) => {
  const router = useRouter();

  return (
    <Card
      isFooterBlurred
      onPress={() => router.push("/project/" + data.id)}
      isPressable={true}
      className="w-96 h-96 xl:w-[500px] xl:h-[450px] col-span-12 sm:col-span-5 bg-gradient-to-r from-slate-900 to-slate-700"
    >
      <CardBody className="relative overflow-visible py-2  text-white">
        <Image
          alt="Card background"
          className="object-cover rounded-xl w-full"
          src={data.img}
        />

        {data.paid && (
          <div className="absolute z-40 w-20 py-2 text-center rounded-r-lg bg-violet-500 text-sm text-white">
            Paid App
          </div>
        )}

        <h3 className="text-white px-2 py-5 xl:text-lg font-semibold xl:font-bold">
          {data.name}
        </h3>
        <p className="font-thin px-2 text-xs">
          {data.description}{" "}
          {data.paid && (
            <span
              onClick={() => router.push("/project/" + data.id)}
              className="text-white cursor-pointer font-semibold hover:underline"
            >
              Read more
            </span>
          )}
        </p>
      </CardBody>

      <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-end">
        <a href={data.link} target="_blank">
          <Button
            className="lg:text-md"
            color="primary"
            radius="full"
            size="sm"
          >
            Live demo
          </Button>
        </a>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
