echo "switching to branch"
git checkout master

echo "Building app..."
npm run build

echo "Deploying files to server..."
scp -r build/* oladimeji@linux IP:/var/www/172.28.98.234

echo "Done!"