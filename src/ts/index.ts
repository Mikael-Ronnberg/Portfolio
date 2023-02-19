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
            let repoImg: HTMLImageElement = document.createElement("img") as HTMLImageElement;
            let btnCont: HTMLDivElement = document.createElement("div") as HTMLDivElement;
            let repoBtn1: HTMLAnchorElement = document.createElement("a") as HTMLAnchorElement;
            let repoBtn2: HTMLAnchorElement = document.createElement("a") as HTMLAnchorElement;

            repoCont.classList.add("repoContainer");
            repoHead.classList.add("repoHeader");
            repoText.classList.add("repoText");
            repoImg.classList.add("repoImage");
            btnCont.classList.add("btnContainer");
            repoBtn1.classList.add("repoBtns");
            repoBtn2.classList.add("repoBtns");
            
            repoHead.innerText = repositories[i].name;
            repoImg.src = `img/${repositories[i].name}.png`;
            repoImg.alt = `${repositories[i].name} image`;
            repoText.innerText = repositories[i].description || "";
            repoBtn1.href = repositories[i].homepage;
            repoBtn1.target = "blank";
            repoBtn1.innerHTML = "Deploy Site";
            repoBtn2.href = repositories[i].html_url;
            repoBtn2.target = "blank";
            repoBtn2.innerHTML = "Visit Repository";
            repoCont.appendChild(repoHead);
            repoCont.appendChild(repoImg);
            repoCont.appendChild(repoText);
            btnCont.appendChild(repoBtn1);
            btnCont.appendChild(repoBtn2);
            repoCont.appendChild(btnCont);
            
    
            repoContainer.appendChild(repoCont);        

        }

    }
}