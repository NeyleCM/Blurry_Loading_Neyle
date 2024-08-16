
const loading = document.getElementById('loading')
const mainBg = document.querySelector('.mainBg')

let load = 0

const scale = (num, inMin, inMax, outMin, outMax) => {
    return ((num - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin
}

const blurring = () =>  {
    load++

    if (load > 99)
        clearInterval(int)

    loading.innerHTML = `${ load }%`;
    loading.style.opacity = scale(load, 0, 100, 1, 0);
    mainBg.style.filter = `blur(${ scale(load, 0, 100, 30, 0) }px)`
}

let int = setInterval(blurring, 30)

/*
window.onload = function() {
    const loading = document.getElementById('loading');
    const mainBg = document.getElementById('mainBg');
    let load = 0;
    let percentage = 0;

    const updateBackgroundAndCounter = () => {
        load += 0.01;
        percentage += 1;
        mainBg.style.opacity = load;
        loading.innerHTML = `${percentage}%`;

        if (percentage >= 100) {
            clearInterval(interval);
            loading.style.opacity = 0; // Desaparece el contador
        }
    };

    const interval = setInterval(updateBackgroundAndCounter, 1); // 1ms interval to reach 100% in 100ms
};
*/