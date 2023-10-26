  // JavaScript sẽ được thêm vào dưới đây
      // Lắng nghe sự kiện khi người dùng nhấp vào nút "To Top"
      document.getElementById("toTopButton").addEventListener("click", function() {
        // Sử dụng window.scrollTo để cuộn lên đầu trang
        window.scrollTo({
            top: 0, // Điểm đầu của trang
            behavior: "smooth" // Thêm hiệu ứng trượt mượt (smooth scrolling)
        });
    });