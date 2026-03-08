import HeroInnerBlock from "@/app/components/common/hero-inner/Hero-inner";
import { HistoryBlock } from "@/app/blocks/history";

// Data
import { HeroInnerHistoryData } from "@/app/hooks/data";
import { badgesListData } from "@/app/hooks/data-brands";
import { historyData } from "@/app/hooks/data-history";
const HistoryPage = () => {
  return (
    <>
      {/* Hero Inner - Block */}
      <HeroInnerBlock
        title={"History"}
        image={"/hero/gallery-14a.jpg"}
        altText={HeroInnerHistoryData.altText}
        breadcrumbs={[
          { id: 1, title: "Home", link: "/" },
          { id: 2, title: "History", link: "/history2" },
        ]}
      />
      {/* / Hero Inner - Block */}

      {/* History Block */}
      <HistoryBlock {...historyData} />
      {/* / History Block */}

      {/* Badges Block */}
      {/*<BadgesList {...badgesListData} />*/}
      {/* / Badges Block */}
    </>
  );
};

export default HistoryPage;
