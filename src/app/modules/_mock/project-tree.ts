
import { QldaNote } from '../_models/project-tree';
export const TREE_DATA: QldaNote[] = [
    {
        id: 1001,
        name: 'Dự án cải thiện môi trường nước',
        children: [{ id: 1003, name: 'Báo cáo đề xuất' }, { id: 1004, name: 'Lập chủ trương' }, { id: 1005, name: 'Tổ chức đấu thầu' }, { id: 1105, name: 'Tổ chức triển khai' }],
    },
    {
        id: 1002,
        name: 'Dự án mở rộng đường liên tỉnh',
        children: [
            {
                id: 1010,
                name: 'Báo cáo đề xuất',
                children: [{ id: 1006, name: 'Báo cáo A' }, { id: 1007, name: 'Báo cáo B' }],
            },
            {
                id: 1011,
                name: 'Tổ chức đấu thầu',
                children: [{ id: 1008, name: 'Thủ tục thuê đấu thầu' }, { id: 1009, name: 'Lập và thẩm định HSMT' }],
            },
        ],
    },
];