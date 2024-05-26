// import React, { useState } from "react";
// import styles from "@/styles/Form.module.css";
// import Layout from "@/components/layout";
// import Link from "next/link";
// import Image from "next/image";
// import { HiAtSymbol, HiFingerPrint } from "react-icons/hi";
// import { signIn } from "next-auth/react";
// import { useFormik } from "formik";
// import login_validate from "@/components/validate";
// import { useRouter } from "next/router";

// const login = () => {
//   const [show, setShow] = useState(false)
//   const router = useRouter()

//   // Formik Hook
//   const formik = useFormik({
//     initialValues: {
//       email: "",
//       password: "",
//     },
//     validate: login_validate,
//     onSubmit,
//   });

//   async function onSubmit(values) {
//     const status = await signIn('credentials',{
//       redirect : false,
//       email: values.email,
//       password:values.password,
//       callbackUrl:"/"
//     })

//     if(status.ok)router.push(status.url)
//   }

//   // Google Handler function
//   async function handleGoogleSignin() {
//     signIn(`google`, { callbackUrl: "http://localhost:3000" });
//   }

//   // Github Login function
//   async function handleGithubSignin() {
//     signIn(`github`, { callbackUrl: "http://localhost:3000" });
//   }

//   return (
//     <Layout>
//       <title>Login</title>

//       <section className="w-full md:w-3/4 mx-auto flex flex-col gap-5">
//         <div className="title">
//           <h1 className="text-gray-800 text-4xl font-bold py-6">Explore</h1>
//         </div>

//         {/* Form */}
//         <form className="flex flex-col gap-5" onSubmit={formik.handleSubmit}>
//           <div
//             className={`${styles.input_group}${
//               formik.errors.email && formik.touched.email
//                 ? " border-rose-500"
//                 : ""
//             }`}
//           >
//             <input
//               type="email"
//               name="email"
//               placeholder="Email"
//               className={styles.input_text}
//               {...formik.getFieldProps(`email`)}
//             />
//             <span className="icon flex items-center px-4">
//               <HiAtSymbol size={20} />
//             </span>
//           </div>

//           <div
//             className={`${styles.input_group}${
//               formik.errors.password && formik.touched.password
//                 ? " border-rose-500"
//                 : ""
//             }`}
//           >
//             <input
//               type={`${show ? "text" : "password"}`}
//               name="password"
//               placeholder="Password"
//               className={styles.input_text}
//               {...formik.getFieldProps(`password`)}
//             />
//             <span
//               className="icon flex items-center px-4"
//               onClick={() => setShow(!show)}
//             >
//               <HiFingerPrint size={20} />
//             </span>
//           </div>

//           {/* Login Buttons */}
//           <div className="input-button">
//             <button type="submit" className={styles.button}>
//               Login
//             </button>
//           </div>
//           <div className="input-button">
//             <button
//               type="button"
//               onClick={handleGoogleSignin}
//               className={styles.button_custom}
//             >
//               Sign In with Google{" "}
//               <Image src="/google_icon.png" width={20} height={20} alt="Google" />
//             </button>
//           </div>
//           <div className="input-button">
//             <button
//               type="button"
//               onClick={handleGithubSignin}
//               className={styles.button_custom}
//             >
//               Sign In with Github{" "}
//               <Image src="/Github_icon.jpg" width={27} height={27} alt="Github" />
//             </button>
//           </div>
//         </form>

//         {/* Bottom */}
//         <p className="text-center text-gray-400">
//           Don't have an account yet?
//           <Link href={`/register`} className="text-blue-700">
//             Sign Up
//           </Link>
//         </p>
//       </section>
//     </Layout>
//   );
// };

// export default login;

//2
import { useFormik } from "formik";
import { signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { HiAtSymbol, HiFingerPrint } from "react-icons/hi";
import Layout from "../../components/layout";
import login_validate from "../../components/validate";
import styles from "../../styles/Form.module.css";

const Login = () => {
  const [show, setShow] = useState(false);
  const router = useRouter();

  // Formik Hook
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate: login_validate,
    onSubmit: async (values) => {
      const signInResponse = await signIn("credentials", {
        redirect: false,
        email: values.email,
        password: values.password,
        callbackUrl: "/dashboard",
      });

      if (signInResponse.error) {
        // Handle login error
        console.error("Login error:", signInResponse.error);
      } else {
        // Redirect user upon successful login
        router.push(signInResponse.url);
      }
    },
  });

  // Google Handler function
  async function handleGoogleSignin() {
    signIn(`google`, { callbackUrl: "http://localhost:3000" });
  }

  // Github Login function
  async function handleGithubSignin() {
    signIn(`github`, { callbackUrl: "http://localhost:3000" });
  }

  return (
    <Layout>
      <title>Login</title>

      <section className="w-full md:w-3/4 mx-auto flex flex-col gap-5">
        <div className="title">
          <h1 className="text-gray-800 text-4xl font-bold py-6">Explore</h1>
        </div>

        {/* Form */}
        <form className="flex flex-col gap-5" onSubmit={formik.handleSubmit}>
          <div
            className={`${styles.input_group}${
              formik.errors.email && formik.touched.email
                ? " border-rose-500"
                : ""
            }`}
          >
            <input
              type="email"
              name="email"
              placeholder="Email"
              className={styles.input_text}
              {...formik.getFieldProps("email")}
            />
            <span className="icon flex items-center px-4">
              <HiAtSymbol size={20} />
            </span>
          </div>

          <div
            className={`${styles.input_group}${
              formik.errors.password && formik.touched.password
                ? " border-rose-500"
                : ""
            }`}
          >
            <input
              type={`${show ? "text" : "password"}`}
              name="password"
              placeholder="Password"
              className={styles.input_text}
              {...formik.getFieldProps("password")}
            />
            <span
              className="icon flex items-center px-4"
              onClick={() => setShow(!show)}
            >
              <HiFingerPrint size={20} />
            </span>
          </div>

          {/* Login Buttons */}
          <div className="input-button">
            <button type="submit" className={styles.button}>
              Login
            </button>
          </div>
          <div className="input-button">
            <button
              type="button"
              onClick={handleGoogleSignin}
              className={styles.button_custom}
            >
              Sign In with Google{" "}
              <Image
                src="/google_icon.png"
                width={20}
                height={20}
                alt="Google"
              />
            </button>
          </div>
          <div className="input-button">
            <button
              type="button"
              onClick={handleGithubSignin}
              className={styles.button_custom}
            >
              Sign In with Github{" "}
              <Image
                src="/Github_icon.jpg"
                width={27}
                height={27}
                alt="Github"
              />
            </button>
          </div>
        </form>

        {/* Bottom */}
        <p className="text-center text-gray-400">
          Don't have an account yet?
          <Link href="/register" className="text-blue-700">
            Sign Up
          </Link>
        </p>
      </section>
    </Layout>
  );
};

export default Login;
