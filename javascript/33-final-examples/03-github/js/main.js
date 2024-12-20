/**
 * Kullanıcı Getir => https://api.github.com/users/
 * Repoları Getir => https://api.github.com/users/saozdemir/repos
 */
import { GitHub } from "./github.js";
import { UI } from "./ui.js";
import { StorageLogger } from "./storage.js";

const githubName = document.querySelector("#githubName");
const form = document.querySelector("#searchForm");
const clearButton = document.querySelector("#clearButton");
const clearAllButton = document.querySelector("#clearAllButton");

const github = new GitHub();
const ui = new UI();

runEventListeners();

function runEventListeners() {
    form.addEventListener("submit", search);
    clearButton.addEventListener("click", clearInput);
    document.addEventListener("DOMContentLoaded", runPageLoaded)
    clearAllButton.addEventListener("click", clearSearchedUser)

}

function runPageLoaded() {
    ui.fillSearchedUserToUIFromStorage();
}

function clearSearchedUser() {
    StorageLogger.clearAllSearchedUsersFromStorage();
    ui.clearSearchedUser();
}

function search(e) {
    const userName = githubName.value.trim();
    if (userName == null || userName == '') {
        alert("Lütfen Kullanıcı Adı Giriniz")
    } else {
        github.getGitHubData(userName)
            .then((response) => {
                ui.addSearchedUserToUI(userName);
                StorageLogger.addSearchedUserToStorage(userName);
                ui.addUserProfileToUI(response.user);
                //! Aşağıdaki alan innerHTML ile oluşturulduğı için listener burada eklendi.
                document.querySelector("#showRepo").addEventListener("click", () => {
                    ui.showRepos(response.repo);
                });
            }).catch((error) => {
                console.err(error);
            });
    }
    e.preventDefault();
}

function clearInput() {
    ui.clearInput();
}