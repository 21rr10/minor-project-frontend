<<<<<<< Updated upstream
import FlightSearchComponent from "../components/flightSearch";
function Home(){
    return(
       <FlightSearchComponent></FlightSearchComponent>
=======
function Home() {
    return (
        <div style={{
            backgroundImage: "url('/home.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "center",
            color: "white",
            textAlign: "center",
            paddingTop: "50px"
        }}>
            <h1>Welcome to The Trip Finder</h1>
            <p>Start planning your next adventure with us!</p>
        </div>
>>>>>>> Stashed changes
    );
}

export default Home;
