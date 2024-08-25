// allows user to update creators information
import { deleteCreator } from "../utlities/Functions";
import { useParams, useNavigate } from "react-router-dom";
import { CreatorModel } from "../App";
import { supabase } from "../client";
import { useState } from "react";


const EditCreator = ({creators, refresh}) => {
    const navigate = useNavigate();
    const { id } = useParams();
    const selected: CreatorModel = creators.find((crea) => crea.id == id);

    const [inputs, setInputs] = useState<CreatorModel>({ 
        name: selected.name, 
        url: selected.url, 
        image_url: selected.image_url, 
        description: selected.description 
    })

    const onChange = e => {
        e.persist();
        const newFormData = {
            ...inputs,
            [e.target.name]: e.target.value
        }
        setInputs(newFormData)
    }

    const modifyCreator = async(e) => {
        e.preventDefault();
        const { error } = await supabase
        .from('creators')
        .update(inputs)
        .eq('id', 1)

        refresh();
        navigate(`/`);
    }

    return (
        <div>
            <h3>
                EditCreator
            </h3>
            <form>
                <label>
                    Name
                    <input
                        type="name"
                        name="name"
                        onChange={onChange}
                        value={inputs.name}
                    />
                </label>
                <label>
                    url
                    <input
                        type="url"
                        name="url"
                        onChange={onChange}
                        value={inputs.url}
                    />
                </label>
                <label>
                    description
                    <input
                        type="description"
                        name="description"
                        onChange={onChange}
                        value={inputs.description}
                    />
                </label>
                <label>
                    image_url
                    <input
                        type="image_url"
                        name="image_url"
                        onChange={onChange}
                        value={inputs.image_url}
                    />
                </label>
                <button onClick={modifyCreator}>
                    Submit
                </button>
            </form>
            <button onClick={()=> {
                deleteCreator(parseInt(id!));
                refresh();
                navigate(`/`);
            }}>
                Delete
            </button>
        </div>
    );
}

export default EditCreator