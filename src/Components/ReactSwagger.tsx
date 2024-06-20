"use client";
import { FC } from "react";
import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";

type Props = {
    spec: Record<string, any>;
};

const ReactSwagger: FC<Props> = ({ spec }) => {
    return <SwaggerUI spec={spec} />;
};

export default ReactSwagger;