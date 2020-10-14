# React Node MongoDB blog

## In case previous server did not stop

`killall -9 node`

### Open from terminal

```heroku open -a your-app```

## Further inquiry

Do you need `key={index}` for mapping in Blog.js

```
Warning: Each child in a list should have a unique "key" prop.

Check the render method of `Blog`. See https://fb.me/react-warning-keys for more information.
    in Fragment (created by Blog)
    in Blog (created by Context.Consumer)
    in Route (at App.js:15)
    in Switch (at App.js:13)
    in div (at App.js:11)
    in Router (created by BrowserRouter)
    in BrowserRouter (at App.js:10)
    in App (at src/index.js:6) index.js:1

```

## Notes to myself

- Can't figures out how to redirect after submitting the form
- Not sure what exactly `axios` does

## Next

- `Paperclip` size or margin
- register / auth
- update database users

```yep! looks absolutely pants```

## Next next

All right, how do you `redirect`

1. Set `id` as a `key`
2. `Delete` button style
3. `DELETE` request -> `try catch`

- try other `redirect` tutorials