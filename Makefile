run:
	node index.js

lint: 
		npx eslint .

fix:
		npx eslint --fix .