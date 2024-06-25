module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "type-enum": [
      2,
      "always",
      [
        "build",
        "chore",
        "ci",
        "docs",
        "feat",
        "feat!",
        "fix",
        "perf",
        "refactor",
        "release",
        "revert",
        "style",
        "test",
        "translation",
        "security",
        "wip"
      ]
    ],
    "type-case": [0],
    "footer-max-line-length": [0]
  }
};
