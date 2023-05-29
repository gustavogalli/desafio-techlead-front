import { Book } from "./Book";

export class Customer {
    id?: any;
    name: string;
    cpf: string;
    email: string;
    password: string;
    uploadedBooks?: number[];
    borrowedBooks?: number[];
}