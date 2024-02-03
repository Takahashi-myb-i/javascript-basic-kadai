const text = document.getElementById('text');
console.log(document.getElementById('text'));

btn.addEventListener('click', () => {
    console.log('クリックされました！');
        text.textContent = 'ボタンをクリックしました';
});