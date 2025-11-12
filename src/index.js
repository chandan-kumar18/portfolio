import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import './index.css'

createRoot(document.getElementById("root")).render(<App />);
const root = document.getElementById('root');
console.log('root children count:', root?.children.length);