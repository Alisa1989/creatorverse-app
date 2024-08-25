// page to view a single creator

import { Link, useParams, useNavigate } from "react-router-dom";
import { CreatorModel } from "../App";
import { deleteCreator } from "../utlities/Functions";


const ViewCreator = ({creators, refresh}) => {
    const { id } = useParams();
    const navigate = useNavigate();
    const selected: CreatorModel = creators.find((crea) => crea.id == id)
    return (
        <div>
            <h3>
                ViewCreator
            </h3>
            <section>
                {selected!.name}
                {selected!.url}
                {selected!.image_url}
                {selected!.description}
            </section>
            <section>
                <Link to={`/edit/${selected.id}/`}>
                    edit
                </Link>
                <button onClick={()=> {
                deleteCreator(parseInt(id!));
                refresh();
                navigate(`/`);
            }}>
                Delete
            </button>
            </section>
        </div>
    );
}

export default ViewCreator