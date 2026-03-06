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
import KaraokeSongService from '@/Api/service/KaraokeSongService';
import {
  createkaraekoSongSchema,
  type CreatekaraekoSongRequest,
} from '@repo/contracts/schemas/karaekoSong/createkaraekoSongRequest';
import { Separator } from '@/components/ui/separator';
import { ApiError } from '@/Api/ApiError';

const AddKaraokeSong = () => {
  const { handleCancel, openDialog } = useSelectedRow();
  const queryClient = useQueryClient();

  const { mutateAsync, isPending } = useMutation({
    mutationKey: ['karaoke-songs', 'create'],
    mutationFn: KaraokeSongService.create,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['karaoke-songs'], exact: false });
      form.reset();
      handleCancel();
    },
  });

  const defaultValues: CreatekaraekoSongRequest = {
    title: '',
    artist: '',
    album: '',
  };

  const form = useForm<CreatekaraekoSongRequest>({
    resolver: zodResolver(createkaraekoSongSchema),
    defaultValues: defaultValues,
  });

  const onOpenChange = (open: boolean) => {
    if (!open) {
      form.reset();
      handleCancel();
    }
  };

  const onSubmit: SubmitHandler<CreatekaraekoSongRequest> = async (data) => {
    try {
      await mutateAsync(data);
      toast.success('Karaoke song created successfully');
    } catch (error) {
      if (error instanceof ApiError && error.status === 409) {
        form.setError('title', { message: 'Title already exists' });
        return;
      }
      toast.error('Failed to create karaoke song');
    }
  };

  const dialogIsOpen = openDialog === 'add';

  return (
    <Dialog onOpenChange={onOpenChange} open={dialogIsOpen}>
      <DialogContent className="sm:max-w-106.25  flex flex-col overflow-hidden  ">
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 flex flex-col h-full">
          <DialogHeader>
            <DialogTitle className=" text-center">Update Karaoke Song</DialogTitle>
            <DialogDescription className=" text-center">All fields marked with * are optional.</DialogDescription>
            <Separator />
          </DialogHeader>
          <div className="flex-1 min-h-0 overflow-y-auto pr-2 overscroll-contain scrollbar-thin scrollbar-thumb-neutral-300 scrollbar-track-transparent hover:scrollbar-thumb-neutral-400">
            <FieldGroup>
              <Controller
                name="title"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor={`title-input`}>Song Title</FieldLabel>
                    <Input
                      {...field}
                      id={`title-input`}
                      aria-invalid={fieldState.invalid}
                      placeholder="Title"
                      value={field.value ?? undefined}
                    />
                    <FieldError errors={[fieldState.error]} />
                  </Field>
                )}
              />

              <Controller
                name="artist"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor={`artist-input`}>Artist Name *</FieldLabel>
                    <Input
                      {...field}
                      id={`artist-input`}
                      aria-invalid={fieldState.invalid}
                      placeholder="Artist Name"
                      value={field.value ?? undefined}
                    />
                    <FieldError errors={[fieldState.error]} />
                  </Field>
                )}
              />

              <Controller
                name="album"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor={`album-input`}>Album *</FieldLabel>
                    <Input
                      {...field}
                      id={`album-input`}
                      aria-invalid={fieldState.invalid}
                      placeholder="Album"
                      value={field.value ?? undefined}
                    />
                    <FieldError errors={[fieldState.error]} />
                  </Field>
                )}
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

export default AddKaraokeSong;
