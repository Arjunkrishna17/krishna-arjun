import { Button, Card, CardBody, CardFooter, Image } from "@nextui-org/react";

interface props {
  src: string;
  heading: string;
  link: string;
}

const BlogCard = ({ src, heading, link }: props) => {
  return (
    <Card
      isFooterBlurred
      className="w-60  sm:w-80  xl:w-[300px] xl:h-[300px] col-span-12 sm:col-span-5 bg-gradient-to-r from-slate-900 to-slate-700 border"
    >
      <CardBody className="relative overflow-visible py-2 px-5  text-white">
        <Image src={src} alt={src} className="object-cover rounded-xl w-full" />
        <h4>{heading}</h4>
      </CardBody>
      <CardFooter>
        <a href={link} target="_blank">
          <Button>Read </Button>
        </a>
      </CardFooter>
    </Card>
  );
};

export default BlogCard;
