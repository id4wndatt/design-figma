document.addEventListener("DOMContentLoaded", function () {
    const chatWrapper = document.getElementById("chatWrapper");
    const chatToggleBtn = document.getElementById("chatToggle");
    let isChatOpen = false;

    if (chatToggleBtn) {
        chatToggleBtn.addEventListener("click", function () {
            isChatOpen = !isChatOpen;

            chatWrapper.style.display = isChatOpen ? "flex" : "none";

            const isTablet = window.innerWidth <= 768;

            if (isTablet) {
                chatToggleBtn.style.right = isChatOpen ? "420px" : "20px";
                chatWrapper.style.top = isChatOpen ? "60px" : "20px";
                chatWrapper.style.bottom = "auto";
            } else {
                chatToggleBtn.style.right = isChatOpen ? "570px" : "20px";
                chatWrapper.style.top = isChatOpen ? "60px" : "20px";
                chatWrapper.style.bottom = "auto";
            }
        });
    }
});
