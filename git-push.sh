#!/bin/sh

# Push to GitHub
git push origin

# Run the post-push script
sh ./.git/hooks/post-push