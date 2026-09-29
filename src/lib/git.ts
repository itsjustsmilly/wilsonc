// Revision info read from git at build time. REV numbers are real commit counts,
// not decoration. Falls back quietly if git history is unavailable.
import { execSync } from 'node:child_process';

function git(args: string): string {
  try {
    return execSync(`git ${args}`, { stdio: ['ignore', 'pipe', 'ignore'] }).toString().trim();
  } catch {
    return '';
  }
}

export interface Revision {
  rev: string;      // e.g. "REV.07"
  updated: string;  // e.g. "2026.09.29"
}

function pad(n: number) {
  return String(n).padStart(2, '0');
}

function formatDate(iso: string) {
  return iso ? iso.replaceAll('-', '.') : '';
}

/** Revision of the whole site, or of one file when a path is given. */
export function revision(path?: string): Revision {
  const target = path ? ` -- "${path}"` : '';
  const count = Number(git(`rev-list --count HEAD${target}`)) || 0;
  const date = git(`log -1 --format=%cs${target}`);
  return {
    rev: `REV.${pad(Math.max(count, 1))}`,
    updated: formatDate(date) || formatDate(new Date().toISOString().slice(0, 10)),
  };
}
