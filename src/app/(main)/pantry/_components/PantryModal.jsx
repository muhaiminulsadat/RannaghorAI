"use client";

import {useState} from "react";
import {
  Plus,
  Upload,
  ShoppingBasket,
  Loader2,
  Camera,
  ImageIcon,
} from "lucide-react";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Label} from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {z} from "zod";
import {cn} from "@/lib/utils";

const pantrySchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  quantity: z.string().min(1, "Quantity is required"),
});

export default function AddPantryModal() {
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [preview, setPreview] = useState(null);
  const [dragOver, setDragOver] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: {errors},
  } = useForm({resolver: zodResolver(pantrySchema)});

  const handleImage = (file) => {
    if (!file || !file.type.startsWith("image/")) return;
    if (preview) URL.revokeObjectURL(preview);
    setPreview(URL.createObjectURL(file));
  };

  const onDrop = (e) => {
    e.preventDefault();
    setDragOver(false);
    handleImage(e.dataTransfer.files[0]);
  };

  const onSubmit = async (data) => {
    setIsLoading(true);
    await new Promise((r) => setTimeout(r, 1000));
    console.log(data, preview);
    setIsLoading(false);
    closeModal();
  };

  const closeModal = () => {
    if (preview) URL.revokeObjectURL(preview);
    setOpen(false);
    reset();
    setPreview(null);
  };

  return (
    <Dialog
      open={open}
      onOpenChange={(val) => {
        if (!val) closeModal();
        else setOpen(true);
      }}
    >
      <DialogTrigger asChild>
        <Button className="bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/25 hover:-translate-y-0.5 transition-all duration-200 rounded-xl h-11 px-5 gap-2">
          <Plus className="w-4 h-4" />
          Add Item
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-md rounded-2xl border border-border/60 bg-background">
        <DialogHeader>
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-primary/15 border border-primary/25 flex items-center justify-center">
              <ShoppingBasket className="w-4 h-4 text-primary" />
            </div>
            <DialogTitle className="font-serif text-lg font-semibold">
              Add Pantry Item
            </DialogTitle>
          </div>
        </DialogHeader>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 pt-2">
          <div
            className={cn(
              "relative rounded-xl border-2 border-dashed transition-all duration-200 overflow-hidden cursor-pointer",
              dragOver
                ? "border-primary bg-primary/5"
                : "border-border/50 hover:border-primary/40 bg-muted/20",
            )}
            onDragOver={(e) => {
              e.preventDefault();
              setDragOver(true);
            }}
            onDragLeave={() => setDragOver(false)}
            onDrop={onDrop}
          >
            {preview ? (
              <div className="relative h-44">
                <img
                  src={preview}
                  alt="Preview"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center gap-2 opacity-0 hover:opacity-100 transition-opacity duration-200">
                  <p className="text-white text-xs font-medium">Change photo</p>
                  <div className="flex items-center gap-2">
                    <Button
                      type="button"
                      size="sm"
                      variant="outline"
                      className="h-7 px-2.5 rounded-lg text-xs gap-1.5 bg-white/10 border-white/20 text-white hover:bg-white/20"
                      onClick={(e) => {
                        e.stopPropagation();
                        document.getElementById("pantry-image").click();
                      }}
                    >
                      <ImageIcon className="w-3 h-3" />
                      Upload
                    </Button>
                    <Button
                      type="button"
                      size="sm"
                      variant="outline"
                      className="h-7 px-2.5 rounded-lg text-xs gap-1.5 bg-white/10 border-white/20 text-white hover:bg-white/20"
                      onClick={(e) => {
                        e.stopPropagation();
                        document.getElementById("pantry-camera").click();
                      }}
                    >
                      <Camera className="w-3 h-3" />
                      Camera
                    </Button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-8 gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <Upload className="w-4 h-4 text-primary" />
                </div>
                <div className="text-center">
                  <p className="text-sm font-medium text-foreground">
                    Drop image here
                  </p>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    PNG, JPG up to 5MB
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    className="h-8 px-3 rounded-lg text-xs gap-1.5 border-border/60"
                    onClick={(e) => {
                      e.stopPropagation();
                      document.getElementById("pantry-image").click();
                    }}
                  >
                    <ImageIcon className="w-3.5 h-3.5" />
                    Upload Photo
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    className="h-8 px-3 rounded-lg text-xs gap-1.5 border-border/60"
                    onClick={(e) => {
                      e.stopPropagation();
                      document.getElementById("pantry-camera").click();
                    }}
                  >
                    <Camera className="w-3.5 h-3.5" />
                    Take Photo
                  </Button>
                </div>
              </div>
            )}

            <input
              id="pantry-image"
              type="file"
              accept="image/*"
              className="hidden"
              onChange={(e) => handleImage(e.target.files[0])}
            />
            <input
              id="pantry-camera"
              type="file"
              accept="image/*"
              capture="environment"
              className="hidden"
              onChange={(e) => handleImage(e.target.files[0])}
            />
          </div>

          <div className="space-y-1.5">
            <Label className="text-sm font-medium text-foreground/80">
              Item Name
            </Label>
            <Input
              placeholder="e.g. Chicken, Tomatoes, Rice..."
              className={cn(
                "h-11 rounded-xl text-sm",
                errors.name &&
                  "border-destructive/60 focus-visible:ring-destructive/20",
              )}
              {...register("name")}
            />
            {errors.name && (
              <p className="text-destructive text-xs flex items-center gap-1.5">
                <span className="w-1 h-1 rounded-full bg-destructive flex-shrink-0" />
                {errors.name.message}
              </p>
            )}
          </div>

          <div className="space-y-1.5">
            <Label className="text-sm font-medium text-foreground/80">
              Quantity
            </Label>
            <Input
              placeholder="e.g. 500g, 2 pieces, 1 litre..."
              className={cn(
                "h-11 rounded-xl text-sm",
                errors.quantity &&
                  "border-destructive/60 focus-visible:ring-destructive/20",
              )}
              {...register("quantity")}
            />
            {errors.quantity && (
              <p className="text-destructive text-xs flex items-center gap-1.5">
                <span className="w-1 h-1 rounded-full bg-destructive flex-shrink-0" />
                {errors.quantity.message}
              </p>
            )}
          </div>

          <div className="flex gap-3 pt-1">
            <Button
              type="button"
              variant="outline"
              onClick={closeModal}
              className="flex-1 h-11 rounded-xl text-sm font-medium"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={isLoading}
              className="flex-1 h-11 rounded-xl bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/20 text-sm font-medium"
            >
              {isLoading ? (
                <span className="flex items-center gap-2">
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Adding...
                </span>
              ) : (
                <span className="flex items-center gap-2">
                  <Plus className="w-4 h-4" />
                  Add to Pantry
                </span>
              )}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
