import { UserRepositories, UserRepository } from "../model/github-model";
import './Repository.css';

interface Props {
    repository: UserRepository;
}

function Repository({repository}: Props) {

    return (

        <div className="Repository">
            <h3>Repository</h3>
            <p>Name: {repository.name}</p>
        </div>
    )
}

export default Repository;