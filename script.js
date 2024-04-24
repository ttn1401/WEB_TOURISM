let searchBtn = document.querySelector('#search-btn');
let searchBar = document.querySelector('.search-bar-container');
let formBtn = document.querySelector('#login-btn');
let loginForm = document.querySelector('.login-form-container');
let formClose = document.querySelector('#form-close');
let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');
let videoBtn = document.querySelectorAll('.vid-btn');
let searchResults = document.getElementById('search-results');

// Danh sách địa điểm tour
const packages = [
    {
        name: 'Du Lịch Tây Ninh',
        description: 'Tây Ninh là một tỉnh nằm ở miền Tây Nam bộ của Việt Nam...',
        image: 'https://sacotravel.com/wp-content/uploads/2023/11/Nui-Ba-Den.jpg',
        price: '1.880.000',
        discountPrice: '2.500.000'
    },
    {
        name: 'Du Lịch Đà Nẵng',
        description: 'Du lịch Đà Nẵng và các điểm du lịch lân cận...',
        image: 'https://vietluxtour.com/Upload/images/2023/TrongNuoc/DaNang/r%E1%BB%ABng%20d%E1%BB%ABa%20b%E1%BA%A3y%20m%E1%BA%ABu.jpg',
        price: '1.880.000',
        discountPrice: '2.500.000'
  },
    {
        name: 'Du Lịch Đà Lạt',
        description: 'Du lịch Đà Lạt là cơ hội tuyệt vời để trải nghiệm vẻ đẹp của "thành phố ngàn hoa" ...',
        image: 'https://benthanhtourist.com/uploads/images/da-lat/5c0b3454dcfe8.jpg',
        price: '1.880.000',
        discountPrice: '2.500.000'
  },
    
    // Thêm các gói tour khác tương tự
];

// Đặt sự kiện khi người dùng cuộn trang
window.onscroll = () =>{
    searchBtn.classList.remove('fa-times');
    searchBar.classList.remove('active');
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    loginForm.classList.remove('active');
}

// Sự kiện khi nhấp vào biểu tượng menu
menu.addEventListener('click', () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});

// Sự kiện khi nhấp vào biểu tượng tìm kiếm
searchBtn.addEventListener('click', () =>{
    searchBtn.classList.toggle('fa-times');
    searchBar.classList.toggle('active');
});

// Sự kiện khi nhấp vào nút đăng nhập
formBtn.addEventListener('click', () =>{
    loginForm.classList.add('active');
});

// Sự kiện khi nhấp vào nút đóng form đăng nhập
formClose.addEventListener('click', () =>{
    loginForm.classList.remove('active');
});

// Sự kiện khi nhấp vào nút video
videoBtn.forEach(btn =>{
    btn.addEventListener('click', ()=>{
        document.querySelector('.controls .active').classList.remove('active');
        btn.classList.add('active');
        let src = btn.getAttribute('data-src');
        document.querySelector('#video-slider').src = src;
    });
});

// Sự kiện khi người dùng nhập vào ô tìm kiếm
searchBar.addEventListener('input', function() {
    const searchTerm = searchBar.value.toLowerCase();
    const filteredPackages = packages.filter(package => {
        return package.name.toLowerCase().includes(searchTerm) || package.description.toLowerCase().includes(searchTerm);
    });

    displayResults(filteredPackages);
});

// Hiển thị kết quả tìm kiếm lên giao diện
function displayResults(results) {
    let resultHTML = '';

    if (results.length > 0) {
        results.forEach(package => {
            resultHTML += `
                <div class="box">
                    <img src="${package.image}" alt="${package.name}">
                    <div class="content">
                        <h3>${package.name}</h3>
                        <p>${package.description}</p>
                        <div class="price">${package.price} <span>${package.discountPrice}</span></div>
                        <a href="#" class="btn">Đặt chỗ ngay</a>
                    </div>
                </div>
            `;
        });
    } else {
        resultHTML = '<p>Không tìm thấy kết quả</p>';
    }

    searchResults.innerHTML = resultHTML;
}

// Khởi tạo swiper cho slider review
var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    loop:true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        640: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
    },
});

// Khởi tạo swiper cho slider brand
var swiper = new Swiper(".brand-slider", {
    spaceBetween: 20,
    loop:true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        450: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        991: {
          slidesPerView: 4,
        },
        1200: {
          slidesPerView: 5,
        },
    },
});
