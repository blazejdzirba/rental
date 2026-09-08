#!/usr/bin/env python3

from __future__ import annotations

from pathlib import Path


# ============================================================
# PROJECT
# ============================================================

# build_context.py znajduje się w ROOT projektu:
#
# rental/
# ├── build_context.py
# ├── package.json
# ├── astro.config.mjs
# ├── src/
# └── public/
#
ROOT = Path(__file__).resolve().parent

OUTPUT = ROOT / "blueprints" / "full_app.md"


# ============================================================
# EXCLUDED DIRECTORIES
# ============================================================

EXCLUDED_DIRS = {
    ".git",
    ".github",
    ".vscode",
    ".idea",

    "node_modules",
    "dist",

    # Stara kopia projektu
    "backup",

    # Stary operator / narzędzia poza aktualną aplikacją
    "operator",

    # Output
    "blueprints",

    # Astro/cache/build
    ".astro",
    ".cache",
    ".turbo",
    "coverage",

    # Python
    "__pycache__",
    ".pytest_cache",
    ".ruff_cache",
    ".mypy_cache",
    ".venv",
    "venv",
    "env",
}


# ============================================================
# EXCLUDED FILES
# ============================================================

EXCLUDED_FILES = {
    # Context / documentation
    "README.md",
    "README.txt",
    "CHECKLISTA.md",
    "PROMPTY.md",

    # Git
    ".gitignore",
    ".gitattributes",

    # Local/editor
    ".DS_Store",
    "Thumbs.db",

    # This script
    "build_context.py",

    # Generated verification/output files
    "verify_results.json",
    "verify_results_extra.json",
}


# ============================================================
# EXCLUDED EXTENSIONS
# ============================================================

# Binary files and assets which are not useful as textual
# context for the coding agent.

BINARY_EXTENSIONS = {
    # Images
    ".png",
    ".jpg",
    ".jpeg",
    ".gif",
    ".webp",
    ".avif",
    ".bmp",
    ".tif",
    ".tiff",
    ".ico",

    # Fonts
    ".woff",
    ".woff2",
    ".ttf",
    ".otf",
    ".eot",

    # Video
    ".mp4",
    ".webm",
    ".mov",
    ".avi",
    ".mkv",

    # Audio
    ".mp3",
    ".wav",
    ".ogg",
    ".flac",
    ".m4a",

    # Archives
    ".zip",
    ".gz",
    ".tar",
    ".tgz",
    ".rar",
    ".7z",

    # Documents
    ".pdf",

    # Compiled files
    ".pyc",
    ".pyo",
    ".class",
    ".o",
    ".so",
    ".dll",
    ".dylib",
}


# Temporary/generated files.
EXCLUDED_SUFFIXES = {
    ".log",
    ".tmp",
    ".temp",
    ".cache",
    ".map",
}


# Maximum size of a single text file.
MAX_FILE_SIZE = 500 * 1024


# ============================================================
# IMPORTANT ROOT FILES
# ============================================================

# Only these root-level files are interesting for the agent.
#
# We intentionally DO NOT include README, gitignore, etc.

IMPORTANT_ROOT_FILES = {
    "package.json",
    "package-lock.json",

    "astro.config.mjs",
    "astro.config.js",
    "astro.config.ts",

    "tsconfig.json",
    "jsconfig.json",

    "tailwind.config.js",
    "tailwind.config.cjs",
    "tailwind.config.mjs",
    "tailwind.config.ts",

    "vite.config.js",
    "vite.config.ts",

    ".npmrc",
    ".nvmrc",
    ".node-version",
}


# ============================================================
# ALLOWED PROJECT DIRECTORIES
# ============================================================

# The agent mainly needs the actual application.
#
# src = application
# public = public assets/config such as robots.txt
#
# We deliberately DON'T export scripts/ because those are
# repository maintenance utilities, not part of the website.

ALLOWED_DIRS = {
    "src",
    "public",
}


# ============================================================
# LANGUAGE DETECTION
# ============================================================

LANGUAGE_MAP = {
    ".astro": "astro",

    ".ts": "typescript",
    ".tsx": "tsx",

    ".js": "javascript",
    ".jsx": "jsx",
    ".mjs": "javascript",
    ".cjs": "javascript",

    ".css": "css",
    ".scss": "scss",
    ".sass": "sass",
    ".less": "less",

    ".html": "html",
    ".htm": "html",

    ".md": "markdown",
    ".mdx": "mdx",

    ".json": "json",

    ".yaml": "yaml",
    ".yml": "yaml",

    ".py": "python",

    ".sh": "bash",
    ".bash": "bash",

    ".sql": "sql",

    ".xml": "xml",
    ".svg": "xml",

    ".toml": "toml",
    ".ini": "ini",
}


SPECIAL_LANGUAGE_MAP = {
    "Dockerfile": "dockerfile",
    "Makefile": "makefile",
}


# ============================================================
# HELPERS
# ============================================================

def relative_path(path: Path) -> str:
    """Return project-relative POSIX path."""

    return path.relative_to(ROOT).as_posix()


def is_excluded_directory(path: Path) -> bool:
    """Check whether any parent directory is excluded."""

    try:
        parts = path.relative_to(ROOT).parts
    except ValueError:
        return True

    return any(
        part in EXCLUDED_DIRS
        for part in parts[:-1]
    )


def is_excluded_file(path: Path) -> bool:
    """Check whether a file should be excluded."""

    if path.name in EXCLUDED_FILES:
        return True

    if path.suffix.lower() in BINARY_EXTENSIONS:
        return True

    if path.suffix.lower() in EXCLUDED_SUFFIXES:
        return True

    # Don't export favicon/icon files even if they use an
    # extension which isn't explicitly excluded above.
    name = path.name.lower()

    if (
        "favicon" in name
        or name.endswith(".ico")
        or name.startswith("icon.")
    ):
        return True

    return False


def is_allowed_location(path: Path) -> bool:
    """
    Decide whether the file belongs to the application.

    Root-level config files are allowed.
    src/** is allowed.
    public/** is allowed.
    Everything else is ignored.
    """

    try:
        rel = path.relative_to(ROOT)
    except ValueError:
        return False

    parts = rel.parts

    # Root-level files
    if len(parts) == 1:
        return parts[0] in IMPORTANT_ROOT_FILES

    # src/** and public/**
    return parts[0] in ALLOWED_DIRS


def is_text_file(path: Path) -> bool:
    """Best-effort UTF-8 text detection."""

    if path.suffix.lower() in BINARY_EXTENSIONS:
        return False

    try:
        with path.open("rb") as file:
            sample = file.read(8192)

        # NUL byte usually means binary.
        if b"\x00" in sample:
            return False

        sample.decode("utf-8")

        return True

    except (OSError, UnicodeDecodeError):
        return False


def get_language(path: Path) -> str:
    """Return Markdown code fence language."""

    if path.name in SPECIAL_LANGUAGE_MAP:
        return SPECIAL_LANGUAGE_MAP[path.name]

    return LANGUAGE_MAP.get(
        path.suffix.lower(),
        "",
    )


def read_text(path: Path) -> str | None:
    """Read UTF-8 file safely."""

    try:
        return path.read_text(
            encoding="utf-8",
        )

    except UnicodeDecodeError:
        try:
            return path.read_text(
                encoding="utf-8",
                errors="replace",
            )

        except OSError:
            return None

    except OSError:
        return None


# ============================================================
# FILE COLLECTION
# ============================================================

def collect_files() -> list[Path]:
    """
    Collect ONLY useful application files.

    Included:
      - important root configs
      - src/**
      - public/**

    Excluded:
      - README
      - CHECKLISTA
      - PROMPTY
      - gitignore
      - favicon/icons
      - scripts/
      - backup/
      - operator/
      - dist/
      - node_modules/
      - generated files
      - binaries
    """

    files: list[Path] = []

    for path in ROOT.rglob("*"):

        if not path.is_file():
            continue

        if is_excluded_directory(path):
            continue

        if is_excluded_file(path):
            continue

        if not is_allowed_location(path):
            continue

        try:
            size = path.stat().st_size
        except OSError:
            continue

        if size > MAX_FILE_SIZE:
            continue

        if not is_text_file(path):
            continue

        files.append(path)

    return sorted(
        files,
        key=lambda path: relative_path(path).lower(),
    )


# ============================================================
# FILE TREE
# ============================================================

def build_file_list(files: list[Path]) -> str:
    """Create clean file list."""

    if not files:
        return "_No files included._"

    return "\n".join(
        f"- `{relative_path(path)}`"
        for path in files
    )


# ============================================================
# FILE CONTENT
# ============================================================

def build_file_section(path: Path) -> str:
    """Generate Markdown section for one file."""

    rel = relative_path(path)
    language = get_language(path)

    content = read_text(path)

    if content is None:
        return (
            f"## `{rel}`\n\n"
            "```text\n"
            "[Unable to read file]\n"
            "```\n"
        )

    content = (
        content
        .replace("\r\n", "\n")
        .replace("\r", "\n")
    )

    # Avoid accidentally closing our Markdown code block
    # if the source itself contains ```.
    fence = "```"

    while fence in content:
        fence += "`"

    return (
        f"## `{rel}`\n\n"
        f"{fence}{language}\n"
        f"{content.rstrip()}\n"
        f"{fence}\n"
    )


# ============================================================
# BLUEPRINT
# ============================================================

def generate_blueprint(files: list[Path]) -> str:
    """Generate the complete full_app.md."""

    lines: list[str] = []

    lines.append("# Full App Blueprint")
    lines.append("")

    lines.append(
        "> Generated automatically from the current Astro project."
    )

    lines.append("")

    lines.append("## Purpose")
    lines.append("")
    lines.append(
        "This file contains the current application source code "
        "and relevant configuration needed to understand and "
        "rebuild the website."
    )

    lines.append("")

    lines.append("## Project root")
    lines.append("")
    lines.append(f"`{ROOT}`")

    lines.append("")

    lines.append("## Included files")
    lines.append("")

    lines.append(build_file_list(files))

    lines.append("")

    lines.append("---")
    lines.append("")

    lines.append("# Source files")
    lines.append("")

    for path in files:
        lines.append(
            build_file_section(path)
        )

        lines.append("")
        lines.append("---")
        lines.append("")

    return "\n".join(lines)


# ============================================================
# MAIN
# ============================================================

def main() -> None:

    print()
    print("=" * 80)
    print("Generating project blueprint")
    print("=" * 80)
    print()

    print(f"Project root : {ROOT}")
    print(f"Output       : {OUTPUT}")
    print()

    # Create blueprints/ automatically.
    OUTPUT.parent.mkdir(
        parents=True,
        exist_ok=True,
    )

    files = collect_files()

    blueprint = generate_blueprint(files)

    OUTPUT.write_text(
        blueprint,
        encoding="utf-8",
    )

    print("=" * 80)
    print("Blueprint generated")
    print("=" * 80)
    print()

    print(f"Files included : {len(files)}")
    print(f"Output         : {OUTPUT}")
    print()

    if files:
        print("Included files:")

        for path in files:
            print(
                f"  - {relative_path(path)}"
            )

    else:
        print(
            "WARNING: No application files were included."
        )

    print()


if __name__ == "__main__":
    main()