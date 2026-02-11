import type { KaraokeSongResponse } from '@contracts/karaekoSong/KaraokeSongResponse';
import { Card, CardContent, CardDescription, CardTitle } from '../ui/card';
import { Separator } from '../ui/separator';
import { MicVocal, SquarePen } from 'lucide-react';

const KareokeCard = ({ song, index, onClick }: { song: KaraokeSongResponse; index: number; onClick: (karaekoSong: KaraokeSongResponse) => void }) => {
  return (
    <Card className="group cursor-pointer w-48" onClick={() => onClick(song)}>
      <CardContent className=" flex flex-col justify-center space-y-4 ">
        <div className=" flex justify-between">
          <span className=" text-xs text-muted-foreground">Song N {index + 1} :</span>
        </div>
        <Separator />
        <div className=" border border-white rounded-full w-fit p-4 mx-auto relative ">
          <MicVocal className=" absolute size-20 group-hover:text-transparent transition-colors ease-in-out duration-300" />
          <SquarePen className="text-transparent absolute size-20 group-hover:text-white transition-colors ease-in-out duration-300" />
          <div className="size-20" />
        </div>
        <div className=" w-full flex flex-col items-start space-y-0.5">
          <CardTitle>{song.title}</CardTitle>
          <CardDescription className=" text-xs">
            <span>{song.artist}</span>
          </CardDescription>
          <CardDescription className=" pt-1">{song.album}</CardDescription>
        </div>
      </CardContent>
    </Card>
  );
};

export default KareokeCard;
