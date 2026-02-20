import { useSelectedRow } from '../context/selected-row-provider';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Controller, useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

import { Button } from '@/components/ui/button';
import { Spinner } from '@/components/ui/spinner';
import { Field, FieldError, FieldGroup, FieldLabel } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';
import { Textarea } from '@/components/ui/textarea';
import ImageUpload from '@/components/ui2/ImageUpload/comp/ImageUpload';
import {
  createEntertainmentRequestSchema,
  type CreateEntertainmentRequest,
} from '@contracts/schemas/Entertainment/createEntertainmentRequest';
import entertainmentService from '@/Api/service/EntertainmentService';

const AddEntertainment = () => {
  const { handleCancel, openDialog } = useSelectedRow();
  const queryClient = useQueryClient();

  const { mutateAsync, isPending } = useMutation({
    mutationKey: ['entertainments', 'create'],
    mutationFn: entertainmentService.create,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['entertainments'], exact: false });
      form.reset();
      handleCancel();
    },
  });

  const defaultValues: CreateEntertainmentRequest = {
    name: '',
    description: '',
    date: '',
    thumbnailId: '',
  };

  const form = useForm<CreateEntertainmentRequest>({
    resolver: zodResolver(createEntertainmentRequestSchema),
    defaultValues: defaultValues,
  });

  const onOpenChange = (open: boolean) => {
    if (!open) {
      form.reset();
      handleCancel();
    }
  };

  const onSubmit: SubmitHandler<CreateEntertainmentRequest> = async (data) => {
    try {
      await mutateAsync(data);
      toast.success('Entertainment created successfully');
    } catch (error) {
      console.log(error);
      // if (error instanceof ApiError && error.status === 409) {
      //   form.setError('title', { message: 'Title already exists' });
      //   return;
      // }
      toast.error('Failed to create entertainment');
    }
  };

  const dialogIsOpen = openDialog === 'add';

  console.log('form :', form.getValues());

  const thumbnailErrors = [form.formState.errors.thumbnailId?.message];

  const clearMediaErrors = () => {
    form.clearErrors('thumbnailId');
  };

  const handleThumbnailUpload = (newMediaId: string | null) => {
    form.setValue(
      'thumbnailId',
      newMediaId ?? '',
      newMediaId ? { shouldDirty: true, shouldValidate: true } : undefined,
    );
  };
  return (
    <Dialog onOpenChange={onOpenChange} open={dialogIsOpen}>
      <DialogContent className="sm:max-w-106.25 h-[calc(100dvh-4rem)] flex flex-col overflow-hidden  ">
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 flex flex-col h-full">
          <DialogHeader>
            <DialogTitle>Create Entertainment</DialogTitle>
            <DialogDescription>Fill the form below to create a new entertainment.</DialogDescription>
          </DialogHeader>
          <div
            className=" 
              flex-1 min-h-0 overflow-y-auto pr-2  overscroll-contain scrollbar-thin scrollbar-thumb-neutral-300 scrollbar-track-transparent hover:scrollbar-thumb-neutral-400"
          >
            <FieldGroup>
              <Controller
                name="name"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor={`name-input`}>Name</FieldLabel>
                    <Input {...field} id={`name-input`} aria-invalid={fieldState.invalid} placeholder="Name" />
                    {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                  </Field>
                )}
              />

              <Controller
                name="description"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor={`description-input`}>Description</FieldLabel>
                    <Textarea
                      {...field}
                      id={`description-input`}
                      aria-invalid={fieldState.invalid}
                      placeholder="Description"
                    />
                    {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                  </Field>
                )}
              />

              <Controller
                name="date"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor={`date-input`}>Date</FieldLabel>
                    <Input
                      {...field}
                      id={`date-input`}
                      aria-invalid={fieldState.invalid}
                      placeholder="Monday – Sunday / Starting from 8.30pm onwards"
                    />
                    {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                  </Field>
                )}
              />

              <ImageUpload
                initMedia={null}
                mediaErrors={thumbnailErrors}
                clearMediaErrors={clearMediaErrors}
                handleMediaUpload={handleThumbnailUpload}
              />
            </FieldGroup>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline" onClick={handleCancel}>
                Cancel
              </Button>
            </DialogClose>
            <Button type="submit" className=" w-28" disabled={isPending}>
              {isPending ? <Spinner /> : <span>Save changes</span>}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddEntertainment;
