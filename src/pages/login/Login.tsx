import { useNavigate } from "react-router-dom";
import LabeledInput from "../../components/LabeledInput/LabeledInput";
import SubmitedButton from "../../components/SubmitedButton/SubmitedButton";
import { useAuth } from "../../context/AuthContext";
import { useForm } from "../../hooks/useForm";
import { useToggle } from "../../hooks/useToggle";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [loading, toggleLoading]=useToggle()
  const { form, handlerForm } = useForm<{ email: string; password: string }>({
    email: "",
    password: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    toggleLoading()
    await login(form.email, form.password);
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
        <span className="text-center w-full text-white ">V. 1.0.0.0</span>
      </div>
    </section>
  );
};

export default Login;
