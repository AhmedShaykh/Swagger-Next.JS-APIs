import { getApiDocs } from "../../lib/swagger";
import ReactSwagger from "./ReactSwagger";

const Main = async () => {

    const spec = await getApiDocs();

    return (
        <div className="px-4 pt-2 pb-8">
            <ReactSwagger spec={spec} />
        </div>
    )

};

export default Main;