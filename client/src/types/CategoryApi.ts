export interface CategoryApi {
    id: number,
    name: string,
    slug: string,
    parent_id: string | null,
    children?: CategoryApi[]
}