import axios from "axios";
import { IRepos } from "../models/IRepos";

export function getGitRepos(): Promise<IRepos[]> {
    return axios.get("https://api.github.com/users/Mikael-Ronnberg/repos").then((response) => {
        return response.data;
    })
}