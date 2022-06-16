import * as moment from "moment";
import { Task } from "../_models/task";

export const TASKS_DATA: Task[] = [
    {
        id: 1,
        name: "Công việc 1",
        status: { id: 1, class: "doing", name: 'Đang làm' },
        priority: { id: 3, class: "very_high", name: 'Rất gấp' },
        project: 1001,
        begin_at: moment('31/01/2022', 'DD/MM/YYYY'),
        end_at: moment('31/12/2022', 'DD/MM/YYYY'),
        include_task: [6, 7, 8],
        leader: {
            id: 1,
            name: "Nguyễn Văn A",
            avatar: 'https://i.pinimg.com/736x/d1/b0/59/d1b059755ec1986183e8d24846626a33--lee.jpg'
        },
        members: [
            {
                id: 2,
                name: "Cao Hoàng Lâm",
                avatar: 'https://i.pinimg.com/736x/d1/b0/59/d1b059755ec1986183e8d24846626a33--lee.jpg'
            }
        ]
    },
    {
        id: 2,
        name: "Công việc 2",
        status: { id: 2, class: "doing", name: 'Đang làm' },
        priority: { id: 3, class: "very_high", name: 'Rất gấp' },
        project: 1001,
        begin_at: moment('31/01/2022', 'DD/MM/YYYY'),
        end_at: moment('31/12/2022', 'DD/MM/YYYY'),
        include_task: [9, 10],
        leader: {
            id: 1,
            name: "Nguyễn Văn A",
            avatar: 'https://i.pinimg.com/736x/d1/b0/59/d1b059755ec1986183e8d24846626a33--lee.jpg'
        },
        members: [
            {
                id: 3,
                name: "Trần Văn Chiến",
                avatar: 'https://i.pinimg.com/736x/d1/b0/59/d1b059755ec1986183e8d24846626a33--lee.jpg'
            }
        ]
    }, {
        id: 3,
        name: "Công việc 3",
        status: { id: 1, class: "todo", name: 'Chuẩn bị' },
        priority: { id: 1, class: "normal", name: 'Bình thường' },
        project: 1002,
        begin_at: moment('31/01/2022', 'DD/MM/YYYY'),
        end_at: moment('31/12/2022', 'DD/MM/YYYY'),
        include_task: [5],
        leader: {
            id: 7,
            name: "Lê Bá Ngọc",
            avatar: 'https://i.pinimg.com/736x/d1/b0/59/d1b059755ec1986183e8d24846626a33--lee.jpg'
        },
        members: [
            {
                id: 2,
                name: "Cao Hoàng Lâm",
                avatar: 'https://i.pinimg.com/736x/d1/b0/59/d1b059755ec1986183e8d24846626a33--lee.jpg'
            }
        ]
    }, {
        id: 4,
        name: "Công việc 4",
        status: { id: 1, class: "todo", name: 'Chuẩn bị' },
        priority: { id: 2, class: "high", name: 'Gấp' },
        project: 1002,
        begin_at: moment('31/01/2022', 'DD/MM/YYYY'),
        end_at: moment('31/12/2022', 'DD/MM/YYYY'),
        leader: {
            id: 4,
            name: "Thái Ngọc Nữ",
            avatar: 'https://i.pinimg.com/736x/d1/b0/59/d1b059755ec1986183e8d24846626a33--lee.jpg'
        },
        members: [
            {
                id: 5,
                name: "Đặng Hoài Nam",
                avatar: 'https://i.pinimg.com/736x/d1/b0/59/d1b059755ec1986183e8d24846626a33--lee.jpg'
            },
            {
                id: 6,
                name: "Võ Thị Tú",
                avatar: 'https://i.pinimg.com/736x/d1/b0/59/d1b059755ec1986183e8d24846626a33--lee.jpg'
            }
        ]
    }, {
        id: 5,
        name: "Công việc 5",
        status: { id: 2, class: "doing", name: 'Đang làm' },
        priority: { id: 1, class: "normal", name: 'Bình thường' },
        project: 1002,
        begin_at: moment('31/01/2022', 'DD/MM/YYYY'),
        end_at: moment('31/12/2022', 'DD/MM/YYYY'),
        belong_task: 3,
        leader: {
            id: 1,
            name: "Nguyễn Văn A",
            avatar: 'https://i.pinimg.com/736x/d1/b0/59/d1b059755ec1986183e8d24846626a33--lee.jpg'
        },
        members: [
            {
                id: 4,
                name: "Thái Ngọc Nữ",
                avatar: 'https://i.pinimg.com/736x/d1/b0/59/d1b059755ec1986183e8d24846626a33--lee.jpg'
            },
            {
                id: 2,
                name: "Cao Hoàng Lâm",
                avatar: 'https://i.pinimg.com/736x/d1/b0/59/d1b059755ec1986183e8d24846626a33--lee.jpg'
            }
        ]
    }, {
        id: 6,
        name: "Công việc 6",
        status: { id: 2, class: "doing", name: 'Đang làm' },
        priority: { id: 1, class: "normal", name: 'Bình thường' },
        project: 1001,
        begin_at: moment('31/01/2022', 'DD/MM/YYYY'),
        end_at: moment('31/12/2022', 'DD/MM/YYYY'),
        belong_task: 1,
        leader: {
            id: 7,
            name: "Lê Bá Ngọc",
            avatar: 'https://i.pinimg.com/736x/d1/b0/59/d1b059755ec1986183e8d24846626a33--lee.jpg'
        },
        members: [
            {
                id: 2,
                name: "Cao Hoàng Lâm",
                avatar: 'https://i.pinimg.com/736x/d1/b0/59/d1b059755ec1986183e8d24846626a33--lee.jpg'
            }
        ]
    }, {
        id: 7,
        name: "Công việc 7",
        status: { id: 4, class: "done", name: "Đã hoàn thành", },
        priority: { id: 1, class: "normal", name: 'Bình thường' },
        project: 1001,
        begin_at: moment('31/01/2022', 'DD/MM/YYYY'),
        end_at: moment('31/12/2022', 'DD/MM/YYYY'),
        belong_task: 1,
        leader: {
            id: 1,
            name: "Nguyễn Văn A",
            avatar: 'https://i.pinimg.com/736x/d1/b0/59/d1b059755ec1986183e8d24846626a33--lee.jpg'
        },
        members: [
            {
                id: 2,
                name: "Cao Hoàng Lâm",
                avatar: 'https://i.pinimg.com/736x/d1/b0/59/d1b059755ec1986183e8d24846626a33--lee.jpg'
            }
        ]
    }, {
        id: 8,
        name: "Công việc 8",
        status: { id: 3, class: "review", name: "(Xong) Chờ duyệt" },
        priority: { id: 1, class: "normal", name: 'Bình thường' },
        project: 1001,
        begin_at: moment('31/01/2022', 'DD/MM/YYYY'),
        end_at: moment('31/12/2022', 'DD/MM/YYYY'),
        belong_task: 1,
        leader: {
            id: 8,
            name: "Bùi Xuân Hiến",
            avatar: 'https://i.pinimg.com/736x/d1/b0/59/d1b059755ec1986183e8d24846626a33--lee.jpg'
        },
        members: [
            {
                id: 2,
                name: "Cao Hoàng Lâm",
                avatar: 'https://i.pinimg.com/736x/d1/b0/59/d1b059755ec1986183e8d24846626a33--lee.jpg'
            }
        ]
    }, {
        id: 9,
        name: "Công việc 9",
        status: { id: 3, class: "review", name: "(Xong) Chờ duyệt" },
        priority: { id: 1, class: "normal", name: 'Bình thường' },
        project: 1001,
        begin_at: moment('31/01/2022', 'DD/MM/YYYY'),
        end_at: moment('31/12/2022', 'DD/MM/YYYY'),
        belong_task: 2,
        leader: {
            id: 1,
            name: "Nguyễn Văn A",
            avatar: 'https://i.pinimg.com/736x/d1/b0/59/d1b059755ec1986183e8d24846626a33--lee.jpg'
        },
        members: [
            {
                id: 2,
                name: "Cao Hoàng Lâm",
                avatar: 'https://i.pinimg.com/736x/d1/b0/59/d1b059755ec1986183e8d24846626a33--lee.jpg'
            }
        ]
    }, {
        id: 10,
        name: "Công việc 10",
        status: { id: 2, class: "doing", name: 'Đang làm' },
        priority: { id: 1, class: "normal", name: 'Bình thường' },
        project: 1001,
        begin_at: moment('31/01/2022', 'DD/MM/YYYY'),
        end_at: moment('31/12/2022', 'DD/MM/YYYY'),
        belong_task: 2,
        leader: {
            id: 1,
            name: "Nguyễn Văn A",
            avatar: 'https://i.pinimg.com/736x/d1/b0/59/d1b059755ec1986183e8d24846626a33--lee.jpg'
        },
        members: [
            {
                id: 2,
                name: "Cao Hoàng Lâm",
                avatar: 'https://i.pinimg.com/736x/d1/b0/59/d1b059755ec1986183e8d24846626a33--lee.jpg'
            }
        ]
    },

]

export const DISPLAYED_TASK_COLUMNS = [
    'position',
    'name',
    'project',
    'begin_at',
    'end_at',
    'leader',
    'members',
]