import { z } from "zod";

const addProductSchema = z.object({
  productName: z
    .string()
    .min(2, "اسم المنتج يجب أن يحتوي على حرفين على الأقل")
    .max(50, "اسم المنتج طويل جدًا"),

  productPrice: z.coerce
    .number({
      invalid_type_error: "سعر المنتج يجب أن يكون رقمًا",
    })
    .min(1, "السعر لا يمكن أن يكون صفر أو أقل"),

  quantity: z.coerce
    .number({
      invalid_type_error: "الكمية يجب أن تكون رقمًا",
    })
    .min(1, "الكمية يجب أن تكون 1 على الأقل"),

  images: z
    .any()
    .refine((files) => files?.length > 0, "يجب رفع صورة واحدة على الأقل")
    .refine(
      (files) =>
        Array.from(files).every((file) =>
          ["image/jpeg", "image/png", "image/webp"].includes(file.type)
        ),
      "يجب أن تكون الصور بصيغة JPEG أو PNG أو WEBP فقط"
    ),
});

export { addProductSchema };
