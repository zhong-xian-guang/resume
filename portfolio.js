document.addEventListener('DOMContentLoaded', () => {
    // 取得所有卡片與彈出視窗元件
    const cards = document.querySelectorAll('.project-card');
    const modals = document.querySelectorAll('.modal-backdrop');
    const closeBtns = document.querySelectorAll('.modal-close');

    // 開啟對應的 Modal
    cards.forEach(card => {
        card.addEventListener('click', () => {
            const targetId = card.getAttribute('data-modal');
            if(targetId) {
                const targetModal = document.getElementById(targetId);
                if(targetModal) {
                    targetModal.classList.add('active');
                    // 開啟彈窗時禁止背景滾動
                    document.body.style.overflow = 'hidden';
                }
            }
        });
    });

    // 關閉 Modal 的函數
    const closeModal = () => {
        modals.forEach(modal => {
            modal.classList.remove('active');
        });
        // 恢復背景滾動
        document.body.style.overflow = '';
    };

    // 點擊關閉按鈕
    closeBtns.forEach(btn => {
        btn.addEventListener('click', closeModal);
    });

    // 點擊 Modal 背面的半透明黑色區域也能關閉
    modals.forEach(modal => {
        modal.addEventListener('click', (e) => {
            // 如果點擊目標是 modal-backdrop 本身而不是裡面的框，就關閉
            if (e.target === modal) {
                closeModal();
            }
        });
    });

    // 按下 ESC 鍵關閉 Modal
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeModal();
        }
    });
});
