import { CreatorModel } from "../App";
import { Link } from "react-router-dom";
import { IoInformationCircle } from "react-icons/io5";
import { MdMode } from "react-icons/md";

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
                    <>
                        <h3>
                            {creator!.name}
                        </h3>
                    </>
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