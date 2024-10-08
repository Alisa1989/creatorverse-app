// page to view a single creator

import { Link, useParams, useNavigate } from "react-router-dom";
import { CreatorModel } from "../App";
import { deleteCreator } from "../utlities/Functions";
import { FaYoutube, FaTwitter, FaInstagram } from "react-icons/fa";


const ViewCreator = ({creators, refresh}) => {
    const { id } = useParams();
    const navigate = useNavigate();
    const selected: CreatorModel = creators.find((crea) => crea.id == id)
    
    if (!creators) {
        return <h3>NO CREATORS YET</h3>
    }

    return (
        <div>
            <div className="view-top">
                <img src={selected!.image_url}/>
                <div className="view-title-icons">
                    <h3>
                        {selected!.name}    
                    </h3>
                    <p>
                        {selected!.description}
                    </p>
                    <div className="card-socialmedia-icons view-card">
                        {selected.youtube_url ? 
                        <a href={`https://www.youtube.com/${selected.youtube_url}`}>
                        <FaYoutube style={{color:'white', fontSize: '40px'}}/>
                        @{selected.youtube_url}
                        </a>
                            : null}
                        {selected.twitter_url ? 
                            <a href={`https://www.x.com/${selected.twitter_url}`}>
                        <FaTwitter style={{color:'white', fontSize: '40px'}}/>
                        @{selected.twitter_url}
                        </a>
                            : null}
                        {selected.instagram_url ? 
                        <a href={`https://www.instagram.com/${selected.instagram_url}`}>
                        <FaInstagram style={{color:'white', fontSize: '40px'}}/>
                        @{selected.instagram_url}
                        </a>
                            : null}
                    </div>
                </div>
            </div>
            <div className="bottom-buttons-container">
                <Link className="bottom-buttons button-submit" to={`/edit/${selected.id}/`}>
                    edit
                </Link>
                <button className="bottom-buttons button-submit delete" onClick={()=> {
                deleteCreator(parseInt(id!));
                refresh();
                navigate(`/`);
                }}>
                Delete
                </button>
            </div>
        </div>
    );
}

export default ViewCreator