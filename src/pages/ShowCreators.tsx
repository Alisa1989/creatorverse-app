// Will show all content creators
import { CreatorModel } from "../App";
import Card from "../components/Card";

const ShowCreators = ({creators}) => {
    return (
        <div className="show-creators">
                {creators!.map((creator: CreatorModel) => {
                    return (
                    <Card
                        creator={creator}
                        key={creator.id}
                    />
                )
            })}
        </div>
    );
}

export default ShowCreators