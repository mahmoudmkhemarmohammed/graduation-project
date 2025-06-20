import { z } from "zod";
const signUpSchema = z.object({
  name: z.string().min(1, { message: "الاسم مطلوب" }),
  email: z.string().min(1, { message: "الايميل مطلوب" }).email(),
  password: z
    .string()
    .min(8, { message: "كلمة السر لابد ان لا تقل عن 8 احرف" })
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/, {
      message:
        "كلمة السر لابد ان لاتقل عن 8 احرف ويجب ان تحتوي علي رموز وعلامات وارقام",
    }),
});

export { signUpSchema };
