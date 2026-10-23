import StatusPage from '@/app/components/common/status-page/StatusPage';
import { confirmationPageData } from '@/app/data/data-general';

const ConfirmationPage = () => {
  return <StatusPage {...confirmationPageData} />;
};

export default ConfirmationPage;
