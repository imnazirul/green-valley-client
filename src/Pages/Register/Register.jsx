import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";

const Register = () => {
  const {
    register,
    handleSubmit,

    // watch,
    formState: { errors },
  } = useForm();
  console.log(errors);
  const handleRegister = (formData) => {
    console.log(formData);
  };

  return (
    <div className="mb-5 lg:mb-10 bg-base-200 rounded-xl">
      <Helmet>
        <title>Sign Up | Green Valley</title>
      </Helmet>
      <h1 className="text-5xl font-jost font-bold text-center pt-10 text-btn-1 ">
        Register Now !
      </h1>
      <div className="hero py-10 ">
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit(handleRegister)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-lg">Name</span>
              </label>
              <input
                {...register("fullName", {
                  required: {
                    value: true,
                    message: "Name is a Required Field!",
                  },
                })}
                type="text"
                placeholder="Name"
                className="input input-bordered"
              />
            </div>
            <div>
              {errors.fullName && (
                <p className="text-red-500 font-semibold font-jost">
                  {errors.fullName.message}
                </p>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-lg">Email</span>
              </label>
              <input
                {...register("email", {
                  required: {
                    value: true,
                    message: "Email is a required Field!",
                  },
                })}
                type="email"
                placeholder="Email"
                className="input input-bordered"
              />
            </div>
            <div>
              {errors.email && (
                <p className="text-red-500 font-semibold font-jost">
                  {errors.email.message}
                </p>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-lg">Photo URL</span>
              </label>
              <input
                {...register("photoUrl", {
                  required: {
                    value: true,
                    message: "PhotoURL is a required Field",
                  },
                  validate: {
                    isUrl: (value) => {
                      if (
                        /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w.-]*)*\/?$/.test(
                          value
                        )
                      ) {
                        return true;
                      }

                      return "Enter a Valid Url Address";
                    },
                  },
                })}
                type="text"
                placeholder="Photo URL"
                className="input input-bordered"
              />
            </div>
            <div>
              {errors.photoUrl && (
                <p className="text-red-500 font-semibold font-jost">
                  {errors.photoUrl.message}
                </p>
              )}
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text text-lg">Password</span>
              </label>
              <input
                {...register("password", {
                  required: {
                    value: true,
                    message: "Enter password to proceed!",
                  },
                  minLength: {
                    value: 6,
                    message: "Password Must be equal 6 Character or longer",
                  },
                  maxLength: {
                    value: 32,
                    message: "Password Cannot be longer than 32 characters",
                  },
                  validate: {
                    isLower: (value) => {
                      if (/[a-z]/.test(value)) {
                        return true;
                      }
                      return "Password Must Contain At Least One Lowercase Character";
                    },
                    isUpper: (value) => {
                      if (/[A-Z]/.test(value)) {
                        return true;
                      }
                      return "Password Must Contain At Least One UpperCase Character";
                    },
                  },
                })}
                type="password"
                placeholder="Password"
                className="input input-bordered"
              />
            </div>
            <div>
              {errors.password && (
                <p className="text-red-500 font-semibold font-jost">
                  {errors.password.message}
                </p>
              )}
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-btn-1 text-lg text-white hover:bg-btn-1">
                Register
              </button>
            </div>
          </form>
          <p className="text-center mb-4 text-lg">
            Already have an account? Please{" "}
            <Link to="/login" className="link text-btn-1">
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;