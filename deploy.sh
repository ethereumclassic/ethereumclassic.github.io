
#!/bin/bash
set -e # Exit with nonzero exit code if anything fails

function doCompile {
  # build gatsby
  npm run build
  # copy the readme file
  cp README.md public/
  # copy the CNAME
  cp CNAME public/
}

# Pull requests and commits to other branches shouldn't try to deploy, just build to verify
if [ "$TRAVIS_PULL_REQUEST" != "false" -o "$TRAVIS_BRANCH" != "$SOURCE_BRANCH" ]; then
    echo "Skipping deploy for this branch."
    exit 0
fi

# configure commits
REPO=`git config remote.origin.url`
SSH_REPO=${REPO/https:\/\/github.com\//git@github.com:}
SHA=`git rev-parse --verify HEAD`
COMMITTER_EMAIL="$(git log --pretty=format:'%ae' -1)"

# Clone the existing gh-pages for this repo into out/
git clone $REPO public
cd public
git checkout $TARGET_BRANCH
cd ..

# Clean out existing contents if it exists
rm -rf public/*

# Run our compile script
doCompile

# Now let's go have some fun with the cloned repo
cd public
git config user.name "Travis CI"
git config user.email "$COMMITTER_EMAIL"

# Commit the "changes", i.e. the new version.
# The delta will show diffs between new and old versions.
git add -A .
git commit -m "Build from commit: ${SHA}"

# Get the deploy key by using Travis's stored variables to decrypt deploy_key.enc
ENCRYPTED_KEY_VAR="encrypted_${ENCRYPTION_LABEL}_key"
ENCRYPTED_IV_VAR="encrypted_${ENCRYPTION_LABEL}_iv"
ENCRYPTED_KEY=${!ENCRYPTED_KEY_VAR}
ENCRYPTED_IV=${!ENCRYPTED_IV_VAR}
openssl aes-256-cbc -K $ENCRYPTED_KEY -iv $ENCRYPTED_IV -in ../deploy_key.enc -out deploy_key -d
chmod 600 deploy_key
eval `ssh-agent -s`
ssh-add deploy_key

# Now that we're all set up, we can push.
git push $SSH_REPO $TARGET_BRANCH
