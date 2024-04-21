import { defineConfig } from "vite";

export default defineConfig({
  //establece la base que utiliza github pages, para que la aplicación funcione correctamente.
  base: "/example-vite-js/",
  build: {
    //cambia el directorio de build a docs, para que github pages funcione correctamente.
    outDir: "docs"
  }
});