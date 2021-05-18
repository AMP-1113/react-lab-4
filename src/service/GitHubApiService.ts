import { User, UserRepository } from "../model/github-model";

const ghCredentials: string = process.env.REACT_APP_GITHUB_API_CREDENTIALS || "";
const credentials = btoa(ghCredentials); // Base 64 endcode

export function fetchUserRepos(name: string): Promise<UserRepository[]> {
    return fetch(`https://api.github.com/users/${name}/repos`, {
        headers: {
          Authorization: `Basic ${credentials}`
        }
      })
    .then(res => res.json())
    // The type of data must be the interface for the outermost JSON
    .then((data: UserRepository[]) => {
      return data;
    });
  }

export function fetchOneUser(name: string): Promise<User> {
    return fetch(`https://api.github.com/users/${name}`, {
        headers: {
          Authorization: `Basic ${credentials}`
        }
      })
    .then(res => res.json())
    .then((data: User) => {
      return data;
    });
  }

