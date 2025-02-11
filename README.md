NguyenHaiDuong_22810310241<br>
So sánh FlatList và SectionList

1. Mục đích sử dụng:
	•	FlatList:
	•	Dùng để hiển thị danh sách phẳng các phần tử có cấu trúc lặp lại, thường là danh sách đơn giản, không phân nhóm.
	•	Phù hợp cho dữ liệu không có nhóm hoặc các phần tử ở cùng một cấp.
	•	SectionList:
	•	Dùng để hiển thị danh sách được phân nhóm (section), ví dụ: danh bạ điện thoại phân theo chữ cái hoặc danh sách sản phẩm phân loại theo danh mục.
	•	Phù hợp khi bạn cần hiển thị tiêu đề nhóm (header) cho từng nhóm.

2. Cấu trúc dữ liệu:
	•	FlatList:
	•	Dữ liệu truyền vào là một mảng phẳng, thường có cấu trúc đơn giản.

const data = [
  { id: '1', name: 'Item 1' },
  { id: '2', name: 'Item 2' },
  { id: '3', name: 'Item 3' },
];


	•	SectionList:
	•	Dữ liệu truyền vào là một mảng các nhóm (section), mỗi nhóm có header và data (một mảng các phần tử trong nhóm).

const data = [
  {
    title: 'Category 1',
    data: ['Item 1', 'Item 2'],
  },
  {
    title: 'Category 2',
    data: ['Item 3', 'Item 4'],
  },
];



3. Hiệu năng:
	•	FlatList:
	•	Hiệu năng cao hơn khi làm việc với dữ liệu phẳng.
	•	Hỗ trợ lazy loading (chỉ render các phần tử trong vùng hiển thị).
	•	Phù hợp với danh sách lớn, không cần xử lý phức tạp.
	•	SectionList:
	•	Hiệu năng thấp hơn FlatList khi dữ liệu lớn, vì phải xử lý thêm các header cho từng nhóm.
	•	Hỗ trợ lazy loading, nhưng việc render các nhóm và tiêu đề làm tăng độ phức tạp.
	•	Thích hợp cho danh sách nhỏ hoặc vừa, nhưng nếu dữ liệu quá lớn, cần tối ưu thêm.

4. Tính dễ sử dụng:
	•	FlatList:
	•	Dễ sử dụng hơn vì cấu trúc dữ liệu đơn giản.
	•	Không cần quan tâm đến việc xử lý tiêu đề nhóm hoặc cấu trúc lồng ghép.
	•	SectionList:
	•	Phức tạp hơn FlatList vì cần cấu hình dữ liệu dạng section và xử lý các header.
	•	Tuy nhiên, nó tích hợp sẵn khả năng render các tiêu đề nhóm (header), giúp dễ dàng hiển thị danh sách phân nhóm.


	•	FlatList:
Khi danh sách của bạn phẳng, không cần phân nhóm và có thể hiển thị trực tiếp.
	•	SectionList:
Khi bạn cần hiển thị danh sách có cấu trúc phân nhóm 
Nếu chỉ cần danh sách đơn giản và hiệu năng cao, FlatList là lựa chọn tốt hơn. br>
![Ảnh sản phẩm](/anh.jpg)# Bai_Tap_11022025_NguyenHaiDuong_22810310241
