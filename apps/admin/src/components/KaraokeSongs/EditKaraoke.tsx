import KaraokeSongService from '@/Api/service/KaraokeSongService';
import type { KaraokeSongResponse } from '@contracts/karaekoSong/KaraokeSongResponse';
import {
  updatekaraekoSongSchema,
  type UpdatekaraekoSongRequest,
} from '@contracts/karaekoSong/updatekaraekoSongRequest';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Controller, useForm, type SubmitHandler } from 'react-hook-form';
import { toast } from 'sonner';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '../ui/dialog';
import { Separator } from '@radix-ui/react-separator';
import { Button } from '../ui/button';
import { Field, FieldError, FieldGroup, FieldLabel } from '../ui/field';
import { Input } from '../ui/input';
import { Spinner } from '../ui/spinner';

interface EditKaraokeProps {
  selectedKaraoke: KaraokeSongResponse | null;
  handleCancel: () => void;
}

const EditKaraoke = ({ selectedKaraoke, handleCancel }: EditKaraokeProps) => {
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
    title: selectedKaraoke?.title ?? '',
    artist: selectedKaraoke?.artist ?? null,
    album: selectedKaraoke?.album ?? null,
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
      await mutateAsync({ id: selectedKaraoke!.id, data });
      toast.success('Karaoke song updated successfully');
    } catch (error) {
      toast.error('Failed to update karaoke song');
    }
  };

  const dialogIsOpen = selectedKaraoke !== null;

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

export default EditKaraoke;
