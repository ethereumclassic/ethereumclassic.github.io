---
title: Cổ điển tương lai
contribute: true
contributors:
  - pyskell
  - IstoraMandiri
updated: 2022-08-25
disclaimer: opinion
seo: Tổng quan về lộ trình phát triển trong tương lai và cách đưa ra quyết định trong hệ sinh thái Ethereum Classic, dựa trên lịch sử và nguyên tắc của nó.
---

Không giống như nhiều dự án blockchain khác, Ethereum Classic không có một ủy ban tổ chức trung tâm gọi các cú đánh, vì vậy những gì được triển khai trong giao thức được xác định thông qua một hệ thống hữu cơ, dân chủ, nổi bật, thay vì từ trên xuống. Mặc dù cách tiếp cận này ban đầu không được thiết kế để mang lại sự mở rộng bùng nổ, nhưng sự đánh đổi được thực hiện để có tính bền vững lâu dài và sự bền bỉ của Ethereum Classic đã đặt nó vào vị trí vững chắc cho giai đoạn phát triển tiếp theo khi các hiệu ứng mạng bắt đầu được áp dụng quả cầu tuyết.

Trong phần này, chúng tôi sẽ giải nén quy trình này, có cái nhìn tổng quan ở cấp độ cao về trạng thái hiện tại của ETC và trình bày ngắn gọn một số nâng cấp tiềm năng hiện đang được thảo luận có thể đang được triển khai cho ETC.

## Quy trình nâng cấp

Ethereum Classic, giống như Bitcoin, không có lộ trình theo nghĩa phát triển phần mềm truyền thống, mà là một quy trình cho phép các tính năng tốt được triển khai nếu và khi chúng xuất hiện và được cộng đồng chấp thuận.

### ECIPs

[Quy trình](/development/ecips) của Đề xuất cải tiến Ethereum Classic (ECIP) là cách các nâng cấp lên Ethereum Classic được thảo luận và được cộng đồng nhà phát triển của nó kiểm tra một cách chặt chẽ. Quá trình này diễn ra mở và bất kỳ ai cũng có thể đóng góp bằng cách soạn thảo một ECIP mà một ngày nào đó có thể được đưa vào Ethereum Classic.

### Di chuyển chậm rãi & Đừng phá vỡ mọi thứ

Thông thường, việc triển khai các tính năng mới đòi hỏi sự hỗ trợ mạnh mẽ hoặc ít nhất là không có sự phản đối đáng kể từ cộng đồng Ethereum Classic, khiến ETC, giống như BTC, khá thận trọng trong việc phát triển công nghệ của nó. Không có quyết định thiên vị của nhóm trung tâm về những nâng cấp nào được thực hiện, mối đe dọa chia tách chuỗi do phản hồi đáng kể có nghĩa là Hard Fork trên ETC có xu hướng an toàn, gia tăng và trên hết là không gây tranh cãi.

Thay vì tâm lý "di chuyển nhanh và phá vỡ mọi thứ", có thể gây tổn hại về tài chính nếu mọi thứ xảy ra sai lầm, các bản cập nhật quan trọng thường được nghiền ngẫm, tinh chỉnh và thử nghiệm trong thời gian dài trước khi được triển khai vào giao thức để có thể đạt được sự đồng thuận một cách chính xác _trước_ một cái nĩa.

Ngoài ra, cần thận trọng để đảm bảo rằng, càng nhiều càng tốt, các hợp đồng đã được triển khai từ năm 2015 trở lại đây có thể hoạt động vĩnh viễn một cách trung thực và rằng Bộ luật _là Luật_ được duy trì.

Điều này không có nghĩa là ETC không thể đổi mới một cách cơ hội. Một ví dụ như vậy là [Thanos fork](/knowledge/forks#thanos), đã tận dụng kích thước DAG ngày càng tăng của Ethereum để tăng cường bảo mật bằng cách cho phép một danh mục GPU bị bỏ rơi khác khai thác ETC, đây là một bản nâng cấp dễ dàng cùng có lợi cho Ethereum Classic.

### Đổi mới kế thừa

Ethereum Classic duy trì khả năng tương thích với Máy ảo Ethereum, nó kế thừa tất cả những đổi mới xảy ra trên các chuỗi EVM khác, bao gồm hệ thống hợp đồng, công cụ dành cho nhà phát triển, thư viện và các khái niệm chung khác được tài trợ và phát triển chủ yếu cho các chuỗi khác này.

Optimistic Rollups, một công nghệ Lớp 2 đầy hứa hẹn giúp tăng cường khả năng mở rộng thông qua các giao dịch ngoài chuỗi, là một ví dụ tuyệt vời về điều này. Nhờ bản chất của Phần mềm nguồn mở miễn phí, hàng triệu đô la nghiên cứu và phát triển đã được chi tiêu bởi các dự án và nhóm không liên quan đến Ethereum Classic. Sự đổi mới này, nhờ khả năng tương thích EVM tổng quát, đã gián tiếp làm tăng tiện ích và giá trị của ETC.

### Ethereum như một Testnet

Một lợi thế của cách tiếp cận này là Ethereum Classic có thể đứng yên trong khi theo dõi các chuỗi khác chịu rủi ro khi triển khai các tính năng mới. Chỉ sau khi chúng được chứng minh là an toàn và hiệu quả, các tính năng tốt mới có thể được triển khai với rủi ro và nỗ lực phát triển tối thiểu.

Theo cách này, các chuỗi EVM khác có thể được coi là các testnet được khuyến khích của Ethereum Classic, với sự kiểm tra nghiêm ngặt hơn nhiều so với testnet truyền thống có thể cung cấp.

## Nhìn về phía trước

Khi viết bài, năm 2022 vừa mới đến, và ETC đang bắt đầu năm trải qua một đợt hoạt động mạnh mẽ. Rất nhiều [ứng dụng mới](/services/apps) và người dùng đã liên kết một cách hữu cơ và hệ sinh thái ETC đang bắt đầu có dấu hiệu về hiệu ứng mạng, điều này sẽ được áp dụng snowball khi mạng trở nên hữu ích và có giá trị hơn.

Sự tăng trưởng gần đây một phần là nhờ vào đội quân ngày càng tăng của những người sáng tạo nội dung Ethereum Classic và những người có ảnh hưởng, những người đã và đang tạo [video](/videos) và meme, thúc đẩy sự chấp nhận thông qua phương tiện truyền thông xã hội.

### Hợp nhất

Chuỗi chính Ethereum ™, mặc dù gặp một số chậm trễ nhỏ, đang ngày càng tiến gần đến việc hoàn thành việc chuyển đổi từ Proof of Work sang Proof of Stake, được gọi là _The Merge_. Đối với Ethereum Classic, đây sẽ là một sự kiện cực kỳ liên quan, vì có vẻ như các thợ đào GPU mới bị đuổi khỏi sẽ hướng đến các chuỗi khác để khai thác và Ethereum Classic là một lựa chọn hiển nhiên.

Việc di chuyển của các thợ đào từ ETH sang ETC có thể sẽ mang lại một làn sóng quan tâm mới cho hệ sinh thái Ethereum Classic, tăng tính bảo mật của mạng và tăng tốc độ chấp nhận và giá trị mạng.

Ngoài ra, nếu có bất kỳ vấn đề ngắn hạn nào trong hoặc sau "The Merge", có lẽ do các vấn đề về lý thuyết trò chơi không lường trước được hoặc việc khai thác giao thức do sự phức tạp bổ sung, Ethereum Classic sẽ sẵn sàng và chờ cung cấp một chuỗi dự phòng vẫn được thử và giao thức Ethereum thực sự của ngày hôm nay. Về lâu dài, việc chuyển sang Proof of Stake có thể sẽ dẫn đến việc tập trung hơn nữa vào mạng chính Ethereum ™, khiến nó dễ bị tấn công bởi các loại tấn công xã hội khác, mà một lần nữa, ETC sẽ vẫn miễn nhiễm với.

### Phiên bản EVM

Với mục tiêu Ethereum Classic là duy trì Mã _là Luật_ trong nhiều thập kỷ, nếu không muốn nói là nhiều thế kỷ tới, một tính năng của tiện ích chính sẽ là _phiên bản_ của các hợp đồng đã triển khai. Điều này mang lại một số lợi thế đáng kể cho hoạt động và bảo trì lâu dài của Ethereum Classic, đáng chú ý là nó giúp việc duy trì _Code is Law_ dễ dàng hơn nhiều trong khi vẫn cung cấp sự linh hoạt cho việc nâng cấp thực hiện hợp đồng trong tương lai.

Thay vì lo lắng về việc liệu sự thay đổi giao thức, chẳng hạn như định giá lại gas, có phá vỡ các hợp đồng cũ hay không, việc lập phiên bản có nghĩa là mã được triển khai được đảm bảo luôn chạy trên phiên bản EVM tương thích dựa trên số khối mà nó đã được triển khai. Ngoài ra, các hợp đồng tương lai có thể chọn tham gia vào chức năng có thể phá vỡ các hợp đồng cũ, có nghĩa là Ethereum Classic có thể cung cấp công nghệ mới như lược đồ chữ ký, thêm hoặc sửa đổi hành vi opcode, vân vân, mà không ảnh hưởng đến các ứng dụng hiện có.

Mặc dù chúng đang chạy trên một phiên bản EVM khác, các hợp đồng trong tương lai vẫn có thể giao tiếp với các hợp đồng cũ qua cùng một API (hoặc được dịch) để duy trì khả năng tương tác. Dường như không có nhược điểm rõ ràng nào đối với việc lập phiên bản ngoài sự phức tạp bổ sung cần thiết để triển khai nó.

### Lớp 2

Ngày càng rõ ràng rằng các cách hợp lý duy nhất để mở rộng quy mô blockchain là theo các lớp. Với Lightning Network của Bitcoin dẫn đầu miền mới đầy hứa hẹn này, Ethereum đang theo sau ở dạng State Channels, Optimistic Rollups, zk-Rollups và các công nghệ mới nổi khác.

Lớp 2 hứa hẹn cung cấp sự đảm bảo đầy đủ về tính phi tập trung và độ tin cậy, với thông lượng giao dịch lớn hơn nhiều bằng cách quản lý trạng thái ngoài chuỗi và sử dụng chuỗi cơ sở để giải quyết trạng thái này. Về lý thuyết, không có giới hạn trên đối với số lượng giao dịch mỗi giây trong nhiều hệ thống Lớp 2 và có thể đáp ứng các yêu cầu sử dụng ở quy mô văn minh.

Với EVM của Ethereum Classic và cam kết về Proof of Work cuối cùng sẽ thống trị hoạt động khai thác trong ETCHash, nó sẽ là một trong số ít sự lựa chọn cho lớp cơ sở Sovereign Grade có thể hỗ trợ đầy đủ các giải pháp L2.
