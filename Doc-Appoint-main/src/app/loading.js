import { Spinner } from "@heroui/react";


const loading = () => {
    return (
        <div className="h-screen flex items-center justify-center">
            <Spinner color="accent" />
        </div>
    );
};

export default loading;