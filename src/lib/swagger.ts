import { createSwaggerSpec } from "next-swagger-doc";

export const getAPIDocs = async () => {

    const spec = createSwaggerSpec({
        apiFolder: "app/api",
        definition: {
            openapi: "3.1.0",
            info: {
                title: "Swagger Next.JS Realtime APIs!",
                version: "2.0",
            }
        },
    });

    return spec;

};