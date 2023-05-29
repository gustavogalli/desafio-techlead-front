export class Customer {
    id?: any;
    name: string;
    cpf: string;
    email: string;
    password: string;
    type: string;
    profiles: number[];
    uploadedBooks?: number[];
    borrowedBooks?: number[];
    daysOfPenalty: number;
}