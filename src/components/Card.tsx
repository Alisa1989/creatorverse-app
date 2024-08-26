import { CreatorModel } from "../App";
import { Link } from "react-router-dom";
import { IoInformationCircle } from "react-icons/io5";
import { MdMode } from "react-icons/md";
import { FaYoutube, FaTwitter, FaInstagram } from "react-icons/fa";


export interface CardProps {
   creator: CreatorModel
}

// const Card: React.FC<CardProps> = ({creator, index}) => {
export const Card = (props: CardProps) => {
    const creator = props.creator;

    return (
        <div className="card-container" style={{backgroundImage: `url(${creator!.image_url})`}}>
            <div className="card">
                <div className="card-top">
                    <div>
                        <h3>
                            {creator!.name}
                        </h3>
                        <div className="card-socialmedia-icons">
                            {creator.youtube_url ? <FaYoutube style={{color:'white', fontSize: '40px'}}/> : null}
                            {creator.twitter_url ? <FaTwitter style={{color:'white', fontSize: '40px'}}/> : null}
                            {creator.instagram_url ? <FaInstagram style={{color:'white', fontSize: '40px'}}/> : null}
                        </div>
                    </div>
                    <div className="card-info-edit">
                        <Link to={`/${creator.id}/`}>
                            <IoInformationCircle 
                            style={{color: 'white', fontSize: '30px'}}/>
                        </Link>
                        <Link to={`/edit/${creator.id}/`}>
                            <MdMode 
                            style={{color: 'white', fontSize: '30px'}}/>
                        </Link>
                    </div>
                </div>
                <div className="card-description">
                    <p>{creator.description}</p>
                </div>
            </div>
        </div>
    );
}

export default Card