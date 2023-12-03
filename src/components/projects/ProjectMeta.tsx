import { URL } from "@/components/utils/projectInfo";
import Link from "next/link";
import { IconType } from "react-icons";

interface Props {
  icon: React.ReactElement<IconType>;
  name: string;
  content?: URL | string[];
}

const ProjectMeta = (props: Props) => {
  const { icon, name, content } = props;

  return (
    <p className="grid grid-cols-[20px,50px,1fr] pl gap-4 mb-3">
      <span>{icon}</span>
      <span className="text-secondary w-fit">{name}</span>

      {Array.isArray(content) ? (
        <span className="text-overflow line-clamp-1">{content.join(", ")}</span>
      ) : (
        <Link
          href={content?.href as string}
          target="_blank"
          rel="noreferrer"
          className="text-overflow line-clamp-1 hover:underline hover:underline-offset-4 cursor-pointer"
        >
          {content?.name}
        </Link>
      )}
    </p>
  );
};

export default ProjectMeta;
