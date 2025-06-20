import { z } from "zod";
const addCategoriesSchema = z.object({
  name: z
    .string()
    .min(2, "اسم التصنيف يجب أن يحتوي على حرفين على الأقل")
    .max(50, "اسم التصنيف طويل جدًا"),

  image: z
    .any()
    .refine((files) => files?.length === 1, "الصورة مطلوبة")
    .refine(
      (files) => files?.[0]?.type?.startsWith("image/"),
      "يجب رفع صورة فقط"
    ),
});

export { addCategoriesSchema };
