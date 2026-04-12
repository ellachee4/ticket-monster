# Ticket Monster — GitHub Pages Site

## How to Deploy on GitHub Pages

1. **Create a new GitHub repository** (e.g. `ticket-monster`)

2. **Upload all files** maintaining this folder structure:
   ```
   ticket-monster/
   ├── index.html
   ├── css/
   │   └── style.css
   ├── js/
   │   └── nav.js
   └── pages/
       ├── history.html
       ├── step-by-step.html
       ├── simulator.html
       ├── alternatives.html
       ├── activism.html
       └── citations.html
   ```

3. **Enable GitHub Pages**:
   - Go to your repo → Settings → Pages
   - Under "Source", select `main` branch and `/ (root)` folder
   - Click Save
   - Your site will be live at `https://yourusername.github.io/ticket-monster/`

## Customizing Content

### Adding Links (Activism & Alternatives pages)
Find `href="#"` in the relevant page and replace `#` with the real URL.

### Adding Citations
Open `pages/citations.html` and replace each `<div class="empty-slot">` with your formatted citation text.

### Adding Images to History Timeline
In `pages/history.html`, find `<div class="tl-image-slot">[ image placeholder ]</div>` and replace with:
```html
<img src="../images/your-image.jpg" alt="Description" style="width:100%;border-radius:4px;margin-top:1rem;" />
```
Then upload your images to an `images/` folder in the repo.
