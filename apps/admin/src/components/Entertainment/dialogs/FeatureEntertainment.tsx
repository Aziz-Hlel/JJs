import { useSelectedRow } from '../context/selected-row-provider';
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import entertainmentService from '@/Api/service/EntertainmentService';

const FeatureEntertainment = () => {
  const { handleCancel, openDialog, currentRow } = useSelectedRow();
  const queryClient = useQueryClient();

  const { mutateAsync } = useMutation({
    mutationKey: ['entertainment', 'feature'],
    mutationFn: entertainmentService.toggleFeatured,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['entertainment'], exact: false });
      toast.success('Entertainment featured successfully');
      handleCancel();
    },
  });

  const featureEntertainment = async () => {
    try {
      await mutateAsync(currentRow?.id!);
    } catch (error) {
      toast.error('Failed to feature entertainment');
      handleCancel();
    }
  };
  const dialogOpen = openDialog === 'feature';

  const isEntertainmentFeatured = currentRow?.isFeatured;

  const title = isEntertainmentFeatured ? 'unfeature' : 'feature';
  const descriptionAction = isEntertainmentFeatured
    ? 'This action will unfeature the entertainment'
    : 'This action will feature the entertainment';
  const action = isEntertainmentFeatured ? 'unfeaturing' : 'featuring';
  return (
    <>
      <AlertDialog open={dialogOpen} onOpenChange={handleCancel}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle className=" capitalize"> {title}</AlertDialogTitle>
            <AlertDialogDescription>{descriptionAction}</AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={handleCancel}>Cancel</AlertDialogCancel>
            <Button onClick={featureEntertainment} className=" bg-blue-600 hover:bg-blue-500 capitalize">
              {action}
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default FeatureEntertainment;
