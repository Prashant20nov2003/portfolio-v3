import Heading from "@/components/Heading";
import Section from "@/components/Section";
import Link from "next/link";

import {
  AiFillLinkedin,
  AiOutlineGithub,
  AiOutlineTwitter,
} from "react-icons/ai";
import { HiMail } from "react-icons/hi";

const size = 25;

const platforms = [
  {
    icon: <AiOutlineGithub size={size} />,
    username: "m-oniqu3",
    link: "https://github.com/m-oniqu3",
  },
  {
    icon: <AiOutlineTwitter size={size} />,
    username: "ctrlaltmonique",
    link: "https://twitter.com/ctrlaltmonique",
  },
  {
    icon: <HiMail size={size} />,
    username: "monique.mcin8@gmail.com",
    link: "",
  },
  {
    icon: <AiFillLinkedin size={size} />,
    username: "monique mcintyre",
    link: "https://www.linkedin.com/in/monique-mcintyre/",
  },
];

const Contact = () => {
  const contacts = platforms.map((platform) => {
    return (
      <li
        key={platform.username}
        className="grid grid-cols-[10%,1fr] items-center gap-2 pb-4 "
      >
        <span className="w-7 h-7 flex items-center justify-start">
          {platform.icon}
        </span>
        <Link
          href={platform.link}
          className="hover:underline hover:underline-offset-4 animation grid place-items-center justify-start"
          target="_blank"
        >
          {platform.username}
        </Link>
      </li>
    );
  });

  return (
    <Section sectionName="contact" className="spacing pb-28 md:pb-0 ">
      <article className="flex flex-col gap-16">
        <Heading text="contact." />

        <div>
          <p className={`opacity-20 text-sm`}>&#60;p&#62;</p>
          <p className="paragraph">
            If you would like to get in touch, talk to me about a project
            collaboration or just say hi, you can reach out to me on any one of
            these platforms.
          </p>
          <p className={`opacity-20 text-sm`}>&#60;&#47;p&#62;</p>
        </div>

        <ul>{contacts}</ul>
      </article>
    </Section>
  );
};

export default Contact;
