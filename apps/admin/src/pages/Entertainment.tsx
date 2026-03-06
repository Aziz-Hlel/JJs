
import { SelectedRowProvider } from '@/components/Entertainment/context/selected-row-provider'
import EntertainmentIndex from '@/components/Entertainment/Entertainment.index'

const Entertainment = () => {
  return (
  <SelectedRowProvider>
    <EntertainmentIndex />;
  </SelectedRowProvider>  )
}

export default Entertainment