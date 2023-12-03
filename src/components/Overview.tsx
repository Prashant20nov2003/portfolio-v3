import Section from "@/components/Section";
import GradientBackground from "@/components/ui/GradientBackground";
import { satoshiBlack, satoshiMedium } from "@/components/utils/font";

const Overview = () => {
  const title = `<frontend developer />`;
  const medium = satoshiMedium.className;
  const black = satoshiBlack.className;

  return (
    <Section
      className="h-screen flex justify-center items-center relative md:justify-start"
      sectionName="intro"
    >
      <GradientBackground />
      <article className="flex flex-col gap-2 md:gap-3 ">
        <h1 className={`${black} font-bold text-clamp leading-[1.1] `}>
          Hi, I&rsquo;m Monique.
        </h1>
        <p
          className={`${medium} tracking-wide text-[1.2rem] from-white  to-emerald-800 bg-gradient-to-r bg-clip-text text-transparent md:text-2xl`}
        >
          {title}
        </p>
        <p className="paragraph ">
          Developer by day, book enthusiast by night. 😌 With a keen eye for
          design and an obsession for pixel perfection, I specialize in crafting
          elegant and user-friendly websites.
        </p>

        <p className="paragraph leading-6 mt-2">
          <i>
            Do you want a developer? Because that&apos;s how you get a
            developer. - Malory Archer
          </i>
        </p>

        {/* <p className="paragraph leading-6 ">
            I don&apos;t know who you are. I don&apos;t know what you want. If you&apos;re looking for ordinary websites, I can tell you I&apos;m not your developer.
              <br></br> <br></br>
            But what I do have are a very particular set of skills—skills I have acquired over some time. Skills that make me a dream for creating stunning, user-friendly frontend interfaces.
             
          </p> */}
      </article>
    </Section>
  );
};

export default Overview;
