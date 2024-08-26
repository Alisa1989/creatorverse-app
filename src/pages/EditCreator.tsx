// allows user to update creators information
import { deleteCreator } from "../utlities/Functions";
import { useParams, useNavigate } from "react-router-dom";
import { CreatorModel } from "../App";
import { supabase } from "../client";
import { useState } from "react";
import { FaYoutube, FaTwitter, FaInstagram } from "react-icons/fa";


const EditCreator = ({creators, refresh}) => {
    const navigate = useNavigate();
    const { id } = useParams();
    const selected: CreatorModel = creators.find((crea) => crea.id == id);

    const [inputs, setInputs] = useState<CreatorModel>({ 
        name: selected.name, 
        image_url: selected.image_url, 
        description: selected.description,
        youtube_url: selected.youtube_url, 
        twitter_url: selected.twitter_url, 
        instagram_url: selected.instagram_url, 
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
        <div className="form">
            <h3>
                EditCreator
            </h3>
            <form>
                <div>

                <label>
                    <h4>
                    Name
                    </h4>
                    <span>

                    <input
                        type="name"
                        name="name"
                        onChange={onChange}
                        value={inputs.name}
                        />
                        </span>
                </label>
                </div>
                    <div>

                <label>
                    <h4>

                    Image
                    </h4>
                    <p>
                    Provide a link to an image of your creator. Be sure to include the http://
                    </p>
                    <input
                        type="image_url"
                        name="image_url"
                        onChange={onChange}
                        value={inputs.image_url}
                        />
                </label>
                        </div>
                        <div>

                <label>
                    <h4>
                    Description

                    </h4>
                    <p>
                    Provide a description of the creator. Who are they? What makes them interesting?
                    </p>
                    <input
                        type="description"
                        name="description"
                        onChange={onChange}
                        value={inputs.description}
                        />
                </label>
                        </div>
                <h3>Social Media Links</h3>
                <div>

                <label>
                    <h4>
                    <FaYoutube style={{color: "white"}}/>
                    YouTube

                    </h4>
                    <p>
                    The creator's YouTube handle (without the @)
                    </p>
                    <input
                        type="youtube_url"
                        name="youtube_url"
                        onChange={onChange}
                        value={inputs.youtube_url}
                        />
                </label>
                        </div>
                        <div>

                <label>
                    <h4>

                    <FaTwitter />
                    Twitter
                    </h4>
                    <p>
                    The creator's Twitter handle (without the @)
                    </p>
                    <input
                        type="twitter_url"
                        name="twitter_url"
                        onChange={onChange}
                        value={inputs.twitter_url}
                        />
                </label>
                        </div>
                        <div>

                <label>
                    <h4>

                    <FaInstagram />
                    Instagram
                    </h4>
                    <p>
                    The creator's Instagram handle (without the @)
                    </p>
                    <input
                        type="instagram_url"
                        name="instagram_url"
                        onChange={onChange}
                        value={inputs.instagram_url}
                        />
                </label>
                        </div>
            </form>
            <div className="bottom-buttons">

            <button onClick={modifyCreator}>
                Submit
            </button>
            <button onClick={()=> {
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

export default EditCreator