import LoginForm from '../components/Login/LoginForm';
import {useNavigation} from "react-router-dom";

const LoginPage = () => {
    const navigation = useNavigation();

    return (
        <div>
            {navigation.state === "loading" ? <div>loading</div> : <LoginForm /> }
        </div>
    );
};

export default LoginPage;