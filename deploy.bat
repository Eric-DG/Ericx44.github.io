#!/usr/bin/env sh
set -e

npm run build

cd dist

git init
git add -A
git commit -m 'New Deployment'
git push -f https://github.com/Ericx44/my-portfolio.git master:gh-pages

cd -