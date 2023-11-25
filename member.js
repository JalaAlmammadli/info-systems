
document.addEventListener("DOMContentLoaded", function () {
    var members = document.querySelectorAll('.member');

    function applyAnimation(member, delay) {
        setTimeout(function () {
            member.style.opacity = '1';
        }, delay);
    }

    
    members.forEach(function (member, index) {
        var delay = index * 300;
        applyAnimation(member, delay);
    });
});
