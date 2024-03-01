import { backend, frontend, other } from "../data/skills";
import SkillsetAnimator from "./SkillsetAnimator";

const Skills = () => {
  return (
    <section
      id="Skills"
      className="flex flex-wrap flex-col w-full h-screen justify-center  items-center gap-16 px-5"
    >
      <h1 className="text-2xl md:text-4xl text-white">Technology I use</h1>

      <div className="flex flex-wrap  gap-x-5 gap-y-2 item-center justify-center">
        {frontend.map((tech, i) => (
          <SkillsetAnimator src={tech} index={i} key={tech + i} />
        ))}
      </div>

      <div className="flex flex-wrap  gap-x-5 gap-y-2 item-center justify-center">
        {backend.map((tech, i) => (
          <SkillsetAnimator src={tech} index={i} key={tech + i} />
        ))}
      </div>
      <div className="flex flex-wrap  gap-x-5 gap-y-2 item-center justify-center">
        {other.map((tech, i) => (
          <SkillsetAnimator src={tech} index={i} key={tech + i} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
