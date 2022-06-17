import { Moment } from "moment"
import { Member } from "./member"
import { Priority } from "./priority"
import { Status } from "./status"

export interface Task {
    id:number,
    name: string,
    des?: string,
    status: Status,
    project: number,
    priority: Priority,
    belong_task?: number,
    include_task?: number[],
    begin_at:Moment,
    end_at:Moment
    leader: Member,
    selected_members: Member[]
}