document.addEventListener('DOMContentLoaded', function() {
    // Sample image data
    const images = [
        { id: 1, src: 'https://source.unsplash.com/random/600x400?nature', title: 'Nature Beauty', date: 'June 15, 2023', folder: 'camera' },
        { id: 2, src: 'https://source.unsplash.com/random/600x400?city', title: 'City Lights', date: 'June 14, 2023', folder: 'camera' },
        { id: 3, src: 'https://source.unsplash.com/random/600x400?animal', title: 'Wild Animal', date: 'June 13, 2023', folder: 'camera' },
        { id: 4, src: 'https://source.unsplash.com/random/600x400?food', title: 'Delicious Food', date: 'June 12, 2023', folder: 'screenshots' },
        { id: 5, src: 'https://source.unsplash.com/random/600x400?tech', title: 'Tech Gadgets', date: 'June 11, 2023', folder: 'screenshots' },
        { id: 6, src: 'https://source.unsplash.com/random/600x400?art', title: 'Abstract Art', date: 'June 10, 2023', folder: 'artwork' },
        { id: 7, src: 'https://source.unsplash.com/random/600x400?travel', title: 'Travel Adventure', date: 'June 9, 2023', folder: 'camera' },
        { id: 8, src: 'https://source.unsplash.com/random/600x400?people', title: 'Portrait', date: 'June 8, 2023', folder: 'camera' },
        { id: 9, src: 'https://source.unsplash.com/random/600x400?architecture', title: 'Modern Building', date: 'June 7, 2023', folder: 'downloads' },
        { id: 10, src: 'https://source.unsplash.com/random/600x400?fashion', title: 'Fashion Style', date: 'June 6, 2023', folder: 'downloads' },
        { id: 11, src: 'https://source.unsplash.com/random/600x400?car', title: 'Luxury Car', date: 'June 5, 2023', folder: 'favorites' },
        { id: 12, src: 'https://source.unsplash.com/random/600x400?space', title: 'Cosmic View', date: 'June 4, 2023', folder: 'favorites' }
    ];

    const gallery = document.querySelector('.image-grid');
    const lightbox = document.querySelector('.lightbox');
    const lightboxImg = lightbox.querySelector('img');
    const lightboxTitle = lightbox.querySelector('.image-title');
    const lightboxDate = lightbox.querySelector('.image-date');
    const closeBtn = lightbox.querySelector('.lightbox-close');
    const prevBtn = lightbox.querySelector('.prev');
    const nextBtn = lightbox.querySelector('.next');
    const viewButtons = document.querySelectorAll('.view-btn');
    const folderItems = document.querySelectorAll('.folders li');

    let currentImageIndex = 0;

    // Render images
    function renderImages(filter = 'all') {
        gallery.innerHTML = '';
        
        const filteredImages = filter === 'all' 
            ? images 
            : images.filter(img => img.folder === filter);
        
        filteredImages.forEach((image, index) => {
            const imageCard = document.createElement('div');
            imageCard.className = 'image-card';
            imageCard.innerHTML = `
                <img src="${image.src}" alt="${image.title}">
                <div class="image-overlay">
                    <h3 class="image-title">${image.title}</h3>
                    <p class="image-date">${image.date}</p>
                    <div class="image-actions">
                        <button><i class="fas fa-download"></i></button>
                        <button><i class="fas fa-share-alt"></i></button>
                        <button><i class="fas fa-heart"></i></button>
                    </div>
                </div>
            `;
            
            imageCard.addEventListener('click', () => openLightbox(index, filteredImages));
            gallery.appendChild(imageCard);
        });
    }

    // Open lightbox
    function openLightbox(index, imagesArray) {
        currentImageIndex = index;
        const image = imagesArray[currentImageIndex];
        
        lightboxImg.src = image.src;
        lightboxImg.alt = image.title;
        lightboxTitle.textContent = image.title;
        lightboxDate.textContent = image.date;
        
        lightbox.classList.add('show');
        document.body.style.overflow = 'hidden';
    }

    // Close lightbox
    function closeLightbox() {
        lightbox.classList.remove('show');
        document.body.style.overflow = 'auto';
    }

    // Navigate between images
    function navigateImage(direction, imagesArray) {
        if (direction === 'prev') {
            currentImageIndex = (currentImageIndex - 1 + imagesArray.length) % imagesArray.length;
        } else {
            currentImageIndex = (currentImageIndex + 1) % imagesArray.length;
        }
        
        const image = imagesArray[currentImageIndex];
        lightboxImg.src = image.src;
        lightboxImg.alt = image.title;
        lightboxTitle.textContent = image.title;
        lightboxDate.textContent = image.date;
    }

    // Change view mode
    function changeViewMode(mode) {
        if (mode === 'grid') {
            gallery.classList.remove('list-view');
        } else {
            gallery.classList.add('list-view');
        }
        
        viewButtons.forEach(btn => btn.classList.remove('active'));
        document.querySelector(`.view-btn[data-view="${mode}"]`).classList.add('active');
    }

    // Filter by folder
    function filterByFolder(folder) {
        const filter = folder === 'All Images' ? 'all' : folder.toLowerCase();
        renderImages(filter);
        
        folderItems.forEach(item => item.classList.remove('active'));
        document.querySelector(`.folders li:contains("${folder}")`).classList.add('active');
        
        document.querySelector('.gallery-toolbar h2').textContent = folder;
    }

    // Event listeners
    closeBtn.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) closeLightbox();
    });

    prevBtn.addEventListener('click', () => {
        navigateImage('prev', images);
    });

    nextBtn.addEventListener('click', () => {
        navigateImage('next', images);
    });

    viewButtons.forEach(button => {
        button.addEventListener('click', () => {
            changeViewMode(button.dataset.view);
        });
    });

    folderItems.forEach(item => {
        item.addEventListener('click', () => {
            filterByFolder(item.textContent.trim());
        });
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (!lightbox.classList.contains('show')) return;
        
        if (e.key === 'Escape') {
            closeLightbox();
        } else if (e.key === 'ArrowLeft') {
            navigateImage('prev', images);
        } else if (e.key === 'ArrowRight') {
            navigateImage('next', images);
        }
    });

    // Initial render
    renderImages();
});