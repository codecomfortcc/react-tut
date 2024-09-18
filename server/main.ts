import { Context, Hono } from "hono";
import { cors } from "hono/cors";
import { posts } from "./post.ts";
const app = new Hono();
interface PostProps{
  id:number
  title:string
  content:string
}
app.use(cors());
app.get("/", (c:Context) => {
  return c.text("Hello World");
  
});
const getPosts = ():Promise<PostProps[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(posts);
    }, 1000);
  });
}
app.get("/posts", async (c: Context) => {
  const posts= await getPosts();
  return c.json(posts,200)
});

Deno.serve({ port: 3000 }, app.fetch);
