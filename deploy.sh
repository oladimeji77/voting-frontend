echo "switching to branch"
git checkout master

echo "Building app..."
npm run build

echo "Deploying files to server..."
scp -r build/* azureuser@172.208.41.79:/var/www/172.208.41.79/

echo "Done!"