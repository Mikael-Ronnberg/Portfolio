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

addEventListener("DOMContentLoaded", async () => {
    let repos: IRepos[] = await getGitRepos();
    createObjectsOnDom(repos);
    console.log(repos);

})


function createObjectsOnDom(repositories: IRepos[]) {

    repoContainer.innerHTML = "";

    for(let i = 0; i < repositories.length; i++) {
        if(repositories[i].stargazers_count != 0){
            let repoCont: HTMLDivElement = document.createElement("div") as HTMLDivElement;
            let repoHead: HTMLHeadingElement = document.createElement("h3") as HTMLHeadingElement;
            let repoText: HTMLParagraphElement = document.createElement("p") as HTMLParagraphElement;
            let repoBtn1: HTMLButtonElement = document.createElement("button") as HTMLButtonElement;
            let repoBtn2: HTMLButtonElement = document.createElement("button") as HTMLButtonElement;

            repoCont.classList.add("repoContainer");
            repoHead.classList.add("repoHeader");
            repoText.classList.add("repoText");
            repoBtn1.classList.add("repoBtns");
            repoBtn2.classList.add("repoBtns");
    
            repoHead.innerText = repositories[i].name;
            repoText.innerText = repositories[i].description || "";
            repoBtn1.innerHTML = `
                <a href="${repositories[i].homepage}" target="blank">Deploy Site
            `;
            repoBtn2.innerHTML = `
                <a href="${repositories[i].html_url}" target="blank">Visit Repository
            `;
            repoCont.appendChild(repoHead);
            repoCont.appendChild(repoText);
            repoCont.appendChild(repoBtn1);
            repoCont.appendChild(repoBtn2);
            
    
            repoContainer.appendChild(repoCont);        

        }

    }
}