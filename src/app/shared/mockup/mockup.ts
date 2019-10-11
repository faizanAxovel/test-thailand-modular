import { Claimant, ClaimType, Hospital, Diagnosis } from '../model/model';

export const claimants: Claimant[] = [
    {
        id: 1,
        name: 'abcd'
    },
    {
        id: 2,
        name: 'Mno'
    },
    {
        id: 3,
        name: 'Pqr'
    }
];



export const claimTypes: ClaimType[] = [
    {
        id: 1,
        description: 'same same',
        image: 'practitionr-icn.jpg',
        isCovered: false
    },
    {
        id: 2,
        description: 'abcd abcd',
        image: 'dental-icn.jpg',
        isCovered: true
    },
    {
        id: 3,
        description: 'xyz xyz',
        image: 'vision-icn.jpg',
        isCovered: false
    }
];


export const hospitals: Hospital[] = [
    {
        id: 1,
        name: 'Abcd'
    },
    {
        id: 2,
        name: 'xyz'
    },
    {
        id: 3,
        name: 'mno'
    }
];

export const diagnosis: Diagnosis[] = [
    {
        id: 1,
        description: 'Mno'
    },
    {
        id: 2,
        description: 'Pqr'
    },
    {
        id: 3,
        description: 'Xyz'
    }
];
export const docTypes = [
    {
        docCode: 'Receipt',
        mandatory: true
    },
    {
        docCode: 'Medical Certificate',
        mandatory: true
    }
];
