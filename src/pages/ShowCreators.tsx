// Will show all content creators
import Card from "../components/Card";
// import { useState } from 'react';
import { supabase } from "../client";


// async function getCreators() {
//     const url 
  
//   }

const { data, error } = await supabase
  .from('creators')
  .select()

console.log(data?.values(), error, typeof(data))

const ShowCreators = () => {

    return (
        <div>
            <h3>
                ShowCreators
            </h3>
            {/* {data?.map((creator: string, index: number) => {
                return <p> creator {creator}.name</p>
                console.log("creator", creator, "index", index)
            })} */}
            <Card/>
        </div>
    );
}

export default ShowCreators