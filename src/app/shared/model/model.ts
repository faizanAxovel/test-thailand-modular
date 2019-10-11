export interface Claimant {
    id: number;
    name: string;
}

export interface ClaimType {
    id: number;
    description: string;
    image: string;
    isCovered: boolean;
}
export interface Hospital {
    id: number;
    name: string;
}

export interface Diagnosis {
    id: number;
    description: string;
}

export interface Receipt {
    currency: string;
    amount: string;
}