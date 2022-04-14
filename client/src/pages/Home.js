import Navbar from "../components/Navbar";
import { BasicComponent } from "../components/NewComponent";
import './Home.css';


function Home(){

    return (
        <>
            <div>
                <div class='header'>
                <h1 class='welcome'>Welcome</h1>
                    <Navbar />
                    
                </div>
            </div>
        </>
    )
}

export default Home;