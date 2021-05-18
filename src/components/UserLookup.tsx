import { FormEvent, useEffect, useState } from "react";
import { User, UserRepository } from "../model/github-model";
import GitHubUserSummary from "./GitHubUserSummary";
import './UserLookup.css'




function UserLookUp() {
    const [ selectedUserName, setSelectedUserName ] = useState("");
    

    // function handleSubmit(e:FormEvent) {
    //     e.preventDefault();

    //     const user = selectedUserName
    //     onSubmit(user);
    //     console.log(selectedUserName);
    // }
    
    return (
        <div className="UserLookUp">
            <form >
                <label>
                    Enter a GitHub username: 
                    <input type="text"  onChange={e => setSelectedUserName(e.target.value)} value={selectedUserName} />
                </label>
                <button type="submit">Show User</button>
            </form>
            { selectedUserName &&
            <GitHubUserSummary username={selectedUserName} /> }
        </div>
    )
}

export default UserLookUp;