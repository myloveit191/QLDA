import * as moment from "moment";
import { Project } from "../_models/project";

export const PROJECT_DATA: Project[] = [
    {
        id: 1001,
        code: "DA1001",
        status: 0,
        name: "Dự án cải thiện môi trường nước",
        category:  { id: 2, name: "Nhóm B - Vốn đầu tư"},
        investor: "CÔNG TY CỔ PHẦN NƯỚC - MÔI TRƯỜNG BÌNH DƯƠNG",
        des: 'Dự án xử lý nước thải này áp dụng công nghệ thu gom hiện đại bằng cách xây dựng hệ thống thu gom nước thải tách biệt với nước mưa và áp dụng công nghệ xử lý tiên tiến nhất hiện nay',
        doc: [
            {
                id: 1,
                name: 'Tài liệu 1',
                ext: 'docx',
                link: 'https://www.google.com.vn/'
            },
            {
                id: 2,
                name: 'Tài liệu 2',
                ext: 'docx',
                link: 'https://www.google.com.vn/'
            },
        ],
        create_at: moment('30/06/2022', 'DD/MM/YYYY'),
        begin_at: moment('31/07/2022', 'DD/MM/YYYY'),
        end_at: moment('30/06/2023', 'DD/MM/YYYY'),
        create_by: 'Nguyễn Văn A',
    },
    {
        id: 1002,
        code: "DA1002",
        status: 0,
        name: "Dự án đường liên tỉnh",
        category:  { id: 1, name: "Nhóm A - Vốn thường xuyên", des:'aaa'},
        investor: "Công ty cổ phần cao tốc Việt Nam",
        des: 'Dự án mở rộng đường liên tỉnh nối liền các tỉnh miền Đông Nam Bộ',
        doc: [
            {
                id: 3,
                name: 'Tài liệu 3',
                ext: 'pdf',
                link: 'https://www.google.com.vn/'
            },
            {
                id: 4,
                name: 'Tài liệu 4',
                ext: 'pdf',
                link: 'https://www.google.com.vn/'
            },
        ],
        create_at: moment('22/08/2022', 'DD/MM/YYYY'),
        begin_at: moment('31/07/2022', 'DD/MM/YYYY'),
        end_at: moment('12/01/2024', 'DD/MM/YYYY'),
        create_by: 'Nguyễn Văn A',
    }
]
