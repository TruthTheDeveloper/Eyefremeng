import { useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { db } from "../../firebase/firebase-config";
import { doc, setDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { TailSpin } from "react-loader-spinner";

import AuthContext from "../../context/auth-context";

const Register = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [emailValidationError, setEmailValidationError] = useState(false);

  const [firstName, setFirstName] = useState("");
  const [firstNameValidationError, setFirstNameValidationError] =
    useState(false);

  const [lastName, setLastName] = useState("");
  const [lastNameValidationError, setLastnameValidationError] = useState(false);

  const [password, setPassword] = useState("");
  const [passwordValidationError, setPaswordValidationError] = useState(false);

  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmPasswordValidationError, setConfirmPasswordValidationError] =
    useState(false);
  const [spinner, setSpinner] = useState(false);

  const { initialState, setInitialState } = useContext(AuthContext);

  const auth = getAuth();

  const navigateToLogin = () => {
    navigate("/login");
  };

  const registerHandler = () => {
    firstName === ""
      ? setFirstNameValidationError(true)
      : setFirstNameValidationError(false);
    lastName === ""
      ? setLastnameValidationError(true)
      : setLastnameValidationError(false);
    email === ""
      ? setEmailValidationError(true)
      : setEmailValidationError(false);
    password === ""
      ? setPaswordValidationError(true)
      : setPaswordValidationError(false);

    setSpinner(true);

    if (password !== confirmPassword) {
      setConfirmPasswordValidationError(true);
      setSpinner(false);
      return;
    } else {
      setConfirmPasswordValidationError(false);
    }

    if (email !== "" && password !== "" && firstName !== "" && lastName) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          localStorage.setItem("uid", JSON.stringify(user.uid));
          setInitialState({ userId: JSON.parse(localStorage.getItem("uid")) });

          setSpinner(false);

          setDoc(doc(db, "users", user.uid), {
            firstName: firstName,
            lastName: lastName,
          });

          localStorage.setItem("token", JSON.stringify(user.accessToken));

          toast.success("Congratulations you ve succesfully registered", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });

          navigate("/");
          // ...
        })
        .then((res) => {
          console.log(res);
        })
        .catch((error) => {
          setSpinner(false);
          console.log(error.code);
          const errorCode = error.code;
          const errorMessage = error.message;
          toast.error(error.code, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          // ..
        });
    } else {
      setSpinner(false);
    }
  };

  return (
    <>
      <section className="py-24 mx-6 xl:mx-64">
        <div className="">
          <div>
            <h1 className="text-3xl text-slate-700 mb-8">Create An Account</h1>
          </div>
          <div className="my-4 my-2">
            <label>Email Address</label>
            <br />
            <input
              className="w-full border-2 p-2 outline-none my-2"
              onChange={(e) => setEmail(e.target.value)}
            />
            {emailValidationError && (
              <p className="text-red-500 text-sm">Please input email field</p>
            )}
          </div>
          <div className="md:flex my-2">
            <div className="w-full md:mr-2">
              <label>First Name</label>
              <br />
              <input
                className="w-full border-2  p-2 text-slate-700 outline-none my-2"
                onChange={(e) => setFirstName(e.target.value)}
              />
              {firstNameValidationError && (
                <p className="text-red-500 text-sm">
                  Please input firstName field
                </p>
              )}
            </div>
            <div className="w-full md:ml-2">
              <label>Last Name</label>
              <br />
              <input
                className="w-full border-2  p-2 text-slate-700 outline-none my-2"
                onChange={(e) => setLastName(e.target.value)}
              />
              {lastNameValidationError && (
                <p className="text-red-500 text-sm">
                  Please input lastName field
                </p>
              )}
            </div>
          </div>
          <div className="md:flex my-2">
            <div className="w-full md:mr-2">
              <label>Password</label>
              <br />
              <input
                className="w-full border-2  p-2 text-slate-700 outline-none my-2"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
              {passwordValidationError && (
                <p className="text-red-500 text-sm">
                  Please input password field
                </p>
              )}
            </div>
            <div className="w-full md:ml-2">
              <label>Confirm Password</label>
              <br />
              <input
                className="w-full border-2  p-2 text-slate-700 outline-none my-2"
                type="password"
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              {confirmPasswordValidationError && (
                <p className="text-red-500 text-sm">
                  password fields do not match
                </p>
              )}
            </div>
          </div>
          <div className="my-4">
            <button
              className="py-3 bg-indigo-800 text-white py-2 px-6 rounded-md"
              onClick={registerHandler}
            >
              {spinner ? (
                <div className="py-1">
                  <TailSpin color="white" height={20} width={80} />
                </div>
              ) : (
                "Register"
              )}
            </button>
            <button
              className="py-3 py-2 px-6 mx-3 border rounded-md border-indigo-800 text-indigo-800"
              onClick={navigateToLogin}
            >
              Login
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Register;
