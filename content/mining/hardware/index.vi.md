---
title: Hướng dẫn khai thác phần cứng
contributors:
  - "IstoraMandiri"
  - "wpwrak"
updated: 2022-02-22
contribute: true
seo: Giải thích ngắn gọn về Yêu cầu phần cứng để khai thác Ethereum Classic, bao gồm ETHash so với ETCHash, SHA3, GPU và ASIC.
---

Khai thác Ethereum Classic gần giống như khai thác Ethereum và hỗ trợ cùng một phần cứng và phần mềm khai thác. Nếu bạn là một người khai thác Ethereum bị trục xuất gần đây, Ethereum Classic yêu thương những người khai thác của nó và chào đón bạn, đồng thời bạn có thể bắt đầu khai thác ETC bằng cách sử dụng phần cứng hiện có của mình bằng cách chỉ cần chuyển sang nhóm khai thác [](/mining/pools) hỗ trợ Ethereum Classic.

## ETCHash

Thuật toán khai thác ETC gần như giống hệt với ETHash của Ethereum, với một nâng cấp nhỏ giúp nó thân thiện hơn với người khai thác. Vào cuối năm 2020, trong đợt nâng cấp [của Thanos](/blog/2020-11-27-thanos-hard-fork-upgrade), ETC đã triển khai [ECIP-1099](https://ecips.ethereumclassic.org/ECIPs/ecip-1099), điều chỉnh thuật toán ETHash thành cái được gọi là ETCHash.

Về cơ bản, vào năm 2020, DAG của Ethereum vượt quá 4 GB, có nghĩa là nhiều GPU có bộ nhớ 4 GB sẽ không thể tiếp tục khai thác ETH. Đáp lại, Ethereum Classic đã điều chỉnh thuật toán của nó để đảm bảo rằng các thẻ có 4 GB sẽ có thể tiếp tục khai thác ETC cho đến [khoảng giữa năm 2025](https://minerstat.com/dag-size-calculator).

## yêu cầu phần cứng

Có hai loại phần cứng chính có thể được sử dụng để khai thác Ethereum Classic một cách sinh lợi.

### GPU

Nói chung, các thẻ đồ họa tốt nhất để khai thác Ethereum Classic là các thẻ tiết kiệm năng lượng nhất với bộ nhớ ít nhất 4 GB. Trước khi chọn GPU, hãy tìm các đánh giá cụ thể về khai thác ETCHash. Bạn có thể tìm kiếm trực tuyến "GPU tốt nhất để khai thác Ethereum Classic trong [năm hiện tại]" để có đề xuất và truy cập [WhatToMine](https://whattomine.com/coins?e4g=true) để biết thêm thông tin.

### ASIC

ASIC, hoặc Mạch tích hợp dành riêng cho ứng dụng, là các chip được sản xuất đặc biệt, được thiết kế, như tên gọi, chỉ để khai thác một thuật toán cụ thể. Ban đầu, do các yêu cầu cao về bộ nhớ của DAG, ETHash khá chống lại ASIC, nhưng theo thời gian, giống như tất cả các thuật toán sinh lời, có một động lực lớn để xây dựng ASIC cho ETHash, đã được tung ra thị trường.

Một loạt các công cụ khai thác ASIC Ethereum Classic có sẵn và có thể được tìm thấy bằng cách tìm kiếm trực tuyến cho "Công cụ khai thác ASIC ETHash" và kiểm tra thông số kỹ thuật của nhà sản xuất để biết liệu nó có hỗ trợ ETCHash hay không.

## Ủng hộ

Để được trợ giúp và hướng dẫn thêm từ những người khai thác khác trong cộng đồng ETC, bạn có thể liên hệ với kênh #fining on [Discord](https://ethereumclassic.org/discord).
