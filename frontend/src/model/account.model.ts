export interface Account {
    _id: string;
    account: string;
    password: string;
    role: string;
    createdAt: String;
    status: string;
}

export default class ModelAccount {
    username: string;
    account: string;
    password: string;
    role: string;
    status: string;

    constructor(username: string, account: string, password: string, role: string, status: string) {
        this.username = username;
        this.account = account;
        this.password = password;
        this.role = role;
        this.status = status;
    }

    

        
}