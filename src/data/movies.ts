import type { Movie } from "@/types";

export const MOVIES: Movie[] = [
  // ── Phim lẻ ──────────────────────────────────────────────────────
  {
    id: 1,
    type: "single",
    slug: "dune-phan-hai",
    title: "Dune: Phần Hai",
    year: 2024,
    genre: ["Khoa học viễn tưởng", "Phiêu lưu"],
    rating: 8.5,
    duration: "2h 46m",
    quality: "4K",
    views: "12.4M",
    country: "Mỹ",
    language: "Tiếng Anh",
    director: "Denis Villeneuve",
    cast: ["Timothée Chalamet", "Zendaya", "Rebecca Ferguson", "Josh Brolin"],
    thumb: "https://image.tmdb.org/t/p/w500/8b8R8l88Qje9dn9OE8PY05Nxl1X.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/xOMo8BRK7PfcJv9JCnx7s5hj0PX.jpg",
    desc: "Paul Atreides hợp nhất với người Fremen để tiến hành cuộc chiến tổng lực chống lại những kẻ đã hủy hoại gia đình mình.",
    is_featured: true,
    is_show_slider: true,
    position_show_slider: 2,
    position_featured: 2,
    tags: ["Mới", "Hot"],
    episodes: [
      {
        title: "Full",
        server: [
          { title: "Server 1", url: "https://embed18.streamc.xyz/embed.php?hash=61969f7888a4948dfb0e75a1258d94ca" },
          { title: "Server 2", url: "https://www.youtube.com/watch?v=lV1OOlGwExM" }
        ]
      }
    ],
    trailer: "https://www.youtube.com/watch?v=Way9Dexny3w",
  },
  {
    id: 2,
    type: "single",
    slug: "oppenheimer",
    title: "Oppenheimer",
    year: 2023,
    genre: ["Tiểu sử", "Lịch sử"],
    rating: 8.9,
    is_featured: true,
    is_show_slider: true,
    position_show_slider: 2,
    position_featured: 2,
    duration: "3h 0m",
    quality: "HD",
    views: "9.1M",
    country: "Mỹ",
    language: "Tiếng Anh",
    director: "Christopher Nolan",
    cast: ["Cillian Murphy", "Emily Blunt", "Matt Damon", "Robert Downey Jr."],
    thumb: "https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/rLb2cwF3Pazuxaj0sRXQ037tGI1.jpg",
    desc: "Câu chuyện về cuộc đời của J. Robert Oppenheimer — cha đẻ của bom nguyên tử — và quá trình nghiên cứu dự án Manhattan.",
    tags: ["Oscar"],
    episodes: [
      {
        title: "Full",
        server: [
          { title: "Server 1", url: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
          { title: "Server 2", url: "https://www.youtube.com/watch?v=lV1OOlGwExM" }
        ]
      }
    ],
    trailer: "https://www.youtube.com/watch?v=uYPbbksJxIg"
  },
  {
    id: 3,
    type: "single",
    slug: "avengers-doomsday",
    title: "Avengers: Doomsday",
    year: 2026,
    genre: ["Hành động", "Siêu anh hùng"],
    rating: 9.1,
    duration: "2h 55m",
    quality: "4K",
    views: "24.8M",
    country: "Mỹ",
    language: "Tiếng Anh",
    director: "Anthony & Joe Russo",
    cast: ["Robert Downey Jr.", "Chris Evans", "Scarlett Johansson", "Benedict Cumberbatch"],
    thumb: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCFrbemJy2Vn3QDszaJz1Tot-me9jAlxLhBg&s",
    backdrop: "https://flowerimages.vnpay.vn/flowerimages/avengers-doomsday-3-cot-truyen-chinh-cua-avengers-doomsday-01.png",
    trailer: "https://youtu.be/399Ez7WHK5s?si=p7W3E94J-dtWGHyr",
    desc: "Các Avengers tập hợp một lần nữa đối mặt với Doctor Doom — kẻ đe dọa phá hủy toàn bộ đa vũ trụ.",
    is_featured: true, is_show_slider: true, position_show_slider: 1, position_featured: 1,
    tags: ["Mới", "Đề cử"],
    episodes: [
      {
        title: "Full",
        server: [
          { title: "Server 1", url: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
          { title: "Server 2", url: "https://www.youtube.com/watch?v=lV1OOlGwExM" }
        ]
      }
    ],
  },
  {
    id: 4,
    type: "single",
    slug: "joker-folie-a-deux",
    title: "Joker: Điên có đôi",
    year: 2024,
    genre: ["Tội phạm", "Tâm lý"],
    rating: 5.4,
    duration: "2h 18m",
    quality: "HD",
    views: "5.2M",
    country: "Mỹ",
    language: "Tiếng Anh",
    director: "Todd Phillips",
    cast: ["Joaquin Phoenix", "Lady Gaga", "Zazie Beetz"],
    thumb: "https://tintuc-divineshop.cdn.vccloud.vn/wp-content/uploads/2024/09/1-16.jpg  ",
    backdrop: "https://substackcdn.com/image/fetch/$s_!zSbt!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F3082ee0d-58f0-4b01-8082-e67dc8df5462_5120x2880.jpeg",
    desc: "Arthur Fleck phải đối mặt với bản thân và tình yêu điên rồ trong trại giam Arkham.",
    is_featured: false, is_show_slider: false, position_show_slider: 1, position_featured: 1,
    tags: [],
    episodes: [
      {
        title: "Full",
        server: [
          { title: "Server 1", url: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
          { title: "Server 2", url: "https://www.youtube.com/watch?v=lV1OOlGwExM" }
        ]
      }
    ],
    trailer: "https://www.youtube.com/watch?v=_OKAwz2UXB0"
  },
  {
    id: 5,
    type: "single",
    slug: "mission-impossible-the-final-reckoning",
    title: "Mission: Impossible – The Final Reckoning",
    year: 2025,
    genre: ["Hành động", "Gián điệp"],
    rating: 8.2,
    duration: "2h 49m",
    quality: "4K",
    views: "18.3M",
    country: "Mỹ",
    language: "Tiếng Anh",
    director: "Christopher McQuarrie",
    cast: ["Tom Cruise", "Hayley Atwell", "Ving Rhames", "Simon Pegg"],
    thumb: "https://www.film-game.eu/i/?i=0941042.jpg",
    backdrop: "https://images.squarespace-cdn.com/content/v1/51b3dc8ee4b051b96ceb10de/fabd9803-8d2a-4685-9bd0-0463bfc83160/Review-+MISSION-+IMPOSSIBLE+-+THE+FINAL+RECKONING+Is+a+Jaw-Dropping+Blast+of+Cinematic+Brilliance.jpg",
    desc: "Ethan Hunt và IMF đối mặt với AI bất tử đe dọa kiểm soát toàn bộ hệ thống vũ khí hạt nhân thế giới.",
    is_featured: true, is_show_slider: true, position_show_slider: 1, position_featured: 1,
    tags: ["Hot"],
    episodes: [
      {
        title: "Full",
        server: [
          { title: "Server 1", url: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
          { title: "Server 2", url: "https://www.youtube.com/watch?v=lV1OOlGwExM" }
        ]
      }
    ],
    trailer: "https://www.youtube.com/watch?v=2m1drlOZSDw"
  },
  {
    id: 6,
    type: "single",
    slug: "inside-out-2",
    title: "Inside Out 2",
    year: 2024,
    genre: ["Hoạt hình", "Gia đình"],
    rating: 7.9,
    duration: "1h 40m",
    quality: "HD",
    views: "15.7M",
    country: "Mỹ",
    language: "Tiếng Việt",
    director: "Kelsey Mann",
    cast: ["Amy Poehler", "Maya Hawke", "Kensington Tallman"],
    thumb: "https://image.tmdb.org/t/p/w500/vpnVM9B6NMmQpWeZvzLvDESb2QY.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/xg27NrXi7VXCGUr7MG75UqLl6Vg.jpg",
    desc: "Riley bước vào tuổi dậy thì, kéo theo làn sóng cảm xúc mới ập đến trong tâm trí.",
    is_featured: false,
    is_show_slider: false,
    position_show_slider: 1,
    position_featured: 1,
    tags: ["Gia đình"],
    episodes: [
      {
        title: "Full",
        server: [
          { title: "Server 1", url: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
          { title: "Server 2", url: "https://www.youtube.com/watch?v=lV1OOlGwExM" }
        ]
      }
    ],
    trailer: "https://www.youtube.com/watch?v=LEjhY976l4M"
  },
  {
    id: 7,
    type: "single",
    slug: "deadpool-wolverine",
    title: "Deadpool & Wolverine",
    year: 2024,
    genre: ["Hành động", "Hài"],
    rating: 8.1,
    duration: "2h 7m",
    quality: "4K",
    views: "20.1M",
    country: "Mỹ",
    language: "Tiếng Anh",
    director: "Shawn Levy",
    cast: ["Ryan Reynolds", "Hugh Jackman", "Emma Corrin"],
    thumb: "https://upload.wikimedia.org/wikipedia/vi/4/4c/Deadpool_%26_Wolverine_poster.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/yDHYTfA3R0jFYba16jBB1ef8oIt.jpg",
    desc: "Deadpool và Wolverine bắt tay nhau trong cuộc phiêu lưu đa vũ trụ đầy hài hước.",
    is_featured: false, is_show_slider: false, position_show_slider: 1, position_featured: 1,
    tags: ["Hot"],
    episodes: [
      {
        title: "Full",
        server: [
          { title: "Server 1", url: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
          { title: "Server 2", url: "https://www.youtube.com/watch?v=lV1OOlGwExM" }
        ]
      }
    ],
    trailer: "https://www.youtube.com/watch?v=73_1biulkYk"
  },
  {
    id: 10,
    type: "single",
    slug: "gladiator-ii",
    title: "Gladiator II",
    year: 2024,
    genre: ["Sử thi", "Hành động"],
    rating: 7.6,
    duration: "2h 28m",
    quality: "4K",
    views: "10.3M",
    country: "Mỹ",
    language: "Tiếng Anh",
    director: "Ridley Scott",
    cast: ["Paul Mescal", "Denzel Washington", "Pedro Pascal", "Connie Nielsen"],
    thumb: "https://image.tmdb.org/t/p/w500/2cxhvwyEwRlysAmRH4iodkvo0z5.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/aosm8NMQ3UyoBVpSxyimorCQykC.jpg",
    desc: "Hậu duệ của Maximus trở lại đấu trường La Mã chiến đấu vì tự do và danh dự.",
    is_featured: false,
    is_show_slider: false,
    position_show_slider: 1,
    position_featured: 1,
    tags: [],
    episodes: [
      {
        title: "Full",
        server: [
          { title: "Server 1", url: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
          { title: "Server 2", url: "https://www.youtube.com/watch?v=lV1OOlGwExM" }
        ]
      }
    ],
    trailer: "https://www.youtube.com/watch?v=4rgYUipGJNo"
  },
  {
    id: 11,
    type: "single",
    slug: "kingdom-of-the-planet-of-the-apes",
    title: "Kingdom of the Planet of the Apes",
    year: 2024,
    genre: ["Khoa học viễn tưởng", "Phiêu lưu"],
    rating: 7.0,
    duration: "2h 25m",
    quality: "HD",
    views: "8.4M",
    country: "Mỹ",
    language: "Tiếng Anh",
    director: "Wes Ball",
    cast: ["Owen Teague", "Freya Allan", "Kevin Durand"],
    thumb: "https://image.tmdb.org/t/p/w500/gKkl37BQuKTanygYQG1pyYgLVgf.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/fqv8v6AycXKsivp1T5yKtLbGXce.jpg",
    desc: "Một vương quốc khỉ mới nổi lên đe dọa loài người. Một chú khỉ trẻ bắt đầu hành trình tìm lại sự thật.",
    is_featured: false, is_show_slider: false, position_show_slider: 1, position_featured: 1,
    tags: [],
    episodes: [
      {
        title: "Full",
        server: [
          { title: "Server 1", url: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
          { title: "Server 2", url: "https://www.youtube.com/watch?v=lV1OOlGwExM" }
        ]
      }
    ],
    trailer: "https://www.youtube.com/watch?v=Kdr5oedn7q8"
  },
  {
    id: 12,
    type: "single",
    slug: "twisters",
    title: "Twisters",
    year: 2024,
    genre: ["Thiên tai", "Hành động"],
    rating: 7.2,
    duration: "2h 2m",
    quality: "HD",
    views: "9.5M",
    country: "Mỹ",
    language: "Tiếng Anh",
    director: "Lee Isaac Chung",
    cast: ["Daisy Edgar-Jones", "Glen Powell", "Anthony Ramos"],
    thumb: "//upload.wikimedia.org/wikipedia/en/thumb/a/a3/The_Twisters_poster.jpg/250px-The_Twisters_poster.jpg",
    backdrop: "https://i.ytimg.com/vi/Jm27YjLnPHc/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAyBcTkQimGEwSBHxCNmtJx_ASHvw",
    desc: "Chuyên gia khí tượng đối mặt với những cơn lốc xoáy nguy hiểm nhất lịch sử.",
    is_featured: false, is_show_slider: false, position_show_slider: 1, position_featured: 1,
    tags: [],
    episodes: [
      {
        title: "Full",
        server: [
          { title: "Server 1", url: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
          { title: "Server 2", url: "https://www.youtube.com/watch?v=lV1OOlGwExM" }
        ]
      }
    ],
    trailer: "https://www.youtube.com/watch?v=Jm27YjLnPHc"
  },
  {
    id: 13,
    type: "single",
    slug: "venom-the-last-dance",
    title: "Venom: The Last Dance",
    year: 2024,
    genre: ["Hành động", "Siêu anh hùng"],
    rating: 6.2,
    duration: "1h 49m",
    quality: "HD",
    views: "11.2M",
    country: "Mỹ",
    language: "Tiếng Việt",
    director: "Kelly Marcel",
    cast: ["Tom Hardy", "Chiwetel Ejiofor", "Juno Temple"],
    thumb: "https://image.tmdb.org/t/p/w500/k42Owka8v91trK1qMYwCQCNwJKr.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/aosm8NMQ3UyoBVpSxyimorCQykC.jpg",
    desc: "Eddie Brock và Venom đang bỏ trốn. Cả hai phải đưa ra quyết định cuối cùng về số phận của mình.",
    is_featured: false, is_show_slider: false, position_show_slider: 1, position_featured: 1,
    tags: [],
    episodes: [
      {
        title: "Full",
        server: [
          { title: "Server 1", url: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
          { title: "Server 2", url: "https://www.youtube.com/watch?v=lV1OOlGwExM" }
        ]
      }
    ],
    trailer: "https://www.youtube.com/watch?v=__2bjWxk5vg"
  },
  {
    id: 14,
    type: "single",
    slug: "furiosa-a-mad-max-saga",
    title: "Furiosa: A Mad Max Saga",
    year: 2024,
    genre: ["Hành động", "Phiêu lưu"],
    rating: 7.8,
    duration: "2h 28m",
    quality: "4K",
    views: "8.9M",
    country: "Úc",
    language: "Tiếng Anh",
    director: "George Miller",
    cast: ["Anya Taylor-Joy", "Chris Hemsworth", "Tom Burke"],
    thumb: "https://image.tmdb.org/t/p/w500/iADOJ8Zymht2JPMoy3R7xceZprc.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/xg27NrXi7VXCGUr7MG75UqLl6Vg.jpg",
    desc: "Nguồn gốc của Furiosa — từ cô bé bị bắt cóc đến chiến binh huyền thoại trong thế giới hoang tàn.",
    is_featured: false, is_show_slider: false, position_show_slider: 1, position_featured: 1,
    tags: ["Mới"],
    episodes: [
      {
        title: "Full",
        server: [
          { title: "Server 1", url: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
          { title: "Server 2", url: "https://www.youtube.com/watch?v=lV1OOlGwExM" }
        ]
      }
    ],
    trailer: "https://www.youtube.com/watch?v=XJMuhwVlca4"
  },
  {
    id: 21,
    type: "single",
    slug: "godzilla-x-kong-the-new-empire",
    title: "Godzilla x Kong: The New Empire",
    year: 2024,
    genre: ["Hành động", "Khoa học viễn tưởng"],
    rating: 6.8,
    duration: "1h 55m",
    quality: "4K",
    views: "13.6M",
    country: "Mỹ",
    language: "Tiếng Việt",
    director: "Adam Wingard",
    cast: ["Rebecca Hall", "Brian Tyree Henry", "Dan Stevens"],
    thumb: "https://image.tmdb.org/t/p/w500/tMefBSflR6PGQLv7WvFPpKLZkyk.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/iiGRkPoZuBt1jXQ9NagBMCKBUl3.jpg",
    desc: "Godzilla và Kong buộc phải hợp sức chống lại mối đe dọa bí ẩn ẩn nấp trong lòng đất.",
    is_featured: false, is_show_slider: false, position_show_slider: 1, position_featured: 1,
    tags: ["Hot"],
    episodes: [
      {
        'title': 'full',
        'server': [
          {
            'title': 'Server 1',
            'url': 'https://embed3.streamc.xyz/embed.php?hash=619c579a32e6ac095370c1b1b2259224'
          },
          {
            'title': 'Server 2',
            'url': 'https://www.youtube.com/watch?v=lV1OOlGwExM'
          }
        ]
      },
    ],
    trailer: "https://www.youtube.com/watch?v=lV1OOlGwExM"
  },
  {
    id: 22,
    type: "single",
    slug: "interstellar",
    title: "Interstellar",
    year: 2014,
    genre: ["Khoa học viễn tưởng", "Phiêu lưu"],
    rating: 8.6,
    duration: "2h 49m",
    quality: "4K",
    views: "31.2M",
    country: "Mỹ/Anh",
    language: "Tiếng Việt",
    director: "Christopher Nolan",
    cast: ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain", "Michael Caine"],
    thumb: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/xJHokMbljvjADYdit5fK5VQsXEG.jpg",
    desc: "Một nhóm phi hành gia du hành qua lỗ sâu đục trong không gian để tìm kiếm ngôi nhà mới cho nhân loại.",
    is_featured: true, is_show_slider: true, position_show_slider: 1, position_featured: 1,
    tags: ["Kinh điển"],
    episodes: [
      {
        title: "Full",
        server: [
          { title: "Server 1", url: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
          { title: "Server 2", url: "https://www.youtube.com/watch?v=lV1OOlGwExM" }
        ]
      }
    ],
    trailer: "https://www.youtube.com/watch?v=zSWdZVtXT7E"
  },
  {
    id: 23,
    type: "single",
    slug: "the-dark-knight",
    title: "The Dark Knight",
    year: 2008,
    genre: ["Hành động", "Tội phạm", "Tâm lý"],
    rating: 9.0,
    duration: "2h 32m",
    quality: "4K",
    views: "45.1M",
    country: "Mỹ/Anh",
    language: "Tiếng Việt",
    director: "Christopher Nolan",
    cast: ["Christian Bale", "Heath Ledger", "Aaron Eckhart", "Maggie Gyllenhaal"],
    thumb: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/hkBaDkMWbLaf8B1lsWsqX7an5o6.jpg",
    desc: "Batman đối mặt với Joker — kẻ thù nguy hiểm nhất, muốn nhấn chìm Gotham vào hỗn loạn tuyệt đối.",
    is_featured: false,
    is_show_slider: false,
    position_show_slider: 1,
    position_featured: 1,
    tags: ["Kinh điển", "Oscar"],
    episodes: [
      {
        title: "Full",
        server: [
          { title: "Server 1", url: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
          { title: "Server 2", url: "https://www.youtube.com/watch?v=lV1OOlGwExM" }
        ]
      }
    ],
    trailer: "https://www.youtube.com/watch?v=EXeTwQWrcwY"
  },
  {
    id: 24,
    type: "single",
    slug: "spider-man-no-way-home",
    title: "Spider-Man: No Way Home",
    year: 2021,
    genre: ["Hành động", "Siêu anh hùng"],
    rating: 8.2,
    duration: "2h 28m",
    quality: "4K",
    views: "38.9M",
    country: "Mỹ",
    language: "Tiếng Việt",
    director: "Jon Watts",
    cast: ["Tom Holland", "Zendaya", "Benedict Cumberbatch", "Andrew Garfield", "Tobey Maguire"],
    thumb: "https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/14QbnygCuTO0vl7CAFmPf1fgZfV.jpg",
    desc: "Peter Parker nhờ Doctor Strange xóa ký ức về danh tính Spider-Man, vô tình mở ra cánh cổng đa vũ trụ.",
    is_featured: false,
    is_show_slider: false,
    position_show_slider: 1,
    position_featured: 1,
    tags: ["Hot"],
    episodes: [
      {
        title: "Full",
        server: [
          { title: "Server 1", url: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
          { title: "Server 2", url: "https://www.youtube.com/watch?v=lV1OOlGwExM" }
        ]
      }
    ],
    trailer: "https://www.youtube.com/watch?v=JfVOs4VSpmA"
  },
  {
    id: 25,
    type: "single",
    slug: "everything-everywhere-all-at-once",
    title: "Everything Everywhere All at Once",
    year: 2022,
    genre: ["Khoa học viễn tưởng", "Hành động", "Hài"],
    rating: 7.8,
    duration: "2h 19m",
    quality: "HD",
    views: "14.3M",
    country: "Mỹ",
    language: "Tiếng Anh",
    director: "Daniel Kwan & Daniel Scheinert",
    cast: ["Michelle Yeoh", "Ke Huy Quan", "Jamie Lee Curtis", "Stephanie Hsu"],
    thumb: "https://image.tmdb.org/t/p/w500/w3LxiVYdWWRvEVdn5RYq6jIqkb1.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/ss0Os3uWJfQAENILHZUdX8Tt1OC.jpg",
    desc: "Một phụ nữ Trung Quốc bình thường phải cứu vũ trụ bằng cách khám phá các thực tại song song của chính mình.",
    is_featured: false,
    is_show_slider: false,
    position_show_slider: 1,
    position_featured: 1,
    tags: ["Oscar"],
    episodes: [
      {
        title: "Full",
        server: [
          { title: "Server 1", url: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
          { title: "Server 2", url: "https://www.youtube.com/watch?v=lV1OOlGwExM" }
        ]
      }
    ],
    trailer: "https://www.youtube.com/watch?v=lV1OOlGwExM"
  },
  {
    id: 26,
    type: "single",
    slug: "top-gun-maverick",
    title: "Top Gun: Maverick",
    year: 2022,
    genre: ["Hành động", "Phiêu lưu"],
    rating: 8.3,
    duration: "2h 10m",
    quality: "4K",
    views: "28.7M",
    country: "Mỹ",
    language: "Tiếng Việt",
    director: "Joseph Kosinski",
    cast: ["Tom Cruise", "Miles Teller", "Jennifer Connelly", "Val Kilmer"],
    thumb: "https://m.media-amazon.com/images/M/MV5BMDBkZDNjMWEtOTdmMi00NmExLTg5MmMtNTFlYTJlNWY5YTdmXkEyXkFqcGc@._V1_.jpg",
    backdrop: "https://www.thecoretheatresolihull.co.uk/media/5584/maverick_web.jpg?anchor=center&mode=crop&width=825&height=440&rnd=133075612540000000",
    desc: "Pete 'Maverick' Mitchell trở lại huấn luyện thế hệ phi công mới cho nhiệm vụ nguy hiểm nhất trong sự nghiệp.",
    is_featured: false, is_show_slider: false, position_show_slider: 1, position_featured: 1, tags: ["Hot"], episodes: [
      {
        title: "Full",
        server: [
          { title: "Server 1", url: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
          { title: "Server 2", url: "https://www.youtube.com/watch?v=lV1OOlGwExM" }
        ]
      }
    ], trailer: "https://www.youtube.com/watch?v=giXco2jaZ_4"
  },
  {
    id: 27,
    type: "single",
    slug: "black-panther-wakanda-forever",
    title: "Black Panther: Wakanda Forever",
    year: 2022,
    genre: ["Hành động", "Siêu anh hùng"],
    rating: 6.7,
    duration: "2h 41m",
    quality: "HD",
    views: "17.4M",
    country: "Mỹ",
    language: "Tiếng Việt",
    director: "Ryan Coogler",
    cast: ["Letitia Wright", "Angela Bassett", "Tenoch Huerta", "Winston Duke"],
    thumb: "https://image.tmdb.org/t/p/w500/sv1xJUazXeYqALzczSZ3O6nkH75.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/xDMIl84Qo5Tsu62c9DGWhmPI67A.jpg",
    desc: "Wakanda phải chiến đấu để bảo vệ đất nước sau sự ra đi của T'Challa và đối mặt với đế quốc dưới nước Talokan.",
    is_featured: false, is_show_slider: false, position_show_slider: 1, position_featured: 1,
    tags: [],
    episodes: [
      {
        title: "Full",
        server: [
          { title: "Server 1", url: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
          { title: "Server 2", url: "https://www.youtube.com/watch?v=lV1OOlGwExM" }
        ]
      }
    ],
    trailer: "https://www.youtube.com/watch?v=lV1OOlGwExM"
  },
  {
    id: 28,
    type: "single",
    slug: "the-batman",
    title: "The Batman",
    year: 2022,
    genre: ["Hành động", "Tội phạm", "Tâm lý"],
    rating: 7.9,
    duration: "2h 56m",
    quality: "4K",
    views: "22.1M",
    country: "Mỹ",
    language: "Tiếng Việt",
    director: "Matt Reeves",
    cast: ["Robert Pattinson", "Zoë Kravitz", "Paul Dano", "Jeffrey Wright", "Colin Farrell"],
    thumb: "https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/b0PlSFdDwbyK0cf5RxwDpaOJQvQ.jpg",
    desc: "Batman điều tra chuỗi tội ác bí ẩn của Riddler — kẻ thủ phạm phơi bày bộ mặt thật của tầng lớp quyền lực Gotham.",
    is_featured: false, is_show_slider: false, position_show_slider: 1, position_featured: 1,
    tags: [],
    episodes: [
      {
        title: "Full",
        server: [
          { title: "Server 1", url: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
          { title: "Server 2", url: "https://www.youtube.com/watch?v=lV1OOlGwExM" }
        ]
      }
    ],
    trailer: "https://www.youtube.com/watch?v=mqqft22S8RE"
  },
  {
    id: 29,
    type: "single",
    slug: "nope",
    title: "Nope",
    year: 2022,
    genre: ["Kinh dị", "Khoa học viễn tưởng"],
    rating: 7.0,
    duration: "2h 10m",
    quality: "HD",
    views: "9.2M",
    country: "Mỹ",
    language: "Tiếng Anh",
    director: "Jordan Peele",
    cast: ["Daniel Kaluuya", "Keke Palmer", "Steven Yeun"],
    thumb: "https://image.tmdb.org/t/p/w500/AcKVlWaNVVVFQwro3nLXqPljcYA.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/pebuPmFCMCU3mwAkohEbFkhXM53.jpg",
    desc: "Hai anh em quản lý nông trại nuôi ngựa cho phim ảnh phát hiện thứ gì đó bất thường trên bầu trời.",
    is_featured: false, is_show_slider: false, position_show_slider: 1, position_featured: 1,
    tags: [],
    episodes: [
      {
        title: "Full",
        server: [
          { title: "Server 1", url: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
          { title: "Server 2", url: "https://www.youtube.com/watch?v=lV1OOlGwExM" }
        ]
      }
    ],
    trailer: "https://www.youtube.com/watch?v=In8fuzj3Yck"
  },
  {
    id: 30,
    type: "single",
    slug: "doctor-strange-in-the-multiverse-of-madness",
    title: "Doctor Strange in the Multiverse of Madness", year: 2022,
    genre: ["Hành động", "Siêu anh hùng", "Kinh dị"],
    rating: 6.9,
    duration: "2h 6m",
    quality: "HD",
    views: "19.8M",
    country: "Mỹ",
    language: "Tiếng Việt",
    director: "Sam Raimi", cast: ["Benedict Cumberbatch", "Elizabeth Olsen", "Rachel McAdams", "Xochitl Gomez"], thumb: "https://image.tmdb.org/t/p/w500/9Gtg2DzBhmYamXBS1hKAhiwbBKS.jpg", backdrop: "https://image.tmdb.org/t/p/original/if8BMWxSXgTpAZCJKQT0Lbe65yq.jpg", desc: "Doctor Strange và Scarlet Witch phải đối mặt với những phiên bản nguy hiểm của chính họ xuyên đa vũ trụ.", is_featured: false, is_show_slider: false, position_show_slider: 1, position_featured: 1, tags: [], episodes: [
      {
        title: "Full",
        server: [
          { title: "Server 1", url: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
          { title: "Server 2", url: "https://www.youtube.com/watch?v=lV1OOlGwExM" }
        ]
      }
    ], trailer: "https://www.youtube.com/watch?v=lV1OOlGwExM"
  },

  // ── Phim bộ ──────────────────────────────────────────────────────
  {
    id: 15,
    type: "single",
    slug: "bang-ho-trong-sinh",
    title: "Băng Hồ Trọng Sinh",
    year: 2026,
    genre: ["Tâm lý", "Lịch sử"],
    rating: 8.2,
    duration: "45m",
    quality: "HD",
    views: "16.0K",
    country: "Trung Quốc",
    language: "Tiếng Việt",
    director: "侣皓吉吉",
    cast: ["夏梦", "張康樂", "李孝谦", "李昀锐"],
    thumb: "https://static2.vieon.vn/vieplay-image/poster_v4/2026/03/24/8fvgq59v_660x946-banghotrungsinh2.png",
    backdrop: "https://pic3.iqiyipic.com/image/20260410/91/1e/a_100748113_m_601_vi_m2_1013_569.jpg",
    desc: "Chu Qiao, một cô gái nô lệ được Yan Xun giải cứu. Khi lòng tin bị phản bội, cô bắt đầu hành trình tìm kiếm công lý.",
    is_featured: false,
    is_show_slider: false,
    position_show_slider: 1,
    position_featured: 1,
    tags: ["Mới"],
    episodes: [
      {
        title: "Tập 1",
        server: [
          { title: "Server 1", url: "https://www.youtube.com/embed/dQw4w9WgXcQ?ep=1" },
          { title: "Server 2", url: "https://www.youtube.com/watch?v=lV1OOlGwExM" }
        ]
      },
      {
        title: "Tập 2",
        server: [
          { title: "Server 1", url: "https://www.youtube.com/embed/dQw4w9WgXcQ?ep=2" },
          { title: "Server 2", url: "https://www.youtube.com/watch?v=lV1OOlGwExM" }
        ]
      },
      {
        title: "Tập 3",
        server: [
          { title: "Server 1", url: "https://www.youtube.com/embed/dQw4w9WgXcQ?ep=3" },
          { title: "Server 2", url: "https://www.youtube.com/watch?v=lV1OOlGwExM" }
        ]
      },
      {
        title: "Tập 4",
        server: [
          { title: "Server 1", url: "https://www.youtube.com/embed/dQw4w9WgXcQ?ep=4" },
          { title: "Server 2", url: "https://www.youtube.com/watch?v=lV1OOlGwExM" }
        ]
      },
      {
        title: "Tập 5",
        server: [
          { title: "Server 1", url: "https://www.youtube.com/embed/dQw4w9WgXcQ?ep=5" },
          { title: "Server 2", url: "https://www.youtube.com/watch?v=lV1OOlGwExM" }
        ]
      },
      {
        title: "Tập 6",
        server: [
          { title: "Server 1", url: "https://www.youtube.com/embed/dQw4w9WgXcQ?ep=6" },
          { title: "Server 2", url: "https://www.youtube.com/watch?v=lV1OOlGwExM" }
        ]
      },
      {
        title: "Tập 7",
        server: [
          { title: "Server 1", url: "https://www.youtube.com/embed/dQw4w9WgXcQ?ep=7" },
          { title: "Server 2", url: "https://www.youtube.com/watch?v=lV1OOlGwExM" }
        ]
      },
      {
        title: "Tập 8",
        server: [
          { title: "Server 1", url: "https://www.youtube.com/embed/dQw4w9WgXcQ?ep=8" },
          { title: "Server 2", url: "https://www.youtube.com/watch?v=lV1OOlGwExM" }
        ]
      },
      {
        title: "Tập 9",
        server: [
          { title: "Server 1", url: "https://www.youtube.com/embed/dQw4w9WgXcQ?ep=9" },
          { title: "Server 2", url: "https://www.youtube.com/watch?v=lV1OOlGwExM" }
        ]
      },
      {
        title: "Tập 10",
        server: [
          { title: "Server 1", url: "https://www.youtube.com/embed/dQw4w9WgXcQ?ep=10" },
          { title: "Server 2", url: "https://www.youtube.com/watch?v=lV1OOlGwExM" }
        ]
      },
      {
        title: "Tập 11",
        server: [
          { title: "Server 1", url: "https://www.youtube.com/embed/dQw4w9WgXcQ?ep=11" },
          { title: "Server 2", url: "https://www.youtube.com/watch?v=lV1OOlGwExM" }
        ]
      },
      {
        title: "Tập 12",
        server: [
          { title: "Server 1", url: "https://www.youtube.com/embed/dQw4w9WgXcQ?ep=12" },
          { title: "Server 2", url: "https://www.youtube.com/watch?v=lV1OOlGwExM" }
        ]
      },
      {
        title: "Tập 13",
        server: [
          { title: "Server 1", url: "https://www.youtube.com/embed/dQw4w9WgXcQ?ep=13" },
          { title: "Server 2", url: "https://www.youtube.com/watch?v=lV1OOlGwExM" }
        ]
      },
      {
        title: "Tập 14",
        server: [
          { title: "Server 1", url: "https://www.youtube.com/embed/dQw4w9WgXcQ?ep=14" },
          { title: "Server 2", url: "https://www.youtube.com/watch?v=lV1OOlGwExM" }
        ]
      },
      {
        title: "Tập 15",
        server: [
          { title: "Server 1", url: "https://www.youtube.com/embed/dQw4w9WgXcQ?ep=15" },
          { title: "Server 2", url: "https://www.youtube.com/watch?v=lV1OOlGwExM" }
        ]
      },
      {
        title: "Tập 16",
        server: [
          { title: "Server 1", url: "https://www.youtube.com/embed/dQw4w9WgXcQ?ep=16" },
          { title: "Server 2", url: "https://www.youtube.com/watch?v=lV1OOlGwExM" }
        ]
      },
      {
        title: "Tập 17",
        server: [
          { title: "Server 1", url: "https://www.youtube.com/embed/dQw4w9WgXcQ?ep=17" },
          { title: "Server 2", url: "https://www.youtube.com/watch?v=lV1OOlGwExM" }
        ]
      },
      {
        title: "Tập 18",
        server: [
          { title: "Server 1", url: "https://www.youtube.com/embed/dQw4w9WgXcQ?ep=18" },
          { title: "Server 2", url: "https://www.youtube.com/watch?v=lV1OOlGwExM" }
        ]
      },
      {
        title: "Tập 19",
        server: [
          { title: "Server 1", url: "https://www.youtube.com/embed/dQw4w9WgXcQ?ep=19" },
          { title: "Server 2", url: "https://www.youtube.com/watch?v=lV1OOlGwExM" }
        ]
      },
      {
        title: "Tập 20",
        server: [
          { title: "Server 1", url: "https://www.youtube.com/embed/dQw4w9WgXcQ?ep=20" },
          { title: "Server 2", url: "https://www.youtube.com/watch?v=lV1OOlGwExM" }
        ]
      },
      {
        title: "Tập 21",
        server: [
          { title: "Server 1", url: "https://www.youtube.com/embed/dQw4w9WgXcQ?ep=21" },
          { title: "Server 2", url: "https://www.youtube.com/watch?v=lV1OOlGwExM" }
        ]
      },
      {
        title: "Tập 22",
        server: [
          { title: "Server 1", url: "https://www.youtube.com/embed/dQw4w9WgXcQ?ep=22" },
          { title: "Server 2", url: "https://www.youtube.com/watch?v=lV1OOlGwExM" }
        ]
      },
      {
        title: "Tập 23",
        server: [
          { title: "Server 1", url: "https://www.youtube.com/embed/dQw4w9WgXcQ?ep=23" },
          { title: "Server 2", url: "https://www.youtube.com/watch?v=lV1OOlGwExM" }
        ]
      },
      {
        title: "Tập 24",
        server: [
          { title: "Server 1", url: "https://www.youtube.com/embed/dQw4w9WgXcQ?ep=24" },
          { title: "Server 2", url: "https://www.youtube.com/watch?v=lV1OOlGwExM" }
        ]
      },
      {
        title: "Tập 25",
        server: [
          { title: "Server 1", url: "https://www.youtube.com/embed/dQw4w9WgXcQ?ep=25" },
          { title: "Server 2", url: "https://www.youtube.com/watch?v=lV1OOlGwExM" }
        ]
      },
      {
        title: "Tập 26",
        server: [
          { title: "Server 1", url: "https://www.youtube.com/embed/dQw4w9WgXcQ?ep=26" },
          { title: "Server 2", url: "https://www.youtube.com/watch?v=lV1OOlGwExM" }
        ]
      },
      {
        title: "Tập 27",
        server: [
          { title: "Server 1", url: "https://www.youtube.com/embed/dQw4w9WgXcQ?ep=27" },
          { title: "Server 2", url: "https://www.youtube.com/watch?v=lV1OOlGwExM" }
        ]
      },
      {
        title: "Tập 28",
        server: [
          { title: "Server 1", url: "https://www.youtube.com/embed/dQw4w9WgXcQ?ep=28" },
          { title: "Server 2", url: "https://www.youtube.com/watch?v=lV1OOlGwExM" }
        ]
      },
      {
        title: "Tập 29",
        server: [
          { title: "Server 1", url: "https://www.youtube.com/embed/dQw4w9WgXcQ?ep=29" },
          { title: "Server 2", url: "https://www.youtube.com/watch?v=lV1OOlGwExM" }
        ]
      },
      {
        title: "Tập 30",
        server: [
          { title: "Server 1", url: "https://www.youtube.com/embed/dQw4w9WgXcQ?ep=30" },
          { title: "Server 2", url: "https://www.youtube.com/watch?v=lV1OOlGwExM" }
        ]
      },
      {
        title: "Tập 31",
        server: [
          { title: "Server 1", url: "https://www.youtube.com/embed/dQw4w9WgXcQ?ep=31" },
          { title: "Server 2", url: "https://www.youtube.com/watch?v=lV1OOlGwExM" }
        ]
      },
      {
        title: "Tập 32",
        server: [
          { title: "Server 1", url: "https://www.youtube.com/embed/dQw4w9WgXcQ?ep=32" },
          { title: "Server 2", url: "https://www.youtube.com/watch?v=lV1OOlGwExM" }
        ]
      },
      {
        title: "Tập 33",
        server: [
          { title: "Server 1", url: "https://www.youtube.com/embed/dQw4w9WgXcQ?ep=33" },
          { title: "Server 2", url: "https://www.youtube.com/watch?v=lV1OOlGwExM" }
        ]
      },
      {
        title: "Tập 34",
        server: [
          { title: "Server 1", url: "https://www.youtube.com/embed/dQw4w9WgXcQ?ep=34" },
          { title: "Server 2", url: "https://www.youtube.com/watch?v=lV1OOlGwExM" }
        ]
      },
      {
        title: "Tập 35",
        server: [
          { title: "Server 1", url: "https://www.youtube.com/embed/dQw4w9WgXcQ?ep=35" },
          { title: "Server 2", url: "https://www.youtube.com/watch?v=lV1OOlGwExM" }
        ]
      },
      {
        title: "Tập 36",
        server: [
          { title: "Server 1", url: "https://www.youtube.com/embed/dQw4w9WgXcQ?ep=36" },
          { title: "Server 2", url: "https://www.youtube.com/watch?v=lV1OOlGwExM" }
        ]
      },
      {
        title: "Tập 37",
        server: [
          { title: "Server 1", url: "https://www.youtube.com/embed/dQw4w9WgXcQ?ep=37" },
          { title: "Server 2", url: "https://www.youtube.com/watch?v=lV1OOlGwExM" }
        ]
      },
      {
        title: "Tập 38",
        server: [
          { title: "Server 1", url: "https://www.youtube.com/embed/dQw4w9WgXcQ?ep=38" },
          { title: "Server 2", url: "https://www.youtube.com/watch?v=lV1OOlGwExM" }
        ]
      },
      {
        title: "Tập 39",
        server: [
          { title: "Server 1", url: "https://www.youtube.com/embed/dQw4w9WgXcQ?ep=39" },
          { title: "Server 2", url: "https://www.youtube.com/watch?v=lV1OOlGwExM" }
        ]
      },
      {
        title: "Tập 40",
        server: [
          { title: "Server 1", url: "https://www.youtube.com/embed/dQw4w9WgXcQ?ep=40" },
          { title: "Server 2", url: "https://www.youtube.com/watch?v=lV1OOlGwExM" }
        ]
      }
    ],
    trailer: "https://www.youtube.com/watch?v=R0_mS_7F2yY"
  },
  { id:16,
    type: "single", slug: "gia-dinh-la-so-mot", title:"Gia Đình Là Số Một", year:2025, genre:["Hài","Gia đình"], rating:7.5, duration:"45m", quality:"HD", views:"8.2M", country:"Hàn Quốc", language:"Thuyết minh", director:"Kim Sung-ho", cast:["Lee Joon-gi","Moon Chae-won","Choi Jin-hyuk"], thumb:"https://image.tmdb.org/t/p/w500/vpnVM9B6NMmQpWeZvzLvDESb2QY.jpg", backdrop:"https://image.tmdb.org/t/p/original/xg27NrXi7VXCGUr7MG75UqLl6Vg.jpg", desc:"Câu chuyện hài hước về một gia đình Hàn Quốc với những tình huống dở khóc dở cười trong cuộc sống hiện đại.", is_featured: false, is_show_slider: false, position_show_slider: 1, position_featured: 1, tags:["Hot"], episodes: [
      {
        title: "Tập 1",
        server: [
          { title: "Server 1", url: "https://www.youtube.com/embed/dQw4w9WgXcQ?ep=1" },
          { title: "Server 2", url: "https://www.youtube.com/watch?v=lV1OOlGwExM" }
        ]
      },
      {
        title: "Tập 2",
        server: [
          { title: "Server 1", url: "https://www.youtube.com/embed/dQw4w9WgXcQ?ep=2" },
          { title: "Server 2", url: "https://www.youtube.com/watch?v=lV1OOlGwExM" }
        ]
      },
      {
        title: "Tập 3",
        server: [
          { title: "Server 1", url: "https://www.youtube.com/embed/dQw4w9WgXcQ?ep=3" },
          { title: "Server 2", url: "https://www.youtube.com/watch?v=lV1OOlGwExM" }
        ]
      },
      {
        title: "Tập 4",
        server: [
          { title: "Server 1", url: "https://www.youtube.com/embed/dQw4w9WgXcQ?ep=4" },
          { title: "Server 2", url: "https://www.youtube.com/watch?v=lV1OOlGwExM" }
        ]
      },
      {
        title: "Tập 5",
        server: [
          { title: "Server 1", url: "https://www.youtube.com/embed/dQw4w9WgXcQ?ep=5" },
          { title: "Server 2", url: "https://www.youtube.com/watch?v=lV1OOlGwExM" }
        ]
      },
      {
        title: "Tập 6",
        server: [
          { title: "Server 1", url: "https://www.youtube.com/embed/dQw4w9WgXcQ?ep=6" },
          { title: "Server 2", url: "https://www.youtube.com/watch?v=lV1OOlGwExM" }
        ]
      },
      {
        title: "Tập 7",
        server: [
          { title: "Server 1", url: "https://www.youtube.com/embed/dQw4w9WgXcQ?ep=7" },
          { title: "Server 2", url: "https://www.youtube.com/watch?v=lV1OOlGwExM" }
        ]
      },
      {
        title: "Tập 8",
        server: [
          { title: "Server 1", url: "https://www.youtube.com/embed/dQw4w9WgXcQ?ep=8" },
          { title: "Server 2", url: "https://www.youtube.com/watch?v=lV1OOlGwExM" }
        ]
      },
      {
        title: "Tập 9",
        server: [
          { title: "Server 1", url: "https://www.youtube.com/embed/dQw4w9WgXcQ?ep=9" },
          { title: "Server 2", url: "https://www.youtube.com/watch?v=lV1OOlGwExM" }
        ]
      },
      {
        title: "Tập 10",
        server: [
          { title: "Server 1", url: "https://www.youtube.com/embed/dQw4w9WgXcQ?ep=10" },
          { title: "Server 2", url: "https://www.youtube.com/watch?v=lV1OOlGwExM" }
        ]
      },
      {
        title: "Tập 11",
        server: [
          { title: "Server 1", url: "https://www.youtube.com/embed/dQw4w9WgXcQ?ep=11" },
          { title: "Server 2", url: "https://www.youtube.com/watch?v=lV1OOlGwExM" }
        ]
      },
      {
        title: "Tập 12",
        server: [
          { title: "Server 1", url: "https://www.youtube.com/embed/dQw4w9WgXcQ?ep=12" },
          { title: "Server 2", url: "https://www.youtube.com/watch?v=lV1OOlGwExM" }
        ]
      },
      {
        title: "Tập 13",
        server: [
          { title: "Server 1", url: "https://www.youtube.com/embed/dQw4w9WgXcQ?ep=13" },
          { title: "Server 2", url: "https://www.youtube.com/watch?v=lV1OOlGwExM" }
        ]
      },
      {
        title: "Tập 14",
        server: [
          { title: "Server 1", url: "https://www.youtube.com/embed/dQw4w9WgXcQ?ep=14" },
          { title: "Server 2", url: "https://www.youtube.com/watch?v=lV1OOlGwExM" }
        ]
      },
      {
        title: "Tập 15",
        server: [
          { title: "Server 1", url: "https://www.youtube.com/embed/dQw4w9WgXcQ?ep=15" },
          { title: "Server 2", url: "https://www.youtube.com/watch?v=lV1OOlGwExM" }
        ]
      },
      {
        title: "Tập 16",
        server: [
          { title: "Server 1", url: "https://www.youtube.com/embed/dQw4w9WgXcQ?ep=16" },
          { title: "Server 2", url: "https://www.youtube.com/watch?v=lV1OOlGwExM" }
        ]
      },
      {
        title: "Tập 17",
        server: [
          { title: "Server 1", url: "https://www.youtube.com/embed/dQw4w9WgXcQ?ep=17" },
          { title: "Server 2", url: "https://www.youtube.com/watch?v=lV1OOlGwExM" }
        ]
      },
      {
        title: "Tập 18",
        server: [
          { title: "Server 1", url: "https://www.youtube.com/embed/dQw4w9WgXcQ?ep=18" },
          { title: "Server 2", url: "https://www.youtube.com/watch?v=lV1OOlGwExM" }
        ]
      },
      {
        title: "Tập 19",
        server: [
          { title: "Server 1", url: "https://www.youtube.com/embed/dQw4w9WgXcQ?ep=19" },
          { title: "Server 2", url: "https://www.youtube.com/watch?v=lV1OOlGwExM" }
        ]
      },
      {
        title: "Tập 20",
        server: [
          { title: "Server 1", url: "https://www.youtube.com/embed/dQw4w9WgXcQ?ep=20" },
          { title: "Server 2", url: "https://www.youtube.com/watch?v=lV1OOlGwExM" }
        ]
      },
      {
        title: "Tập 21",
        server: [
          { title: "Server 1", url: "https://www.youtube.com/embed/dQw4w9WgXcQ?ep=21" },
          { title: "Server 2", url: "https://www.youtube.com/watch?v=lV1OOlGwExM" }
        ]
      },
      {
        title: "Tập 22",
        server: [
          { title: "Server 1", url: "https://www.youtube.com/embed/dQw4w9WgXcQ?ep=22" },
          { title: "Server 2", url: "https://www.youtube.com/watch?v=lV1OOlGwExM" }
        ]
      },
      {
        title: "Tập 23",
        server: [
          { title: "Server 1", url: "https://www.youtube.com/embed/dQw4w9WgXcQ?ep=23" },
          { title: "Server 2", url: "https://www.youtube.com/watch?v=lV1OOlGwExM" }
        ]
      },
      {
        title: "Tập 24",
        server: [
          { title: "Server 1", url: "https://www.youtube.com/embed/dQw4w9WgXcQ?ep=24" },
          { title: "Server 2", url: "https://www.youtube.com/watch?v=lV1OOlGwExM" }
        ]
      }
    ], trailer:"https://www.youtube.com/watch?v=W0q0C-X4oXY" },
  {
    id: 17,
    type: "single",
    slug: "squid-game-2",
    title: "Squid Game 2",
    year: 2024,
    genre: ["Tội phạm", "Tâm lý"],
    rating: 7.8,
    duration: "50m",
    quality: "HD",
    views: "32.5M",
    country: "Hàn Quốc",
    language: "Tiếng Việt",
    director: "Hwang Dong-hyuk",
    cast: ["Lee Jung-jae", "Lee Byung-hun", "Wi Ha-jun", "Gong Yoo"],
    thumb: "https://image.tmdb.org/t/p/w500/dDlEmu3EZ0Pgg93K2SVNLCjCSvE.jpg",
    backdrop: "https://dnm.nflximg.net/api/v6/BvVbc2Wxr2w6QuoANoSpJKEIWjQ/AAAAQYJgU57sx3hGQ3F0E149N__TAw7tZqxqmwQ2_HlqnTfFpFz6Cq7Eb8bQFOOq7obz3JKtnjLzb1cF2gfSF5T9H0FdkZzg4KGB8qe585xKioh888ncOHLIhW1CnVnOsUzjkVnEKvO4QDcNeUqC9qn4P1hlCJg.jpg?r=0f1",
    desc: "Gi-hun trở lại trò chơi sinh tử với quyết tâm phá hủy nó từ bên trong.",
    is_featured: true, is_show_slider: true, position_show_slider: 1, position_featured: 1, tags: ["Hot", "Mới"], episodes: [
      {
        title: "Tập 1",
        server: [
          { title: "Server 1", url: "https://www.youtube.com/embed/dQw4w9WgXcQ?ep=1" },
          { title: "Server 2", url: "https://www.youtube.com/watch?v=lV1OOlGwExM" }
        ]
      },
      {
        title: "Tập 2",
        server: [
          { title: "Server 1", url: "https://www.youtube.com/embed/dQw4w9WgXcQ?ep=2" },
          { title: "Server 2", url: "https://www.youtube.com/watch?v=lV1OOlGwExM" }
        ]
      },
      {
        title: "Tập 3",
        server: [
          { title: "Server 1", url: "https://www.youtube.com/embed/dQw4w9WgXcQ?ep=3" },
          { title: "Server 2", url: "https://www.youtube.com/watch?v=lV1OOlGwExM" }
        ]
      },
      {
        title: "Tập 4",
        server: [
          { title: "Server 1", url: "https://www.youtube.com/embed/dQw4w9WgXcQ?ep=4" },
          { title: "Server 2", url: "https://www.youtube.com/watch?v=lV1OOlGwExM" }
        ]
      },
      {
        title: "Tập 5",
        server: [
          { title: "Server 1", url: "https://www.youtube.com/embed/dQw4w9WgXcQ?ep=5" },
          { title: "Server 2", url: "https://www.youtube.com/watch?v=lV1OOlGwExM" }
        ]
      },
      {
        title: "Tập 6",
        server: [
          { title: "Server 1", url: "https://www.youtube.com/embed/dQw4w9WgXcQ?ep=6" },
          { title: "Server 2", url: "https://www.youtube.com/watch?v=lV1OOlGwExM" }
        ]
      },
      {
        title: "Tập 7",
        server: [
          { title: "Server 1", url: "https://www.youtube.com/embed/dQw4w9WgXcQ?ep=7" },
          { title: "Server 2", url: "https://www.youtube.com/watch?v=lV1OOlGwExM" }
        ]
      }
    ], trailer: "https://www.youtube.com/watch?v=Jm03V0n_Oxc"
  },
  {
    id: 18,
    type: "single",
    slug: "the-last-of-us-season-2",
    title: "The Last of Us Season 2",
    year: 2025,
    genre: ["Kinh dị", "Phiêu lưu", "Tâm lý"],
    rating: 9.0,
    duration: "60m",
    quality: "4K",
    views: "21.3M",
    country: "Mỹ",
    language: "Tiếng Anh",
    director: "Craig Mazin",
    cast: ["Pedro Pascal", "Bella Ramsey", "Kaitlyn Dever", "Isabela Merced"],
    thumb: "https://bluraysforeveryone.com/cdn/shop/files/389034_front.jpg?v=1748928296",
    backdrop: "https://s10019.cdn.ncms.io/wp-content/uploads/2025/03/The-Last-Of-Us-S2_HO_KA_16x9_v03.jpg.jpeg",
    desc: "Joel và Ellie tiếp tục hành trình trong thế giới hậu tận thế, đối mặt với những lựa chọn tàn khốc hơn bao giờ hết.",
    is_featured: true, is_show_slider: true, position_show_slider: 1, position_featured: 1,
    tags: ["Mới", "Hot"], episodes: [
      {
        title: "Tập 1",
        server: [
          { title: "Server 1", url: "https://www.youtube.com/embed/dQw4w9WgXcQ?ep=1" },
          { title: "Server 2", url: "https://www.youtube.com/watch?v=lV1OOlGwExM" }
        ]
      },
      {
        title: "Tập 2",
        server: [
          { title: "Server 1", url: "https://www.youtube.com/embed/dQw4w9WgXcQ?ep=2" },
          { title: "Server 2", url: "https://www.youtube.com/watch?v=lV1OOlGwExM" }
        ]
      },
      {
        title: "Tập 3",
        server: [
          { title: "Server 1", url: "https://www.youtube.com/embed/dQw4w9WgXcQ?ep=3" },
          { title: "Server 2", url: "https://www.youtube.com/watch?v=lV1OOlGwExM" }
        ]
      },
      {
        title: "Tập 4",
        server: [
          { title: "Server 1", url: "https://www.youtube.com/embed/dQw4w9WgXcQ?ep=4" },
          { title: "Server 2", url: "https://www.youtube.com/watch?v=lV1OOlGwExM" }
        ]
      },
      {
        title: "Tập 5",
        server: [
          { title: "Server 1", url: "https://www.youtube.com/embed/dQw4w9WgXcQ?ep=5" },
          { title: "Server 2", url: "https://www.youtube.com/watch?v=lV1OOlGwExM" }
        ]
      },
      {
        title: "Tập 6",
        server: [
          { title: "Server 1", url: "https://www.youtube.com/embed/dQw4w9WgXcQ?ep=6" },
          { title: "Server 2", url: "https://www.youtube.com/watch?v=lV1OOlGwExM" }
        ]
      },
      {
        title: "Tập 7",
        server: [
          { title: "Server 1", url: "https://www.youtube.com/embed/dQw4w9WgXcQ?ep=7" },
          { title: "Server 2", url: "https://www.youtube.com/watch?v=lV1OOlGwExM" }
        ]
      },
      {
        title: "Tập 8",
        server: [
          { title: "Server 1", url: "https://www.youtube.com/embed/dQw4w9WgXcQ?ep=8" },
          { title: "Server 2", url: "https://www.youtube.com/watch?v=lV1OOlGwExM" }
        ]
      }
    ], trailer: "https://www.youtube.com/watch?v=z8X2P8N8_Uo"
  },
  {
    id: 19,
    type: "single",
    slug: "stranger-things-season-5",
    title: "Stranger Things Season 5",
    year: 2025,
    genre: ["Kinh dị", "Khoa học viễn tưởng"],
    rating: 9.2,
    duration: "60m",
    quality: "4K",
    views: "40.7M",
    country: "Mỹ",
    language: "Tiếng Việt",
    director: "Matt & Ross Duffer",
    cast: ["Millie Bobby Brown", "Finn Wolfhard", "Noah Schnapp", "Sadie Sink"], thumb: "https://image.tmdb.org/t/p/w500/49WJfeN0moxb9IPfGn8AIqMGskD.jpg", backdrop: "https://image.tmdb.org/t/p/original/rcA17r3HxVDrWtgAf5OxDV3XHLT.jpg", desc: "Mùa cuối cùng của Stranger Things — đội nhóm Hawkins đối mặt với Vecna lần cuối để cứu thế giới.", is_featured: true, is_show_slider: true, position_show_slider: 1, position_featured: 1, tags: ["Mới", "Hot"], episodes: [
      {
        title: "Tập 1",
        server: [
          { title: "Server 1", url: "https://www.youtube.com/embed/dQw4w9WgXcQ?ep=1" },
          { title: "Server 2", url: "https://www.youtube.com/watch?v=lV1OOlGwExM" }
        ]
      },
      {
        title: "Tập 2",
        server: [
          { title: "Server 1", url: "https://www.youtube.com/embed/dQw4w9WgXcQ?ep=2" },
          { title: "Server 2", url: "https://www.youtube.com/watch?v=lV1OOlGwExM" }
        ]
      },
      {
        title: "Tập 3",
        server: [
          { title: "Server 1", url: "https://www.youtube.com/embed/dQw4w9WgXcQ?ep=3" },
          { title: "Server 2", url: "https://www.youtube.com/watch?v=lV1OOlGwExM" }
        ]
      },
      {
        title: "Tập 4",
        server: [
          { title: "Server 1", url: "https://www.youtube.com/embed/dQw4w9WgXcQ?ep=4" },
          { title: "Server 2", url: "https://www.youtube.com/watch?v=lV1OOlGwExM" }
        ]
      },
      {
        title: "Tập 5",
        server: [
          { title: "Server 1", url: "https://www.youtube.com/embed/dQw4w9WgXcQ?ep=5" },
          { title: "Server 2", url: "https://www.youtube.com/watch?v=lV1OOlGwExM" }
        ]
      },
      {
        title: "Tập 6",
        server: [
          { title: "Server 1", url: "https://www.youtube.com/embed/dQw4w9WgXcQ?ep=6" },
          { title: "Server 2", url: "https://www.youtube.com/watch?v=lV1OOlGwExM" }
        ]
      },
      {
        title: "Tập 7",
        server: [
          { title: "Server 1", url: "https://www.youtube.com/embed/dQw4w9WgXcQ?ep=7" },
          { title: "Server 2", url: "https://www.youtube.com/watch?v=lV1OOlGwExM" }
        ]
      },
      {
        title: "Tập 8",
        server: [
          { title: "Server 1", url: "https://www.youtube.com/embed/dQw4w9WgXcQ?ep=8" },
          { title: "Server 2", url: "https://www.youtube.com/watch?v=lV1OOlGwExM" }
        ]
      },
      {
        title: "Tập 9",
        server: [
          { title: "Server 1", url: "https://www.youtube.com/embed/dQw4w9WgXcQ?ep=9" },
          { title: "Server 2", url: "https://www.youtube.com/watch?v=lV1OOlGwExM" }
        ]
      }
    ], trailer: "https://www.youtube.com/watch?v=M9UfXU5p9rY"
  },
  {
    id: 20,
    type: "single",
    slug: "wednesday-season-2",
    title: "Wednesday Season 2",
    year: 2024,
    genre: ["Kinh dị", "Hài", "Tâm lý"],
    rating: 8.0,
    duration: "50m",
    quality: "HD",
    views: "28.4M",
    country: "Mỹ",
    language: "Tiếng Việt",
    director: "Tim Burton",
    cast: ["Jenna Ortega", "Emma Myers", "Hunter Doohan", "Percy Hynes White"],
    thumb: "https://image.tmdb.org/t/p/w500/9PFonBhy4cQy7Jz20NpMygczOkv.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/iHSwvRVsRyxpX7FE7GbviaDvgGZ.jpg",
    desc: "Wednesday Addams trở lại trường Nevermore với những bí ẩn tối tăm hơn và kẻ thù mạnh mẽ hơn.", is_featured: false, is_show_slider: false, position_show_slider: 1, position_featured: 1, tags: ["Hot"], episodes: [
      {
        title: "Tập 1",
        server: [
          { title: "Server 1", url: "https://www.youtube.com/embed/dQw4w9WgXcQ?ep=1" },
          { title: "Server 2", url: "https://www.youtube.com/watch?v=lV1OOlGwExM" }
        ]
      },
      {
        title: "Tập 2",
        server: [
          { title: "Server 1", url: "https://www.youtube.com/embed/dQw4w9WgXcQ?ep=2" },
          { title: "Server 2", url: "https://www.youtube.com/watch?v=lV1OOlGwExM" }
        ]
      },
      {
        title: "Tập 3",
        server: [
          { title: "Server 1", url: "https://www.youtube.com/embed/dQw4w9WgXcQ?ep=3" },
          { title: "Server 2", url: "https://www.youtube.com/watch?v=lV1OOlGwExM" }
        ]
      },
      {
        title: "Tập 4",
        server: [
          { title: "Server 1", url: "https://www.youtube.com/embed/dQw4w9WgXcQ?ep=4" },
          { title: "Server 2", url: "https://www.youtube.com/watch?v=lV1OOlGwExM" }
        ]
      },
      {
        title: "Tập 5",
        server: [
          { title: "Server 1", url: "https://www.youtube.com/embed/dQw4w9WgXcQ?ep=5" },
          { title: "Server 2", url: "https://www.youtube.com/watch?v=lV1OOlGwExM" }
        ]
      },
      {
        title: "Tập 6",
        server: [
          { title: "Server 1", url: "https://www.youtube.com/embed/dQw4w9WgXcQ?ep=6" },
          { title: "Server 2", url: "https://www.youtube.com/watch?v=lV1OOlGwExM" }
        ]
      },
      {
        title: "Tập 7",
        server: [
          { title: "Server 1", url: "https://www.youtube.com/embed/dQw4w9WgXcQ?ep=7" },
          { title: "Server 2", url: "https://www.youtube.com/watch?v=lV1OOlGwExM" }
        ]
      },
      {
        title: "Tập 8",
        server: [
          { title: "Server 1", url: "https://www.youtube.com/embed/dQw4w9WgXcQ?ep=8" },
          { title: "Server 2", url: "https://www.youtube.com/watch?v=lV1OOlGwExM" }
        ]
      }
    ], trailer: "https://www.youtube.com/watch?v=Wp8K2l2xW2k"
  },
  {
    id: 31,
    type: "single",
    slug: "arcane-season-2",
    title: "Arcane Season 2",
    year: 2024, genre: ["Hoạt hình", "Hành động", "Tâm lý"],
    rating: 9.4,
    duration: "45m",
    quality: "4K",
    views: "35.2M",
    country: "Mỹ",
    language: "Tiếng Việt",
    director: "Pascal Charrue & Arnaud Delord",
    cast: ["Hailee Steinfeld", "Ella Purnell", "Kevin Alejandro", "Jason Spisak"],
    thumb: "https://tintuc-divineshop.cdn.vccloud.vn/wp-content/uploads/2024/11/AAAAQUsRxTL81T7MojZePeUkgHkNyQ4cJN46OHIFIBaHR_RLvm7qFz80ZyHokWoownDdSK148TQ4pAq1H1WtMAWAufP0gWk50_To2GffNmHt9NE5wdw9qvZs0NSLdpUUmByP3kmwi5mgcj1gcpW-7yjg_R4MiT0-696x1031.jpg",
    backdrop: "https://dnm.nflximg.net/api/v6/2DuQlx0fM4wd1nzqm5BFBi6ILa8/AAAAQWaCocS5pm-8nWrqnM7ENSRidY-bgT2nR0mLOyL4P3YoyX1WAGGSoVw2ARw0kuL1bXQJOXNpW25zH_A29v2EKxY6uqrCuTYJqkvITN4Codr8n-9Fh0686N455VN6pk1B8GkIbCdBNzyQXEQcwIJvBF4I.jpg?r=45e",
    desc: "Cuộc chiến giữa Piltover và Zaun leo thang, số phận của chị em Jinx và Vi cuối cùng cũng được định đoạt.",
    is_featured: true, is_show_slider: true, position_show_slider: 1, position_featured: 1,
    tags: ["Mới", "Hot"],
    episodes: [
      {
        title: "Tập 1",
        server: [
          { title: "Server 1", url: "https://www.youtube.com/embed/dQw4w9WgXcQ?ep=1" },
          { title: "Server 2", url: "https://www.youtube.com/watch?v=lV1OOlGwExM" }
        ]
      },
      {
        title: "Tập 2",
        server: [
          { title: "Server 1", url: "https://www.youtube.com/embed/dQw4w9WgXcQ?ep=2" },
          { title: "Server 2", url: "https://www.youtube.com/watch?v=lV1OOlGwExM" }
        ]
      },
      {
        title: "Tập 3",
        server: [
          { title: "Server 1", url: "https://www.youtube.com/embed/dQw4w9WgXcQ?ep=3" },
          { title: "Server 2", url: "https://www.youtube.com/watch?v=lV1OOlGwExM" }
        ]
      },
      {
        title: "Tập 4",
        server: [
          { title: "Server 1", url: "https://www.youtube.com/embed/dQw4w9WgXcQ?ep=4" },
          { title: "Server 2", url: "https://www.youtube.com/watch?v=lV1OOlGwExM" }
        ]
      },
      {
        title: "Tập 5",
        server: [
          { title: "Server 1", url: "https://www.youtube.com/embed/dQw4w9WgXcQ?ep=5" },
          { title: "Server 2", url: "https://www.youtube.com/watch?v=lV1OOlGwExM" }
        ]
      },
      {
        title: "Tập 6",
        server: [
          { title: "Server 1", url: "https://www.youtube.com/embed/dQw4w9WgXcQ?ep=6" },
          { title: "Server 2", url: "https://www.youtube.com/watch?v=lV1OOlGwExM" }
        ]
      },
      {
        title: "Tập 7",
        server: [
          { title: "Server 1", url: "https://www.youtube.com/embed/dQw4w9WgXcQ?ep=7" },
          { title: "Server 2", url: "https://www.youtube.com/watch?v=lV1OOlGwExM" }
        ]
      },
      {
        title: "Tập 8",
        server: [
          { title: "Server 1", url: "https://www.youtube.com/embed/dQw4w9WgXcQ?ep=8" },
          { title: "Server 2", url: "https://www.youtube.com/watch?v=lV1OOlGwExM" }
        ]
      },
      {
        title: "Tập 9",
        server: [
          { title: "Server 1", url: "https://www.youtube.com/embed/dQw4w9WgXcQ?ep=9" },
          { title: "Server 2", url: "https://www.youtube.com/watch?v=lV1OOlGwExM" }
        ]
      }
    ],
    trailer: "https://www.youtube.com/watch?v=f2O6mQkFiiE"
  },
  {
    id: 32,
    type: "single", slug: "house-of-the-dragon-season-2", title: "House of the Dragon Season 2", year: 2024, genre: ["Sử thi", "Hành động", "Tâm lý"],
    rating: 7.4,
    duration: "60m",
    quality: "4K",
    views: "18.6M",
    country: "Mỹ",
    language: "Tiếng Anh",
    director: "Ryan Condal",
    cast: ["Emma D'Arcy", "Matt Smith", "Olivia Cooke", "Eve Best"],
    thumb: "https://image.tmdb.org/t/p/w500/7QMsOTMUswlwxJP0rTTZfmz2tX2.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/etj8E2o0Bud0HkONVQPjyCkIvpv.jpg",
    desc: "Cuộc nội chiến gia tộc Targaryen bùng nổ khi hai người thừa kế cùng tranh giành Ngai Vàng Sắt.",
    is_featured: false, is_show_slider: false, position_show_slider: 1, position_featured: 1,
    tags: ["Mới"],
    episodes: [
      {
        title: "Tập 1",
        server: [
          { title: "Server 1", url: "https://www.youtube.com/embed/dQw4w9WgXcQ?ep=1" },
          { title: "Server 2", url: "https://www.youtube.com/watch?v=lV1OOlGwExM" }
        ]
      },
      {
        title: "Tập 2",
        server: [
          { title: "Server 1", url: "https://www.youtube.com/embed/dQw4w9WgXcQ?ep=2" },
          { title: "Server 2", url: "https://www.youtube.com/watch?v=lV1OOlGwExM" }
        ]
      },
      {
        title: "Tập 3",
        server: [
          { title: "Server 1", url: "https://www.youtube.com/embed/dQw4w9WgXcQ?ep=3" },
          { title: "Server 2", url: "https://www.youtube.com/watch?v=lV1OOlGwExM" }
        ]
      },
      {
        title: "Tập 4",
        server: [
          { title: "Server 1", url: "https://www.youtube.com/embed/dQw4w9WgXcQ?ep=4" },
          { title: "Server 2", url: "https://www.youtube.com/watch?v=lV1OOlGwExM" }
        ]
      },
      {
        title: "Tập 5",
        server: [
          { title: "Server 1", url: "https://www.youtube.com/embed/dQw4w9WgXcQ?ep=5" },
          { title: "Server 2", url: "https://www.youtube.com/watch?v=lV1OOlGwExM" }
        ]
      },
      {
        title: "Tập 6",
        server: [
          { title: "Server 1", url: "https://www.youtube.com/embed/dQw4w9WgXcQ?ep=6" },
          { title: "Server 2", url: "https://www.youtube.com/watch?v=lV1OOlGwExM" }
        ]
      },
      {
        title: "Tập 7",
        server: [
          { title: "Server 1", url: "https://www.youtube.com/embed/dQw4w9WgXcQ?ep=7" },
          { title: "Server 2", url: "https://www.youtube.com/watch?v=lV1OOlGwExM" }
        ]
      },
      {
        title: "Tập 8",
        server: [
          { title: "Server 1", url: "https://www.youtube.com/embed/dQw4w9WgXcQ?ep=8" },
          { title: "Server 2", url: "https://www.youtube.com/watch?v=lV1OOlGwExM" }
        ]
      }
    ],
    trailer: "https://www.youtube.com/watch?v=83AByU0SjT4"
  },
  {
    id: 33,
    type: "single",
    slug: "breaking-bad", title: "Breaking Bad", year: 2022,
    genre: ["Tội phạm", "Tâm lý"],
    rating: 9.5,
    duration: "47m", quality: "HD", views: "55.8M", country: "Mỹ", language: "Tiếng Việt", director: "Vince Gilligan", cast: ["Bryan Cranston", "Aaron Paul", "Anna Gunn", "Dean Norris"], thumb: "https://image.tmdb.org/t/p/w500/ggFHVNu6YYI5L9pCfOacjizRGt.jpg", backdrop: "https://image.tmdb.org/t/p/original/tsRy63Mu5cu8etL1X7ZLyf7UP1M.jpg", desc: "Giáo viên hóa học bị ung thư Walter White bắt đầu sản xuất ma túy để kiếm tiền cho gia đình, dần biến thành tội phạm khét tiếng.", is_featured: false, is_show_slider: false, position_show_slider: 1, position_featured: 1, tags: ["Kinh điển"], episodes: [
      {
        title: "Tập 1",
        server: [
          { title: "Server 1", url: "https://www.youtube.com/embed/dQw4w9WgXcQ?ep=1" },
          { title: "Server 2", url: "https://www.youtube.com/watch?v=lV1OOlGwExM" }
        ]
      },
      {
        title: "Tập 2",
        server: [
          { title: "Server 1", url: "https://www.youtube.com/embed/dQw4w9WgXcQ?ep=2" },
          { title: "Server 2", url: "https://www.youtube.com/watch?v=lV1OOlGwExM" }
        ]
      },
      {
        title: "Tập 3",
        server: [
          { title: "Server 1", url: "https://www.youtube.com/embed/dQw4w9WgXcQ?ep=3" },
          { title: "Server 2", url: "https://www.youtube.com/watch?v=lV1OOlGwExM" }
        ]
      },
      {
        title: "Tập 4",
        server: [
          { title: "Server 1", url: "https://www.youtube.com/embed/dQw4w9WgXcQ?ep=4" },
          { title: "Server 2", url: "https://www.youtube.com/watch?v=lV1OOlGwExM" }
        ]
      },
      {
        title: "Tập 5",
        server: [
          { title: "Server 1", url: "https://www.youtube.com/embed/dQw4w9WgXcQ?ep=5" },
          { title: "Server 2", url: "https://www.youtube.com/watch?v=lV1OOlGwExM" }
        ]
      },
      {
        title: "Tập 6",
        server: [
          { title: "Server 1", url: "https://www.youtube.com/embed/dQw4w9WgXcQ?ep=6" },
          { title: "Server 2", url: "https://www.youtube.com/watch?v=lV1OOlGwExM" }
        ]
      },
      {
        title: "Tập 7",
        server: [
          { title: "Server 1", url: "https://www.youtube.com/embed/dQw4w9WgXcQ?ep=7" },
          { title: "Server 2", url: "https://www.youtube.com/watch?v=lV1OOlGwExM" }
        ]
      },
      {
        title: "Tập 8",
        server: [
          { title: "Server 1", url: "https://www.youtube.com/embed/dQw4w9WgXcQ?ep=8" },
          { title: "Server 2", url: "https://www.youtube.com/watch?v=lV1OOlGwExM" }
        ]
      },
      {
        title: "Tập 9",
        server: [
          { title: "Server 1", url: "https://www.youtube.com/embed/dQw4w9WgXcQ?ep=9" },
          { title: "Server 2", url: "https://www.youtube.com/watch?v=lV1OOlGwExM" }
        ]
      },
      {
        title: "Tập 10",
        server: [
          { title: "Server 1", url: "https://www.youtube.com/embed/dQw4w9WgXcQ?ep=10" },
          { title: "Server 2", url: "https://www.youtube.com/watch?v=lV1OOlGwExM" }
        ]
      },
      {
        title: "Tập 11",
        server: [
          { title: "Server 1", url: "https://www.youtube.com/embed/dQw4w9WgXcQ?ep=11" },
          { title: "Server 2", url: "https://www.youtube.com/watch?v=lV1OOlGwExM" }
        ]
      },
      {
        title: "Tập 12",
        server: [
          { title: "Server 1", url: "https://www.youtube.com/embed/dQw4w9WgXcQ?ep=12" },
          { title: "Server 2", url: "https://www.youtube.com/watch?v=lV1OOlGwExM" }
        ]
      },
      {
        title: "Tập 13",
        server: [
          { title: "Server 1", url: "https://www.youtube.com/embed/dQw4w9WgXcQ?ep=13" },
          { title: "Server 2", url: "https://www.youtube.com/watch?v=lV1OOlGwExM" }
        ]
      },
      {
        title: "Tập 14",
        server: [
          { title: "Server 1", url: "https://www.youtube.com/embed/dQw4w9WgXcQ?ep=14" },
          { title: "Server 2", url: "https://www.youtube.com/watch?v=lV1OOlGwExM" }
        ]
      },
      {
        title: "Tập 15",
        server: [
          { title: "Server 1", url: "https://www.youtube.com/embed/dQw4w9WgXcQ?ep=15" },
          { title: "Server 2", url: "https://www.youtube.com/watch?v=lV1OOlGwExM" }
        ]
      },
      {
        title: "Tập 16",
        server: [
          { title: "Server 1", url: "https://www.youtube.com/embed/dQw4w9WgXcQ?ep=16" },
          { title: "Server 2", url: "https://www.youtube.com/watch?v=lV1OOlGwExM" }
        ]
      },
      {
        title: "Tập 17",
        server: [
          { title: "Server 1", url: "https://www.youtube.com/embed/dQw4w9WgXcQ?ep=17" },
          { title: "Server 2", url: "https://www.youtube.com/watch?v=lV1OOlGwExM" }
        ]
      },
      {
        title: "Tập 18",
        server: [
          { title: "Server 1", url: "https://www.youtube.com/embed/dQw4w9WgXcQ?ep=18" },
          { title: "Server 2", url: "https://www.youtube.com/watch?v=lV1OOlGwExM" }
        ]
      },
      {
        title: "Tập 19",
        server: [
          { title: "Server 1", url: "https://www.youtube.com/embed/dQw4w9WgXcQ?ep=19" },
          { title: "Server 2", url: "https://www.youtube.com/watch?v=lV1OOlGwExM" }
        ]
      },
      {
        title: "Tập 20",
        server: [
          { title: "Server 1", url: "https://www.youtube.com/embed/dQw4w9WgXcQ?ep=20" },
          { title: "Server 2", url: "https://www.youtube.com/watch?v=lV1OOlGwExM" }
        ]
      },
      {
        title: "Tập 21",
        server: [
          { title: "Server 1", url: "https://www.youtube.com/embed/dQw4w9WgXcQ?ep=21" },
          { title: "Server 2", url: "https://www.youtube.com/watch?v=lV1OOlGwExM" }
        ]
      },
      {
        title: "Tập 22",
        server: [
          { title: "Server 1", url: "https://www.youtube.com/embed/dQw4w9WgXcQ?ep=22" },
          { title: "Server 2", url: "https://www.youtube.com/watch?v=lV1OOlGwExM" }
        ]
      },
      {
        title: "Tập 23",
        server: [
          { title: "Server 1", url: "https://www.youtube.com/embed/dQw4w9WgXcQ?ep=23" },
          { title: "Server 2", url: "https://www.youtube.com/watch?v=lV1OOlGwExM" }
        ]
      },
      {
        title: "Tập 24",
        server: [
          { title: "Server 1", url: "https://www.youtube.com/embed/dQw4w9WgXcQ?ep=24" },
          { title: "Server 2", url: "https://www.youtube.com/watch?v=lV1OOlGwExM" }
        ]
      },
      {
        title: "Tập 25",
        server: [
          { title: "Server 1", url: "https://www.youtube.com/embed/dQw4w9WgXcQ?ep=25" },
          { title: "Server 2", url: "https://www.youtube.com/watch?v=lV1OOlGwExM" }
        ]
      },
      {
        title: "Tập 26",
        server: [
          { title: "Server 1", url: "https://www.youtube.com/embed/dQw4w9WgXcQ?ep=26" },
          { title: "Server 2", url: "https://www.youtube.com/watch?v=lV1OOlGwExM" }
        ]
      },
      {
        title: "Tập 27",
        server: [
          { title: "Server 1", url: "https://www.youtube.com/embed/dQw4w9WgXcQ?ep=27" },
          { title: "Server 2", url: "https://www.youtube.com/watch?v=lV1OOlGwExM" }
        ]
      },
      {
        title: "Tập 28",
        server: [
          { title: "Server 1", url: "https://www.youtube.com/embed/dQw4w9WgXcQ?ep=28" },
          { title: "Server 2", url: "https://www.youtube.com/watch?v=lV1OOlGwExM" }
        ]
      },
      {
        title: "Tập 29",
        server: [
          { title: "Server 1", url: "https://www.youtube.com/embed/dQw4w9WgXcQ?ep=29" },
          { title: "Server 2", url: "https://www.youtube.com/watch?v=lV1OOlGwExM" }
        ]
      },
      {
        title: "Tập 30",
        server: [
          { title: "Server 1", url: "https://www.youtube.com/embed/dQw4w9WgXcQ?ep=30" },
          { title: "Server 2", url: "https://www.youtube.com/watch?v=lV1OOlGwExM" }
        ]
      },
      {
        title: "Tập 31",
        server: [
          { title: "Server 1", url: "https://www.youtube.com/embed/dQw4w9WgXcQ?ep=31" },
          { title: "Server 2", url: "https://www.youtube.com/watch?v=lV1OOlGwExM" }
        ]
      },
      {
        title: "Tập 32",
        server: [
          { title: "Server 1", url: "https://www.youtube.com/embed/dQw4w9WgXcQ?ep=32" },
          { title: "Server 2", url: "https://www.youtube.com/watch?v=lV1OOlGwExM" }
        ]
      },
      {
        title: "Tập 33",
        server: [
          { title: "Server 1", url: "https://www.youtube.com/embed/dQw4w9WgXcQ?ep=33" },
          { title: "Server 2", url: "https://www.youtube.com/watch?v=lV1OOlGwExM" }
        ]
      },
      {
        title: "Tập 34",
        server: [
          { title: "Server 1", url: "https://www.youtube.com/embed/dQw4w9WgXcQ?ep=34" },
          { title: "Server 2", url: "https://www.youtube.com/watch?v=lV1OOlGwExM" }
        ]
      },
      {
        title: "Tập 35",
        server: [
          { title: "Server 1", url: "https://www.youtube.com/embed/dQw4w9WgXcQ?ep=35" },
          { title: "Server 2", url: "https://www.youtube.com/watch?v=lV1OOlGwExM" }
        ]
      },
      {
        title: "Tập 36",
        server: [
          { title: "Server 1", url: "https://www.youtube.com/embed/dQw4w9WgXcQ?ep=36" },
          { title: "Server 2", url: "https://www.youtube.com/watch?v=lV1OOlGwExM" }
        ]
      },
      {
        title: "Tập 37",
        server: [
          { title: "Server 1", url: "https://www.youtube.com/embed/dQw4w9WgXcQ?ep=37" },
          { title: "Server 2", url: "https://www.youtube.com/watch?v=lV1OOlGwExM" }
        ]
      },
      {
        title: "Tập 38",
        server: [
          { title: "Server 1", url: "https://www.youtube.com/embed/dQw4w9WgXcQ?ep=38" },
          { title: "Server 2", url: "https://www.youtube.com/watch?v=lV1OOlGwExM" }
        ]
      },
      {
        title: "Tập 39",
        server: [
          { title: "Server 1", url: "https://www.youtube.com/embed/dQw4w9WgXcQ?ep=39" },
          { title: "Server 2", url: "https://www.youtube.com/watch?v=lV1OOlGwExM" }
        ]
      },
      {
        title: "Tập 40",
        server: [
          { title: "Server 1", url: "https://www.youtube.com/embed/dQw4w9WgXcQ?ep=40" },
          { title: "Server 2", url: "https://www.youtube.com/watch?v=lV1OOlGwExM" }
        ]
      },
      {
        title: "Tập 41",
        server: [
          { title: "Server 1", url: "https://www.youtube.com/embed/dQw4w9WgXcQ?ep=41" },
          { title: "Server 2", url: "https://www.youtube.com/watch?v=lV1OOlGwExM" }
        ]
      },
      {
        title: "Tập 42",
        server: [
          { title: "Server 1", url: "https://www.youtube.com/embed/dQw4w9WgXcQ?ep=42" },
          { title: "Server 2", url: "https://www.youtube.com/watch?v=lV1OOlGwExM" }
        ]
      },
      {
        title: "Tập 43",
        server: [
          { title: "Server 1", url: "https://www.youtube.com/embed/dQw4w9WgXcQ?ep=43" },
          { title: "Server 2", url: "https://www.youtube.com/watch?v=lV1OOlGwExM" }
        ]
      },
      {
        title: "Tập 44",
        server: [
          { title: "Server 1", url: "https://www.youtube.com/embed/dQw4w9WgXcQ?ep=44" },
          { title: "Server 2", url: "https://www.youtube.com/watch?v=lV1OOlGwExM" }
        ]
      },
      {
        title: "Tập 45",
        server: [
          { title: "Server 1", url: "https://www.youtube.com/embed/dQw4w9WgXcQ?ep=45" },
          { title: "Server 2", url: "https://www.youtube.com/watch?v=lV1OOlGwExM" }
        ]
      },
      {
        title: "Tập 46",
        server: [
          { title: "Server 1", url: "https://www.youtube.com/embed/dQw4w9WgXcQ?ep=46" },
          { title: "Server 2", url: "https://www.youtube.com/watch?v=lV1OOlGwExM" }
        ]
      },
      {
        title: "Tập 47",
        server: [
          { title: "Server 1", url: "https://www.youtube.com/embed/dQw4w9WgXcQ?ep=47" },
          { title: "Server 2", url: "https://www.youtube.com/watch?v=lV1OOlGwExM" }
        ]
      },
      {
        title: "Tập 48",
        server: [
          { title: "Server 1", url: "https://www.youtube.com/embed/dQw4w9WgXcQ?ep=48" },
          { title: "Server 2", url: "https://www.youtube.com/watch?v=lV1OOlGwExM" }
        ]
      },
      {
        title: "Tập 49",
        server: [
          { title: "Server 1", url: "https://www.youtube.com/embed/dQw4w9WgXcQ?ep=49" },
          { title: "Server 2", url: "https://www.youtube.com/watch?v=lV1OOlGwExM" }
        ]
      },
      {
        title: "Tập 50",
        server: [
          { title: "Server 1", url: "https://www.youtube.com/embed/dQw4w9WgXcQ?ep=50" },
          { title: "Server 2", url: "https://www.youtube.com/watch?v=lV1OOlGwExM" }
        ]
      },
      {
        title: "Tập 51",
        server: [
          { title: "Server 1", url: "https://www.youtube.com/embed/dQw4w9WgXcQ?ep=51" },
          { title: "Server 2", url: "https://www.youtube.com/watch?v=lV1OOlGwExM" }
        ]
      },
      {
        title: "Tập 52",
        server: [
          { title: "Server 1", url: "https://www.youtube.com/embed/dQw4w9WgXcQ?ep=52" },
          { title: "Server 2", url: "https://www.youtube.com/watch?v=lV1OOlGwExM" }
        ]
      },
      {
        title: "Tập 53",
        server: [
          { title: "Server 1", url: "https://www.youtube.com/embed/dQw4w9WgXcQ?ep=53" },
          { title: "Server 2", url: "https://www.youtube.com/watch?v=lV1OOlGwExM" }
        ]
      },
      {
        title: "Tập 54",
        server: [
          { title: "Server 1", url: "https://www.youtube.com/embed/dQw4w9WgXcQ?ep=54" },
          { title: "Server 2", url: "https://www.youtube.com/watch?v=lV1OOlGwExM" }
        ]
      },
      {
        title: "Tập 55",
        server: [
          { title: "Server 1", url: "https://www.youtube.com/embed/dQw4w9WgXcQ?ep=55" },
          { title: "Server 2", url: "https://www.youtube.com/watch?v=lV1OOlGwExM" }
        ]
      },
      {
        title: "Tập 56",
        server: [
          { title: "Server 1", url: "https://www.youtube.com/embed/dQw4w9WgXcQ?ep=56" },
          { title: "Server 2", url: "https://www.youtube.com/watch?v=lV1OOlGwExM" }
        ]
      },
      {
        title: "Tập 57",
        server: [
          { title: "Server 1", url: "https://www.youtube.com/embed/dQw4w9WgXcQ?ep=57" },
          { title: "Server 2", url: "https://www.youtube.com/watch?v=lV1OOlGwExM" }
        ]
      },
      {
        title: "Tập 58",
        server: [
          { title: "Server 1", url: "https://www.youtube.com/embed/dQw4w9WgXcQ?ep=58" },
          { title: "Server 2", url: "https://www.youtube.com/watch?v=lV1OOlGwExM" }
        ]
      },
      {
        title: "Tập 59",
        server: [
          { title: "Server 1", url: "https://www.youtube.com/embed/dQw4w9WgXcQ?ep=59" },
          { title: "Server 2", url: "https://www.youtube.com/watch?v=lV1OOlGwExM" }
        ]
      },
      {
        title: "Tập 60",
        server: [
          { title: "Server 1", url: "https://www.youtube.com/embed/dQw4w9WgXcQ?ep=60" },
          { title: "Server 2", url: "https://www.youtube.com/watch?v=lV1OOlGwExM" }
        ]
      },
      {
        title: "Tập 61",
        server: [
          { title: "Server 1", url: "https://www.youtube.com/embed/dQw4w9WgXcQ?ep=61" },
          { title: "Server 2", url: "https://www.youtube.com/watch?v=lV1OOlGwExM" }
        ]
      },
      {
        title: "Tập 62",
        server: [
          { title: "Server 1", url: "https://www.youtube.com/embed/dQw4w9WgXcQ?ep=62" },
          { title: "Server 2", url: "https://www.youtube.com/watch?v=lV1OOlGwExM" }
        ]
      }
    ], trailer: "https://www.youtube.com/watch?v=HhesaQXLuRY"
  },
  {
    id: 34,
    type: "single",
    slug: "tang-lop-itaewon",
    title: "Tầng Lớp Itaewon",
    year: 2020,
    genre: ["Tâm lý", "Hài", "Lãng mạn"],
    rating: 8.1,
    duration: "70m",
    quality: "HD",
    views: "14.7M",
    country: "Hàn Quốc",
    language: "Tiếng Việt",
    director: "Kim Sung-yoon",
    cast: ["Park Seo-joon", "Kim Da-mi", "Yoo Jae-myung", "Kwon Nara"],
    thumb: "https://image.tmdb.org/t/p/w500/wjOHjWCUE0YzDpEzOzdUniqdzIA.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/mFY2HjrJEBPUWaGHfInFGlON4tP.jpg",
    desc: "Chàng trai trẻ Park Saeroyi khởi nghiệp nhà hàng trên con đường Itaewon để trả thù tên tài phiệt đã phá hủy gia đình anh.",
    is_featured: false, is_show_slider: false, position_show_slider: 1, position_featured: 1,
    tags: ["Kinh điển"],
    episodes: [
      {
        title: "Full",
        server: [
          { title: "Server 1", url: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
          { title: "Server 2", url: "https://www.youtube.com/watch?v=lV1OOlGwExM" }
        ]
      }
    ],
    trailer: "https://www.youtube.com/watch?v=PyM6WfN47tI"
  },
  {
    id: 35,
    type: "single",
    slug: "my-mister",
    title: "My Mister",
    year: 2018,
    genre: ["Tâm lý", "Lãng mạn"],
    rating: 9.0,
    duration: "70m",
    quality: "HD",
    views: "11.2M",
    country: "Hàn Quốc",
    language: "Tiếng Việt",
    director: "Kim Won-seok", cast: ["Lee Sun-kyun", "IU", "Oh Na-ra", "Kim Young-min"], thumb: "https://image.tmdb.org/t/p/w500/etj8E2o0Bud0HkONVQPjyCkIvpv.jpg", backdrop: "https://image.tmdb.org/t/p/original/mFY2HjrJEBPUWaGHfInFGlON4tP.jpg", desc: "Cuộc gặp gỡ giữa người đàn ông trung niên đang chịu đựng áp lực cuộc sống và cô gái trẻ chi đơn bí ẩn.", is_featured: false, is_show_slider: false, position_show_slider: 1, position_featured: 1, tags: ["Kinh điển"], episodes: [
      {
        title: "Full",
        server: [
          { title: "Server 1", url: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
          { title: "Server 2", url: "https://www.youtube.com/watch?v=lV1OOlGwExM" }
        ]
      }
    ], trailer: "https://www.youtube.com/watch?v=p499m6mE-iM"
  },
  {
    id: 36,
    type: "single",
    slug: "chi-dep-mua-com-ngon-cho-toi",
    title: "Chị Đẹp Mua Cơm Ngon Cho Tôi",
    year: 2018,
    genre: ["Lãng mạn", "Hài"],
    rating: 8.0,
    duration: "60m",
    quality: "HD",
    views: "9.8M",
    country: "Hàn Quốc",
    language: "Tiếng Việt",
    director: "Ahn Pan-seok",
    cast: ["Son Ye-jin", "Jung Hae-in"],
    thumb: "https://upload.wikimedia.org/wikipedia/vi/d/d9/Chi_Dep_Mua_Com_Cho_Toi.jpg",
    backdrop: "https://thethaovanhoa.mediacdn.vn/Upload/O5NP4aFt6GVwE7JTFAOaA/files/2018/04/chi-dep-mua-com-ngon-cho-toi-tap-5%20(5).jpg",
    desc: "Câu chuyện tình yêu giữa người phụ nữ 35 tuổi và chàng trai 25 tuổi — bắt đầu từ những bữa cơm nhỏ.", is_featured: false, is_show_slider: false, position_show_slider: 1, position_featured: 1, tags: [], episodes: [
      {
        title: "Full",
        server: [
          { title: "Server 1", url: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
          { title: "Server 2", url: "https://www.youtube.com/watch?v=lV1OOlGwExM" }
        ]
      }
    ], trailer: "https://www.youtube.com/watch?v=u8xQp6ZtEto"
  },
];

export const slugify = (str: string) => {
  return str
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[đĐ]/g, "d")
    .replace(/([^0-9a-z-\s])/g, "")
    .replace(/(\s+)/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-+|-+$/g, "");
};

export const GENRES = ["Tất cả","Hành động","Khoa học viễn tưởng","Kinh dị","Hài","Hoạt hình","Tâm lý","Tội phạm","Lịch sử","Sử thi","Phiêu lưu","Gia đình","Thiên tai","Tiểu sử","Siêu anh hùng","Gián điệp","Lãng mạn"];
export const YEARS = ["Tất cả","2026","2025","2024","2023","2022","2021","2020","2018","2014","2008"];
export const QUALITIES = ["Tất cả","4K","HD","CAM"];
export const COUNTRIES = ["Tất cả","Mỹ","Hàn Quốc","Nhật Bản","Trung Quốc","Anh","Pháp","Úc"];
export const SORT_OPTIONS = [
  { value:"newest", label:"Mới nhất" },
  { value:"rating", label:"Điểm cao nhất" },
  { value:"views", label:"Xem nhiều nhất" },
  { value:"oldest", label:"Cũ nhất" },
];
