document.addEventListener("DOMContentLoaded", function () {
    const chatWrapper = document.getElementById("chatWrapper");
    const chatToggleBtn = document.getElementById("chatToggle");
    const chatBoxContainer = document.getElementsByClassName("chat-box");
    const mainWrapper = document.getElementsByClassName("main")[0];
    const listIconContainer = document.querySelector(".list-icon-container");
    const headerNav = document.querySelector(".header-nav");
    let isChatOpen = false;
    let isNavOpen = false;

    // Hàm thay đổi ảnh pic-y khi màn hình 768px
    function changeImageForTablet() {
        const isTablet = window.innerWidth <= 768 && window.innerWidth > 480;
        
        // Xử lý ảnh có class pic-y
        const picYImages = document.querySelectorAll('.pic-y');
        picYImages.forEach(img => {
            // Lưu ảnh gốc lần đầu tiên
            if (!img.getAttribute('data-original-src')) {
                img.setAttribute('data-original-src', img.src);
            }
            
            if (isTablet) {
                img.src = '/imgs/product-4.jpg';
            } else {
                // Khôi phục lại ảnh ban đầu
                const originalSrc = img.getAttribute('data-original-src');
                if (originalSrc) {
                    img.src = originalSrc;
                }
            }
        });
        
        // Xử lý ảnh có class pic-u
        const picUImages = document.querySelectorAll('.pic-u');
        picUImages.forEach(img => {
            // Lưu ảnh gốc lần đầu tiên
            if (!img.getAttribute('data-original-src')) {
                img.setAttribute('data-original-src', img.src);
            }
            
            if (isTablet) {
                img.src = '/imgs/product-5.jpg';
            } else {
                // Khôi phục lại ảnh ban đầu
                const originalSrc = img.getAttribute('data-original-src');
                if (originalSrc) {
                    img.src = originalSrc;
                }
            }
        });
        
        // Xử lý ảnh có class pic-i
        const picIImages = document.querySelectorAll('.pic-i');
        picIImages.forEach(img => {
            // Lưu ảnh gốc lần đầu tiên
            if (!img.getAttribute('data-original-src')) {
                img.setAttribute('data-original-src', img.src);
            }
            
            if (isTablet) {
                img.src = '/imgs/product-1.jpg';
            } else {
                // Khôi phục lại ảnh ban đầu
                const originalSrc = img.getAttribute('data-original-src');
                if (originalSrc) {
                    img.src = originalSrc;
                }
            }
        });
        
        // Xử lý ảnh có class pic-o
        const picOImages = document.querySelectorAll('.pic-o');
        picOImages.forEach(img => {
            // Lưu ảnh gốc lần đầu tiên
            if (!img.getAttribute('data-original-src')) {
                img.setAttribute('data-original-src', img.src);
            }
            
            if (isTablet) {
                img.src = '/imgs/product-2.jpg';
            } else {
                // Khôi phục lại ảnh ban đầu
                const originalSrc = img.getAttribute('data-original-src');
                if (originalSrc) {
                    img.src = originalSrc;
                }
            }
        });
    }

    // Gọi hàm thay đổi ảnh khi tải trang
    changeImageForTablet();
    
    // Gọi hàm thay đổi ảnh khi thay đổi kích thước màn hình
    window.addEventListener('resize', changeImageForTablet);

    // Hàm đổi nội dung giữa head-y và head-i
    function swapHeadingContent() {
        const isTablet = window.innerWidth <= 768 && window.innerWidth > 480;
        const headY = document.querySelector('.head-y');
        const headI = document.querySelector('.head-i');
        
        // Kiểm tra xem có tìm thấy cả hai phần tử hay không
        if (headY && headI) {
            // Lưu nội dung ban đầu nếu chưa có
            if (!headY.getAttribute('data-original-content')) {
                headY.setAttribute('data-original-content', headY.textContent);
            }
            if (!headI.getAttribute('data-original-content')) {
                headI.setAttribute('data-original-content', headI.textContent);
            }
            
            if (isTablet) {
                // Hoán đổi nội dung trên tablet
                const tempContent = headY.textContent;
                headY.textContent = headI.textContent;
                headI.textContent = tempContent;
            } else {
                // Khôi phục nội dung ban đầu
                headY.textContent = headY.getAttribute('data-original-content');
                headI.textContent = headI.getAttribute('data-original-content');
            }
        }
    }

    // Gọi hàm hoán đổi nội dung khi tải trang
    swapHeadingContent();
    
    // Gọi hàm hoán đổi nội dung khi thay đổi kích thước màn hình
    window.addEventListener('resize', swapHeadingContent);

    // Hàm đổi nội dung giữa head-u và head-o
    function swapHeadingContentUO() {
        const isTablet = window.innerWidth <= 768 && window.innerWidth > 480;
        const headU = document.querySelector('.head-u');
        const headO = document.querySelector('.head-o');
        
        // Kiểm tra xem có tìm thấy cả hai phần tử hay không
        if (headU && headO) {
            // Lưu nội dung ban đầu nếu chưa có
            if (!headU.getAttribute('data-original-content')) {
                headU.setAttribute('data-original-content', headU.textContent);
            }
            if (!headO.getAttribute('data-original-content')) {
                headO.setAttribute('data-original-content', headO.textContent);
            }
            
            if (isTablet) {
                // Hoán đổi nội dung trên tablet
                const tempContent = headU.textContent;
                headU.textContent = headO.textContent;
                headO.textContent = tempContent;
            } else {
                // Khôi phục nội dung ban đầu
                headU.textContent = headU.getAttribute('data-original-content');
                headO.textContent = headO.getAttribute('data-original-content');
            }
        }
    }

    // Gọi hàm hoán đổi nội dung khi tải trang
    swapHeadingContentUO();
    
    // Gọi hàm hoán đổi nội dung khi thay đổi kích thước màn hình
    window.addEventListener('resize', swapHeadingContentUO);

    // Hàm đổi nội dung giữa desc-y và desc-i
    function swapDescriptionYI() {
        const isTablet = window.innerWidth <= 768 && window.innerWidth > 480;
        const descY = document.querySelector('.desc-y');
        const descI = document.querySelector('.desc-i');
        
        // Kiểm tra xem có tìm thấy cả hai phần tử hay không
        if (descY && descI) {
            // Lưu nội dung ban đầu nếu chưa có
            if (!descY.getAttribute('data-original-content')) {
                descY.setAttribute('data-original-content', descY.innerHTML);
            }
            if (!descI.getAttribute('data-original-content')) {
                descI.setAttribute('data-original-content', descI.innerHTML);
            }
            
            if (isTablet) {
                // Hoán đổi nội dung trên tablet
                const tempContent = descY.innerHTML;
                descY.innerHTML = descI.innerHTML;
                descI.innerHTML = tempContent;
            } else {
                // Khôi phục nội dung ban đầu
                descY.innerHTML = descY.getAttribute('data-original-content');
                descI.innerHTML = descI.getAttribute('data-original-content');
            }
        }
    }

    // Hàm đổi nội dung giữa desc-u và desc-o
    function swapDescriptionUO() {
        const isTablet = window.innerWidth <= 768 && window.innerWidth > 480;
        const descU = document.querySelector('.desc-u');
        const descO = document.querySelector('.desc-o');
        
        // Kiểm tra xem có tìm thấy cả hai phần tử hay không
        if (descU && descO) {
            // Lưu nội dung ban đầu nếu chưa có
            if (!descU.getAttribute('data-original-content')) {
                descU.setAttribute('data-original-content', descU.innerHTML);
            }
            if (!descO.getAttribute('data-original-content')) {
                descO.setAttribute('data-original-content', descO.innerHTML);
            }
            
            if (isTablet) {
                // Hoán đổi nội dung trên tablet
                const tempContent = descU.innerHTML;
                descU.innerHTML = descO.innerHTML;
                descO.innerHTML = tempContent;
            } else {
                // Khôi phục nội dung ban đầu
                descU.innerHTML = descU.getAttribute('data-original-content');
                descO.innerHTML = descO.getAttribute('data-original-content');
            }
        }
    }

    // Gọi hàm hoán đổi nội dung descriptions khi tải trang
    swapDescriptionYI();
    swapDescriptionUO();
    
    // Gọi hàm hoán đổi nội dung descriptions khi thay đổi kích thước màn hình
    window.addEventListener('resize', swapDescriptionYI);
    window.addEventListener('resize', swapDescriptionUO);

    function toggleNav() {
        isNavOpen = !isNavOpen;
        
        if (headerNav) {
            headerNav.style.display = isNavOpen ? "flex" : "none";
        }
    }

    if (listIconContainer) {
        listIconContainer.addEventListener("click", function(e) {
            e.preventDefault();
            toggleNav();
        });
    }

    function adjustNavBasedOnScreenSize() {
        const isMobileOrTablet = window.innerWidth <= 768;
        
        if (headerNav) {
            headerNav.style.display = isMobileOrTablet ? "none" : "flex";
            isNavOpen = !isMobileOrTablet;
        }
    }

    adjustNavBasedOnScreenSize();

    window.addEventListener("resize", adjustNavBasedOnScreenSize);

    function toggleChat(open) {
        isChatOpen = open !== undefined ? open : !isChatOpen;

        if (chatWrapper) {
            chatWrapper.style.display = isChatOpen ? "flex" : "none";
        }
        
        const isTablet = window.innerWidth <= 768;
        const isMobile = window.innerWidth <= 480;

        if (isMobile) {
            if (mainWrapper) {
                const mainChildren = mainWrapper.children;
                for (let i = 0; i < mainChildren.length; i++) {
                    const child = mainChildren[i];
                    if (child !== chatWrapper && child !== chatToggleBtn) {
                        child.style.display = isChatOpen ? "none" : "";
                    }
                }
            
                if (isChatOpen) {
                    // chat-wrapper
                    mainWrapper.style.backgroundColor = "#f5f5f5";
                    chatWrapper.style.top = "0";
                    chatWrapper.style.bottom = "0";
                    chatWrapper.style.left = "0";
                    chatWrapper.style.right = "0";
                    chatWrapper.style.width = "100%";
                    chatWrapper.style.maxWidth = "480px";
                    chatWrapper.style.height = "840px";
                    chatWrapper.style.position = "absolute";
                    chatWrapper.style.zIndex = "1000";
                    
                    // Ẩn nút toggle khi chat hiển thị trên mobile
                    if (chatToggleBtn) {
                        chatToggleBtn.style.display = "none";
                    }
                } else {
                    mainWrapper.style.backgroundColor = "";
                    chatWrapper.style.position = "";
                    chatWrapper.style.top = "";
                    chatWrapper.style.bottom = "";
                    chatWrapper.style.left = "";
                    chatWrapper.style.right = "";
                    chatWrapper.style.width = "";
                    chatWrapper.style.height = "";
                    chatWrapper.style.zIndex = "";
                    
                    // Hiển thị nút toggle khi chat đóng
                    if (chatToggleBtn) {
                        chatToggleBtn.style.display = "block";
                    }
                }
            }
        } else if (isTablet) {
            if (chatToggleBtn) {
                chatToggleBtn.style.bottom = isChatOpen ? "770px" : "20px";
                chatToggleBtn.style.right = isChatOpen ? "420px" : "20px";
                // Vẫn hiển thị nút toggle trên tablet, nhưng đổi vị trí
                chatToggleBtn.style.display = "block";
            }
            
            if (chatWrapper) {
                chatWrapper.style.bottom = "20px";
            }
        } else {
            // Desktop
            if (chatToggleBtn) {
                chatToggleBtn.style.right = isChatOpen ? "570px" : "20px";
                chatToggleBtn.style.bottom = isChatOpen ? "780px" : "20px";
                // Vẫn hiển thị nút toggle trên desktop, nhưng đổi vị trí
                chatToggleBtn.style.display = "block";
            }
            
            if (chatWrapper) {
                chatWrapper.style.bottom = "20px";
            }
        }
    }

    if (chatToggleBtn) {
        chatToggleBtn.addEventListener("click", function () {
            toggleChat();
        });
    }

    const closeBtn = document.querySelector(".chat-box-action.close");
    if (closeBtn) {
        closeBtn.addEventListener("click", function() {
            toggleChat(false);
        });
    }
});
