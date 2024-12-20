/** Storage'a veri kaydetme ya da alma işlemleri burada */
class StorageLogger {
    static key = "SEARCHED_USERS";
    static getSearchedUsersFromStorage() {
        let users;
        if (localStorage.getItem(this.key) == null) {
            users = [];
        } else {
            users = JSON.parse(localStorage.getItem(this.key));
        }
        return users;
    }

    static checkUser(userName) {
        const users = this.getSearchedUsersFromStorage();
        if (!users.includes(userName)) {
            return true;
        }
        return false;
    }

    static addSearchedUserToStorage(userName) {
        const users = this.getSearchedUsersFromStorage();
        if (this.checkUser(userName)) {
            users.push(userName.trim());
            localStorage.setItem(this.key, JSON.stringify(users));
        }
    }

    static clearAllSearchedUsersFromStorage() {
        localStorage.removeItem(this.key);
    }
}
export { StorageLogger };