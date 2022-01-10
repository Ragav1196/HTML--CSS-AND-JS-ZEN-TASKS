let to_get_fps = (minutes, frames) => {
    let seconds = minutes * 60;
    let fps = seconds * frames;
    return fps;
}
console.log(to_get_fps(1, 1));
console.log(to_get_fps(10, 1));
console.log(to_get_fps(10, 25));