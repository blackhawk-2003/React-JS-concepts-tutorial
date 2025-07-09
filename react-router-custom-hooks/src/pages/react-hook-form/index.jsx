import { useForm } from "react-hook-form";
import "./styles.css";

const ReactHookForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form submitted:", data);
    alert("Form submitted successfully!");
    reset();
  };

  const watchedPassword = watch("password");

  return (
    <div className="form-container">
      <h1 className="form-title">React Hook Form</h1>
      <p className="form-subtitle">Form validation with React Hook Form</p>

      <form onSubmit={handleSubmit(onSubmit)} className="form">
        <div className="form-group">
          <label htmlFor="email" className="form-label">
            Email Address
          </label>
          <input
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Please enter a valid email address",
              },
            })}
            type="email"
            id="email"
            name="email"
            className={`form-input ${errors.email ? "error" : ""}`}
            placeholder="Enter your email"
          />
          {errors.email && (
            <p className="error-message">{errors.email.message}</p>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 8,
                message: "Password must be at least 8 characters long",
              },
              pattern: {
                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
                message:
                  "Password must contain at least one uppercase letter, one lowercase letter, and one number",
              },
            })}
            type="password"
            id="password"
            name="password"
            className={`form-input ${errors.password ? "error" : ""}`}
            placeholder="Enter your password"
          />
          {errors.password && (
            <p className="error-message">{errors.password.message}</p>
          )}
          {watchedPassword && !errors.password && (
            <p className="success-message">✅ Password meets requirements</p>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="confirmPassword" className="form-label">
            Confirm Password
          </label>
          <input
            {...register("confirmPassword", {
              required: "Please confirm your password",
              validate: (value) => {
                if (value !== watchedPassword) {
                  return "Passwords do not match";
                }
                return true;
              },
            })}
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            className={`form-input ${errors.confirmPassword ? "error" : ""}`}
            placeholder="Confirm your password"
          />
          {errors.confirmPassword && (
            <p className="error-message">{errors.confirmPassword.message}</p>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="name" className="form-label">
            Full Name
          </label>
          <input
            {...register("name", {
              required: "Name is required",
              minLength: {
                value: 2,
                message: "Name must be at least 2 characters long",
              },
            })}
            type="text"
            id="name"
            name="name"
            className={`form-input ${errors.name ? "error" : ""}`}
            placeholder="Enter your full name"
          />
          {errors.name && (
            <p className="error-message">{errors.name.message}</p>
          )}
        </div>

        <div className="form-actions">
          <button type="submit" className="submit-button">
            <span className="button-icon">📝</span>
            Submit Form
          </button>
          <button
            type="button"
            onClick={() => reset()}
            className="reset-button"
          >
            <span className="button-icon">🔄</span>
            Reset Form
          </button>
        </div>
      </form>
    </div>
  );
};

export default ReactHookForm;
