document.getElementById("profile_button").addEventListener("click", showProf, false);
document.getElementById("skills_button").addEventListener("click", showSki, false);
document.getElementById("projects_button").addEventListener("click", showProj, false);
document.getElementById("interests_button").addEventListener("click", showInt, false);

function changeToPink() {
    document.getElementById("profile_button").style.backgroundColor = "#F7C5CC";
    document.getElementById("skills_button").style.backgroundColor = "#F7C5CC";
    document.getElementById("projects_button").style.backgroundColor = "#F7C5CC";
    document.getElementById("interests_button").style.backgroundColor = "#F7C5CC";
}

function showProf() {
    changeToPink();
    document.getElementById("frame").src = "profile.html";
    document.getElementById("profile_button").style.backgroundColor = "#FCF6F5FF";
}

function showSki() {
    changeToPink();
    document.getElementById("skills_button").style.backgroundColor = "#FCF6F5FF";
    document.getElementById("frame").src = "skills.html";
}

function showProj() {
    changeToPink();
    document.getElementById("projects_button").style.backgroundColor = "#FCF6F5FF";
    document.getElementById("frame").src = "projects.html";
}

function showInt() {
    changeToPink();
    document.getElementById("interests_button").style.backgroundColor = "#FCF6F5FF";
    document.getElementById("frame").src = "interests.html";
}