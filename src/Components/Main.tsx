import { getApiDocs } from "../../lib/swagger";
import ReactSwagger from "./ReactSwagger";

const Main = async () => {

    const spec = await getApiDocs();

    return (
        <div className="p-4">
            <ReactSwagger spec={spec} />
        </div>
    )

};

export default Main;