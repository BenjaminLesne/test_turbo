#!/bin/sh
if grep -R "test.only" ./src; then
    echo "🛑🛑🛑🛑 Push aborted: Remove 'test.only' from test files. 🛑🛑🛑🛑"
    exit 1
fi

if grep -R "page.pause" ./src; then
    echo "🛑🛑🛑🛑 Push aborted: Remove 'page.pause' from test files. 🛑🛑🛑🛑"
    exit 1
fi