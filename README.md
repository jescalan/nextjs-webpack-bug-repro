# Next.js Webpack Plugin Error Bug

I came across an issue in which an error coming from an async plugin hook in watch mode would hang the compilation without throwing an error. On the master branch is a reproduction of the same thing with pure webpack that does throw the error in watch mode, which leads me to believe that it's got something to do with the way nextjs is running webpack. Its worth noting that this issue does not come up on an export/single build, no matter which hook or type of hook.

To reproduce, `npm i` and then `npm start`
