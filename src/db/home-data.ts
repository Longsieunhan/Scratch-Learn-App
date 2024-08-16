import { ImageSourcePropType } from "react-native";

export enum EData {
  HEADER_SLIDE,
  COMMON,
  PLANET,
  ALL,
}

export interface IContent {
  title?: string;
  body?: string[];
  image?: string;
}

export interface IData {
  id: string;
  image: ImageSourcePropType | string;
  title: string;
  description: string;
  content: IContent[];
}

export interface IObjectData {
  [key: string]: IData;
}

export const headerSlideData: IObjectData = {
  slide1: {
    id: "slide1",
    image: require("../assets/astronomy/slide1.jpeg"),
    title: "Vũ trụ là gì?",
    description:
      "Vũ Trụ được xem là không gian vô tận - Nơi chứa đựng các thiên hà cùng những kì quan tuyệt vời ở trong lòng mình. Trong đó, mỗi thiên hà là tập hợp của nhiều thiên thể như hành tinh, vệ tinh (mặt trăng), ngôi sao, sao băng, sao chổi,…",
    content: [
      {
        title: "Lịch Sử và Khởi Nguồn:",
        body: [
          "Big Bang: Khoảng 13.8 tỷ năm trước, một vụ nổ lớn gọi là Big Bang đã khởi đầu sự tồn tại của vũ trụ. Vụ nổ này tạo ra tất cả vật chất và năng lượng, cũng như không gian và thời gian mà chúng ta biết ngày nay.",
        ],
        image:
          "https://cdnphoto.dantri.com.vn/b0WWpuZsz9YTS_gI-Gp7Xet6sBs=/thumb_w/1020/2022/11/30/vutru-crop-1669768098200.jpeg",
      },
      {
        title: "Cấu Trúc và Thành Phần:",
        body: [
          "Thiên Hà: Thiên hà là hệ thống lớn bao gồm hàng tỷ ngôi sao, khí, bụi và vật chất tối, tất cả được giữ lại bởi lực hấp dẫn. Ví dụ, Ngân Hà (Milky Way) là thiên hà chứa Hệ Mặt Trời của chúng ta.",
          "Ngôi Sao và Hành Tinh: Ngôi sao là những khối cầu khí nóng, tự phát sáng, trong khi hành tinh là những thiên thể quay quanh ngôi sao và không tự phát sáng.",
          "Vật Chất Tối và Năng Lượng Tối: Mặc dù không thể nhìn thấy bằng mắt thường, vật chất tối và năng lượng tối chiếm phần lớn khối lượng và năng lượng của vũ trụ, ảnh hưởng mạnh mẽ đến sự mở rộng và cấu trúc của nó.",
        ],
        image:
          "https://xcdn-cf.vuihoc.vn/upload/5c209fe6176b0/2023/07/22/faef_cau-tao-vu-tru.png",
      },
    ],
  },
  slide2: {
    id: "slide2",
    image:
      "https://images2.thanhnien.vn/zoom/700_438/528068263637045248/2023/10/26/anh-man-hinh-2023-10-26-luc-102652-16982908545011593910344-68-132-1141-1848-crop-1698290911229255785062.png",
    title: "Nguyệt Thực - Hiện Tượng Thiên Văn Kỳ Thú",
    description:
      "Nguyệt thực là hiện tượng xảy ra khi Trái Đất nằm giữa Mặt Trời và Mặt Trăng, khiến bóng của Trái Đất che khuất Mặt Trăng. Đây là một trong những hiện tượng thiên văn ấn tượng và dễ dàng quan sát bằng mắt thường.",
    content: [
      {
        title: "Cấu Tạo Và Đặc Điểm Của Nguyệt Thực",
        body: [
          "Nguyệt thực xảy ra khi Mặt Trăng đi vào vùng bóng của Trái Đất. Vùng bóng này bao gồm hai phần: bóng tối (umbra) và bóng nửa tối (penumbra).",
          "Nguyệt thực toàn phần xảy ra khi Mặt Trăng hoàn toàn nằm trong bóng tối của Trái Đất, khiến nó chuyển sang màu đỏ do hiện tượng tán xạ ánh sáng trong khí quyển Trái Đất.",
          "Nguyệt thực một phần xảy ra khi chỉ một phần của Mặt Trăng bị che khuất bởi bóng tối của Trái Đất.",
        ],
      },
      {
        title: "Các Loại Nguyệt Thực",
        body: [
          "Nguyệt thực toàn phần: Mặt Trăng hoàn toàn bị che khuất và chuyển sang màu đỏ đậm.",
          "Nguyệt thực một phần: Chỉ một phần của Mặt Trăng bị che khuất bởi bóng tối của Trái Đất.",
          "Nguyệt thực nửa tối: Mặt Trăng chỉ đi vào bóng nửa tối của Trái Đất, khiến nó mờ đi mà không chuyển sang màu đỏ.",
        ],
      },
      {
        title: "Quan Sát Nguyệt Thực",
        body: [
          "Nguyệt thực dễ dàng quan sát bằng mắt thường mà không cần thiết bị bảo vệ đặc biệt như khi quan sát nhật thực.",
          "Sự kiện nguyệt thực thường kéo dài trong vài giờ, từ khi Mặt Trăng bắt đầu đi vào bóng nửa tối cho đến khi nó ra khỏi bóng hoàn toàn.",
          "Nguyệt thực có thể được quan sát từ bất kỳ nơi nào trên Trái Đất khi Mặt Trăng nằm trên đường chân trời.",
        ],
      },
      {
        title: "Lịch Sử Và Văn Hóa",
        body: [
          "Nguyệt thực đã được quan sát và ghi lại từ thời cổ đại, với nhiều nền văn hóa coi đây là sự kiện có ý nghĩa đặc biệt.",
          "Trong nhiều nền văn hóa, nguyệt thực được liên kết với các huyền thoại và truyền thuyết, thường được coi là điềm báo hoặc sự can thiệp của các vị thần.",
          "Ngày nay, nguyệt thực vẫn là một hiện tượng thiên văn được yêu thích và thu hút sự quan tâm của nhiều người trên khắp thế giới.",
        ],
      },
      {
        title: "Khám Phá Và Nghiên Cứu",
        body: [
          "Các nhà thiên văn học sử dụng nguyệt thực để nghiên cứu cấu trúc và thành phần của bầu khí quyển Trái Đất thông qua hiện tượng tán xạ ánh sáng.",
          "Quan sát nguyệt thực cũng giúp các nhà khoa học hiểu rõ hơn về quỹ đạo và chuyển động của Mặt Trăng và Trái Đất.",
          "Nghiên cứu về nguyệt thực đóng góp vào việc cải thiện dự báo và hiểu biết về các hiện tượng thiên văn khác.",
        ],
      },
    ],
  },
  slide3: {
    id: "slide3",
    image: "https://bcp.cdnchinhphu.vn/Uploaded/buianhtho/2017_11_27/7Anh.jpg",
    title: "Hiện Tượng Sao Băng - Vũ Điệu Ánh Sáng Trên Bầu Trời",
    description:
      "Hiện tượng sao băng là hiện tượng thiên văn xảy ra khi các mảnh vụn vũ trụ, thường là các hạt bụi hoặc đá nhỏ, đi vào bầu khí quyển Trái Đất và bốc cháy, tạo ra những vệt sáng trên bầu trời. Đây là một trong những hiện tượng thiên văn đẹp và hấp dẫn nhất.",
    content: [
      {
        title: "Cấu Tạo Và Đặc Điểm Của Sao Băng",
        body: [
          "Sao băng (hay còn gọi là meteoroid) là các mảnh vụn nhỏ từ các sao chổi hoặc tiểu hành tinh.",
          "Khi một sao băng đi vào bầu khí quyển Trái Đất với tốc độ cao, ma sát với không khí làm nó nóng lên và bốc cháy, tạo ra vệt sáng gọi là sao băng.",
          "Nếu sao băng không cháy hết và rơi xuống mặt đất, phần còn lại được gọi là thiên thạch (meteorite).",
        ],
      },
      {
        title: "Các Loại Sao Băng",
        body: [
          "Sao băng lẻ: Sao băng xuất hiện ngẫu nhiên trên bầu trời mà không thuộc về bất kỳ trận mưa sao băng nào.",
          "Mưa sao băng: Hiện tượng xuất hiện hàng loạt sao băng từ một điểm chung trên bầu trời, thường xảy ra khi Trái Đất đi qua đám mây bụi của một sao chổi.",
        ],
      },
      {
        title: "Các Trận Mưa Sao Băng Nổi Tiếng",
        body: [
          "Perseids: Xảy ra vào tháng 8 hàng năm, với điểm xuất phát từ chòm sao Perseus.",
          "Geminids: Diễn ra vào tháng 12, với điểm xuất phát từ chòm sao Gemini.",
          "Leonids: Xuất hiện vào tháng 11, với điểm xuất phát từ chòm sao Leo và có thể tạo ra các trận mưa sao băng rất mạnh.",
        ],
      },
      {
        title: "Quan Sát Sao Băng",
        body: [
          "Thời điểm tốt nhất để quan sát sao băng là vào đêm khuya hoặc rạng sáng, khi bầu trời tối nhất.",
          "Không cần thiết bị đặc biệt để quan sát sao băng, nhưng một chiếc ghế ngả lưng và một tấm chăn có thể giúp bạn thoải mái hơn khi quan sát.",
          "Tránh ánh sáng đô thị và tìm đến các khu vực tối, thoáng đãng để có tầm nhìn tốt nhất.",
        ],
      },
      {
        title: "Khám Phá Và Nghiên Cứu",
        body: [
          "Nghiên cứu về sao băng giúp các nhà khoa học hiểu rõ hơn về thành phần và nguồn gốc của các mảnh vụn vũ trụ.",
          "Các trận mưa sao băng cung cấp cơ hội để thu thập và phân tích thiên thạch, giúp mở rộng hiểu biết về hệ Mặt Trời và các sao chổi.",
          "Quan sát sao băng cũng đóng góp vào việc theo dõi và dự đoán các hiện tượng thiên văn khác.",
        ],
      },
    ],
  },
};

export const waterArea: any = {
  matbien: {
    image:
      "https://petmojo.com/ocean-surface-sunlight-zone-epipelagic-zone.jpg?id=image-b3da864e8745cb37a7177655020fd0a44f88378e-1200x688-jpg&width=1200&quality=55&fm=webp",
    depth_range: "Từ mặt nước đến khoảng 200 mét",
    temperature: "20°C đến 25°C, thay đổi theo vùng và mùa.",
    light: "Đầy đủ ánh sáng mặt trời, cho phép quang hợp xảy ra",
    pressure: "Tương đối thấp, tăng nhẹ theo độ sâu",
    marine_life: "Cá, sứa, tảo biển, san hô, cá heo, rùa biển",
  },
  bientrung: {
    image:
      "https://schmidtocean.org/wp-content/uploads/FK20429_20200602T055541Z-lights_off-S0365.jpg",
    depth_range: "Từ 200 đến 1,000 mét",
    temperature: "20°C đến 4°C, giảm dần với độ sâu",
    light: "Ánh sáng yếu, không đủ cho quang hợp",
    pressure: "Tăng đáng kể so với tầng epipelagic",
    marine_life: "Cá ánh sáng, mực, sinh vật phát sáng",
  },

  biensau: {
    image:
      "https://beyondtheabyssaldepths.wordpress.com/wp-content/uploads/2018/10/image.jpg?w=800",
    depth_range: "Từ 1,000 đến 4,000 mét",
    temperature: "4°C đến 0°C",
    light: "Không có ánh sáng mặt trời, chỉ có ánh sáng từ sinh vật phát sáng",
    pressure: "Rất cao, tăng mạnh theo độ sâu",
    marine_life: "Cá rồng, sinh vật phát sáng, giáp xác lớn, cá vây chân",
  },

  biensautham: {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTniiA9NC8DwuHSC3DuSwAZ8Dxw95luxiatpg&s",
    depth_range: "Từ 4,000 đến 6,000 mét.",
    temperature: "Thấp, dưới 2°C",
    light: "Không có ánh sáng mặt trời",
    pressure: "Cực kỳ cao",
    marine_life: "Giun ống khổng lồ, sao biển, sinh vật kỵ khí",
  },

  day: {
    image:
      "https://lakeerieimprovement.org/wp-content/uploads/2018/10/knowing-what%E2%80%99s-underneath-10-facts-about-the-hadal-zone-2-1024x576.jpg",
    depth_range: "Trên 6,000 mét, trong các rãnh sâu dưới biển",
    temperature: "Gần với nhiệt độ đóng băng, dưới 2°C",
    light: "Hoàn toàn tối tăm",
    pressure: "Cực kỳ cao, cao nhất trong các tầng biển",
    marine_life:
      "Sinh vật thích nghi với áp suất cao như giáp xác đặc biệt, giun ống, vi khuẩn kỵ khí",
  },
};

export const commonData: IObjectData = {
  "1": {
    id: "1",
    image:
      "https://scratch.mit.edu/images/scratch-og.png",
      title: "Scratch là gì",
      description:
        "Scratch là một ngôn ngữ lập trình trực quan và môi trường phát triển được thiết kế chủ yếu cho trẻ em và người mới bắt đầu học lập trình.",
      content: [
        {
          title: "Lịch Sử và Khởi Nguồn:",
          body: [
            "Nó được phát triển bởi Lifelong Kindergarten Group tại MIT Media Lab.",
          ],
          image:
            "https://images.twinkl.co.uk/tw1n/image/private/t_630/u/ux/02wchouritvxqgixxoeagap-2.fit-scale.size-760x427.v1569482197_ver_1.jpg",
        },
        {
          title: "Đặc điểm nổi bật của Scratch",
          body: [
            "Giao diện kéo thả: Scratch sử dụng giao diện đồ họa trực quan, nơi người dùng có thể kéo và thả các khối lệnh vào một không gian làm việc để tạo chương trình. Điều này giúp người học dễ dàng tiếp cận và hiểu các khái niệm lập trình mà không cần viết mã phức tạp.",
            "Khối lệnh mã màu: Các khối lệnh trong Scratch được mã hóa màu sắc theo chức năng, ví dụ như khối di chuyển có màu xanh, khối điều kiện có màu vàng, và khối âm thanh có màu tím. Điều này giúp người dùng dễ dàng nhận biết và sử dụng các khối lệnh khác nhau.",
            "Tính tương tác cao: Scratch cho phép người dùng tạo ra các dự án có tính tương tác cao, bao gồm việc tạo ra các nhân vật (sprites), hình nền, âm thanh, và hiệu ứng động. Người dùng có thể lập trình các hành động và phản hồi của các đối tượng này để tạo ra các trò chơi và hoạt hình thú vị.",
          ],
      },
      // {
      //   title: "Tầm Quan Trọng Của Mặt Trời",
      //   body: [
      //     "Mặt Trời không chỉ cung cấp năng lượng và ánh sáng mà còn tạo ra các hiện tượng quan trọng như gió Mặt Trời và từ trường Mặt Trời. Gió Mặt Trời là dòng hạt tích điện di chuyển từ Mặt Trời ra không gian, ảnh hưởng đến từ trường của Trái Đất và tạo ra các hiện tượng như cực quang.",
      //     "Từ trường Mặt Trời cũng gây ra các vết đen và lửa Mặt Trời, có thể ảnh hưởng đến khí hậu và các thiết bị điện tử trên Trái Đất.",
      //   ],
      // },
      // {
      //   title: "Vòng Đời Của Mặt Trời",
      //   body: [
      //     "Mặt Trời hiện đang ở giai đoạn chính của cuộc đời, giai đoạn đốt cháy hydro để sản sinh năng lượng.",
      //     "Sau khoảng 5 tỷ năm nữa, Mặt Trời sẽ tiến vào giai đoạn sao khổng lồ đỏ, phình to và nuốt chửng các hành tinh gần kề như sao Thủy và sao Kim.",
      //     "Cuối cùng, Mặt Trời sẽ suy yếu và biến thành sao lùn trắng.",
      //   ],
      // },
      // {
      //   title: "Ảnh Hưởng Đến Hệ Mặt Trời",
      //   body: [
      //     "Mặt Trời có ảnh hưởng quyết định đến tất cả các hành tinh trong Hệ Mặt Trời.",
      //     "Nó giữ các hành tinh trong quỹ đạo bằng lực hấp dẫn của mình và điều chỉnh khí hậu của các hành tinh qua sự biến đổi năng lượng và ánh sáng.",
      //   ],
      // },
    ],
  },
  "3": {
    id: "3",
    image: "https://scratch.mit.edu/images/scratch-og.pnghttps://cs20.ca/_images/scratch_key_pressed_block.png",
    title: "Khối when [phím] pressed trong Scratch",
    description:
      "là một phần của danh mục Events và được sử dụng để bắt đầu một đoạn mã khi một phím cụ thể trên bàn phím được nhấn. Đây là cách phổ biến để lập trình các phản hồi từ bàn phím trong các dự án Scratch, chẳng hạn như trò chơi hoặc hoạt hình tương tác.",
    content: [
      {
        title: "Sử Dụng và Chức Năng",
        body: [
          "Kích Hoạt Đoạn Mã Bằng Bàn Phím: Khi người dùng nhấn một phím cụ thể trên bàn phím, đoạn mã gắn với khối này sẽ được kích hoạt. Điều này cho phép bạn lập trình các hành động cụ thể xảy ra khi phím đó được nhấn.",
          "Tạo Tương Tác Người Dùng: Khối này thường được sử dụng để tạo ra sự tương tác trong các trò chơi và ứng dụng. Ví dụ, bạn có thể sử dụng khối này để làm cho một nhân vật di chuyển, nhảy, hoặc thực hiện các hành động khác khi người dùng nhấn các phím mũi tên hoặc phím space (khoảng trắng).",
          
        ],
      },
      {
        title: "Các Bước Cụ Thể",
        body: [
          "Thêm Khối:Mở trình chỉnh sửa Scratch. Từ danh mục Sự kiện (Events), kéo khối when [phím] pressed vào khu vực mã.Chọn phím mong muốn từ danh sách thả xuống. Bạn có thể chọn các phím như phím mũi tên, phím space, hoặc các phím chữ cái.",
          "Tạo Đoạn Mã: Gắn các khối khác bên dưới khối when [phím] pressed để tạo thành một đoạn mã. Ví dụ, bạn có thể thêm các khối để di chuyển một sprite hoặc thay đổi hình dạng của nó khi phím được nhấn.",
        ],
      },
      // {
      //   title: "Các Trận Mưa Sao Băng Nổi Tiếng",
      //   body: [
      //     "Perseids: Xảy ra vào tháng 8 hàng năm, với điểm xuất phát từ chòm sao Perseus.",
      //     "Geminids: Diễn ra vào tháng 12, với điểm xuất phát từ chòm sao Gemini.",
      //     "Leonids: Xuất hiện vào tháng 11, với điểm xuất phát từ chòm sao Leo và có thể tạo ra các trận mưa sao băng rất mạnh.",
      //   ],
      // },
      // },
      // {
      //   title: "Khám Phá Và Nghiên Cứu",
      //   body: [
      //     "Các sứ mệnh không gian như Dawn của NASA đã mang lại nhiều thông tin quan trọng về Vesta và Ceres.",
      //     "Các nhà khoa học sử dụng kính viễn vọng và các công nghệ tiên tiến để theo dõi và nghiên cứu các tiểu hành tinh trong vành đai.",
      //     "Việc tiếp tục nghiên cứu Vành Đai Tiểu Hành Tinh sẽ giúp chúng ta có cái nhìn sâu sắc hơn về quá khứ và tương lai của Hệ Mặt Trời.",
      //   ],
      // },
    ],
  },
  "2": {
    id: "2",
    image: "https://scratch.oneoffcoder.com/_images/00-when-green-flag-clicked.png",
    title: "Khối khi bấm cờ xanh",
    description:
      "Nó được sử dụng để bắt đầu các tập lệnh khi người dùng nhấn vào lá cờ xanh ở góc trên bên phải của giao diện Scratch.",
    content: [
      {
        title: "Khối khi bấm cờ xanh",
        body: [
          "Bắt đầu các đoạn mã: Khối khi bấm cờ xanh thường được sử dụng để bắt đầu các đoạn mã. Nó thường được đặt ở đầu một đoạn mã để xác định những gì sẽ xảy ra khi bắt đầu dự án.",
          "Thiết lập ban đầu: Khối này thường được sử dụng để thiết lập các điều kiện ban đầu, chẳng hạn như định vị các đối tượng, thiết lập các biến số, hoặc khởi tạo sân khấu. Nó đảm bảo rằng mỗi lần bấm cờ xanh, dự án bắt đầu ở một trạng thái nhất quán.",
          
        ],
      },
      {
        title: "Các bước cụ thể",
        body: [
          "Thêm Khối:Mở trình chỉnh sửa Scratch.Từ danh mục Sự kiện, kéo khối khi bấm cờ xanh vào khu vực mã",
          "Tạo Đoạn Mã: Gắn các khối khác bên dưới khối khi bấm cờ xanh để tạo thành một đoạn mã. Ví dụ, bạn có thể thêm một khối để di chuyển một đối tượng đến một vị trí cụ thể hoặc thay đổi trang phục của nó.",
        ],
      },
      {
        title: "Chức năng",
        body: [
          "Khối này kích hoạt các tập lệnh được gắn liền với nó ngay lập tức khi lá cờ xanh được nhấp",
          "Thường được sử dụng để khởi động các hành động khi bắt đầu một dự án, chẳng hạn như thiết lập các biến, đặt vị trí ban đầu của đối tượng, bắt đầu chuyển động hoặc âm thanh, và nhiều hành động khởi động khác.",
       ],
      },
    ],
  },
  "4": {
    id: "4",
    image:
      "https://d1ng1bucl7w66k.cloudfront.net/ghost-blog/2022/07/Screen-Shot-2022-07-26-at-2.02.14-PM.png",
    title: "Go to X: Go to Y: block",
    description:
      "Khối Go to x: y: trong Scratch là một khối chuyển động được sử dụng để di chuyển một đối tượng (sprite) đến một vị trí cụ thể trên sân khấu (stage) dựa trên tọa độ x và y. Đây là một khối rất hữu ích khi bạn muốn đối tượng di chuyển ngay lập tức đến một điểm xác định mà không cần phải từ từ di chuyển qua các bước.",
    content: [
      {
        title: "Chức năng",
        body: [
          "Khối này sẽ di chuyển đối tượng đến tọa độ (x, y) cụ thể trên sân khấu ngay lập tức.",
          "Tọa độ x và y xác định vị trí của đối tượng trên sân khấu:  x: Tọa độ ngang (trục hoành). Xác định vị trí từ trái sang phải, với 0 là trung tâm, giá trị dương về phía bên phải và giá trị âm về phía bên trái.   y: Tọa độ dọc (trục tung). Xác định vị trí từ trên xuống dưới, với 0 là trung tâm, giá trị dương lên trên và giá trị âm xuống dưới."
        ],
      },
      {
        title: "Kết luận",
        body: [
         " Khối Go to x: y: là một khối cơ bản nhưng rất mạnh mẽ trong Scratch, cho phép bạn kiểm soát chính xác vị trí của đối tượng trên sân khấu. Nó thường được sử dụng trong các trò chơi, hoạt hình, và nhiều dự án khác khi bạn cần di chuyển đối tượng một cách chính xác và nhanh chóng."
        ],
      },
    ],
  },
  "5": {
    id: "5",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrOty1_JaKZ1TTDKP88ZrdgkICnWFs7GHoyw&s",
    title: "When this sprite clicked",
    description:
      "Khối When this sprite clicked trong Scratch là một khối sự kiện, được sử dụng để kích hoạt một tập lệnh khi người dùng nhấp chuột vào đối tượng (sprite) cụ thể trên sân khấu.",
    content: [
      {
        title: "Chức năng",
        body: [
          "Khối này bắt đầu thực hiện các tập lệnh liên kết với nó khi người dùng nhấp chuột vào đối tượng trên sân khấu.",
          "Nó thường được sử dụng để tạo các hành động như phát âm thanh, thay đổi hình dáng (costume), di chuyển đối tượng, hoặc thực hiện bất kỳ tập lệnh nào khác khi đối tượng được nhấp."
        ],
      },
      {
        title: "Kết luận",
        body: [
          "Khối When this sprite clicked là một khối sự kiện quan trọng trong Scratch, cho phép bạn tạo ra các tương tác trực tiếp với người dùng thông qua việc nhấp chuột vào đối tượng. Nó mở ra nhiều khả năng sáng tạo trong việc lập trình các trò chơi, hoạt hình, và các dự án tương tác khác trong Scratch."
        ],
      },
    ],
  },
};
export const planetData: IObjectData = {
  "7": {
    id: "7",
    image:
      "https://d33v4339jhl8k0.cloudfront.net/docs/assets/59a467f72c7d3a73488c5cff/images/59b9f384042863033a1cd396/file-3MCchbVcf1.jpg",
    title: "Khối change X by ",
    description:
      "Khối Change x by trong Scratch là một khối chuyển động dùng để thay đổi vị trí ngang (tọa độ x) của một đối tượng (sprite) trên sân khấu. Khối này giúp đối tượng di chuyển sang trái hoặc phải một khoảng cách nhất định.",
    content: [
      {
        title: "Chức năng",
        body: [
          "Khối này thay đổi giá trị của tọa độ x của đối tượng theo một lượng nhất định.",
          "Giá trị dương: Di chuyển đối tượng sang phải (tăng tọa độ x).",
          "Giá trị âm: Di chuyển đối tượng sang trái (giảm tọa độ x).",
        ],
      },
      {
        title: "Kết luận",
        body: [
          "Khối Change x by là một công cụ hữu ích trong Scratch để di chuyển đối tượng theo chiều ngang trên sân khấu. Nó rất linh hoạt và có thể kết hợp với các khối khác để tạo ra các chuyển động phức tạp và mượt mà trong các dự án Scratch.",
        ],
      },
     
    ],
  },
  "8": {
    id: "8",
    image:
      "https://o.quizlet.com/DLa9-u5Ct213P2Puq.ddWw.jpg",
    title: "Khối Change Y by ",
    description:
      "Khối Change y by trong Scratch là một khối chuyển động được sử dụng để thay đổi vị trí dọc (tọa độ y) của một đối tượng (sprite) trên sân khấu. Khối này giúp đối tượng di chuyển lên hoặc xuống một khoảng cách nhất định.",
    content: [
      {
        title: "Chức năng",
        body: [
          "Khối này thay đổi giá trị của tọa độ y của đối tượng theo một lượng nhất định.",
          "Giá trị dương: Di chuyển đối tượng lên trên (tăng tọa độ y).",
          "Giá trị âm: Di chuyển đối tượng xuống dưới (giảm tọa độ y).",
        ],
      },
      {
        title: "Kết luận",
        body: [
          "Khối Change y by là một công cụ hữu ích trong Scratch để di chuyển đối tượng theo chiều dọc trên sân khấu. Nó rất linh hoạt và có thể kết hợp với các khối khác để tạo ra các chuyển động phức tạp và mượt mà, giúp làm phong phú thêm các dự án Scratch của bạn."

        ],
      },
    ],
  },
  "9": {
    id: "9",
    image:
      "https://www.csteachingtips.org/images/setX0.png",
    title: "Khối Set X By ",
    description:
      "Khối Set x to trong Scratch là một khối chuyển động được sử dụng để đặt giá trị tọa độ x của một đối tượng (sprite) về một giá trị cụ thể. Khối này giúp bạn xác định chính xác vị trí ngang của đối tượng trên sân khấu.",
    content: [
      {
        title: "Chức năng",
        body: [
          "Khối này đặt giá trị của tọa độ x của đối tượng bằng một giá trị cụ thể mà bạn chỉ định.",
          "Khi khối này được thực thi, đối tượng sẽ di chuyển ngay lập tức đến vị trí ngang tương ứng với giá trị x đã đặt.",
        ],
      },
      {
        title: "Kết luận",
        body: [
          "Khối Set x to là một công cụ mạnh mẽ trong Scratch giúp bạn kiểm soát vị trí ngang của đối tượng một cách chính xác. Nó rất hữu ích trong việc thiết lập hoặc điều chỉnh vị trí của đối tượng trong các trò chơi, hoạt hình, và các dự án tương tác khác."


        ],
      },
      
    ],
  },
  "10": {
    id: "10",
    image:
      "https://miro.medium.com/v2/resize:fit:556/1*JWh8n4Rlw1VPbADkMbZUyA.png",
    title: "Khối Point in direction",
    description:
      "Khối Point in direction trong Scratch là một khối chuyển động được sử dụng để xoay hoặc hướng đối tượng (sprite) theo một hướng cụ thể trên sân khấu. Khối này cho phép bạn điều chỉnh hướng mà đối tượng sẽ di chuyển hoặc quay đầu.",
    content: [
      {
        title: "Chức năng",
        body: [
          "Khối này thay đổi hướng mà đối tượng đang hướng về, được đo bằng độ:",
          "0 độ: Hướng lên trên.",
          "90 độ: Hướng sang phải.",
          "180 độ: Hướng xuống dưới.",
          "-90 độ hoặc 270 độ: Hướng sang trái.",
        ],
      },
      {
        title: "Kết luận",
        body: [
          "Khối Point in direction là một khối quan trọng trong Scratch, cho phép bạn kiểm soát hướng mà đối tượng hướng tới. Nó rất hữu ích trong việc điều khiển hướng di chuyển của đối tượng và tạo ra các hành vi phức tạp trong các trò chơi và hoạt hình.",
        ],
      },
    ],
  },
};

export const mixedData = {
  ...commonData,
  ...planetData,
  ...headerSlideData,
};

export const allData = {
  [EData.COMMON]: commonData,
  [EData.PLANET]: planetData,
  [EData.HEADER_SLIDE]: headerSlideData,
  [EData.ALL]: mixedData,
};
