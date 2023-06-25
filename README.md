# Polling App

This is a React application that periodically polls for new posts from the [Hacker News API](https://hn.algolia.com/api/v1/search_by_date?tags=story&page=0) and displays them in a table.

## Features

- Automatically fetches new posts every 10 seconds
- Appends new posts to the existing ones
- Displays the title, URL, created_at, and author of each post in a table