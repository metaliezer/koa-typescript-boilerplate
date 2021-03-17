export interface IRoute {
    path: string;
    method: "get" | "post" | "delete" | "put";
    action: any;
}
