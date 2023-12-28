React Part 1

# parcel
- Dev build
- Local server
- HMR = Hot Module Replacement - It refresh/reloads the page automatically after we save our changes in any of the file. This - is know as HMR
- Above HMR is possible through File changing algorithm which is written in C++
- Caching - Due to caching by parcel we get faster builds of our app.
- Image Optimization
- Minification
- Bundling
- Compress
- Consistent Hashing
- Code Splitting
- Differential Bundling - To support older browsers
- Diagnostic
- Error Handling
- HTTPs
- Tree Shaking - remove unused code
- Different dev and prod bundles


Default export/import:

export default component;
import component from "path";

Nameed export/import:

export const component;
import { component } from "path";
