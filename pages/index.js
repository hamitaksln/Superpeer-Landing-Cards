import LandingCards from "../components/landing-cards";
import Head from "next/head"


function HomePage() {
    return (
        <div className="p-16">
             <Head>
                <title>Superpeer Landing Cards</title>
            </Head>
            <LandingCards />
        </div>
    );
}

export default HomePage;
