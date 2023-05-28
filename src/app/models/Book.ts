import { Customer } from "./Customer";

export class Book {

    id?: any;
    isbn: string;
    title: string;
    author: string;
    publisher: string;
    pageQty: number;
    uploader: Customer;
    borrower: Customer;

}