import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import SpecialHeading from "../../components/common/SpecialHeading/SpecialHeading";
import "./ContactUs.css";

const contactSchema = z.object({
  firstName: z.string().min(2, "الاسم الأول يجب أن يكون على الأقل حرفين"),
  lastName: z.string().min(2, "الاسم الأخير يجب أن يكون على الأقل حرفين"),
  phone: z.string().min(10, "رقم الهاتف غير صحيح"),
  email: z.string().email("البريد الإلكتروني غير صالح"),
  message: z.string().min(5, "الرسالة يجب أن تكون أطول"),
});


const ContactUs = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = (data) => {
    console.log("Submitted", data);
    reset();
  };

  return (
    <div className="contact">
      <div className="container">
        <h1>
          <SpecialHeading title="تواصل معنا" />
        </h1>
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <div className="row">
            <div className="form-control">
              <input type="text" placeholder="الاسم الاول" {...register("firstName")} />
              <span className="error">{errors.firstName?.message || ""}</span>
            </div>

            <div className="form-control">
              <input type="text" placeholder="الاسم الاخير" {...register("lastName")} />
              <span className="error">{errors.lastName?.message || ""}</span>
            </div>

            <div className="form-control">
              <input type="text" placeholder="الرقم" {...register("phone")} />
              <span className="error">{errors.phone?.message || ""}</span>
            </div>

            <div className="form-control">
              <input type="email" placeholder="الايميل" {...register("email")} />
              <span className="error">{errors.email?.message || ""}</span>
            </div>
          </div>

          <div className="form-control full">
            <textarea placeholder="رسالتك" {...register("message")} />
            <span className="error">{errors.message?.message || ""}</span>
          </div>

          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "يتم الإرسال..." : "ارسال"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
