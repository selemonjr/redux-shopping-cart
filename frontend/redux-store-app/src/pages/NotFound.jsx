import {Link} from "react-router-dom";
const NotFound = () => {
    return (
        <>
        <div className="pageNotFound">
            <h2>Page Not Found</h2>
            <div className="backHome">
            <Link to="/"><h4 className="back"><i class='bx bx-arrow-back'></i></h4></Link>
            <Link to="/"><h4 className="back">Go back Home</h4></Link>
            </div>
        </div>
        </>
    )
}
export default NotFound;