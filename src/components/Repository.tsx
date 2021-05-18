import { UserRepositories, UserRepository } from "../model/github-model";
import './Repository.css';

interface Props {
    repository: UserRepository[];
}

function Repository({repository}: Props) {

    return (

        <div className="Repository">
            {repository}
        </div>
    )
}

export default Repository;