import dynamic from "next/dynamic";

const AnimatedCardStack = dynamic(
  () => import("@/app/components/ui/Stack"),
  { ssr: false }
);

export default AnimatedCardStack;