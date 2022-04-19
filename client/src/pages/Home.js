import Navbar from "../components/Navbar";
import { BasicComponent } from "../components/NewComponent";
import './Home.css';


function Home(){

    return (
        <>
            <div>
                <div class='header'>
                    <Navbar />
                <h1 class='welcome'>The Work Book Club</h1>
                    
                </div>
            </div>
        </>
    )
}

export default Home;