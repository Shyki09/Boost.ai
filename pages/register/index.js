// import Layout from "@/components/layout";
// import { registerValidate } from "@/components/validate";
// import styles from "@/styles/Form.module.css";
// import { useFormik } from "formik";
// import Link from "next/link";
// import { useState } from "react";
// import { HiAtSymbol, HiFingerPrint, HiOutlineUser } from "react-icons/hi";

// const register = () => {
//   const [show, setShow] = useState({ password: false, cpassword: false });
//   const formik = useFormik({
//     initialValues: {
//       Username: "",
//       email: "",
//       password: "",
//       cpassword: "",
//     },
//     validate: registerValidate,
//     onSubmit,
//   });

//   async function onSubmit(values) {
//     console.log(values);
//   }

//   return (
//     <Layout>
//       <section className="w-full md:w-3/4 mx-auto flex flex-col gap-5">
//         <div className="title">
//           <h1 className="text-gray-800 text-4xl font-bold py-4">Register</h1>
//         </div>

//         {/* Form */}
//         <form className="flex flex-col gap-5" onSubmit={formik.handleSubmit}>
//           <div
//             className={`${styles.input_group} ${
//               formik.errors.Username && formik.touched.Username
//                 ? "border border-red-600"
//                 : " "
//             }`}
//           >
//             <input
//               type="text"
//               name="Username"
//               placeholder="Username"
//               className={styles.input_text}
//               {...formik.getFieldProps(`Username`)}
//             />
//             <span className="icon flex items-center px-4">
//               <HiOutlineUser size={20} />
//             </span>
//           </div>

//           <div
//             className={`${styles.input_group} ${
//               formik.errors.email && formik.touched.email
//                 ? "border border-red-600"
//                 : " "
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
//             className={`${styles.input_group} ${
//               formik.errors.password && formik.touched.password
//                 ? "border border-red-600"
//                 : " "
//             }`}
//           >
//             <input
//               type={`${show.password ? "text" : "password"}`}
//               name="password"
//               placeholder="Password"
//               className={styles.input_text}
//               {...formik.getFieldProps(`password`)}
//             />
//             <span
//               className="icon flex items-center px-4"
//               onClick={() => setShow({ ...show, password: !show.password })}
//             >
//               <HiFingerPrint size={20} />
//             </span>
//           </div>

//           <div
//             className={`${styles.input_group} ${
//               formik.errors.cpassword && formik.touched.cpassword
//                 ? "border border-red-600"
//                 : " "
//             }`}
//           >
//             <input
//               type={`${show.cpassword ? "text" : "password"}`}
//               name="cpassword"
//               placeholder="Confirm Password"
//               className={styles.input_text}
//               {...formik.getFieldProps(`cpassword`)}
//             />
//             <span
//               className="icon flex items-center px-4"
//               onClick={() => setShow({ ...show, cpassword: !show.cpassword })}
//             >
//               <HiFingerPrint size={20} />
//             </span>
//           </div>

//           {/* Login Buttons */}
//           <div className="input-button">
//             <button type="submit" className={styles.button}>
//               Register
//             </button>
//           </div>
//         </form>

//         {/* Bottom */}
//         <p className="text-center text-gray-400">
//           Have an account?
//           <Link href={`/login`} className="text-blue-700">
//             Sign In
//           </Link>
//         </p>
//       </section>
//     </Layout>
//   );
// };

// export default register;

//2
import { useFormik } from "formik";
import Link from "next/link";
import { useState } from "react";
import { HiAtSymbol, HiFingerPrint, HiOutlineUser } from "react-icons/hi";
import Layout from "../../components/layout";
import { registerValidate } from "../../components/validate";
import styles from "../../styles/Form.module.css";

const Register = () => {
  const [show, setShow] = useState({ password: false, cpassword: false });

  // Define the onSubmit function
  const onSubmit = async (values) => {
    console.log(values);
    // You can perform further actions here, such as sending a request to your backend for registration
  };

  // Initialize useFormik hook with the onSubmit function
  const formik = useFormik({
    initialValues: {
      Username: "",
      email: "",
      password: "",
      cpassword: "",
    },
    validate: registerValidate,
    onSubmit: onSubmit, // Pass the onSubmit function here
  });

  return (
    <Layout>
      <section className="w-full md:w-3/4 mx-auto flex flex-col gap-5">
        <div className="title">
          <h1 className="text-gray-800 text-4xl font-bold py-4">Register</h1>
        </div>

        {/* Form */}
        <form className="flex flex-col gap-5" onSubmit={formik.handleSubmit}>
          <div
            className={`${styles.input_group} ${
              formik.errors.Username && formik.touched.Username
                ? "border border-red-600"
                : ""
            }`}
          >
            <input
              type="text"
              name="Username"
              placeholder="Username"
              className={styles.input_text}
              {...formik.getFieldProps("Username")}
            />
            <span className="icon flex items-center px-4">
              <HiOutlineUser size={20} />
            </span>
          </div>

          <div
            className={`${styles.input_group} ${
              formik.errors.email && formik.touched.email
                ? "border border-red-600"
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
            className={`${styles.input_group} ${
              formik.errors.password && formik.touched.password
                ? "border border-red-600"
                : ""
            }`}
          >
            <input
              type={show.password ? "text" : "password"}
              name="password"
              placeholder="Password"
              className={styles.input_text}
              {...formik.getFieldProps("password")}
            />
            <span
              className="icon flex items-center px-4"
              onClick={() => setShow({ ...show, password: !show.password })}
            >
              <HiFingerPrint size={20} />
            </span>
          </div>

          <div
            className={`${styles.input_group} ${
              formik.errors.cpassword && formik.touched.cpassword
                ? "border border-red-600"
                : ""
            }`}
          >
            <input
              type={show.cpassword ? "text" : "password"}
              name="cpassword"
              placeholder="Confirm Password"
              className={styles.input_text}
              {...formik.getFieldProps("cpassword")}
            />
            <span
              className="icon flex items-center px-4"
              onClick={() => setShow({ ...show, cpassword: !show.cpassword })}
            >
              <HiFingerPrint size={20} />
            </span>
          </div>

          {/* Register Button */}
          <div className="input-button">
            <button type="submit" className={styles.button}>
              Register
            </button>
          </div>
        </form>

        {/* Bottom */}
        <p className="text-center text-gray-400">
          Have an account?{" "}
          <Link href="/login" className="text-blue-700">
            Sign In
          </Link>
        </p>
      </section>
    </Layout>
  );
};

export default Register;
