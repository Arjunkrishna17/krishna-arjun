import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Image,
  Link,
} from "@nextui-org/react";
import { useRouter } from "next/navigation";

import { projectData } from "../data/project";
import { div } from "three/examples/jsm/nodes/Nodes.js";

interface props {
  data: (typeof projectData)[0];
}

const ProjectCard = ({ data }: props) => {
  const router = useRouter();

  return (
    <Card className="w-96 h-96 xl:w-[500px] xl:h-[450px] col-span-12 sm:col-span-5 bg-gradient-to-r from-slate-900 to-slate-700">
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
        <p className="font-thin px-2 text-xs">{data.description} </p>
      </CardBody>

      <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-end">
        <Button
          onClick={() => router.push("/project/" + data.id)}
          color="primary"
          radius="lg"
          size="md"
        >
          View
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
