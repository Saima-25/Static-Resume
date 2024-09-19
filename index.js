var _a, _b, _c, _d;
function toggleSection(id) {
    var section = document.getElementById(id);
    if (section) {
        section.classList.toggle('hidden');
    }
}
(_a = document.getElementById('toggle-about')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () { return toggleSection('about'); });
(_b = document.getElementById('toggle-education')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', function () { return toggleSection('education'); });
(_c = document.getElementById('toggle-work-experience')) === null || _c === void 0 ? void 0 : _c.addEventListener('click', function () { return toggleSection('work-experience'); });
(_d = document.getElementById('toggle-skills')) === null || _d === void 0 ? void 0 : _d.addEventListener('click', function () { return toggleSection('skills'); });
