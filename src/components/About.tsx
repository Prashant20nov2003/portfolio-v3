import Heading from "@/components/Heading";
import Section from "@/components/Section";
import { satoshiMedium } from "@/components/utils/font";
import { Fragment } from "react";

const About = () => {
  return (
    <Section id={0} className="relative h-screen ">
      <article className=" flex flex-col gap-16">
        <Heading text="about me." />

        <div>
          <Fragment>
            <h3 className={`${satoshiMedium.className} text-xl`}>
              Monique McIntyre
            </h3>
            <p className="text">Front End Developer</p>
          </Fragment>
          <br></br>
          <Fragment>
            <p className={`opacity-20 text-sm`}>&#60;p&#62;</p>
            <p className="paragraph ">
              Ut integer phasellus in vel at in ultricies. <br></br> Non semper
              sed fermentum nunc tellus vitae porta ipsum fermentum. <br></br>
              <br></br>
              Convallis tellus aliquet morbi morbi leo quis tincidunt et
              commodo. Non consequat fusce sit molestie nec dis. At enim lacus
              scelerisque integer ac cursus consequat. Convallis tellus aliquet
              morbi morbi leo quis tincidunt et commodo. Non consequat fusce sit
              molestie nec dis. At enim lacus scelerisque integer ac cursus
              consequat.
            </p>
            <p className={`opacity-20 text-sm`}>&#60;&#47;p&#62;</p>
          </Fragment>
        </div>
      </article>
    </Section>
  );
};

export default About;
