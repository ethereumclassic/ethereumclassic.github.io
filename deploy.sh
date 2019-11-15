
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

# Run our compile script
doCompile

# Clone the existing repo
git clone $REPO staging
cd staging
git checkout $TARGET_BRANCH
cd ..

# Clean out existing contents
rm -rf staging/*

# mv the contents of public into staging (we do this to preserve cache)
mv public/* staging

# git push to staging brtanch
git config user.name "Travis CI"
git config user.email "$COMMITTER_EMAIL"


# Get the deploy key by using Travis's stored variables to decrypt deploy_key.enc
ENCRYPTED_KEY_VAR="encrypted_${ENCRYPTION_LABEL}_key"
ENCRYPTED_IV_VAR="encrypted_${ENCRYPTION_LABEL}_iv"
ENCRYPTED_KEY=${!ENCRYPTED_KEY_VAR}
ENCRYPTED_IV=${!ENCRYPTED_IV_VAR}
openssl aes-256-cbc -K $ENCRYPTED_KEY -iv $ENCRYPTED_IV -in deploy_key.enc -out deploy_key -d
chmod 600 deploy_key
eval `ssh-agent -s`
ssh-add deploy_key

# Commit the "changes", i.e. the new version.
# The delta will show diffs between new and old versions.
cd staging
git add -A .
git commit -m "Build from commit: ${SHA}"

# Now that we're all set up, we can push.
git push $SSH_REPO $TARGET_BRANCH

# move contents of staging back to public to preserve cache
cd ..
mv staging/* public