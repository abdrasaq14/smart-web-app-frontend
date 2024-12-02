#!/bin/sh

# Push to GitHub
git push "$@"

# Run the post-push script
sh ./.git/hooks/post-push