// @ts-check
import withNuxt from "./.nuxt/eslint.config.mjs"

export default withNuxt({
  rules: {
    // 💬 Use double quotes
    quotes: ["error", "double"],

    // 🚫 No semicolons
    semi: ["error", "never"],

    // 🔢 2-space indent
    indent: ["error", 2, { SwitchCase: 1 }],

    // ✅ Require newline at end of file
    "eol-last": ["error", "always"],

    // 🧹 No extra spaces
    "no-multi-spaces": ["error"],

    // ⛔ No multiple empty lines
    "no-multiple-empty-lines": ["error", { max: 1, maxEOF: 0 }],

    // ⬜ Add spacing rules
    "keyword-spacing": ["error", { before: true, after: true }],
    "space-infix-ops": ["error"],
    "space-before-blocks": ["error", "always"],
    "space-in-parens": ["error", "never"],
    "space-before-function-paren": ["error", "never"],
    "comma-spacing": ["error", { before: false, after: true }],
    "array-bracket-spacing": ["error", "never"],
    "object-curly-spacing": ["error", "always"],
  }
})
