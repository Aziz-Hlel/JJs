import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { Clover } from "lucide-react";
import { cn } from "@/lib/utils";

const MenuMobileChips = ({
  title,
  link,
  separator = true,
  clover = false,
  onClick,
}: {
  title: string;
  link: string;
  separator?: boolean;
  clover?: boolean;
  onClick: (link: string) => void;
}) => {
  return (
    <>
      <Link
        href={link}
        onClick={() => onClick(link)}
        className={cn(
          "flex items-center space-x-2 transition-all ease-in-out duration-500 text-white",
          clover && "text-primary",
        )}
      >
        <Clover
          className={cn(
            "size-0 ease-in-out duration-500 -translate-x-4",
            clover && "size-4 translate-x-0",
          )}
        />

        <span>{title}</span>
        {separator && <Separator orientation="vertical" className="h-6" />}
      </Link>
    </>
  );
};

export default MenuMobileChips;
