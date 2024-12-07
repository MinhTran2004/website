import { RefObject } from "react";

export interface Account {
    _id: string;
    username: string;
    account: string;
    password: string;
    image: string;
    phone: string;
    role: string;
    createdAt: String;
    updatedAt: String;
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