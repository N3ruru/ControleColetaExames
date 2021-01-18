
export interface Exam {
    id?: number
    patientId: number;
    proceduresIds: numbers[];
    collectionDate: Date;
    resultsDate?: Date;
}