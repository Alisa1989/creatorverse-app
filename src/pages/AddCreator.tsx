import { useState } from "react";
import { supabase } from "../client";
import { useNavigate } from "react-router-dom";
import { CreatorModel } from "../App";
import { FaYoutube, FaTwitter, FaInstagram } from "react-icons/fa";


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
        <div className="form">
            <form>
                <div>
                    <label>
                        <h4>
                            Name
                        </h4>
                        <input
                            type="text"
                            name="name"
                            onChange={onChange}
                            value={inputs.name}
                            />
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
                            type="text"
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
                            type="text"
                            name="description"
                            onChange={onChange}
                            value={inputs.description}
                            />
                    </label>
                </div>
                <div className="social-media-links-header">
                    <h3>Social Media Links</h3>
                    <p>
                    Provide at least one of the creator's social media links.
                    </p>
                </div>
                <div>
                    <label>
                        <h4>
                            <FaYoutube style={{color: "white"}}/>
                            <span className="has-icon">
                                YouTube
                            </span>
                        </h4>
                        <p>
                        The creator's YouTube handle (without the @)
                        </p>
                        <input
                            type="text"
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
                            <span className="has-icon">
                                Twitter
                            </span>
                        </h4>
                        <p>
                        The creator's Twitter handle (without the @)
                        </p>
                        <input
                            type="text"
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
                            <span className="has-icon">
                                Instagram
                            </span>
                        </h4>
                        <p>
                        The creator's Instagram handle (without the @)
                        </p>
                        <input
                            type="text"
                            name="instagram_url"
                            onChange={onChange}
                            value={inputs.instagram_url}
                            />
                    </label>
                </div>
            </form>
            <div className="bottom-buttons-container">
                <button className="bottom-buttons button-submit buttons-form" onClick={addCreator}>
                    Submit
                </button>
            </div>
        </div>
    );
}

export default AddCreator