import { z } from "zod";
const signInSchema = z.object({
  email: z.string().min(1, { message: "الايميل مطلوب" }).email(),
  password: z.string().min(8, { message: "كلمة السر مطلوبة" }),
});

export { signInSchema };
