import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Button,
} from "@nextui-org/react";
import { projectData } from "../data/project";

interface props {
  data: (typeof projectData)[0];
}

const ProjectCard = ({ data }: props) => {
  return (
    <Card
      isFooterBlurred
      className="w-60 h-60 sm:w-96 sm:h-96 xl:w-[500px] xl:h-[450px] col-span-12 sm:col-span-5 bg-gradient-to-r from-slate-900 to-slate-700"
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

        <h3 className="text-white px-2 py-5 text-lg font-bold">{data.name}</h3>
        <p className="font-thin px-2 ">
          {data.description}{" "}
          {data.paid && (
            <span className="text-white cursor-pointer font-semibold hover:underline">
              Read more
            </span>
          )}
        </p>
      </CardBody>

      <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-end">
        <a href={data.link} target="_blank">
          <Button className="text-md" color="primary" radius="full" size="sm">
            Live demo
          </Button>
        </a>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
