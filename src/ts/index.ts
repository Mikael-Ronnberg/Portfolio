import { IRepos } from "./models/IRepos";
import { getGitRepos } from "./services/githubReposApi";
import { animate } from "./three/scene";


animate()

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        } else {
            entry.target.classList.remove("visible");
        }
    })
})

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));


const repoContainer: HTMLDivElement = document.getElementById("dynamicUpload") as HTMLDivElement;

let repos: IRepos[] = await getGitRepos();

function createObjectsOnDom(repositories: IRepos[]) {

    repoContainer.innerHTML = "";

    for(let i = 0; i < repositories.length; i++) {
        let repoCont: HTMLDivElement = document.createElement("div") as HTMLDivElement;
        let repoHead: HTMLHeadingElement = document.createElement("h3") as HTMLHeadingElement;
        let repoText: HTMLParagraphElement = document.createElement("p") as HTMLParagraphElement;
        let repoBtn1: HTMLButtonElement = document.createElement("button") as HTMLButtonElement;
        let repoBtn2: HTMLButtonElement = document.createElement("button") as HTMLButtonElement;

    
    }
}

createObjectsOnDom(repos);

console.log(getGitRepos());