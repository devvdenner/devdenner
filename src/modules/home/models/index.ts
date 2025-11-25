export interface IProfileSummary {
    name: string;
    role: string;
    description: string;
}

export interface IHomeModel {
    profile: IProfileSummary;
    isLoading: boolean;
}
