import KaraokeSongService from '@/Api/service/KaraokeSongService';
import BreadcrumbHeader from '@/pages/Header';
import { useQuery } from '@tanstack/react-query';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import KareokeCard from './KareokeCard';
import LoadingSpinner from '@/utils/LoadingSpinner';
import EditKaraoke from './EditKaraoke';
import { useState } from 'react';
import type { KaraokeSongResponse } from '@contracts/karaekoSong/KaraokeSongResponse';

const KaraokeIndex = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['karaoke-songs', 'all'],
    queryFn: KaraokeSongService.getAll,
  });

  const [selectedKaraoke, setSelectedKaraoke] = useState<KaraokeSongResponse | null>(null);

  return (
    <div className=" p-4">
      <BreadcrumbHeader
        breadcrumbs={[
          { title: 'User', href: '/users' },
          { title: 'Profile', href: '/users/profile' },
        ]}
      />
      <div className=" w-full mx-auto">
        <Card>
          <CardHeader>
            <CardTitle>Karaoke Songs List</CardTitle>
            <CardDescription>Manage your karaoke songs here.</CardDescription>
          </CardHeader>
          <CardContent className=" flex  w-full gap-12 flex-wrap ">
            {isLoading && <LoadingSpinner />}
            {data?.map((song, index) => (
              <KareokeCard key={song.id} song={song} index={index} onClick={() => setSelectedKaraoke(song)} />
            ))}
          </CardContent>
        </Card>
        {selectedKaraoke && (
          <EditKaraoke selectedKaraoke={selectedKaraoke} handleCancel={() => setSelectedKaraoke(null)} />
        )}
      </div>
    </div>
  );
};

export default KaraokeIndex;
