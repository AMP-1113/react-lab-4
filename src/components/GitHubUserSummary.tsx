import { useEffect, useState } from 'react';
import { User, UserRepositories, UserRepository } from '../model/github-model'
import { fetchOneUser, fetchUserRepos } from '../service/GitHubApiService'
import Repository from './Repository';

interface Props {
    username: string;
}

// test
// fetchOneUser("amp-1113").then(user => console.log(user));
// fetchUserRepos("octocat").then(user => console.log(user));

function GitHubUserSummary({username}: Props) {
    const [ userInfo, setUserInfo ] = useState<User | null>(null);
    const [ userRepos, setUserRepos ] = useState<UserRepository[]>([]);

    useEffect(() => {
        if (username) {
            fetchOneUser(username).then(data => {
            setUserInfo(data);
          });
        } else {
          // Invalid ID
          setUserInfo(null);
        }
      // the dependencies array here includes selectedId so it will re-run the useEffect
      // callback function whenever selectedId changes
      }, [username]);

      useEffect(() => {
            fetchUserRepos(username).then(data => {
            setUserRepos(data);
          });
      // the dependencies array here includes selectedId so it will re-run the useEffect
      // callback function whenever selectedId changes
      }, []);


    return (

        <div className="GitHubUserSummary">
            <h2>Name: {userInfo?.name}</h2>
            <h4>UserName: {userInfo?.login}</h4>
            <img src={userInfo?.avatar_url} alt="profilepic" />
            <p> 
                View their GitHub: 
                 <a href={userInfo?.html_url}>{userInfo?.html_url}</a>
            </p>
            <div className="RepositoryContainer">
                <h2>Repositories</h2>
                {userRepos.map((repo, index) =>
                <>
                <h3 key={index} >{repo.name}</h3> 
                <p key={index}> {repo.html_url} </p>
                <p key={index}> {repo.description} </p>
                <p key={index}> {repo.language} </p>
                <p key={index}> {repo.pushed_at} </p>
                </>
                )}
            </div>
        </div>
    )
}

export default GitHubUserSummary;

