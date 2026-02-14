---
name: Bug report
title: "Incorrect type detection for ..."
about: A clear and concise description of what the bug is.

---

**To Reproduce**
Steps to reproduce the behavior:
1. Import/require the library
2. Call `getInternalType(...)` with the problematic value
3. See unexpected result

**Code snippet**
```javascript
const getInternalType = require("@lopatnov/get-internal-type");
console.log(getInternalType(/* your value */));
// Actual: "..."
// Expected: "..."
```

**Expected behavior**
A clear and concise description of what you expected to happen.

**Environment:**
 - Package version: [e.g. 2.0.0]
 - Node.js version: [e.g. 20.11.0]
 - Environment: [Node.js / Browser / Both]
 - OS: [e.g. Windows 11, Ubuntu 22.04]

**Additional context**
Add any other context about the problem here.
