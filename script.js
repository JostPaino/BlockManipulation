window.addEventListener('load', function () {
    let block = this.document.getElementById('block');
    //pos y manip
    let posY = this.document.getElementById('pos-y');
    posY.addEventListener('input', function () {
        block.style.top = posY.value + 'px';
    })
    // pos X manip
    let posX = this.document.getElementById('pos-x');
    posX.addEventListener('input', function () {
        block.style.left = posX.value + 'px';

    })
    // Size Manip
    let size = this.document.getElementById('size');
    size.addEventListener('input', function () {
        block.style.transform = `scale(${size.value})`;
    })
    // opacity manip
    let opacity = this.document.getElementById('opacity');
    opacity.addEventListener('input', function () {
        block.style.opacity = opacity.value;
    })
    // shape manip
    let selector = this.document.getElementById('shape-select');
    let okButton = this.document.getElementById('ok-shape');
    okButton.addEventListener('click', function () {
        let option = selector.value;
        if (option === '1') {
            block.style.borderRadius = '0';
            rotateDeg = 0;
            block.style.transform = `scale(${scaleCoef}) rotate(${rotateDeg}deg)`;;
        } else if (option === '2') {
            block.style.borderRadius = '50%';
        } else if (option === '3') {
            block.style.borderRadius = '0';
            rotateDeg = 45;
            block.style.transform = `scale(${scaleCoef}) rotate(${rotateDeg}deg)`;;
        }
    })

    // Hex manip
    let hex = this.document.getElementById('hex');
    hex.addEventListener('keyup', function (e) {
        if (e.key === 'Enter') {
            block.style.backgroundColor = `#${hex.value}`;
        }
    })

    // RGBA manip
    let rgbaR = this.document.getElementById('rgba-r');
    let rgbaG = this.document.getElementById('rgba-g');
    let rgbaB = this.document.getElementById('rgba-b');
    let rgbaA = this.document.getElementById('rgba-a');

    let rgbaInputs = this.document.querySelectorAll('.rgba-container input');

    rgbaInputs.forEach(function (element) {
        element.addEventListener('input', function () {
            block.style.backgroundColor = `rgba(${rgbaR.value}, ${rgbaG.value}, ${rgbaB.value}, ${rgbaA.value})`;
        })
    })
})