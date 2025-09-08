import { Suspense } from "react";
import routes from "./routes/AllRoutes";
import {RouterProvider} from "react-router-dom";
import PageLoading from "./components/loading/PageLoading"
function App() {
    return (
        <Suspense fallback={<PageLoading />}>
            <RouterProvider router={routes}/>
        </Suspense>
    );
}

export default App;
