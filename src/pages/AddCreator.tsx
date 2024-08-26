import { useState } from "react";
import { supabase } from "../client";
import { useNavigate } from "react-router-dom";
import { CreatorModel } from "../App";

const AddCreator = ({refresh}) => {
    const navigate = useNavigate();

    const [inputs, setInputs] = useState<CreatorModel>({ 
        name: "", 
        image_url: "", 
        youtube_url: "",
        twitter_url: "",
        instagram_url: "",
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
            image_url: "", 
            youtube_url: "",
            twitter_url: "",
            instagram_url: "", 
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
                    Image
                    <input
                        type="image_url"
                        name="image_url"
                        onChange={onChange}
                        value={inputs.image_url}
                    />
                </label>
                <label>
                    Description
                    <input
                        type="description"
                        name="description"
                        onChange={onChange}
                        value={inputs.description}
                    />
                </label>
                <h3>Social Media Links</h3>
                <label>
                    youtube_url
                    <input
                        type="youtube_url"
                        name="youtube_url"
                        onChange={onChange}
                        value={inputs.youtube_url}
                    />
                </label>
                <label>
                    twitter_url
                    <input
                        type="twitter_url"
                        name="twitter_url"
                        onChange={onChange}
                        value={inputs.twitter_url}
                    />
                </label>
                <label>
                    instagram_url
                    <input
                        type="instagram_url"
                        name="instagram_url"
                        onChange={onChange}
                        value={inputs.instagram_url}
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