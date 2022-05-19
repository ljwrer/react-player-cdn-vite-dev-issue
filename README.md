# react-player-cdn-vite-dev-issue
I need to use cdn to load hls.js from cdn due to GFW block  
After following <https://github.com/cookpete/react-player#sdk-overrides>  
It's not work with vite dev but works fine with vite build  
I think the main reason is usage of javaScript modules via script tag

## reproduce bug
```bash
npm install

# video is not load at all
npm dev 

# works well
npm preview
```