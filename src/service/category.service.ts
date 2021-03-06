import { Injectable } from '@angular/core';

@Injectable(
    { providedIn: 'root' }
)
export class CategoryService {
    getCategoryList = () => {
        return [
            {   id: 1,   
                name: 'Điện thoại',
                icon: 'https://cdn-icons-png.flaticon.com/512/15/15874.png',
            },
            {   id: 2,
                name: 'Tablet',
                icon: 'https://cdn-icons-png.flaticon.com/512/114/114703.png',
            },
            {   id: 3,
                name: 'Laptop',
                icon: 'https://cdn-icons-png.flaticon.com/512/482/482469.png',
            },
            {   id: 4,
                name: 'Đồng hồ',
                icon: 'https://cdn-icons-png.flaticon.com/512/916/916337.png',
            },
            {   id: 5,
                name: 'Tai nghe',
                icon: 'https://cdn-icons-png.flaticon.com/512/2238/2238074.png',
            },
            {   id: 6,
                name: 'Máy cũ',
                icon: 'https://cdn-icons-png.flaticon.com/512/6398/6398259.png',
            },
            {   id: 7,
                name: 'Màn hình',
                icon: 'https://cdn-icons-png.flaticon.com/512/3474/3474360.png',
            },
            {   id: 8,
                name: 'USB',
                icon: 'https://cdn-icons-png.flaticon.com/512/917/917147.png',
            },
            {   id: 9,
                name: 'Dây sạc',
                icon: 'https://cdn-icons-png.flaticon.com/512/640/640348.png',
            },
            {   id: 10,
                name: 'Loa',
                icon: 'https://cdn-icons-png.flaticon.com/512/860/860330.png',
            },
        ]
    }
}