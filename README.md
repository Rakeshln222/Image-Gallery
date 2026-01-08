# 📸 PixelVault - Creative Image Gallery

PixelVault is a **modern, interactive, and responsive image gallery web application** built with **HTML, CSS, and JavaScript**.
It allows users to browse, filter, and view images in a clean UI with lightbox functionality, search options, and multiple viewing modes.

## 🚀 Features

* **Dynamic Image Rendering** – Images are loaded dynamically via JavaScript.
* **Folder Navigation** – Categorized images (Camera, Screenshots, Artwork, Downloads, Favorites, etc.).
* **Search Bar** – Find images quickly.
* **Grid/List Views** – Switch between gallery display modes.
* **Interactive Lightbox** – Click an image to view it in a larger format with navigation controls.
* **Image Actions** – Download, share, favorite, or delete images directly.
* **Sidebar with Storage Info** – Displays used storage with a progress bar.
* **Responsive Design** – Optimized for desktop, tablet, and mobile.
* **Keyboard Shortcuts** –

  * `Esc` → Close lightbox
  * `← / →` → Navigate images

---

## 🛠️ Technologies Used

* **HTML5** → Structure of the gallery
* **CSS3** → Responsive layout & styling (modern UI with animations)
* **JavaScript (ES6)** → Dynamic image rendering, folder filtering, lightbox, event handling
* **Font Awesome** → Icons for buttons & navigation
* **Unsplash Random API** → Placeholder demo images


## 📂 Project Structure

```
PixelVault/
│── index.html        # Main HTML structure
│── style.css         # Styling & responsive design
│── script.js         # Logic for dynamic image rendering, lightbox, filtering
│── assets/           # (Optional) Store custom images if replacing Unsplash
```

---

## ⚡ How It Works

1. **Homepage Layout**

   * Header with logo, search bar, and user actions.
   * Sidebar navigation for different folders.
   * Main gallery with grid/list view toggle.

2. **Image Handling**

   * `script.js` holds an array of image objects (title, date, folder, src).
   * Images are dynamically rendered into the gallery.
   * Clicking an image opens the lightbox.

3. **Lightbox**

   * Enlarges selected image with title & date.
   * Navigation buttons for previous/next image.
   * Actions: download, share, favorite, delete.

4. **Storage Info**

   * Sidebar shows **65% of 15GB used** with progress bar.


## 🎨 UI Preview

* **Grid View:**

  * Card-based layout with hover overlay.
* **List View:**

  * Stacked list of images with details.
* **Lightbox View:**

  * Enlarged image, navigation arrows, actions at bottom.


## 🔧 Installation & Usage

1. Clone/download the repository:

   ```bash
   git clone https://github.com/Rakeshln222/Image-Gallery/
   cd pixelvault-gallery
   ```

2. Open `index.html` in your browser.

3. To customize:

   * Replace **image array** in `script.js` with your own image sources.
   * Modify styles in `style.css`.
   * Add user authentication or backend for uploads (optional future feature).


## 📌 Future Enhancements

* 🔹 Real image upload & cloud storage integration.
* 🔹 User authentication system.
* 🔹 AI-powered smart search (tags, objects, faces).
* 🔹 Drag & drop image upload.
* 🔹 Dark mode toggle.


## 👨‍💻 Author

**Rakesh L N**
📧rakeshln0000@gmail.com
🌐https://github.com/Rakeshln222
