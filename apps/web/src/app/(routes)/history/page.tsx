import { TimelineDemo } from "@/app/blocks/timeline/Timelinecomp";
import HeroInnerBlock from "@/app/components/common/hero-inner/Hero-inner";
import { HeroInnerAboutData } from "@/app/hooks/data";

const TimelinePage = () => {
  return (
    <>
      <HeroInnerBlock
        title={"History"}
        image={"/hero/gallery-14a.jpg"}
        altText={HeroInnerAboutData.altText}
        breadcrumbs={[
          { id: 1, title: "Home", link: "/" },
          { id: 2, title: "History", link: "/history2" },
        ]}
      />

      <TimelineDemo />
    </>
  );
};

export default TimelinePage;
