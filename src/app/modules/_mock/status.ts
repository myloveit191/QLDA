import { Status } from "../_models/status";

export const STATUS_DATA: Status[] = [
    {
        id: 1,
        name: "Chuẩn bị",
        class: "todo"
    },
    {
        id: 2,
        name: "Đang làm",
        class: "doing"
    },
    {
        id: 3,
        name: "(Xong) Chờ duyệt",
        class: "review"
    },
    {
        id: 4,
        name: "Đã hoàn thành",
        class: "done"
    }
]