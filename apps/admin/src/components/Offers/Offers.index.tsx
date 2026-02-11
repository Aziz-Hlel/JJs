import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card';
import BreadcrumbHeader from '@/pages/Header';
import { Button } from '../ui/button';
import OffersTable from './OffersTable';
import { useSelectedRow } from './context/selected-row-provider';

const OffersIndex = () => {
  const { handleDialogChange } = useSelectedRow();
  return (
    <div>
      <BreadcrumbHeader breadcrumbs={[{ title: 'Offers', href: '/offers' }]} />
      <div className=" w-full mx-auto">
        <Card>
          <CardHeader>
            <CardTitle>Offer List</CardTitle>
            <CardDescription>Manage your offers and their details here.</CardDescription>
            <CardAction>
              <Button onClick={() => handleDialogChange('add')}>Add New Offer</Button>
            </CardAction>
          </CardHeader>
          <CardContent>
            <OffersTable />
            {/* 
            <DialogContainer /> */}
          </CardContent>
          <CardFooter>
            <p>Card Footer</p>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default OffersIndex;
