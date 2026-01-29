Great! If you're using **Framer Motion** in your Next.js app and want to add a smooth animation to your Instagram icon, you can easily wrap the icon component with Framer Motion’s `motion` component. Here’s how you can do it:

---

### 1. Install Framer Motion
If you haven’t already, install Framer Motion:
```bash
npm install framer-motion
```

---

### 2. Create an Animated Instagram Icon Component
Update your `InstagramIcon.jsx` to include animations:

```jsx
// components/InstagramIcon.jsx
import { motion } from "framer-motion";

export default function InstagramIcon({ size = 24, className = "" }) {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      whileHover={{ scale: 1.2, rotate: 5 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      <path d="M12 2c3.15 0 3.15 2 3.15 2 1.73 0 3.15-1.32 3.15-3.15 0-1.83-.92-2-2.5-2-1.58 0-2.5 1.17-2.5 2.47 0 1.29-.92 2.47-2.5 2.47-1.58 0-2.5-1.17-2.5-2.47 0-1.83.92-2 2.5-2 1.58 0 2.5 1.17 2.5 2.47 0 1.3-.92 2.47-2.5 2.47-1.58 0-2.5-1.17-2.5-2.47C4.92 2.17 5.84 2 7.42 2c1.58 0 2.5 1.17 2.5 2.47 0 1.29-.92 2.47-2.5 2.47-1.58 0-2.5-1.17-2.5-2.47 0-1.83.92-2 2.5-2 1.58 0 2.5 1.17 2.5 2.47 0 1.3-.92 2.47-2.5 2.47-1.58 0-2.5-1.17-2.5-2.47C2.42 2.17 3.34 2 4.92 2c1.58 0 2.5 1.17 2.5 2.47 0 1.3-.92 2.47-2.5 2.47-1.58 0-2.5-1.17-2.5-2.47 0-1.83.92-2 2.5-2 1.58 0 2.5 1.17 2.5 2.47 0 1.3-.92 2.47-2.5 2.47-1.58 0-2.5-1.17-2.5-2.47C.92 2.17 1.84 2 3.42 2c1.58 0 2.5 1.17 2.5 2.47 0 1.3-.92 2.47-2.5 2.47-1.58 0-2.5-1.17-2.5-2.47 0-1.83.92-2 2.5-2 1.58 0 2.5 1.17 2.5 2.47 0 1.3-.92 2.47-2.5 2.47-1.58 0-2.5-1.17-2.5-2.47C.92 2.17 1.84 2 3.42 2c1.58 0 2.5 1.17 2.5 2.47 0 1.3-.92 2.47-2.5 2.47-1.58 0-2.5-1.17-2.5-2.47 0-1.83.92-2 2.5-2zM12 4.5c-3.79 0-4.5 2.33-4.5 4.5 0 1.34.53 2.55 1.44 3.4.95.89 2.28 1.41 4.06 1.41 3.79 0 4.5-2.33 4.5-4.5 0-1.34-.53-2.55-1.44-3.4-.95-.89-2.28-1.41-4.06-1.41zm-5.55 7.53c.26-.85.79-1.53 1.53-1.81.74-.28 1.53-.28 2.27-.02.74.26 1.3.89 1.53 1.81.22.97.02 2.27-.5 3.02-.53.75-1.47 1.07-2.5 1.07-1.03 0-1.97-.32-2.5-1.07-.52-.75-.72-1.85-.5-3.02zM17.5 10.5c-.16 1.33-1.47 2.48-3 2.48-1.61 0-2.95-1.19-3-2.52 0-1.39 1.27-2.5 3-2.5 1.55 0 2.78 1.03 3 2.42z" />
    </motion.svg>
  );
}
```

---

### 3. Use the Animated Icon in Your App
Now, use the animated `InstagramIcon` in your `SocialLinks` component:

```jsx
// components/SocialLinks.jsx
import InstagramIcon from "./InstagramIcon";

export default function SocialLinks() {
  return (
    <a
      href="https://www.instagram.com"
      target="_blank"
      rel="noopener noreferrer"
    >
      <InstagramIcon
        size={24}
        className="text-pink-600 hover:text-pink-800"
      />
    </a>
  );
}
```

---

### 4. Customize the Animations
You can customize the animations by tweaking the `whileHover`, `whileTap`, and `transition` props. For example:

- **Scale**: Change `scale: 1.2` to adjust how much the icon grows on hover.
- **Rotation**: Adjust `rotate: 5` to change the rotation angle.
- **Spring Physics**: Modify `stiffness` and `damping` for different bounce effects.

Example with a different animation:
```jsx
<motion.svg
  whileHover={{ scale: 1.1, y: -2 }}
  whileTap={{ scale: 0.95 }}
  transition={{ type: "spring", stiffness: 300, damping: 15 }}
>
  {/* SVG path */}
</motion.svg>
```

---