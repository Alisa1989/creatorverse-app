import { useState } from "react";
import { supabase } from "../client";
import { useNavigate } from "react-router-dom";
import { CreatorModel } from "../App";

const AddCreator = ({refresh}) => {
    const navigate = useNavigate();

    const [inputs, setInputs] = useState<CreatorModel>({ 
        name: "", 
        url: "", 
        image_url: "", 
        description: "" 
    })

    const onChange = e => {
        e.persist();
        const newFormData = {
            ...inputs,
            [e.target.name]: e.target.value
        }
        setInputs(newFormData)
    }

    const addCreator = async(e) => {
        e.preventDefault();
        const {error } = await supabase
            .from('creators')
            .insert(inputs)

        refresh();
        navigate(`/`);

        setInputs({
            name: "", 
            url: "", 
            image_url: "", 
            description: "" 
        })
    }

    return (
        <div>
            <h3>
                AddCreator
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
                <button onClick={addCreator}>
                    Submit
                </button>
            </form>
        </div>
    );
}

export default AddCreator