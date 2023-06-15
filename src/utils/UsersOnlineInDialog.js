class Dialog {
    constructor(userId, dialogId) {
        this.usersArray = [userId];
        this.dialogId = dialogId;
    }
    getCountOnlineUsers = () => {
        return this.usersArray.length;
    }

    addUser = (id) => {
        this.usersArray.push(id);
    }

    deleteUser = (id) => {
        this.usersArray = this.usersArray.filter( u => u !== id);
    }
    findUser = (id) => {
        return this.usersArray.find( u => u === id);
    }
    getUsersId = () => {
        return this.usersArray;
    }
}

class UsersOnlineInDialog {
    constructor() {
        this.dialogArray = [];
    }

    joinUser = (userId, dialogId) => {
        const dialog = this.dialogArray.find(dialog => dialogId === dialog.dialogId);
        if (dialog) {
            if (!dialog.findUser(userId)){
                dialog.addUser(userId);
            }
        } else {
            this.dialogArray.push(new Dialog(userId, dialogId));
        }
    };

    leaveUser = (userId, dialogId) => {
        const dialog = this.dialogArray.find(dialog => dialogId === dialog.dialogId);
        if (dialog) {
            dialog.deleteUser(userId);
        } else {
            console.log('Error');
        }
    };
    getCountUsersInDialog = (dialogId) => {
        const dialog = this.dialogArray.find(dialog => dialogId === dialog.dialogId);
        if (dialog) {
            return dialog.getCountOnlineUsers();
        } else {
            console.log('Error');
        }
    }
}

export default new UsersOnlineInDialog();
