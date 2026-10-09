# Data Atlas

A simple, responsive learning site about **data warehousing** and **data mining**.

## Open it in VS Code

1. Download the project ZIP and extract it to a folder such as `Documents/data-atlas`.
2. Open VS Code.
3. Choose **File → Open Folder…** and select the extracted `data-atlas` folder.
4. Open **Terminal → New Terminal** inside VS Code.
5. Confirm that Node.js is installed:

   ```bash
   node --version
   ```

   If that command fails, install the current LTS release from [nodejs.org](https://nodejs.org/).

6. Start the local site:

   ```bash
   npm start
   ```

7. Open `http://localhost:3000` in your browser.
8. Stop the local server with `Ctrl + C` when you are finished.

The editable website files are in `public/`. Most content is in `public/index.html`; visual styling is in `public/styles.css`; interactions are in `public/script.js`.

## Put it on GitHub

### 1. Create a repository

1. Sign in at [github.com](https://github.com/).
2. Click **New repository**.
3. Name it `data-atlas` (or another name you prefer).
4. Choose **Public** if you want GitHub Pages to be publicly visible.
5. Do not add a README, `.gitignore`, or license during creation because this project already contains them.
6. Click **Create repository**.

### 2. Connect the local folder and push the code

In the VS Code terminal, run these commands from the project folder. Replace `YOUR-USERNAME` with your GitHub username.

```bash
git init
git add .
git commit -m "Create Data Atlas learning site"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/data-atlas.git
git push -u origin main
```

If Git asks you to sign in, use GitHub's browser sign-in or a Personal Access Token — do not use your GitHub account password as a Git password.

### 3. Turn on GitHub Pages

1. Open your repository on GitHub.
2. Open **Settings → Pages**.
3. Under **Build and deployment**, choose **GitHub Actions** as the source.
4. GitHub will run `.github/workflows/deploy-pages.yml`.
5. Open the workflow run under the **Actions** tab and wait for both jobs to show a green check.
6. Return to **Settings → Pages** to copy the live URL. It will usually look like:

   `https://YOUR-USERNAME.github.io/data-atlas/`

The workflow publishes the `public/` folder, so the Node server is used for local development while GitHub Pages serves the static site.

## Update the live site later

Edit the files in VS Code, check the change locally with `npm start`, then run:

```bash
git add .
git commit -m "Describe the change"
git push
```

GitHub Actions will redeploy the updated site automatically.
