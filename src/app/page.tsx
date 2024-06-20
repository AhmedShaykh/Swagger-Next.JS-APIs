import { redirect } from "next/navigation";

const Home = () => {
    return redirect("/api-docs");
}

export default Home;