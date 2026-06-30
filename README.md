# Bhavesh Kumar — Portfolio

Personal portfolio website. Plain HTML, CSS, and JavaScript — no build step.
Hosted on GitHub Pages at **https://justbhavesh.github.io**.

## Structure

```
justbhavesh.github.io/
├── index.html      # All content/sections live here
├── style.css       # Styling + light/dark theme + responsive rules
├── script.js       # Theme toggle, mobile menu, typed effect, scroll reveals
├── assets/         # Put your photo, project images, resume.pdf here
└── README.md
```

## Edit your content

Everything is in `index.html`, organized by section:

- **Hero** (`#home`) — name, roles (the rotating text is in `script.js` → `roles`), tagline.
- **About** (`#about`) — replace placeholder paragraphs and the quick-facts box.
- **Skills** (`#skills`) — edit the `.chips` lists to match your stack.
- **Projects** (`#projects`) — duplicate a `.card` block per project; set title, description, tags, and the `Code` / `Live` links.
- **Contact** (`#contact`) — email and social links.

### Add your photo
1. Drop an image in `assets/` (e.g. `assets/me.jpg`).
2. In `index.html`, replace the `<div class="avatar-placeholder">BK</div>` with:
   ```html
   <img src="assets/me.jpg" alt="Bhavesh Kumar" class="avatar-img" />
   ```
3. Add to `style.css`: `.avatar-img { width:100%; height:100%; border-radius:50%; object-fit:cover; }`

## Run locally

Just open `index.html` in a browser, or serve it:

```bash
python -m http.server 8000
# then visit http://localhost:8000
```

## Deploy to GitHub Pages

1. Create a repo on GitHub named **`justbhavesh.github.io`** (must match exactly).
2. Push this folder:
   ```bash
   git remote add origin https://github.com/justbhavesh/justbhavesh.github.io.git
   git add .
   git commit -m "Initial portfolio site"
   git push -u origin main
   ```
3. In the repo: **Settings → Pages → Build and deployment → Source: Deploy from a branch → `main` / `root`**.
4. Wait ~1 minute. Your site goes live at **https://justbhavesh.github.io**.
