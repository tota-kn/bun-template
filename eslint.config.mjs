import { includeIgnoreFile } from "@eslint/compat"
import eslint from "@eslint/js"
import prettierConfig from "eslint-config-prettier"
import { defineConfig } from "eslint/config"
import path from "node:path"
import { fileURLToPath } from "node:url"
import tseslint from "typescript-eslint"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const gitignorePath = path.resolve(__dirname, ".gitignore")

export default defineConfig(
  eslint.configs.recommended,
  tseslint.configs.recommended,
  prettierConfig,
  includeIgnoreFile(gitignorePath, "bun.lock")
)
