import { useRouteError } from "react-router-dom";

export default function NotFoundErrorPage() {
    const error: any = useRouteError();
    console.error(error);

    return (
        <div id="error-page" className="min-h-screen flex justify-center items-center flex-col">
            <h1>404</h1>
            <h1>This Page Is Not Found</h1>
        </div>
    );
}