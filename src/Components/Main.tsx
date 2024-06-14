import { getAPIDocs } from "../lib/swagger";
import ReactSwagger from "./ReactSwagger";

const Main = () => {

    const spec = getAPIDocs();

    return (
        <section className="container">
            <ReactSwagger spec={spec} />
        </section>
    )

};

export default Main;