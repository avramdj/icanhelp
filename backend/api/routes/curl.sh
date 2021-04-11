#!/bin/sh

request() {
        echo "params " "$1" "$2"
        curl --header "Content-Type: application/json" \
          --request POST \
          --data "$2" \
          "$1"
}

case "$1" in
        -r) request "$2" "$3" ;;
        *) echo "Usage: -r addr data -- request"
esac
