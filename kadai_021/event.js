const text = document.getElementById('text');
console.log(document.getElementById('text'));

btn.addEventListener('click', () => {
    console.log('クリックされました！');
    window.setTimeout(function () {
        text.textContent = 'ボタンをクリックしました';
    }, 2000);
});