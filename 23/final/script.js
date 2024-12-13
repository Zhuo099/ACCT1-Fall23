var arduinoTitle = document.getElementById('1-title');
var processingTitle = document.getElementById('2-title');
var prototypeTitle = document.getElementById('3-title');
var videoTitle = document.getElementById('4-title');

var isShowingImages = true;
var isShowingVideo = false;

arduinoTitle.addEventListener('click', function() {
    showImages('left');
});

processingTitle.addEventListener('click', function() {
    showImages('right');
});

prototypeTitle.addEventListener('click', function() {
    showImages('proto');
});

videoTitle.addEventListener('click', function() {
    toggleVideo();
});

function showImages(type) {
    var allImages = document.querySelectorAll('.images-container img');
    var leftImages = document.querySelectorAll('.left-image');
    var rightImages = document.querySelectorAll('.right-image');
    var protoImages = document.querySelectorAll('.proto-image');
    var videoContainer = document.querySelector('.video-container');

    videoContainer.style.display = 'none'; // 隐藏视频
    isShowingVideo = false;
    allImages.forEach(img => img.style.display = 'none');

    if (type === 'left') {
        leftImages.forEach(img => img.style.display = 'block');
    } else if (type === 'right') {
        rightImages.forEach(img => img.style.display = 'block');
    } else if (type === 'proto') {
        protoImages.forEach(img => img.style.display = 'block');
    }
    isShowingImages = true;
}

function toggleVideo() {
    var allImages = document.querySelectorAll('.images-container img');
    var videoContainer = document.querySelector('.video-container');

    if (!isShowingVideo) {
        allImages.forEach(img => img.style.display = 'none'); 
        videoContainer.style.display = 'block'; 
        isShowingVideo = true;
    } else {
        videoContainer.style.display = 'none'; 
        isShowingVideo = false;
    }
    
}
