import { Card, CardAction, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import BreadcrumbHeader from '@/pages/Header';
import { Button } from '../ui/button';
import EntertainmentTable from './EntertainmentTable';
import { useSelectedRow } from './context/selected-row-provider';
import DialogContainer from './dialogs/DialogContainer';

const EntertainmentIndex = () => {
  const { handleDialogChange } = useSelectedRow();
  return (
    <div>
      <BreadcrumbHeader breadcrumbs={[{ title: 'Entertainment', href: '/entertainment' }]} />
      <div className=" w-full mx-auto">
        <Card>
          <CardHeader>
            <CardTitle>Entertainment List</CardTitle>
            <CardDescription>Manage your entertainments and their details here.</CardDescription>
            <CardAction>
              <Button onClick={() => handleDialogChange('add')}>Add New Entertainment</Button>
            </CardAction>
          </CardHeader>
          <CardContent>
            <EntertainmentTable />
            <DialogContainer />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default EntertainmentIndex;
