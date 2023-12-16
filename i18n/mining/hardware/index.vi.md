---
title: Hướng dẫn khai thác phần cứng
contributors:
  - "IstoraMandiri"
  - "wpwrak"
updated: 2022-02-22
contribute: true
seo: Giải thích ngắn gọn về Yêu cầu phần cứng để khai thác Ethereum Classic, bao gồm ETHash so với ETCHash, SHA3, GPU và ASIC.
---

Khai thác Ethereum Classic gần giống với khai thác Ethereum và hỗ trợ cùng phần cứng và phần mềm khai thác. Nếu bạn là một người khai thác Ethereum mới bị trục xuất, Ethereum Classic yêu thích những người khai thác của nó và chào đón bạn, đồng thời bạn có thể bắt đầu khai thác ETC bằng phần cứng hiện có của mình bằng cách chỉ cần chuyển sang nhóm khai thác [](/mining/pools) hỗ trợ Ethereum Classic.

## ETCHash

Thuật toán Khai thác ETC gần giống với ETHash của Ethereum, với một bản nâng cấp nhỏ khiến nó trở nên thân thiện hơn với người khai thác. Vào cuối năm 2020, trong quá trình nâng cấp [Thanos](/blog/2020-11-27-thanos-hard-fork-upgrade), ETC đã triển khai [ECIP-1099](https://ecips.ethereumclassic.org/ECIPs/ecip-1099), thuật toán này đã điều chỉnh thuật toán ETHash thành thuật toán được gọi là ETCHash.

Về cơ bản, vào năm 2020, DAG của Ethereum đã vượt quá 4 GB, nghĩa là nhiều GPU có bộ nhớ 4 GB sẽ không thể tiếp tục khai thác ETH. Đáp lại, Ethereum Classic đã điều chỉnh thuật toán của nó để đảm bảo rằng các thẻ có 4 GB sẽ có thể tiếp tục khai thác ETC cho đến [vào khoảng giữa năm 2025](https://minerstat.com/dag-size-calculator).

## yêu cầu phần cứng

Có hai loại phần cứng chính có thể được sử dụng để khai thác Ethereum Classic một cách sinh lợi.

### GPU

Nói chung, các card đồ họa tốt nhất để khai thác Ethereum Classic là những card tiết kiệm năng lượng nhất với bộ nhớ ít nhất 4 GB. Trước khi chọn GPU, hãy tìm các bài đánh giá cụ thể về khai thác ETCHash. Bạn có thể tìm kiếm trực tuyến "GPU tốt nhất để khai thác Ethereum Classic trong [năm hiện tại]" để biết các đề xuất và truy cập [WhatToMine](https://whattomine.com/coins?e4g=true) để biết thêm thông tin.

### ASIC

ASIC, hay Mạch tích hợp dành riêng cho ứng dụng, là những con chip được sản xuất đặc biệt được thiết kế, đúng như tên gọi, chỉ để khai thác một thuật toán cụ thể. Ban đầu, do các yêu cầu về bộ nhớ của DAG, ETHash tương đối kháng ASIC, nhưng theo thời gian, giống như tất cả các thuật toán có lợi nhuận, đã có động lực lớn để xây dựng ASIC cho ETHash, thứ đã được tung ra thị trường.

Một loạt các công cụ khai thác ASIC Ethereum Classic có sẵn và có thể được tìm thấy bằng cách tìm kiếm trực tuyến cho "Công cụ khai thác ASIC ETHash" và kiểm tra thông số kỹ thuật của nhà sản xuất để biết liệu nó có hỗ trợ ETCHash hay không.

## Ủng hộ

Để được trợ giúp và hướng dẫn thêm từ những người khai thác khác trong cộng đồng ETC, bạn có thể liên hệ với kênh #fining on [Discord](https://ethereumclassic.org/discord).
