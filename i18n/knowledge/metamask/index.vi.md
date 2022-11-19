---
title: Sử dụng MetaMask với ETC
date: 2021-03-02
updated: 2022-07-05
author: Donald McIntyre, Etherplan
seo: Hướng dẫn từng bước bao gồm cách sử dụng MetaMask với Ethereum Classic để gửi ETC và tương tác với các ứng dụng phi tập trung.
info: Bài viết này được [tạo bởi Etherplan] (https://etherplan.com/2021/03/02/how-to-connect-metamask-to-ethereum-classic/15512/). Để biết thêm hướng dẫn về Ethereum Classic, lý thuyết và các khái niệm về tiền điện tử, vui lòng xem [etherplan.com](https://etherplan.com).
contributors:
  - DonaldMcIntyre
---

**⚠️ Cập nhật**  
Giờ đây, bạn có thể dễ dàng thêm ETC vào MetaMask bằng cách nhấp vào "Connect-Wallet" trên https://chainlist.org/en/chain/61

Bạn cũng có thể tìm thấy liên kết này ở cuối mỗi trang trên trang web này.

---

[MetaMask](https://metamask.io) có thể được sử dụng làm ví để quản lý ETC và Token của bạn, cũng như tương tác với các ứng dụng hỗ trợ nó. Bài đăng này giải thích cách bắt đầu sử dụng MetaMask với mạng Ethereum Classic (ETC).

Bạn cũng có thể xem xét [Nifty Wallet](https://chrome.google.com/webstore/detail/nifty-wallet/jbdaocneiiinmjbjlgalhcelgbejmnid?ucbcb=1), một nhánh của MetaMask hỗ trợ ETC ngay lập tức.

## Bước 1: Đăng nhập vào MetaMask

Bước đầu tiên là đăng nhập để mở khóa MetaMask của bạn.

![Bước 1](./01.png)

## Bước 2: Xem màn hình ban đầu

Bạn sẽ thấy màn hình ban đầu bình thường của mình. Trong trường hợp này, mạng mặc định là Ethereum (ETH) và tài khoản của bạn sẽ được hiển thị như bình thường. Khi bạn sử dụng các mạng khác, chúng sẽ hiển thị làm mặc định khi bạn mở khóa MetaMask nếu chúng là những mạng cuối cùng được sử dụng.

Trong trường hợp của tôi, nó hiển thị Ethereum là mạng ban đầu và tôi có số dư bằng 0 trong tài khoản ETH của mình `0x48c1 ... EfF3`.

![Bước 2](./02.png)

## Bước 3: Mở Menu thả xuống Mạng

Bước tiếp theo là mở menu thả xuống mạng. Bạn có thể thực hiện việc này bằng cách nhấp vào thanh nơi bạn thấy mạng mặc định.

Như có thể thấy ở trên, danh sách mạng mặc định là mạng chính Ethereum và các mạng thử nghiệm phổ biến nhất của nó.

“Máy chủ cục bộ 8545” sẽ là kết nối với nút Ethereum nếu bạn đang chạy một nút trong máy của mình.

“RPC tùy chỉnh” là tùy chọn để thêm mạng tùy chỉnh, trong trường hợp này là ETC.

“RPC” là viết tắt của “lệnh gọi thủ tục từ xa”, là thuật ngữ chỉ các máy giao thức sử dụng cho các chương trình để gọi các chương trình khác trong các máy từ xa.

![Bước 3](./03.png)

## Bước 4: Chọn RPC tùy chỉnh

Vì vậy, bước tiếp theo là nhấp vào “Custom RPC”.

![Bước 4](./04.png)

## Bước 5: Xem biểu mẫu mạng mới

Sau khi chọn “Custom RPC”, bạn sẽ thấy biểu mẫu để thêm mạng. Nó có một thông báo bảo mật ở trên cùng và năm tùy chọn với các trường trống để vào mạng mới mà bạn muốn sử dụng:

- Tên mạng: Tên của mạng bạn muốn thêm.
- URL RPC mới: URL cho RPC mạng mà bạn muốn thêm.
- ID chuỗi: ID để gửi và chuyển trực tiếp các giao dịch đến mạng bạn muốn thêm.
- Biểu tượng tiền tệ (tùy chọn): Biểu tượng tiền tệ của mạng bạn muốn thêm. Ví dụ: “ETH” là biểu tượng cho Ethereum và “ETC” là biểu tượng cho Ethereum Classic.
- URL Block Explorer (tùy chọn): MetaMask có liên kết đến các trình khám phá blockchain trên mỗi mạng để kiểm tra lịch sử tài khoản, các giao dịch mới được gửi và số dư trên chúng, vì vậy ở đây bạn sẽ thêm trình khám phá khối cho mạng bạn muốn thêm.

![Bước 5](./05.png)

## Bước 6: Nhập thông tin mạng Ethereum Classic

Bước tiếp theo, là thêm thông tin cụ thể của Ethereum Classic. Dưới đây là dữ liệu mạng tôi đã sử dụng:

- Tên mạng: `Ethereum Classic`
- URL RPC mới: `https://www.ethercluster.com/etc`
- ID chuỗi: `61`
- Ký hiệu tiền tệ (tùy chọn): `ETC`
- Block Explorer URL (tùy chọn): `https://blockscout.com/etc/mainnet/`

Đối với “URL RPC”, tôi đã sử dụng URL do [ETC HTX](https://etccooperative.org/)cung cấp cho mục đích này, từ một sản phẩm mà họ đã xây dựng có tên là [Ethercluster](https://ethercluster.com/)

_[Ghi chú của người biên tập] Ethercluster hiện được vận hành bởi [RIVET](https://rivet.cloud/). Bạn có thể tìm thêm các Điểm cuối RPC trong phần [mạng](/network/endpoints)._

“ID chuỗi” phải là “61” vì đó là ID cụ thể của mạng Ethereum Classic để gửi các giao dịch ETC bằng ví và các nút tới chuỗi khối đang hoạt động.

Mặc dù “biểu tượng” và “URL trình khám phá khối” là tùy chọn, tôi khuyên bạn nên sử dụng “ETC” làm biểu tượng vì đó là biểu tượng thị trường được biết đến rộng rãi của mạng và BlockScout làm trình khám phá chuỗi khối vì đó là biểu tượng tôi thường sử dụng ( nhưng bạn có thể thêm cái ưa thích của mình!).

Nhấp vào “lưu” để thêm ETC vào MetaMask.

![Bước 6](./06.png)

## Bước 7: Xem Ethereum Classic trong Menu thả xuống Mạng

Sau khi ETC được thêm vào, bạn sẽ thấy trong menu thả xuống của mạng rằng nó được thêm vào danh sách các mạng.

![Bước 7](./07.png)

## Bước 8: Bạn có thể xem cùng một tài khoản của mình nhưng trên ETC

Nếu bạn vào tài khoản của mình, bạn sẽ nhận thấy rằng nó giống với tài khoản ETH của bạn. Trong trường hợp của tôi, nó giống với tài khoản `0x48c1 ... EfF3`.

Điều này là do cả ETH và ETC đều sử dụng cùng một định dạng tài khoản, vì vậy các tài khoản trên Ethereum cũng có thể được sử dụng trong Ethereum Classic.

Trên thực tế, bạn có thể nhớ rằng tôi có số dư bằng 0 trong tài khoản ETH của mình, nhưng bây giờ số dư 1 ETC có thể được nhìn thấy trong cùng một tài khoản, nhưng trên Ethereum Classic. Điều này là do tôi đã gửi 1 ETC đến tài khoản này trong mạng Ethereum Classic cho cuộc trình diễn này.

Cũng lưu ý rằng mạng ETC hiện là mạng hiển thị trên thanh mạng và biểu tượng “ETC” hiện được sử dụng để hiển thị số dư.

![Bước 8](./08.png)

## Bước 9: Bạn có thể quay lại Ethereum với cùng một tài khoản

Vì vậy, vì cả hai mạng đều sử dụng cùng một định dạng tài khoản, bạn có thể quay lại mạng chính Ethereum và bạn sẽ có thể thấy lại tài khoản ETH của mình với cùng một số.

![Bước 9](./09.png)

## Bước 10: Bạn có thể quay lại Ethereum Classic với cùng một tài khoản

Để sử dụng mạng ETC, chỉ cần chọn lại Ethereum Classic trong menu thả xuống của mạng, nơi bạn sẽ thấy lại số dư ETC của mình.

![Bước 10](./10.png)

//

Chúc các bạn đầu tư và sử dụng ETC thành công!

---

** Mã là Luật **
