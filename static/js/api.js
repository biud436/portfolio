function cv(s) {
    return s.split(",").map(i => {
        return `<span class='badge badge-secondary'>${i}</span>`
    }).join("");
}