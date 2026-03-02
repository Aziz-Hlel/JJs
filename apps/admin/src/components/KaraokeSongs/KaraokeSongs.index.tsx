import { Card, CardAction, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import BreadcrumbHeader from '@/pages/Header';
import { Button } from '../ui/button';
import { useSelectedRow } from './context/selected-row-provider';
import DialogContainer from './dialogs/DialogContainer';
import KaraokeSongsTable from './EntertainmentTable';

const KaraokeSongsIndex = () => {
  const { handleDialogChange } = useSelectedRow();
  return (
    <div>
      <BreadcrumbHeader breadcrumbs={[{ title: 'Karaoke Songs', href: '/karaoke-songs' }]} />
      <div className=" w-full mx-auto">
        <Card>
          <CardHeader>
            <CardTitle>Karaoke Songs List</CardTitle>
            <CardDescription>Manage your karaoke songs and their details here.</CardDescription>
            <CardAction>
              <Button onClick={() => handleDialogChange('add')}>Add New Karaoke Song</Button>
            </CardAction>
          </CardHeader>
          <CardContent>
            <KaraokeSongsTable />
            <DialogContainer />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default KaraokeSongsIndex;
