// // pages/index.js (Home Page)
// import { useRouter } from "next/router";
// import { useState } from "react";
// import Menu from "../components/Menu";

// const Home = () => {
//   const router = useRouter();
//   const [session, setSession] = useState(false);

//   const handleSignUp = () => {
//     // Perform sign-up logic
//     // After successful sign-up, set the session state to true
//     setSession(true);

//     // Redirect to the appropriate page
//     router.push(session ? "/user" : "/guest");
//   };

//   return (
//     <>
//       <Menu session={session} />
//       {/* Your home page content */}
//       <button onClick={handleSignUp}>Sign Up</button>
//     </>
//   );
// };

// export default Home;
import { useSession } from "next-auth/react"; // Assuming you are using NextAuth.js for authentication
import { useRouter } from "next/router";

const Home = () => {
  const router = useRouter();
  const { data: session, status } = useSession();

  const handleSignUp = () => {
    // If user is already authenticated, redirect to dashboard
    if (session) {
      router.push("/dashboard");
      return;
    }

    // If user is not authenticated, perform sign-up logic
    // After successful sign-up, redirect the user to the appropriate page
    router.push("/register");
  };

  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      {/* Your home page content */}
      <button onClick={handleSignUp}>Sign Up</button>
    </div>
  );
};

export default Home;
