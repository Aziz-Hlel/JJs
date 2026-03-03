import { useSelectedRow } from '../context/selected-row-provider';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Controller, useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';
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
import { Field, FieldError, FieldGroup, FieldLabel } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { Spinner } from '@/components/ui/spinner';

import { Separator } from '@/components/ui/separator';
import KaraokeSongService from '@/Api/service/KaraokeSongService';
import {
  updatekaraekoSongSchema,
  type UpdatekaraekoSongRequest,
} from '@contracts/schemas/karaekoSong/updatekaraekoSongRequest';

const EditOffer = () => {
  const { handleCancel, currentRow } = useSelectedRow();

  if (!currentRow) throw new Error('No row selected');

  const queryClient = useQueryClient();

  const { mutateAsync, isPending } = useMutation({
    mutationKey: ['karaoke-songs', 'update'],
    mutationFn: KaraokeSongService.update,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['karaoke-songs'], exact: false });
      handleCancel();
    },
  });

  const defaultValues: UpdatekaraekoSongRequest = {
    title: currentRow.title,
    artist: currentRow.artist,
    album: currentRow.album,
  };

  const form = useForm<UpdatekaraekoSongRequest>({
    resolver: zodResolver(updatekaraekoSongSchema),
    defaultValues: defaultValues,
  });

  const onOpenChange = (open: boolean) => {
    if (!open) {
      form.reset();
      handleCancel();
    }
  };

  const onSubmit: SubmitHandler<UpdatekaraekoSongRequest> = async (data) => {
    try {
      await mutateAsync({ id: currentRow.id, data });
      toast.success('Karaoke song updated successfully');
    } catch (error) {
      toast.error('Failed to update karaoke song');
    }
  };

  const dialogIsOpen = currentRow !== null;

  console.log(form.formState.errors);

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

export default EditOffer;
