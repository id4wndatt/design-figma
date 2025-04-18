document.addEventListener("DOMContentLoaded", function () {
    const chatWrapper = document.getElementById("chatWrapper");
    const chatToggleBtn = document.getElementById("chatToggle");4

    let isChatOpen = false;

    chatToggleBtn.addEventListener("click", function () {
        isChatOpen = !isChatOpen;
        chatWrapper.style.display = isChatOpen ? "flex" : "none";
        chatToggleBtn.style.right = isChatOpen ? "570px" : "20px";
        chatWrapper.style.top = isChatOpen ? "60px" : "20px";

    });
});
