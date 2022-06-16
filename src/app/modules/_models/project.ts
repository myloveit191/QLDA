import { Moment } from "moment"
import { Document } from "./document"
import { ProjectCategory } from "./project-category"

export interface Project {
    id: number,
    code: string
    name: string,
    category: ProjectCategory,
    investor: string,
    des?: string,
    doc?: Document[]
    status: number,
    create_at: Moment,
    create_by: string,
    begin_at:Moment,
    end_at:Moment

}

