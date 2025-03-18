// import FlightSearchComponent from "../components/flightSearch";

// function Home() {
//     return (
//         <>
//         <div style={{
//             backgroundImage: "url('/home.jpg')",
//             backgroundSize: "cover",
//             backgroundPosition: "center",
//             height: "100vh",
//             display: "flex",
//             flexDirection: "column",
//             justifyContent: "flex-start",
//             alignItems: "center",
//             color: "white",
//             textAlign: "center",
//             paddingTop: "50px" 
//         }}>
//             <h1>Welcome to The Trip Finder</h1>
//             <p>They say that the world has seven wonders. We think that's only the beginning.</p>
//             <hr></hr><hr></hr><hr></hr>
//             <FlightSearchComponent></FlightSearchComponent>
//         </div>
        
//         </>
//     );
// }

// export default Home;

import FlightSearchComponent from "../components/flightSearch";

function Home() {
    return (
        <>
            {/* Background Video */}
            <video 
                autoPlay 
                loop 
                muted 
                playsInline 
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    zIndex: -1
                }}
            >
                <source src="/background-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* Content */}
            <div style={{
                position: "relative",
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
                <p>They say that the world has seven wonders. We think that's only the beginning.</p>
                <hr></hr><hr></hr><hr></hr>
                <FlightSearchComponent />
            </div>
        </>
    );
}

export default Home;
