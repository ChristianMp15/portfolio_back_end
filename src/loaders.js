// BASE URL OF OUR DEPLOYED API
// BASE URL OF OUR DEPLOYED API
const URL = "https://portfolio-back-end-z6g2.onrender.com"

export const projectsLoader = async () => {
    const response = await fetch(URL + "/projects")
    const projects = await response.json()
    return projects
}

export const aboutLoader = async () => {
    const response = await fetch(URL + "/about")
    const about = await response.json()
    return about
}
export const githubLoader = async () => {
    const response = await fetch(URL + "/github")
    const github = await response.json()
    return github
}