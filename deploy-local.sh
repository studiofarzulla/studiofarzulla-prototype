#!/bin/bash

# Build locally and deploy to GitHub Pages
echo "Building site locally..."
npm run build

echo "Exporting static site..."
npm run export

echo "Creating deployment branch..."
git checkout -B gh-pages-deploy

echo "Adding build output..."
cp -r out/* .
git add -A
git commit -m "Deploy site - $(date)"

echo "Pushing to GitHub Pages..."
git push origin gh-pages-deploy:gh-pages --force

echo "Returning to main branch..."
git checkout main

echo "Deployment complete!"