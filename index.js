function buttonSize(options) {
    let buttonSizeLarge = document.querySelectorAll('.buttonSizeLarge');
    let buttonSizeMed = document.querySelectorAll('.buttonSizeMed');
    let buttonSizeSmall = document.querySelectorAll('.buttonSizeSmall');

    if (options.buttonSizeLarge_type === 'large')
        options.buttonSizeLarge_type = '400px';
    if (options.buttonSizeMed_type === 'medium')
        options.buttonSizeMed_type = '150px';
    if (options.buttonSizeSmall_type === 'smaller')
        options.buttonSizeSmall_type = '50px';
        
    buttonSizeLarge.forEach(buttonSizeLarge => {
        buttonSizeLarge.style.width = `${options.buttonSizeLarge_type}`;
        buttonSizeLarge.style.height = `${options.buttonSizeLarge_type}`;
        buttonSizeLarge.style.fontSize = "24px";
    })
    buttonSizeMed.forEach(buttonSizeMed => {
        buttonSizeMed.style.width = `${options.buttonSizeMed_type}`;
        buttonSizeMed.style.height = `${options.buttonSizeMed_type}`;
        buttonSizeMed.style.fontSize = "18px";
    })
    buttonSizeSmall.forEach(buttonSizeSmall => {
        buttonSizeSmall.style.width = `${options.buttonSizeSmall_type}`;
        buttonSizeSmall.style.height = `${options.buttonSizeSmall_type}`;
        buttonSizeSmall.style.fontSize = "14px";
    })
}

module.exports.buttonSize = buttonSize;
