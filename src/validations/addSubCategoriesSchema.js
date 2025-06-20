import { z } from "zod";
const addSubCategoriesSchema = z.object({
  name: z
    .string()
    .min(2, "اسم التصنيف يجب أن يحتوي على حرفين على الأقل")
    .max(50, "اسم التصنيف طويل جدًا"),
});

export { addSubCategoriesSchema };