import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import BreadcrumbHeader from '@/pages/Header';
import DialogContainer from './dialogs/DialogContainer';
import TransactionHistoryTable from './TransactionHistoryTable';

const TransactionHistoryIndex = () => {
  return (
    <div>
      <BreadcrumbHeader breadcrumbs={[{ title: 'Transaction History', href: '/transaction-history' }]} />
      <div className=" w-full mx-auto">
        <Card>
          <CardHeader>
            <CardTitle>Transaction History</CardTitle>
            <CardDescription>Manage your transaction history and their details here.</CardDescription>
          </CardHeader>
          <CardContent>
            <TransactionHistoryTable />
            <DialogContainer />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TransactionHistoryIndex;
