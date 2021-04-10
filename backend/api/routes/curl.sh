#!/bin/sh

curl --header "Content-Type: application/json" \
  --request POST \
  --data "$2" \
  "$1"
