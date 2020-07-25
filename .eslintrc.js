module.exports = {
  extends: ["prettier", "prettier-react"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: "module",
  },
  plugins: ["prettier", "react"],
  rules: {
    "prettier/prettier": "error",
  },
};
