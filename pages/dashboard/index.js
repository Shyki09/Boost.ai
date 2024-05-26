import Layout from "@/components/layout";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Dashboard = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    // If the user is not authenticated, redirect to the login page
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status, router]);

  // If session is loading or user is not authenticated yet, you can show a loading message or spinner
  if (status === "loading" || !session) {
    return <div>Loading...</div>;
  }

  return (
    <Layout>
      <title>Dashboard</title>
      <section className="w-full md:w-3/4 mx-auto">
        <h1>Welcome to the Dashboard, {session.user.email}!</h1>
        {/* Your dashboard content goes here */}
      </section>
    </Layout>
  );
};

export default Dashboard;
