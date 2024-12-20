/** Kullanıcı arayüzü işlemleri burada. */
import { StorageLogger } from "./storage.js";
class UI {
    constructor() {
        this.profileContentDiv = document.querySelector("#profileContentDiv");
        this.githubNameInput = document.querySelector("#githubName");
        this.tableContent = document.querySelector("#tableContent");
        this.searchedUserList = document.querySelector("#searchedUserList");
        this.isShowRepo = true;
    }

    fillSearchedUserToUIFromStorage() {
        const users = StorageLogger.getSearchedUsersFromStorage();
        if (users != null & users.length > 0) {
            users.forEach(user => {
                const li = document.createElement("li");
                li.className = "list-group-item";
                li.textContent = user;

                this.searchedUserList.appendChild(li);
            })
        }
    }

    addSearchedUserToUI(userName) {
        if (StorageLogger.checkUser(userName)) {
            const li = document.createElement("li");
            li.className = "list-group-item";
            li.textContent = userName;

            this.searchedUserList.appendChild(li);
        }
    }

    addUserProfileToUI(user) {
        this.profileContentDiv.innerHTML = `
        <div class="col-sm-12 col-md-4 col-lg-4">
          <div id="profileDiv">
            <img
              class="mb-3"
              id="profileImg"
              src="${user.avatar_url}"
              width="200"
              height="200"
            />
            <hr style="border: 1px solid lightgray; width: 50%" />
            <span>${user.name}</span>
            <span>Mühendis</span>
          </div>
        </div>
        <div class="col-sm-12 col-md-8 col-lg-8">
          <div id="badgeDiv" class="mt-1">
            <button type="button" class="btn btn-primary btn-sm">
              Takipçi <span class="badge badge-light">${user.followers}</span>
            </button>
            <button type="button" class="btn btn-success btn-sm">
              Takip Edilen <span class="badge badge-light">${user.following}</span>
            </button>
            <button type="button" class="btn btn-secondary btn-sm">
              Repolar <span class="badge badge-light">${user.public_repos}</span>
            </button>
          </div>
          <div id="infoDiv" class="mt-3">
            <div class="info">
              <img src="images/company.png" width="40" height="40" alt="" />
              <span>${user.company == null ? "-" : user.company}</span>
            </div>
            <div class="info">
              <img src="images/location.png" width="40" height="40" alt="" />
              <span>${user.location == null ? "-" : user.location}</span>
            </div>
            <div class="info">
              <img src="images/mail.png" width="40" height="40" alt="" />
              <span>${user.email == null ? "-" : user.email}</span>
            </div>
            <div class="info">
              <a id="showRepo" href="#">Repoları Göster</a>
            </div>
          </div>
        </div>
        `;
    }

    changeMessage() {
        //! showRepo dinamik olarak oluşturulduğu için querySelector ile buradan aldık.
        const showRepoLink = document.querySelector("#showRepo");
        if (this.isShowRepo) {
            showRepoLink.textContent = "Repoları Göster";
        } else {
            showRepoLink.textContent = "Repoları Kapat";
        }
    }

    showRepos(repos) {
        if (this.isShowRepo) {
            if (repos != null && repos.length > 0) {
                let counter = 1;
                repos.forEach((repo) => {
                    this.tableContent.innerHTML += `
                <tr>
                  <th scope="row">${counter}</th>
                  <td>${repo.name}</td>
                  <td>${repo.created_at}</td>
                </tr>
                    `;
                    counter++;
                });
            }
            this.isShowRepo = false;
            this.changeMessage();
        } else {
            this.isShowRepo = true;
            this.changeMessage();
            this.tableContent.innerHTML = "";
        }
    }

    clearInput() {
        this.githubNameInput.value = "";
        this.profileContentDiv.innerHTML = "";
        this.tableContent.innerHTML = "";
    }

    clearSearchedUser() {
        this.searchedUserList.innerHTML="";
    }
}
export { UI };