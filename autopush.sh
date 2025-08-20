#!/bin/bash

# ===== CONFIG =====
PHONE="+201222276229"    # Phone number without +, spaces, or dashes
WEBSITE="https://mohamad-khalid.github.io/goline/"
BRANCH="test"

# ===== STEP 1: Check if there are any changes =====
if git diff --quiet && git diff --cached --quiet; then
    echo "✅ Everything is up to date — nothing to push."
    exit 0
fi

# ===== STEP 2: Increment commit message number =====
lastMsg=$(git log -1 --pretty=%B)

# Extract number from "test-<number>"
if [[ $lastMsg =~ test-([0-9]+) ]]; then
    num=${BASH_REMATCH[1]}
    nextNum=$((num + 1))
else
    nextNum=1
fi

newMsg="test-$nextNum"

# ===== STEP 3: Commit & Push =====
git add .
git commit -m "$newMsg"
git push

echo "✅ Pushed with message: $newMsg"

# ===== STEP 4: Send WhatsApp message =====
MESSAGE="${WEBSITE}%0Aupdated"

if command -v xdg-open &> /dev/null; then
    xdg-open "https://wa.me/${PHONE}?text=${MESSAGE}"
elif command -v open &> /dev/null; then
    open "https://wa.me/${PHONE}?text=${MESSAGE}"
else
    start "https://wa.me/${PHONE}?text=${MESSAGE}"
fi
