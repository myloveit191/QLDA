import { Moment } from "moment"
import { Document } from "./document"
import { Investor } from "./investor"
import { ProjectCategory } from "./project-category"

export interface Project {
    id: number,
    code: string
    name: string,
    category: ProjectCategory, //loại đầu tư
    form: number, //loại thầu
    investor: Investor,
    doc?: Document[],
    priority: number, // mức độ
    revenue: number,
    revenue2: number,
    des?: string,
    create_at: Moment,
    create_by: string,
    begin_at:Moment,
    end_at:Moment

}

