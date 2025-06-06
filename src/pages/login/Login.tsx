import { Link, useNavigate } from "react-router-dom";
import LabeledInput from "../../core/LabeledInput/LabeledInput";
import SubmitedButton from "../../core/SubmitedButton/SubmitedButton";
import { useForm } from "../../hooks/useForm";
import { useToggle } from "../../hooks/useToggle";
import { useAuthStore } from "../../store/AuthStore";

const Login = () => {
  const navigate = useNavigate();
  const [loading, toggleLoading]=useToggle()
  const { form, handlerForm } = useForm<{ email: string; password: string }>({
    email: "",
    password: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    toggleLoading()
   await useAuthStore.getState().login(form.email, form.password);
    toggleLoading()
    navigate("/");
  };

  return (
    <section className="min-h-[100vh] w-full flex justify-center items-center">
      <div className="h-120 w-100 border-3 rounded-3xl border-primary">
        <h2 className="text-stroke absolute -mt-7 left-1/2 transform -translate-x-1/2 text-6xl px-2  font-bold">
          WELCOME
        </h2>
        <form
          onSubmit={handleSubmit}
          className="text-white p-5 mt-10 space-y-10"
        >
          <LabeledInput
            label="Email"
            placeholder="Enter your email"
            type="email"
            value={form.email}
            onChange={(e) => handlerForm("email", e.target.value)}
          />
          <LabeledInput
            label="Password"
            placeholder="Enter your password"
            type="password"
            value={form.password}
            onChange={(e) => handlerForm("password", e.target.value)}
          />

          <SubmitedButton loading={loading} type="submit">Log In</SubmitedButton>
        </form>
       <div className="w-full flex justify-center">
       <span className="text-center w-full text-xs text-white ">Can't remember your password? <Link to={'/change-password'} className="underline text-secondary hover:text-tertiary">change it</Link></span>
       </div>
      </div>
    </section>
  );
};

export default Login;
