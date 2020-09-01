
export interface SearchType {
    Title: string;
    Year: string;
    imdbID:string;
    Type:string;
    Poster:string;
}
export interface ResponseType{
    Search:SearchType[];
    totalResults:number;
    Response:string;
}